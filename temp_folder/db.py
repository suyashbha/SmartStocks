# db.py (serverless-safe version)
import os

from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

def get_db():
    client = AsyncIOMotorClient(MONGO_URI)
    return client["smartstocks"]