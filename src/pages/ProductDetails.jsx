import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/viewcart');
  };

  return (
    <div className="product-container">
      <h5 className="product-title">Product</h5>
      <div className="product-wrapper">
        <div className="product-img">
          <img 
            src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-15-pro-1.jpg" 
            alt="iPhone 16" 
          />
        </div>
        <div className="product-details">
          <h3>iPhone 16</h3>
          <div className="product-rating">
            <span className="stars">★★★★☆</span>
            <span className="reviews">(150 Reviews)</span>
          </div>
          <p className="price">$ 854</p>
          <p className="desc">
            The iPhone 16 features a Super Retina XDR display, 48MP dual-camera
            system, and the A18 chip for enhanced performance. It offers Dynamic
            Island, True Tone, and water resistance. Available in multiple
            colors and storage options.
          </p>
          <hr />
          <button className="add-btn" onClick={handleAddToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
