import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  // Function to toggle the active state of the menu
  const toggleMenu = () => {
    setMenuActive((prevState) => !prevState); // Toggle the menu visibility
  };

  return (
    <header className="header">
      <div className="logo">
        <h1>My Landing Page</h1>
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuActive ? '×' : '☰'} {/* Show "×" when menu is open, "☰" when closed */}
      </div>

      {/* Navigation Menu */}
      <nav>
        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
