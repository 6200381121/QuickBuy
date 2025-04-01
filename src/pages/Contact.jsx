// ContactPage.jsx
import React from 'react';
import './Contact.css'; // Import your CSS here
import { FaPhoneAlt, FaEnvelope, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home / </span>
        <span className="current">Contact</span>
      </div>

      {/* Main Content */}
      <main className="main-content">
        {/* Left Side */}
        <div className="contact-info">
          <div className="info-box">
            <div className="icon-circle"><FaPhoneAlt /></div>
            <div>
              <h6>Call To Us</h6>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +91 7667219123</p>
            </div>
          </div>
          <hr />
          <div className="info-box">
            <div className="icon-circle"><FaEnvelope /></div>
            <div>
              <h6>Write To US</h6>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: agupta@gmail.com</p>
              <p>Emails: akumar@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name *" />
          <input type="email" placeholder="Your Email *" />
          <input type="text" placeholder="Your Phone *" />
          <textarea rows="5" placeholder="Your Message"></textarea>
          <div className="form-actions">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Contact;
