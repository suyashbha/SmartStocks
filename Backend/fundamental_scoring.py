def evaluate_fundamentals(data):
    # Revised weights per category
    weights = {
        "pe": 10,
        "pb": 8,
        "roe": 10,
        "roce": 10,
        "eps": 8,
        "sales_growth": 10,
        "profit_growth": 10,
        "dividend_yield": 5,
        "debt_to_equity": 10,
        "promoter_holding": 5,
        "book_value": 4
    }

    # Convert decimals to actual percentages if needed
    def to_pct(val):
        return val * 100 if val is not None else None

    data["ROE"] = to_pct(data.get("ROE"))
    data["ROCE"] = to_pct(data.get("ROCE"))
    data["DIV._YIELD"] = to_pct(data.get("DIV._YIELD"))
    data["PROMOTER_HOLDING"] = to_pct(data.get("PROMOTER_HOLDING"))
    data["SALES_GROWTH"] = to_pct(data.get("SALES_GROWTH"))
    data["PROFIT_GROWTH"] = to_pct(data.get("PROFIT_GROWTH"))

    def score_pe(pe):
        if pe is None: return 0
        if pe < 15: return 90
        elif pe < 25: return 75
        elif pe < 35: return 60
        elif pe < 45: return 40
        elif pe < 60: return 25
        else: return 10

    def score_pb(pb):
        if pb is None: return 0
        if pb < 1: return 90
        elif pb < 2.5: return 75
        elif pb < 4: return 60
        elif pb < 6: return 40
        else: return 20

    def score_roe(roe):
        if roe is None: return 0
        if roe >= 35: return 90
        elif roe >= 25: return 75
        elif roe >= 15: return 60
        elif roe >= 10: return 40
        else: return 20

    def score_roce(roce):
        if roce is None: return 0
        if roce >= 35: return 90
        elif roce >= 25: return 75
        elif roce >= 15: return 60
        elif roce >= 10: return 40
        else: return 20

    def score_eps(eps):
        if eps is None: return 0
        if eps >= 100: return 90
        elif eps >= 50: return 75
        elif eps >= 20: return 60
        elif eps >= 10: return 40
        else: return 20

    def score_sales_growth(sg):
        if sg is None: return 0
        if sg > 25: return 90
        elif sg > 15: return 75
        elif sg > 5: return 60
        elif sg > 0: return 40
        else: return 20

    def score_profit_growth(pg):
        if pg is None: return 0
        if pg > 25: return 90
        elif pg > 15: return 75
        elif pg > 5: return 60
        elif pg > 0: return 40
        else: return 20

    def score_dividend_yield(dy):
        if dy is None: return 0
        if dy >= 3: return 90
        elif dy >= 2: return 75
        elif dy >= 1: return 50
        elif dy > 0: return 30
        else: return 10

    def score_debt_to_equity(dte):
        if dte is None: return 0
        if dte <= 0.05: return 90
        elif dte < 0.3: return 75
        elif dte < 0.6: return 60
        elif dte < 1: return 40
        elif dte < 2: return 20
        else: return 10


    def score_promoter_holding(ph):
        if ph is None: return 0
        if ph >= 65: return 90
        elif ph >= 50: return 75
        elif ph >= 35: return 50
        elif ph >= 20: return 30
        else: return 10

    def score_book_value(bv):
        if bv is None: return 0
        if bv >= 300: return 90
        elif bv >= 200: return 75
        elif bv >= 100: return 60
        elif bv >= 50: return 40
        else: return 20

    # Derived D/E
    try:
        if (
            data.get("DEBT") is not None and
            data.get("BOOK_VALUE_TTM") not in (None, 0) and
            data.get("NO_OF_SHARES") not in (None, 0)
        ):
            debt_to_equity = data["DEBT"] / (data["BOOK_VALUE_TTM"] * data["NO_OF_SHARES"])
        else:
            debt_to_equity = None
    except Exception:
        debt_to_equity = None

    # Compute all metric scores
    scores = {
        "pe": score_pe(data.get("P/E")),
        "pb": score_pb(data.get("P/B")),
        "roe": score_roe(data.get("ROE")),
        "roce": score_roce(data.get("ROCE")),
        "eps": score_eps(data.get("EPS_TTM")),
        "sales_growth": score_sales_growth(data.get("SALES_GROWTH")),
        "profit_growth": score_profit_growth(data.get("PROFIT_GROWTH")),
        "dividend_yield": score_dividend_yield(data.get("DIV._YIELD")),
        "debt_to_equity": score_debt_to_equity(debt_to_equity),
        "promoter_holding": score_promoter_holding(data.get("PROMOTER_HOLDING")),
        "book_value": score_book_value(data.get("BOOK_VALUE_TTM"))
    }

    # Final score using only available metrics
    valid_metrics = [f for f in weights if scores[f] > 0]
    valid_total_weight = sum(weights[f] for f in valid_metrics)
    total_score = sum(scores[f] * weights[f] for f in valid_metrics)
    final_score = total_score / valid_total_weight if valid_total_weight > 0 else 0

    # Verdict logic (realistic)
    if final_score >= 72:
        verdict = "strong buy"
    elif final_score >= 60:
        verdict = "buy"
    elif final_score >= 50:
        verdict = "hold"
    elif final_score >= 35:
        verdict = "sell"
    else:
        verdict = "strong sell"

# for debugging purposes
#     print("Final Score:", round(final_score, 2))
#     print("Individual Scores:", scores)

    return {
        "final_score": round(final_score, 2),
        "verdict": verdict,
    }
