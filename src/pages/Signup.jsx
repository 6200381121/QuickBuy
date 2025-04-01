import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css';

const Signup = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleSignup = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    navigate('/'); // Redirect to Home Page
  };

  return (
    <div className="signup-container">
      {/* Left Side Image */}
      <div className="signup-left">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/1dc36a32384105.567f6a9b357af.jpg" 
          alt="Shopping" 
        />
      </div>

      {/* Right Side Form */}
      <div className="signup-right">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form onSubmit={handleSignup}> {/* Call handleSignup on submit */}
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Create Account</button>
          <p className="login-link">
  Already have an account?{" "}
  <span onClick={() => navigate("/login")} className="login-btn">
    Log in
  </span>
</p>

        </form>
      </div>
    </div>
  );
};

export default Signup;
