
import React, { useState } from "react";
import "./Checkout.css";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");

  return (
    <div className="checkout-container">
      <div className="breadcrumb">
        <span>Account / My Account / Product / View Cart / </span>
        <span className="current">CheckOut</span>
      </div>

      <div className="checkout-content">
        {/* Left Section: Billing Details */}
        <div className="billing-details">
          <h2>Billing Details</h2>
          <form>
            <label>First Name*</label>
            <input type="text" placeholder="Enter your first name" required />

            <label>Company Name</label>
            <input type="text" placeholder="Enter company name" />

            <label>Street Address*</label>
            <input type="text" placeholder="Enter street address" required />

            <label>Apartment, floor, etc. (optional)</label>
            <input type="text" placeholder="Enter details" />

            <label>Town/City*</label>
            <input type="text" placeholder="Enter town/city" required />

            <label>Phone Number*</label>
            <input type="tel" placeholder="Enter phone number" required />

            <label>Email Address*</label>
            <input type="email" placeholder="Enter email address" required />

            <div className="save-info">
              <input type="checkbox" id="save-info" />
              <label htmlFor="save-info">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="order-summary">
          <div className="items">
            <div className="item">
              <img src="https://www.simplyshopping.in/cdn/shop/products/81WIOP3-bOL._SL1500.jpg?v=1677228719" />
              <span>LCD Monitor</span>
              <span className="price">$650</span>
            </div>
            <div className="item">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ogqgGzYyPqZS63x2-GBJWdpAQVaYlmfsog&s" />
              <span>H1 Gamepad</span>
              <span className="price">$1100</span>
            </div>
          </div>

          <div className="summary">
            <p>Subtotal: <span>$1750</span></p>
            <p>Shipping: <span>Free</span></p>
            <p className="total">Total: <span>$1750</span></p>
          </div>

          <div className="payment-method">
            <label>
              <input 
                type="radio" 
                name="payment" 
                checked={paymentMethod === "bank"} 
                onChange={() => setPaymentMethod("bank")} 
              />
              Bank
            </label>
            <label>
              <input 
                type="radio" 
                name="payment" 
                checked={paymentMethod === "cash"} 
                onChange={() => setPaymentMethod("cash")} 
              />
              Cash on delivery
            </label>
            <div className="payment-icons">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOK-ExH64w4vaz6r2HY7kpEc0SEZKmpq7CKg&s" />
              
              <img src="https://pngimg.com/d/mastercard_PNG16.png" />
            
              <img src="https://cdn.dribbble.com/userupload/9943216/file/original-72c6f4a3d5d35b03ee35a423e1f93263.jpg?resize=400x300" />
            </div>
          </div>

          <div className="coupon-section">
            <input type="text" placeholder="Coupon Code" />
            <button className="apply-coupon">Apply Coupon</button>
          </div>

          <button className="place-order">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
