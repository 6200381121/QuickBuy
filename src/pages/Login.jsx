import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Login.css";

const Login = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh
    navigate("/"); // Redirect to home page after login
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1dc36a32384105.567f6a9b357af.jpg" 
          alt="Shopping"
        />
      </div>
      <div className="login-right">
        <h2>Log in to <span className="brand-name">QuickBuy</span></h2>
        <p>Enter your details below</p>
        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Email or Phone Number" className="login-input" required />
          <input type="password" placeholder="Password" className="login-input" required />
          <button type="submit" className="login-button">Log In</button>
        </form>
        <div className="forgot-password">
          <span onClick={() => navigate('/forget-password')} className="clickable">Forget Password?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
