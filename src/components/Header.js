import React from 'react';
import logo from '../assets/header-logo.png'; // Replace with your actual image path

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Header Logo" className="header-logo" />
    </header>
  );
}

export default Header;
