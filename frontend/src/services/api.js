import axios from 'axios';

const API_BASE = 'http://localhost:8000';

const headers = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
});

export const loginUser = (data) => axios.post(`${API_BASE}/login`, data);
export const registerUser = (data) => axios.post(`${API_BASE}/register`, data);
export const getWatchlists = () => axios.get(`${API_BASE}/watchlists`, headers());
export const createWatchlist = (name) => axios.post(`${API_BASE}/watchlists`, { name }, headers());
export const renameWatchlist = (id, name) => axios.put(`${API_BASE}/watchlists/${id}`, { name }, headers());
export const deleteWatchlist = (id) => axios.delete(`${API_BASE}/watchlists/${id}`, headers());
export const addStock = (id, stock) => axios.post(`${API_BASE}/watchlists/${id}/stocks`, stock, headers());
export const removeStock = (id, symbol) => axios.delete(`${API_BASE}/watchlists/${id}/stocks/${symbol}`, headers());
export const getRecommendation = (symbol) => axios.get(`${API_BASE}/recommend/${symbol}`, headers());
