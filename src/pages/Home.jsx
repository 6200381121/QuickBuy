import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

// Dummy product and category data
const products = [
  {
    name: "HAVIT i-W92 Smartwatch",
    price: "$80",
    oldPrice: "$100",
    discount: "-45%",
    rating: 4,
    reviews: 230,
    image: "https://m.media-amazon.com/images/I/61y2VVWcGBL._AC_SL1500_.jpg"
  },
  {
    name: "ASUS X515",
    price: "$40",
    oldPrice: "$60",
    discount: "-35%",
    rating: 4.5,
    reviews: 115,
    image: "https://m.media-amazon.com/images/I/71k45hZkLmL._AC_SL1500_.jpg"
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: "$400",
    oldPrice: "$600",
    discount: "-30%",
    rating: 4,
    reviews: 100,
    image: "https://m.media-amazon.com/images/I/81QpkIctqPL._AC_SL1500_.jpg"
  },
  {
    name: "S-Series Comfort Chair",
    price: "$200",
    oldPrice: "$300",
    discount: "-25%",
    rating: 4.2,
    reviews: 250,
    image: "https://www.stancash.com.au/media/catalog/product/S/T/STCCOMPACT-860862_A_1718249679.JPG"
  },
  {
    name: "VIVO T3 5G",
    price: "$500",
    oldPrice: "$600",
    discount: "-20%",
    rating: 4.3,
    reviews: 20,
    image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w:450/MCPAZqPwDK-vivo-v40-494422252-i-1-1200wx1200h.jpeg"
  },
  {
    name: "Motorola edge 5G",
    price: "$500",
    oldPrice: "$600",
    discount: "-20%",
    rating: 4.3,
    reviews: 20,
    image: "https://5.imimg.com/data5/SELLER/Default/2024/1/375315487/UQ/FL/IB/61795937/1-500x500.png"
  },
];

// Correct route paths to match App.jsx
const categories = [
  { name: "Women Fashion", route: "/woman-fashion" },
  { name: "Men Fashion", route: "/man-fashion" },
  { name: "Electronics", route: "/electronics" }
];

const Home = () => {
  return (
    <>
      <div className="main-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <h3>Category</h3>
          <ul>
            {categories.map((cat, idx) => (
              <li key={idx}>
                <Link to={cat.route}>{cat.name}</Link>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Banner Section */}
          <section className="banner">
            <img
              src="https://t4.ftcdn.net/jpg/07/51/66/05/360_F_751660549_sbBTsejzwpjXlmuoCk66VTQZGO3hztjy.jpg"
              alt="Banner"
            />
            <div className="banner-text">
              <h2>Up to 10% off Voucher</h2>
              <button>Shop Now</button>
            </div>
          </section>

          {/* Flash Sales */}
          <section className="flash-sales">
            <h3>🔥 Flash Sales</h3>
            <div className="products-row">
              {products.map((p, i) => (
                <div className="product-card" key={i}>
                  <span className="discount">{p.discount}</span>
                  <img src={p.image} alt={p.name} />
                  <h4>{p.name}</h4>
                  <div className="price">
                    <span className="new">{p.price}</span>
                    <span className="old">{p.oldPrice}</span>
                  </div>
                  <div className="rating">
                    {'★'.repeat(Math.floor(p.rating))}
                    {'☆'.repeat(5 - Math.floor(p.rating))}
                    <span>({p.reviews})</span>
                  </div>
                  <button className="cart-btn">Add To Cart</button>
                </div>
              ))}
            </div>
          </section>

       {/* Hero Section */}
<section className="hero">
  <div className="hero-content">
    <div className="hero-text">
      <h2>Enhance Your Music Experience</h2>
      <div className="badges">
        <span>23</span>
        <span>5.9</span>
        <span>59</span>
      </div>
      <button className="buy-btn">Buy Now!</button>
    </div>
    <img
      src="https://images.unsplash.com/photo-1558537348-c0f8e733989d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amJsfGVufDB8fDB8fHww"
      alt="speakears"
      className="hero-image"
    />
  </div>
</section>


          {/* Features Section */}
          <section className="features">
            <div className="feature-item">
              <div className="icon">🚚</div>
              <h4>FREE AND FAST DELIVERY</h4>
              <p>Free delivery for orders over $140</p>
            </div>
            <div className="feature-item">
              <div className="icon">🎧</div>
              <h4>24/7 CUSTOMER SERVICE</h4>
              <p>Friendly 24/7 customer support</p>
            </div>
            <div className="feature-item">
              <div className="icon">💸</div>
              <h4>MONEY BACK GUARANTEE</h4>
              <p>We return money within 30 days</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
