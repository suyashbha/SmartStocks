import requests
from bs4 import BeautifulSoup, Tag
from fastapi import HTTPException

def fetch_company_essentials_from_ticker(symbol: str) -> dict:
    url = f"https://ticker.finology.in/company/{symbol.upper()}?mode=C"
    headers = {"User-Agent": "Mozilla/5.0"}
    resp = requests.get(url, headers=headers, timeout=20)
    if resp.status_code != 200:
        raise HTTPException(status_code=404, detail=f"Could not fetch Ticker page for '{symbol}'")
    soup = BeautifulSoup(resp.text, "html.parser")
    wrapper = soup.find("div", id="mainContent_divCompanyEssentials")
    if not isinstance(wrapper, Tag):
        raise HTTPException(status_code=500, detail="Could not locate 'Company Essentials' section")
    blocks = wrapper.find_all("div", class_="compess")

    keys = {
        "MARKET_CAP": None, "ENTERPRISE_VALUE": None, "NO_OF_SHARES": None, "P/E": None, "P/B": None,
        "FACE_VALUE": None, "DIV._YIELD": None, "BOOK_VALUE_TTM": None, "CASH": None, "DEBT": None,
        "PROMOTER_HOLDING": None, "EPS_TTM": None, "SALES_GROWTH": None, "ROE": None, "ROCE": None,
        "PROFIT_GROWTH": None
    }

    label_map = {
        "MARKET_CAP": "MARKET_CAP", "ENTERPRISE_VALUE": "ENTERPRISE_VALUE", "NO_OF_SHARES": "NO_OF_SHARES",
        "P/E": "P/E", "P/B": "P/B", "FACE_VALUE": "FACE_VALUE", "DIV_YIELD": "DIV._YIELD",
        "BOOK_VALUE_TTM": "BOOK_VALUE_TTM", "CASH": "CASH", "DEBT": "DEBT",
        "PROMOTER_HOLDING": "PROMOTER_HOLDING", "EPS_TTM": "EPS_TTM", "SALES_GROWTH": "SALES_GROWTH",
        "ROE": "ROE", "ROCE": "ROCE", "PROFIT_GROWTH": "PROFIT_GROWTH"
    }

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

    data = {}
    
    for block in blocks:
        if not isinstance(block, Tag):
            continue

        label_tag = block.find("small")
        value_tag = block.find("p")

        if not isinstance(label_tag, Tag) or not isinstance(value_tag, Tag):
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

        raw_value = " ".join(value_tag.get_text(separator=" ", strip=True).split())

        if key:
            parsed_value = parse_number(raw_value)
            data[key] = parsed_value if isinstance(parsed_value, float) or parsed_value is None else None
            data[f"{key}_raw"] = raw_value

    for k in keys.keys():
        if k not in data:
            data[k] = None
        if f"{k}_raw" not in data:
            data[f"{k}_raw"] = None


    # for debugging purposes, we can print the data
    print(data)
    
    return data
