# main.py (FastAPI backend with MongoDB integration for serverless)
import os
import logging
from fastapi import FastAPI, HTTPException, Depends, Header
from fastapi.middleware.cors import CORSMiddleware
from jose import jwt, JWTError
from passlib.context import CryptContext
from pydantic import BaseModel, EmailStr
from typing import Optional, List
from bson.objectid import ObjectId
from dotenv import load_dotenv

from fundamental_scoring import evaluate_fundamentals
from db import get_db
from scraping import fetch_company_essentials_from_ticker

from google.oauth2 import id_token
from google.auth.transport import requests as grequests


load_dotenv()
logging.basicConfig(level=logging.INFO)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://smart-stocks-frontend.vercel.app/"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

JWT_SECRET = os.getenv("JWT_SECRET", "secret")
pwd_ctx = CryptContext(schemes=["bcrypt"], deprecated="auto")

# ---------------------------- Auth Models ---------------------------- #
class RegisterModel(BaseModel):
    username: EmailStr
    password: str
    name: str

class LoginModel(BaseModel):
    username: str
    password: str


class GoogleLoginModel(BaseModel):
    token: str
# ---------------------------- Watchlist Models ---------------------------- #
class WatchlistCreate(BaseModel):
    name: str

class WatchlistUpdate(BaseModel):
    name: str

class StockEntry(BaseModel):
    symbol: str
    name: str

# ---------------------------- Token Utils ---------------------------- #
def create_token(data: dict):
    return jwt.encode(data, JWT_SECRET, algorithm="HS256")

def verify_token(authorization: str = Header(...)):
    if not authorization.startswith("Bearer "):
        raise HTTPException(401, "Invalid token header")
    token = authorization.split(" ")[1]
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=["HS256"])
        return payload
    except JWTError:
        raise HTTPException(401, "Invalid token")

# ---------------------------- Auth Endpoints ---------------------------- #
@app.post("/register")
async def register(model: RegisterModel):
    db = get_db()
    users_collection = db["users"]
    if await users_collection.find_one({"username": model.username}):
        raise HTTPException(400, "User already exists")
    hashed = pwd_ctx.hash(model.password)
    user_doc = {"username": model.username, "name": model.name, "password": hashed}
    await users_collection.insert_one(user_doc)
    token = create_token({"sub": model.username, "name": model.name})
    return {"access_token": token, "user": {"username": model.username, "name": model.name}}

@app.post("/login")
async def login(model: LoginModel):
    db = get_db()
    users_collection = db["users"]
    user = await users_collection.find_one({"username": model.username})
    if not user or not pwd_ctx.verify(model.password, user["password"]):
        raise HTTPException(401, "Invalid credentials")
    token = create_token({"sub": user["username"], "name": user["name"]})
    return {"access_token": token, "user": {"username": user["username"], "name": user["name"]}}

# ---------------------------- Google Login Endpoint ---------------------------- #
GOOGLE_CLIENT_ID = os.getenv("GOOGLE_CLIENT_ID")
@app.post("/google-login")
async def google_login(model: GoogleLoginModel):
    try:
        # verify Google JWT and pull out email + name
        idinfo = id_token.verify_oauth2_token(model.token, grequests.Request(), GOOGLE_CLIENT_ID)
        email = idinfo['email']
        google_name = idinfo.get('name', email.split('@')[0])

        db = get_db()
        users_collection = db["users"]

        # if we already have a user, keep their stored name; otherwise insert Google user
        user = await users_collection.find_one({"username": email})
        if user:
            final_name = user.get("name", google_name)
        else:
            final_name = google_name
            await users_collection.insert_one({
                "username": email,
                "name":    final_name,
                "password": None      # no password yet
            })

        # issue token with BOTH sub (email) and the chosen name
        access_token = create_token({"sub": email, "name": final_name})
        return {
            "access_token": access_token,
            "user": {
                "username": email,
                "name":     final_name
            }
        }
    except Exception:
        raise HTTPException(400, "Invalid Google Token")
# ---------------------------- Watchlist Endpoints ---------------------------- #
@app.get("/watchlists")
async def get_watchlists(token_data: dict = Depends(verify_token)):
    db = get_db()
    watchlists_collection = db["watchlists"]
    lists = await watchlists_collection.find({"username": token_data["sub"]}).to_list(100)
    for l in lists:
        l["id"] = str(l["_id"])
        del l["_id"]
    return lists

@app.post("/watchlists")
async def create_watchlist(model: WatchlistCreate, token_data: dict = Depends(verify_token)):
    db = get_db()
    watchlists_collection = db["watchlists"]
    new_list = {"username": token_data["sub"], "name": model.name, "stocks": []}
    result = await watchlists_collection.insert_one(new_list)
    return {"id": str(result.inserted_id)}

@app.put("/watchlists/{watchlist_id}")
async def rename_watchlist(watchlist_id: str, model: WatchlistUpdate, token_data: dict = Depends(verify_token)):
    db = get_db()
    watchlists_collection = db["watchlists"]
    result = await watchlists_collection.update_one(
        {"_id": ObjectId(watchlist_id), "username": token_data["sub"]},
        {"$set": {"name": model.name}}
    )
    if result.matched_count == 0:
        raise HTTPException(404, "Watchlist not found")
    return {"success": True}

@app.delete("/watchlists/{watchlist_id}")
async def delete_watchlist(watchlist_id: str, token_data: dict = Depends(verify_token)):
    db = get_db()
    watchlists_collection = db["watchlists"]
    result = await watchlists_collection.delete_one({"_id": ObjectId(watchlist_id), "username": token_data["sub"]})
    if result.deleted_count == 0:
        raise HTTPException(404, "Watchlist not found")
    return {"success": True}

@app.post("/watchlists/{watchlist_id}/stocks")
async def add_stock_to_watchlist(watchlist_id: str, stock: StockEntry, token_data: dict = Depends(verify_token)):
    db = get_db()
    watchlists_collection = db["watchlists"]
    await watchlists_collection.update_one(
        {"_id": ObjectId(watchlist_id), "username": token_data["sub"]},
        {"$addToSet": {"stocks": stock.dict()}}
    )
    return {"success": True}

@app.delete("/watchlists/{watchlist_id}/stocks/{symbol}")
async def remove_stock_from_watchlist(watchlist_id: str, symbol: str, token_data: dict = Depends(verify_token)):
    db = get_db()
    watchlists_collection = db["watchlists"]
    await watchlists_collection.update_one(
        {"_id": ObjectId(watchlist_id), "username": token_data["sub"]},
        {"$pull": {"stocks": {"symbol": symbol}}}
    )
    return {"success": True}

# ---------------------------- Recommendation Endpoint ---------------------------- #
@app.get("/recommend/{symbol}")
async def recommend(symbol: str, token_data: dict = Depends(verify_token)):
    data = fetch_company_essentials_from_ticker(symbol)
    evaluated = evaluate_fundamentals(data)
    data.update(evaluated)
    return data
