import React, { useState, useEffect } from 'react';
import logo from './Images/Logo.jpg';
import './Nav.css';
import { useNavigate } from 'react-router-dom';

function NavMain() {
  const [user, setUser] = useState(null); // State to manage user info
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the username from localStorage when the component loads
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUser(storedUsername);
    }
  }); // Add an empty dependency array to run only once on mount

  const handleLogout = () => {
    localStorage.removeItem('username'); // Clear the username from localStorage
    localStorage.removeItem('cart');
    setUser(null); // Update state to reflect logged-out status
    navigate('/'); // Redirect to the homepage
  };

  return (
    <nav className="navbar">
      <div className="menu-container nav-wrapper">
        <div className="brand">
            <img src={logo} alt="insurance-logo" className="logo" />
        </div>
        <div className="hamberger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav-list">
          <li className="active"><a href="/home">Home</a></li>
          {user && (
            <>
              <li><a href="/about">About</a></li>
              <li><a href="/insurance">Insurance</a></li>
              <li><a href="/claim">Claim</a></li>
              <li><a href="/contact">Contacts</a></li>
              <li className="cart">
                <a href="/cart" className="cart-link">Cart</a>
              </li>
            </>
          )}
          <li className="user-info">
            {user ? (
              <div className="welcome-container">
                <span className="welcome-text">Welcome, {user}</span>
                <div className="logout-container">
                  <a href="/home" className="logout-link" onClick={(e) => {
                    e.preventDefault();
                    handleLogout();
                  }}>Logout</a>
                </div>
              </div>
            ) : (
              <a href="/" className="login-link">Login</a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavMain;
