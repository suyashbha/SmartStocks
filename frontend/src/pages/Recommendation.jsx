import React, { useEffect, useState } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import stockList from "../companies.js";
import "./Recommendation.css";

const fuse = new Fuse(stockList, {
  keys: [
    { name: "name", weight: 0.6 },
    { name: "symbol", weight: 0.4 },
  ],
  threshold: 0.2,
  ignoreLocation: true,
  minMatchCharLength: 2,
  tokenize: true,
  matchAllTokens: false,
  includeScore: true,
});

export default function Recommendation() {
  const [query, setQuery] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(() => {
    const saved = localStorage.getItem("recommendationResult");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    if (result) {
      localStorage.setItem("recommendationResult", JSON.stringify(result));
    }
  }, [result]);

  useEffect(() => {
    document.title = "Recommendations | SmartStocks";
  }, []);
  const getSmartSuggestions = (input) => {
    if (!input.trim()) return [];
    return fuse.search(input).map((r) => r.item);
  };
  const suggestions = getSmartSuggestions(query);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setSelectedStock(null);
    setShowSuggestions(true);
  };

  const handleSelect = (stock) => {
    setQuery(stock.name);
    setSelectedStock(stock);
    setShowSuggestions(false);
  };

  const handleSearch = async () => {
    if (!selectedStock) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:8000/recommend/${selectedStock.symbol}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      // attach name from stockList
      const name =
        stockList.find((s) => s.symbol == selectedStock.symbol)?.name ||
        selectedStock.name;
      setResult({ ...res.data, name });
    } catch (err) {
      console.error(err);
      setResult({ error: "Failed to fetch data" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container recommend-page">
      <h1 className="page-heading">Stock Recommendation</h1>
      <p className="subheading">
        Enter a company name or symbol to get smart insights powered by
        fundamentals.
      </p>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search Stock"
          value={query}
          onChange={handleInputChange}
          className="search-input"
          onFocus={() => query && setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
        />

        {showSuggestions && suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((stock) => (
              <li
                key={stock.symbol}
                className={`suggestion-item ${
                  selectedStock?.symbol === stock.symbol ? "selected" : ""
                }`}
                onClick={() => handleSelect(stock)}
              >
                <div className="stock-name">{stock.name}</div>
                <div className="stock-symbol">{stock.symbol}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="button-container">
        <button
          className="search-button"
          onClick={handleSearch}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="loader" /> Loading...
            </>
          ) : (
            "Get Recommendation"
          )}
        </button>
      </div>
      <div className="result-container">
        {result ? (
          <div className="result-box">
            {result.error ? (
              <p className="error-text">{result.error}</p>
            ) : (
              <>
                {/* 1) Header Row: title + verdict */}
                <div className="result-header">
                  <h2 className="result-name">{result.name}</h2>
                  <div
                    className={`recommendation-box ${result.verdict
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                  >
                    Recommendation: {result.verdict}
                  </div>
                </div>
                <h3 className="fundamentals-heading">Fundamentals:</h3>
                {/* 2) Fundamentals grid */}
                <div className="result-grid">
                  <div>
                    <strong>Market Cap:</strong>{" "}
                    {result.MARKET_CAP != null ? (
                      result.MARKET_CAP_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Enterprise Value:</strong>{" "}
                    {result.ENTERPRISE_VALUE != null ? (
                      result.ENTERPRISE_VALUE_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>No. of Shares:</strong>{" "}
                    {result.NO_OF_SHARES != null ? (
                      result.NO_OF_SHARES_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Face Value:</strong>{" "}
                    {result.FACE_VALUE != null ? (
                      result.FACE_VALUE_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Cash:</strong>{" "}
                    {result.CASH != null ? (
                      result.CASH_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Debt:</strong>{" "}
                    {result.DEBT != null ? (
                      result.DEBT_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Promoter Holding:</strong>{" "}
                    {result.PROMOTER_HOLDING != null ? (
                      result.PROMOTER_HOLDING_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>PE Ratio:</strong>{" "}
                    {result["P/E"] != null ? (
                      result["P/E_raw"]
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>PB Ratio:</strong>{" "}
                    {result["P/B"] != null ? (
                      result["P/B_raw"]
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>ROE:</strong>{" "}
                    {result.ROE != null ? (
                      result.ROE_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>ROCE:</strong>{" "}
                    {result.ROCE != null ? (
                      result.ROCE_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>EPS:</strong>{" "}
                    {result.EPS_TTM != null ? (
                      result.EPS_TTM_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Dividend Yield:</strong>{" "}
                    {result["DIV._YIELD"] != null ? (
                      result["DIV._YIELD_raw"]
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Sales Growth:</strong>{" "}
                    {result.SALES_GROWTH != null ? (
                      result.SALES_GROWTH_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                  <div>
                    <strong>Profit Growth:</strong>{" "}
                    {result.PROFIT_GROWTH != null ? (
                      result.PROFIT_GROWTH_raw
                    ) : (
                      <span className="na">N/A</span>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="result-box empty">
            {/* still render the box so it “holds its shape” */}
            <div className="empty-overlay">
              <div className="empty-content">
                
                <svg
                  width="48"
                  height="48"
                  fill="none"
                  stroke="#6B7280"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 3h18v18H3V3zM8 12h8M12 8v8" />
                </svg>
                <h2>No Recommendation Yet</h2>
                <p>Search for a stock above to see fundamentals & a verdict.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
