# 📈 SmartStocks

**SmartStocks** is a stock recommendation web app designed to assist retail investors in making smarter decisions. It evaluates companies based on financial fundamentals and offers verdicts like _Strong Buy_, _Buy_, _Hold_, _Sell_ etc. Users can log in securely, maintain custom watchlists, and explore detailed metrics — all through a sleek React frontend and a FastAPI backend.

As a personal project, SmartStocks uses data scraped from [Ticker by Finology](https://ticker.finology.in) to simulate how a basic recommendation engine might function in real-world investing tools.

---
## 🌐 Live Demo

Check out the app live here:  
[https://smart-stocks.vercel.app](https://smart-stocks.vercel.app)


## 🚀 Features

- 🔐 Google OAuth-based secure login  
- 📊 Tiered verdicts derived from:
  - PE, PB, Dividend Yield, ROCE, ROE, etc.
- ⭐ Watchlist management:
  - Create, rename, delete multiple lists
  - Add/remove stocks dynamically
- 🔍 Search bar with autocomplete and recent suggestions
- ⚙️ Serverless backend with auto-reconnecting MongoDB
- 💻 React-based responsive UI (no Next.js/Remix)

---

## 🧠 Recommendation Logic

Stocks are scored using a custom formula that combines multiple valuation and return metrics. Verdicts are derived by comparing total scores against predefined cutoffs. You plan to enhance this with more statistical/ML logic later.

---

## 🛠 Tech Stack

| Layer     | Tech                          |
|-----------|-------------------------------|
| Frontend  | React (Vite), TailwindCSS     |
| Backend   | FastAPI (Python)              |
| Auth      | Google OAuth + JWT            |
| Database  | MongoDB                       |
| Deploy    | Railway (backend), Vercel (frontend) |

---

## 📂 Folder Structure

```
/frontend         # React frontend
/backend          # FastAPI backend
/frontend/.env    # Frontend env config
/backend/.env     # Backend env config
```

---

## 🔧 Environment Setup

### 📁 `backend/.env.sample`

```env
GOOGLE_CLIENT_ID=your-google-client-id
MONGO_URI=your-mongodb-uri
FRONTEND_URL=http://localhost:3000
JWT_SECRET=your-jwt-secret
```

### 📁 `frontend/.env.sample`

```env
VITE_API_BASE=http://localhost:8000
VITE_GOOGLE_CLIENT_ID=your-google-client-id
```

---

## 🧪 Installation

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🛣️ Roadmap

- ✅ Basic scoring and recommendation  
- ✅ Watchlists and Google login  
- ✅ Search optimization  
- 🟡 Add historical performance insights  
- 🟡 UI polish and animations  
- 🟡 Backend tests and CI  

---

## 🤝 Contributions

Open to PRs — whether it's improving financial logic, optimizing UI, or refining backend structure. Great place to explore full-stack development on a practical use case.

---

## 📜 License

MIT
