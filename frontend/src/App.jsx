import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Watchlists from './pages/Watchlists';
import Recommendation from './pages/Recommendation';
import StockView from './pages/StockView';
import { useAuth } from './context/AuthContext';
import './App.css'; // Assuming you have some global styles
function App() {
  const { user } = useAuth();

  if (!user) return <Login />;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Watchlists />} />
        <Route path="/recommend" element={<Recommendation />} />
        <Route path="/stock/:symbol" element={<StockView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
