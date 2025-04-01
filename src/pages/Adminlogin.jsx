import React from "react";
import { useNavigate } from "react-router-dom";
import "./Adminlogin.css";

const Adminlogin = () => {
  const navigate = useNavigate(); // Initialize navigation

  const handleAdminLogin = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Login button clicked! Navigating to admin dashboard...");
  
    navigate("/admin-dashboard"); // Redirect to Admin Dashboard
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-left">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1dc36a32384105.567f6a9b357af.jpg" 
          alt="Admin Login"
        />
      </div>
      <div className="admin-login-right">
        <h2>Admin Login</h2>
        <p>Enter your credentials below</p>
        <form onSubmit={handleAdminLogin}>
          <input type="text" placeholder="Admin Email or Username" className="login-input" required />
          <input type="password" placeholder="Password" className="login-input" required />
          <button type="submit" className="login-button">Login as Admin</button>
        </form>
        {/* <div className="forgot-password">
          <span onClick={() => navigate('/admin-dashboard')} className="clickable">
            Forgot Password?
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Adminlogin;
