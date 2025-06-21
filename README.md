# 📈 SmartStocks

SmartStocks is a full-stack personal stock analysis tool that uses fundamental metrics to score and rank stocks. It features Google OAuth login, a FastAPI backend, and a React frontend — all fully deployed online.

---

## 🌐 Live Demo

- **Frontend:** https://smart-stocks-frontend.vercel.app  
- **Backend API:** https://smartstocks-production.up.railway.app

---

## 🔧 Tech Stack

- **Frontend:** React (Vite), hosted on Vercel
- **Backend:** FastAPI (Python), hosted on Railway
- **Authentication:** Google OAuth
- **Deployment:** Vercel + Railway
- **Environment Configuration:** `.env` files for both frontend and backend

---

## 🚀 Features

- 🔐 Google Login with OAuth
- 📊 Stock screener using custom fundamental scoring logic
- ⚙️ REST API built with FastAPI
- 🌍 Full-stack deployment with frontend and backend connected
- 🔄 Data communication via environment-secured endpoints

---

## 📁 Folder Structure

```
SmartStocks/
├── backend/ # FastAPI backend
│ ├── main.py
│ ├── auth/
│ ├── routes/
│ └── ...
├── frontend/ # React (Vite) frontend
│ ├── src/
│ └── ...
├── requirements.txt
└── README.md
```
