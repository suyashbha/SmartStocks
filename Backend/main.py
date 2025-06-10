import logging
import requests
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from bs4 import BeautifulSoup, Tag
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional

from fundamental_scoring import evaluate_fundamentals


# --- Logging setup ---
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger("uvicorn")


# --- FastAPI App ---
app = FastAPI(title="Fundamentals API (Ticker Finology)")


# --- CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Response Model ---
class Result(BaseModel):
    symbol: str

    market_cap: Optional[float]
    market_cap_raw: Optional[str]

    enterprise_value: Optional[float]
    enterprise_value_raw: Optional[str]

    no_of_shares: Optional[float]
    no_of_shares_raw: Optional[str]

    pe: Optional[float]
    pe_raw: Optional[str]

    pb: Optional[float]
    pb_raw: Optional[str]

    face_value: Optional[float]
    face_value_raw: Optional[str]

    dividend_yield: Optional[float]
    dividend_yield_raw: Optional[str]

    book_value: Optional[float]
    book_value_raw: Optional[str]

    cash: Optional[float]
    cash_raw: Optional[str]

    debt: Optional[float]
    debt_raw: Optional[str]

    promoter_holding: Optional[float]
    promoter_holding_raw: Optional[str]

    eps: Optional[float]
    eps_raw: Optional[str]

    sales_growth: Optional[float]
    sales_growth_raw: Optional[str]

    roe: Optional[float]
    roe_raw: Optional[str]

    roce: Optional[float]
    roce_raw: Optional[str]

    profit_growth: Optional[float]
    profit_growth_raw: Optional[str]

    verdict: str


# --- Utility: Parse number strings like "₹ 12,000.45 Cr" or "6.5 %"
def parse_number(s: str) -> float | None:
    if not s:
        return None

    s = s.strip().replace("₹", "").replace(",", "").replace("\r", "").replace("\n", "").strip()

    multiplier = 1
    if "Cr" in s:
        multiplier = 10**7
        s = s.replace("Cr.", "").replace("Cr", "").strip()
    elif "Lakh" in s:
        multiplier = 10**5
        s = s.replace("Lakh", "").strip()
    elif "Mn" in s:
        multiplier = 10**6
        s = s.replace("Mn", "").strip()
    elif "B" in s:
        multiplier = 10**9
        s = s.replace("B", "").strip()

    if "%" in s:
        s = s.replace("%", "").strip()
        try:
            return float(s) / 100
        except ValueError:
            return None

    try:
        return float(s) * multiplier
    except ValueError:
        return None



# --- Scraping function ---
def fetch_company_essentials_from_ticker(symbol: str) -> dict:
    url = f"https://ticker.finology.in/company/{symbol.upper()}"
    headers = {"User-Agent": "Mozilla/5.0"}
    resp = requests.get(url, headers=headers, timeout=10)

    if resp.status_code != 200:
        raise HTTPException(status_code=404, detail=f"Could not fetch Ticker page for '{symbol}'")

    soup = BeautifulSoup(resp.text, "html.parser")
    wrapper = soup.find("div", id="mainContent_divCompanyEssentials")
    if not isinstance(wrapper, Tag):
        raise HTTPException(status_code=500, detail="Could not locate 'Company Essentials' section")

    blocks = wrapper.find_all("div", class_="compess")

    # Keys for numeric values and their raw strings
    keys = {
        "MARKET_CAP": None,
        "ENTERPRISE_VALUE": None,
        "NO_OF_SHARES": None,
        "P/E": None,
        "P/B": None,
        "FACE_VALUE": None,
        "DIV._YIELD": None,
        "BOOK_VALUE_TTM": None,
        "CASH": None,
        "DEBT": None,
        "PROMOTER_HOLDING": None,
        "EPS_TTM": None,
        "SALES_GROWTH": None,
        "ROE": None,
        "ROCE": None,
        "PROFIT_GROWTH": None
    }

    label_map = {
        "MARKET_CAP": "MARKET_CAP",
        "ENTERPRISE_VALUE": "ENTERPRISE_VALUE",
        "NO_OF_SHARES": "NO_OF_SHARES",
        "P/E": "P/E",
        "P/B": "P/B",
        "FACE_VALUE": "FACE_VALUE",
        "DIV_YIELD": "DIV._YIELD",
        "BOOK_VALUE_TTM": "BOOK_VALUE_TTM",
        "CASH": "CASH",
        "DEBT": "DEBT",
        "PROMOTER_HOLDING": "PROMOTER_HOLDING",
        "EPS_TTM": "EPS_TTM",
        "SALES_GROWTH": "SALES_GROWTH",
        "ROE": "ROE",
        "ROCE": "ROCE",
        "PROFIT_GROWTH": "PROFIT_GROWTH"
    }

    data = {}
    for block in blocks:
        label_tag = block.find("small")
        value_tag = block.find("p")
        if not label_tag or not value_tag:
            continue

        raw_label = label_tag.get_text(separator=" ", strip=True).upper()
        clean_label = (
            raw_label.replace("(", "")
                     .replace(")", "")
                     .replace(".", "")
                     .replace(":", "")
                     .replace("  ", " ")
                     .replace("%", "")
                     .strip()
                     .replace(" ", "_")
        )

        key = label_map.get(clean_label)
        temp_raw_value = value_tag.get_text(separator=" ", strip=True)
        raw_value = " ".join(temp_raw_value.split())  # clean spaces and newlines


        if key:
            parsed_value = parse_number(raw_value)
            # Ensure float or None only for parsed
            if isinstance(parsed_value, float) or parsed_value is None:
                data[key] = parsed_value
            else:
                data[key] = None
            data[f"{key}_raw"] = raw_value

    # Make sure all keys exist in data with None default if missing
    for k in keys.keys():
        if k not in data:
            data[k] = None
        if f"{k}_raw" not in data:
            data[f"{k}_raw"] = None

    return data




# --- Endpoint ---
@app.get("/recommend/{symbol}", response_model=Result)
async def recommend(symbol: str):
    symbol = symbol.upper()
    logger.debug(f"Received request for symbol: {symbol}")

    try:
        data = fetch_company_essentials_from_ticker(symbol)
    except HTTPException as e:
        raise e
    except Exception as e:
        logger.error(f"Unexpected error scraping Finology Ticker for {symbol}: {e}")
        raise HTTPException(status_code=500, detail="Scraping failed")
    
    evaluated = evaluate_fundamentals(data)
    return Result(
        symbol=symbol,

        market_cap=data["MARKET_CAP"],
        market_cap_raw=data["MARKET_CAP_raw"],

        enterprise_value=data["ENTERPRISE_VALUE"],
        enterprise_value_raw=data["ENTERPRISE_VALUE_raw"],

        no_of_shares=data["NO_OF_SHARES"],
        no_of_shares_raw=data["NO_OF_SHARES_raw"],

        pe=data["P/E"],
        pe_raw=data["P/E_raw"],

        pb=data["P/B"],
        pb_raw=data["P/B_raw"],

        face_value=data["FACE_VALUE"],
        face_value_raw=data["FACE_VALUE_raw"],

        dividend_yield=data["DIV._YIELD"],
        dividend_yield_raw=data["DIV._YIELD_raw"],

        book_value=data["BOOK_VALUE_TTM"],
        book_value_raw=data["BOOK_VALUE_TTM_raw"],

        cash=data["CASH"],
        cash_raw=data["CASH_raw"],

        debt=data["DEBT"],
        debt_raw=data["DEBT_raw"],

        promoter_holding=data["PROMOTER_HOLDING"],
        promoter_holding_raw=data["PROMOTER_HOLDING_raw"],

        eps=data["EPS_TTM"],
        eps_raw=data["EPS_TTM_raw"],

        sales_growth=data["SALES_GROWTH"],
        sales_growth_raw=data["SALES_GROWTH_raw"],

        roe=data["ROE"],
        roe_raw=data["ROE_raw"],

        roce=data["ROCE"],
        roce_raw=data["ROCE_raw"],

        profit_growth=data["PROFIT_GROWTH"],
        profit_growth_raw=data["PROFIT_GROWTH_raw"],

        verdict = evaluated["verdict"]
    )
