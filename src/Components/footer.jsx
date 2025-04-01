// src/Components/Footer.jsx
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>QuickBuy</h3>
        <p className="subscribe-text">Subscribe</p>
        <p>Get 10% off your first order</p>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button><FaPaperPlane /></button>
        </div>
      </div>

      <div className="footer-section">
        <h4>Support</h4>
        <p>Rajkot Gujarat.</p>
        <p>QuickBuyemail@gmail.com</p>
        <p>+91 9991234569</p>
      </div>

      <div className="footer-section">
        <h4>Account</h4>
        {/* <Link to="/account">My Account</Link> */}
        {/* <br /> */}
        <Link to="/login">Login / Register</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/wishlist">Wishlist</Link>
      </div>

      <div className="footer-section">
        <h4>Quick Link</h4>
        <Link to="/privacy">Privacy Policy</Link>
        <br />
        <Link to="/terms">Terms Of Use</Link>
        <br />
        <Link to="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
