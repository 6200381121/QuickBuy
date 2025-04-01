import React, { useState } from "react";
import "./Wishlist.css";
import { FaShoppingCart, FaTrash, FaEye } from "react-icons/fa";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      discount: "-35%",
      image: 'https://img001.video2b.com/upload/watermark/229/img/16771328089376.jpg?x-oss-process=image/resize,m_lfit,w_768/format,webp/quality,80',
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: 1960,
      image: 'https://m.media-amazon.com/images/I/61JAH5Xo8hL.jpg',
    },
    {
      id: 3,
      name: "GP11 Shooter USB Gamepad",
      price: 550,
      image: 'https://dealclear.com/image/catalog/products/redgear/b01fjhv47q/821260.jpg',
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: 750,
      image: 'https://www.voganow.com/cdn/shop/files/VNGJ-F003-018-_1_copy.jpg?v=1740144277',
    },
  ]);

  const handleRemove = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <div className="wishlist-container">
      <h2>Wishlist ({wishlist.length})</h2>
      <button className="move-all-btn">Move All To Bag</button>

      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            {item.discount && <span className="discount-badge">{item.discount}</span>}
            <img src={item.image} alt={item.name} className="wishlist-image" />
            <FaTrash className="delete-icon" onClick={() => handleRemove(item.id)} />
            <div className="wishlist-details">
              <h3>{item.name}</h3>
              <p className="price">
                ${item.price}{" "}
                {item.oldPrice && <span className="old-price">${item.oldPrice}</span>}
              </p>
              <button className="add-to-cart">
                <FaShoppingCart /> Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Just For You Section */}
      <div className="recommendation-section">
        <h3>Just For You</h3>
        <div className="product-grid">
          <div className="product-card">
            <span className="discount-badge">-35%</span>
            <img src="https://5.imimg.com/data5/JS/ZE/CB/SELLER-11320003/fx505dt-al202t-asus-tuf-gaming-fhd-laptop-500x500.jpg" />
            <FaEye className="view-icon" />
            <p>ASUS FHD Gaming Laptop</p>
            <p className="price">$960 <span className="old-price">$1160</span></p>
            <button className="add-to-cart"><FaShoppingCart /> Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://5.imimg.com/data5/SELLER/Default/2022/4/IK/KX/SD/150853185/lg-gaming-monitor-24mp59g-black--500x500.jpg
" />
            <FaEye className="view-icon" />
            <p>IPS LCD Gaming Monitor</p>
            <p className="price">$1160</p>
            <button className="add-to-cart"><FaShoppingCart /> Add To Cart</button>
          </div>
          <div className="product-card">
            <span className="new-badge">NEW</span>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwyDR9PFSBca9x7hFFnPTcu9DE_9GTa88NnA&s
" />
            <FaEye className="view-icon" />
            <p>HAVIT HV-G92 Gamepad</p>
            <p className="price">$560</p>
            <button className="add-to-cart"><FaShoppingCart /> Add To Cart</button>
          </div>
          <div className="product-card">
            <img src="https://www.satkhiranet.com/wp-content/uploads/2022/09/ak-900-01-500x500-1.jpg
" />
            <FaEye className="view-icon" />
            <p>AK-900 Wired Keyboard</p>
            <p className="price">$200</p>
            <button className="add-to-cart"><FaShoppingCart /> Add To Cart</button>
          </div>
        </div>
        <button className="see-all-btn">See All</button>
      </div>
    </div>
  );
};

export default Wishlist;
