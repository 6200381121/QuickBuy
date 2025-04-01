import React from 'react';
import { Link } from "react-router-dom";
import './AccountPage.css';

const AccountPage = () => {
  return (
    <div className="account-container">
      <aside className="sidebar">
        <nav>
          <h3>Manage My Account</h3>
          <ul>
            <li className="active">My Profile</li>
          </ul>
        </nav>
      </aside>

      <main className="account-content">
        <h2>Edit Your Profile</h2>
        <form>
          <div className="form-group">
            <div>
              <label>First Name</label>
              <input type="text" placeholder="First Name" />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last Name" />
            </div>
          </div>

          <div className="form-group">
            <div>
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>
            <div>
              <label>Address</label>
              <input type="text" placeholder="Address" />
            </div>
          </div>

          <h3>Password Changes</h3>
          <div className="form-group">
            <input type="password" placeholder="Current Password" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="New Password" />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Confirm New Password" />
          </div>

          <div className="buttons">
            <button type="button" className="cancel-btn">Cancel</button>
            <button type="submit" className="save-btn">Save Changes</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AccountPage;
