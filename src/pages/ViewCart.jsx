import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ViewCart.css";

const ViewCart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Gaming Monitor", price: 650, quantity: 1, image: "monitor.png" },
    { id: 2, name: "Game Controller", price: 550, quantity: 2, image: "controller.png" },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, quantity: parseInt(quantity) } : item))
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="breadcrumb">
        <Link to="/">Home</Link> / <span>Cart</span>
      </div>

      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img src="https://images.philips.com/is/image/philipsconsumer/f3478916ee84410b8d1cb10f011dd27e?wid=700&hei=700&$pnglarge$" className="cart-item-img" alt={item.name} />
              </td>
              <td>${item.price}</td>
              <td>
                <select
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>
                      {num + 1}
                    </option>
                  ))}
                </select>
              </td>
              <td>${item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart-actions">
        <Link to="/shop" className="btn return-btn">Return To Shop</Link>
        <button className="btn update-btn">Update Cart</button>
      </div>

      <div className="coupon-section">
        <input type="text" placeholder="Coupon Code" />
        <button className="btn apply-coupon-btn">Apply Coupon</button>
      </div>

      <div className="cart-total">
        <h3>Cart Total</h3>
        <p>Subtotal: <span>${subtotal}</span></p>
        <p>Shipping: <span>Free</span></p>
        <p>Total: <span>${subtotal}</span></p>

        {/* ✅ Link to Checkout Page */}
        <Link to="/checkout">
          <button className="btn checkout-btn">Proceed to Checkout</button>
        </Link>

      </div>
    </div>
  );
};

export default ViewCart;
