import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaSearch, FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="promo-text">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <span className="shop-now">ShopNow</span>
        </div>
        <div className="language">English ▾</div>
      </div>

      <div className="main-navbar">
        <div className="logo">QueckBuy</div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>

        <div className="right-section">
          <div className="search-box">
            <input type="text" placeholder="What are you looking for?" />
            <button><FaSearch /></button>
          </div>
          <Link to="/wishlist">
            <FaHeart className="icon" />
          </Link>
          <Link to="/ViewCart" className="cart-icon">
          <FaShoppingCart />
          <span className="cart-badge">2</span>
         </Link>
         <Link to="/admin-login" className="admin-button">
  <FaUser className="icon" />
  Admin
</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
