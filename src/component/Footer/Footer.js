import React from "react";
import "./Footer.css";
import footer_logo from "../Assegts/logo_big.png";
import instagram_icon from "../Assegts/instagram_icon.png";
import pintester_icon from "../Assegts/pintester_icon.png";
import whatsapp_icon from "../Assegts/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" srcset="" />
        <p>shopper</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>productes</li>
        <li>offices</li>
        <li>about</li>
        <li>contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @2023 - all right reserved</p>
      </div>
    </div>
  );
};

export default Footer;
