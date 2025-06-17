import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';
import { NavLink } from "react-router-dom";


function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("watchlists");
    localStorage.removeItem("recommendationResult");
    logout();
    navigate(0);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="nav-title">SmartStocks</h1>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setMenuOpen(false)}>Watchlists</NavLink>
        <NavLink to="/recommend" onClick={() => setMenuOpen(false)}>Recommendations</NavLink>
        <span className="user">Hi, {user?.name}</span>
        <button className="logout" onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
