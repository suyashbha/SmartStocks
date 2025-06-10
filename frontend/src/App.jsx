import React, { useState } from "react";
import axios from "axios";
import './App.css';
import Fuse from 'fuse.js';
import stockList from './companies.js';

const options = {
  keys: ['name'],
  threshold: 0.4,
  includeScore: true,
};

const fuse = new Fuse(stockList, options);

function getSmartSuggestions(input) {
  if (!input.trim()) return [];
  const results = fuse.search(input);
  return results.map(result => result.item);
}

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);
  const [result, setResult] = useState(null);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setSelectedStock(null);
    setShowSuggestions(true);
  };

  const filteredStocks = getSmartSuggestions(query);

  const handleSelect = (stock) => {
    setQuery(stock.name);
    setSelectedStock(stock);
    setShowSuggestions(false);
  };

  const handleSearch = async () => {
    if (!selectedStock) return;
    try {
      const res = await axios.get(`http://localhost:8000/recommend/${selectedStock.symbol}`);
      
      // Lookup name based on returned symbol
      const stockMatch = stockList.find(s => s.symbol === res.data.symbol);
      const name = stockMatch ? stockMatch.name : selectedStock.name;

      setResult({ ...res.data, name });
    } catch (err) {
      console.error(err);
      setResult({ error: "Failed to fetch data" });
    }
  };

  return (
    <div className="container">
      <h1>Stock Recommendation App</h1>

      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search Stock"
          value={query}
          onChange={handleInputChange}
          className="search-input"
          onFocus={() => {
            if (query.length > 0) setShowSuggestions(true);
          }}
          onBlur={() => {
            setTimeout(() => setShowSuggestions(false), 150);
          }}
        />

        {showSuggestions && filteredStocks.length > 0 && (
          <ul className="suggestions-list">
            {filteredStocks.map((stock) => (
              <li
                key={stock.symbol}
                className={`suggestion-item ${selectedStock?.symbol === stock.symbol ? "selected" : ""}`}
                onClick={() => handleSelect(stock)}
              >
                <div className="stock-name">{stock.name}</div>
                <div className="stock-symbol">{stock.symbol.replace('.NS', '')}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="button-container">
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      {result && (
        <div className="result-box">
          {result.error ? (
            <p className="error-text">{result.error}</p>
          ) : (
            <>
              <h2 className="result-name">{result.name}</h2>
              <p className="result-symbol">{result.symbol.replace('.NS', '')}</p>

              <div className="result-grid">
                <div><strong>PE Ratio:</strong> {result.pe ?? "N/A"}</div>
<div><strong>Debt/Equity:</strong> {result.debt_equity ?? "N/A"}</div>
<div><strong>ROE:</strong> {result.roe ?? "N/A"}</div>
<div><strong>EPS:</strong> {result.eps ?? "N/A"}</div>
<div><strong>PB Ratio:</strong> {result.pb ?? "N/A"}</div>
<div><strong>Profit Margin:</strong> {result.profit_margin ?? "N/A"}</div>
<div><strong>Revenue:</strong> {result.revenue ?? "N/A"}</div>
<div><strong>Market Cap:</strong> {result.market_cap ?? "N/A"}</div>

              </div>

              <div className={`recommendation-box ${result.recommendation.toLowerCase().replace(/\s/g, '-')}`}>
                Recommendation: {result.recommendation}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
