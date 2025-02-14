import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({isLogoutButtonHidden = true}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
     navigate("/")
  }
  return (
    <header className={"header header-container"}>
      <h1>Analytics Dashboard</h1>
      <button className={`logout-btn ${isLogoutButtonHidden? "hidden":""}`} onClick={handleLogout}>Logout</button>
    </header>
  );
};

export default Header;