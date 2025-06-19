import React, { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import stockList from "../companies.js";
import "./StockView.css";

function StockView() {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [result, setResult] = useState(null);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/recommend/${symbol}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      // attach name from stockList
      const lookup = stockList.find((s) => s.symbol == symbol);
      const name = lookup?.name || res.data.symbol;
      setResult({ ...res.data, name });
    } catch (err) {
      console.error(err);
      setResult({ error: "Failed to fetch data" });
    }
  };

  useEffect(() => {
    fetchData();
  }, [symbol]);


  return (
    <div className="container">
      <div className="button-container">
      <button className="back-button" onClick={() => navigate('/watchlists')}>
        ← Back to Watchlists
      </button>
      </div>
      <div className="result-container">
        {!result && (
          <p className="loading">Loading stock details...</p>
        )
} 
        {result && (
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
        )}
      </div>
    </div>
  );
}

export default StockView;
