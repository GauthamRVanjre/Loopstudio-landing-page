import React from "react";
import "./Footer.css";
import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <div className="icons-container">
            <div className="logo-container">
              <img src={logo} alt="logo" />
            </div>
            <div className="logos-container">
              <ul>
                <li>
                  <img src={facebook} alt="facebook" />
                </li>
                <li>
                  <img src={twitter} alt="twitter" />
                </li>
                <li>
                  <img src={pinterest} alt="pinterest" />
                </li>
                <li>
                  <img src={instagram} alt="instagram" />
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-links-container">
            <div>
              <ul className="footer-links">
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
              </ul>
            </div>
            <div className="footer-copyright">
              <p>© 2021 Loopstudios. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
