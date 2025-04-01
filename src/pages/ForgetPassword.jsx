import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please enter your email or phone number.");
      return;
    }
    alert("Reset link has been sent to your email.");
    navigate("/reset-password"); // Redirect to Reset Password page
  };

  return (
    <div className="forget-password-container">
      <div className="image-section">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1dc36a32384105.567f6a9b357af.jpg" />
      </div>
      <div className="form-section">
        <h2>Forgot Password?</h2>
        <p>Enter your email or phone number to receive a password reset link.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Phone Number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
        <p className="back-link" onClick={() => navigate("/")}>Back to Login</p>
      </div>
    </div>
  );
};

export default ForgetPassword;
