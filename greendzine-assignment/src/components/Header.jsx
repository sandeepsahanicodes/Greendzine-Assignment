import React from 'react';
import '../styles/Header.css';

const Header = ({isLogoutButtonHidden = true}) => {
  return (
    <header className={"header header-container"}>
      <h1>Analytics Dashboard</h1>
      <button className={`logout-btn ${isLogoutButtonHidden? "hidden":""}`}>Logout</button>
    </header>
  );
};

export default Header;