import React, { useState } from "react";
import logo from "../../images/logo.svg";
import hamburger_open from "../../images/icon-hamburger.svg";
import hamburger_close from "../../images/icon-close.svg";
import "./Header.css";

const Header = () => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  return (
    <header>
      <nav className={hamburgerOpen ? "menu-bar navbar" : "navbar"}>
        <div className="logo-wrapper">
          <img src={logo} alt="logo" />
        </div>

        <div
          className={hamburgerOpen ? "nav-links nav-links-close" : "nav-links"}
        >
          <ul>
            <li>About</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Products</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="hamburger-icon-wrapper">
          <img
            className={
              hamburgerOpen ? "hamburger-open-close" : "hamburger-close-open"
            }
            onClick={() => {
              setHamburgerOpen(!hamburgerOpen);
            }}
            src={hamburger_open}
            alt="hamburger icon"
          />
          <img
            className={
              hamburgerOpen ? "hamburger-close-open" : "hamburger-open-close"
            }
            onClick={() => {
              setHamburgerOpen(!hamburgerOpen);
            }}
            src={hamburger_close}
            alt="hamburger close icon"
          />
        </div>
      </nav>

      <div className="greeting">Immersive experiences that deliver</div>
    </header>
  );
};

export default Header;
