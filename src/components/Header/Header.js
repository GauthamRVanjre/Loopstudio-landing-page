import React from "react";
import logo from "../../images/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
      </nav>

      <div className="greeting">Immersive experiences that deliver</div>
    </header>
  );
};

export default Header;
