import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import stockList from "../companies.js";
import "./Watchlists.css";
import trashIcon from "../assets/trash.svg";
import Select from "react-select";

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

function Watchlists() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [watchlists, setWatchlists] = useState([]);
  const [selectedListId, setSelectedListId] = useState(null);
  const [newName, setNewName] = useState("");
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const suggestionsRef = useRef(null);

  const getSmartSuggestions = (input) => {
    if (!input.trim()) return [];
    return fuse.search(input).map((r) => r.item);
  };

  const fetchLists = async () => {
    const res = await axios.get("http://localhost:8000/watchlists", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setWatchlists(res.data);
    if (!selectedListId && res.data.length > 0) {
      setSelectedListId(res.data[0].id);
    }
  };

  const createList = async () => {
    if (!newName.trim()) return;
    await axios.post(
      "http://localhost:8000/watchlists",
      { name: newName },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setNewName("");
    setShowModal(false);
    fetchLists();
  };

  const renameList = async (id) => {
    const name = prompt("New watchlist name:");
    if (!name?.trim()) return;
    await axios.put(
      `http://localhost:8000/watchlists/${id}`,
      { name },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchLists();
  };

  const deleteList = async (id) => {
    await axios.delete(`http://localhost:8000/watchlists/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    fetchLists();
    setSelectedListId(null);
  };

  const removeStock = async (wid, symbol) => {
    await axios.delete(
      `http://localhost:8000/watchlists/${wid}/stocks/${symbol}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    fetchLists();
  };

  const addStock = async (symbol) => {
    if (!selectedListId || !symbol) return;

    axios.post(
      `http://localhost:8000/watchlists/${currentList.id}/stocks`,
      {
        symbol: selectedStock.symbol,
        name: selectedStock.name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setQuery("");
    setSuggestions([]);
    fetchLists();
  };

  useEffect(() => {
    document.title = "Watchlists | SmartStocks";
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("watchlists");

    if (saved) {
      setWatchlists(JSON.parse(saved));
    } else {
      fetch("/api/watchlists")
        .then((res) => res.json())
        .then((data) => {
          setWatchlists(data);
          localStorage.setItem("watchlists", JSON.stringify(data));
        });
    }
  }, []);

  useEffect(() => {
    if (watchlists.length > 0) {
      localStorage.setItem("watchlists", JSON.stringify(watchlists));
    }
  }, [watchlists]);

  useEffect(() => {
    fetchLists();
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const results = fuse.search(query).map((r) => r.item);
      setSuggestions(results);
    } else setSuggestions([]);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(e.target)
      ) {
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentList = watchlists.find((wl) => wl.id === selectedListId);

  const options = watchlists.map((wl) => ({
    value: wl.id,
    label: wl.name,
  }));
  const selectedOption =
    options.find((opt) => opt.value === selectedListId) || null;

    
  return (
    <div className="watchlists">
      <h2>Your Watchlists</h2>
      <div className="watchlist-select">
        <label htmlFor="listSelect">watchlist:</label>
        <Select
          inputId="listSelect"
          options={options}
          value={selectedOption}
          onChange={(option) => setSelectedListId(option?.value)}
          placeholder="Select a watchlist"
          styles={{
            container: (base) => ({
              ...base,
              width: "100%",
              maxWidth: "300px", // fixed width
            }),
            control: (base, state) => ({
              ...base,
              backgroundColor: "#f9fafb",
              borderColor: state.isFocused ? "#4F8FCC" : "#D1D5DB",
              boxShadow: state.isFocused
                ? "0 0 0 2px rgba(79, 143, 204, 0.25)"
                : "none",
              "&:hover": {
                borderColor: "#4F8FCC",
              },
              borderRadius: "8px",
              minHeight: "40px",
              fontSize: "0.95rem",
              fontWeight: 500,
              color: "#1F2937",
            }),
            singleValue: (base) => ({
              ...base,
              color: "#1F2937",
              fontWeight: 500,
            }),
            placeholder: (base) => ({
              ...base,
              color: "#9CA3AF",
              fontWeight: 400,
            }),
            option: (base, state) => ({
              ...base,
              backgroundColor: state.isSelected
                ? "#f3f4f6"
                : state.isFocused
                ? "#e5e7eb"
                : "#fff",
              color: "#1f2937",
              fontWeight: state.isSelected ? 700 : 500,
              padding: "10px 12px",
            }),
            menu: (base) => ({
              ...base,
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              overflow: "hidden",
              marginTop: "4px",
            }),
            dropdownIndicator: (base, state) => ({
              ...base,
              color: "#6B7280",
              transition: "transform 0.2s",
              transform: state.selectProps.menuIsOpen
                ? "rotate(180deg)"
                : "rotate(0deg)",
            }),
            indicatorSeparator: () => ({ display: "none" }),
          }}
        />

        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Create New
        </button>
        {selectedListId && (
          <>
            <button
              className="btn btn-primary"
              onClick={() => renameList(selectedListId)}
            >
              Rename
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteList(selectedListId)}
            >
              Delete
            </button>
          </>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Create New Watchlist</h3>
            <input
              type="text"
              placeholder="Enter name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
            <div className="modal-actions">
              <button className="btn btn-primary" onClick={createList}>
                Create
              </button>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {currentList ? (
        <>
          {currentList.stocks.length === 0 && (
            <div className="empty-card">
              <h3>No stocks in "{currentList.name}"</h3>
              <p>Add companies to this list to track them here.</p>
            </div>
          )}

          <div className="add-stock">
            <input
              type="text"
              placeholder="Search to add stocks..."
              value={query}
              onChange={(e) => {
                const input = e.target.value;
                setQuery(input);
                const filtered = getSmartSuggestions(input);
                setSuggestions(filtered);
                setSelectedStock(null);
              }}
              onFocus={() => {
                if (query.trim()) setSuggestions(getSmartSuggestions(query));
              }}
              onBlur={() => setTimeout(() => setSuggestions([]), 150)}
              className="search-input"
            />

            <button
              className="btn btn-primary"
              style={{ marginLeft: "8px" }}
              disabled={!selectedStock}
              onClick={() => {
                if (selectedStock) {
                  addStock(selectedStock.symbol);
                  setQuery("");
                  setSelectedStock(null);
                }
              }}
            >
              Add
            </button>

            {suggestions.length > 0 && (
              <ul className="suggestions-list" ref={suggestionsRef}>
                {suggestions.map((stock) => (
                  <li
                    key={stock.symbol}
                    onClick={() => {
                      setQuery(stock.name);
                      setSelectedStock(stock);
                      setSuggestions([]);
                    }}
                    className="suggestion-item"
                  >
                    <div className="stock-name">{stock.name}</div>
                    <div className="stock-symbol">{stock.symbol}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {currentList.stocks.length > 0 && (
            <ul className="watchlist-box">
              {currentList.stocks.map((stock) => (
                <li key={stock.symbol}>
                  <div
                    className="stock-info"
                    onClick={() => navigate(`/stock/${stock.symbol}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <span className="stock-name">{stock.symbol}</span>
                    <span className="company-name"> — {stock.name}</span>
                  </div>
                  <button
                    className="btn-remove"
                    onClick={() => removeStock(currentList.id, stock.symbol)}
                    aria-label={`Remove ${stock.symbol}`}
                  >
                    <img className="deleteIcon" src={trashIcon} alt="delete" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <p className="empty">No watchlists available. Create one above!</p>
      )}
    </div>
  );
}

export default Watchlists;
