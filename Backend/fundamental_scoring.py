def evaluate_fundamentals(data):
    # Weight assignment for each factor
    weights = {
        "pe": 15,
        "pb": 10,
        "roe": 10,
        "roce": 10,
        "eps": 10,
        "sales_growth": 10,
        "profit_growth": 10,
        "dividend_yield": 5,
        "debt_to_equity": 10,
        "promoter_holding": 5,
        "book_value": 5
    }

    # Scoring functions
    def score_pe(pe):
        if pe < 10: return 90
        elif pe < 20: return 75
        elif pe < 30: return 50
        elif pe < 50: return 30
        else: return 10

    def score_pb(pb):
        if pb < 1: return 90
        elif pb < 2: return 75
        elif pb < 3: return 50
        elif pb < 5: return 30
        else: return 10

    def score_roe(roe): return min(max(roe * 100, 0), 100)
    def score_roce(roce): return min(max(roce * 100, 0), 100)
    def score_eps(eps): return min(eps * 3, 100)

    def score_sales_growth(sg):
        if sg > 0.2: return 90
        elif sg > 0.1: return 70
        elif sg > 0: return 50
        elif sg > -0.1: return 30
        else: return 10

    def score_profit_growth(pg):
        if pg > 0.3: return 90
        elif pg > 0.15: return 70
        elif pg > 0: return 50
        elif pg > -0.1: return 30
        else: return 10

    def score_dividend_yield(dy): return min(dy * 100 * 2, 100)

    def score_debt_to_equity(dte):
        if dte < 0.3: return 90
        elif dte < 0.5: return 70
        elif dte < 1: return 50
        elif dte < 2: return 30
        else: return 10

    def score_promoter_holding(ph): return min(ph * 100, 100)
    def score_book_value(bv): return min(bv, 100)

    # Derived metric
    debt_to_equity = data["DEBT"] / (data["BOOK_VALUE_TTM"] * data["NO_OF_SHARES"])

    # Score calculation
    scores = {
        "pe": score_pe(data["P/E"]),
        "pb": score_pb(data["P/B"]),
        "roe": score_roe(data["ROE"]),
        "roce": score_roce(data["ROCE"]),
        "eps": score_eps(data["EPS_TTM"]),
        "sales_growth": score_sales_growth(data["SALES_GROWTH"]),
        "profit_growth": score_profit_growth(data["PROFIT_GROWTH"]),
        "dividend_yield": score_dividend_yield(data["DIV._YIELD"]),
        "debt_to_equity": score_debt_to_equity(debt_to_equity),
        "promoter_holding": score_promoter_holding(data["PROMOTER_HOLDING"]),
        "book_value": score_book_value(data["BOOK_VALUE_TTM"])
    }

    # Weighted average score
    total_score = sum(scores[factor] * weights[factor] for factor in weights)
    final_score = total_score / sum(weights.values())

    # Verdict mapping
    if final_score >= 80:
        verdict = "Strong Buy"
    elif final_score >= 65:
        verdict = "Buy"
    elif final_score >= 50:
        verdict = "Hold"
    elif final_score >= 35:
        verdict = "Sell"
    else:
        verdict = "Strong Sell"

    return {
        "final_score": round(final_score, 2),
        "verdict": verdict
    }
