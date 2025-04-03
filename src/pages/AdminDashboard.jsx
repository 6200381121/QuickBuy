import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate(); // For redirecting after logout

  const handleLogout = () => {
    // Clear authentication-related data (optional)
    localStorage.removeItem("userToken"); // If using authentication tokens

    // Redirect to signup page
    navigate("/signup");
  };

  const recentOrders = [
    { product: "Short", orderId: "$250", date: "Jan 8th", name: "Sujeet", status: "Delivered", amount: "$300.0" },
    { product: "Guccu bag", orderId: "$160", date: "Nov 8th", name: "Ankit", status: "Canceled", amount: "$200.0" },
    { product: "Pink taddy bear", orderId: "$150", date: "Nov 8th", name: "Alok", status: "Delivered", amount: "$300.0" },
    { product: "Laptop", orderId: "$550", date: "Aug 8th", name: "Ajeet", status: "Canceled", amount: "$500.0" },
  ];

  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <h2 className="logo">QuickBuy</h2>
        <nav className="menu">
          <h2>Dashboard</h2>
          {/* <Link to="/dashboard" className="menu-item active">🏠 Dashboard</Link> */}
          <Link to="/AccountPage" className="menu-item">📦 AccountPage</Link>
          <Link to="/order-list" className="menu-item">👤 Order List</Link>
          <Link to="/product-detail" className="menu-item">👜 Add Product</Link>
          <button onClick={handleLogout} className="logout">↩ Logout</button>

        </nav>
        {/* <button onClick={handleLogout} className="logout">↩ Logout</button> */}
      </aside>

      <main className="dashboard-content">
        <div className="order-summary">
          <div className="order-card">📦 Total Order <br /><span>$2500</span></div>
          <div className="order-card">📦 Active Order <br /><span>$2500</span></div>
          <div className="order-card">📦 Complete Order <br /><span>$2500</span></div>
        </div>

        <div className="recent-orders">
          <h3>Recent Orders</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Order Id</th>
                <th>Date</th>
                <th>Name</th>
                <th>Status</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/product-detail/${index}`}>{order.product}</Link>
                  </td>
                  <td>{order.orderId}</td>
                  <td>{order.date}</td>
                  <td>{order.name}</td>
                  <td className={order.status.toLowerCase()}>{order.status}</td>
                  <td>{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
