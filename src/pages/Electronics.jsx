import React from 'react';
import './Electronics.css';

const products = [
  {
    name: 'Fastack 07',
    price: 150,
    image: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw5042414d/images/Fastrack/Catalog/3270SL04_2.jpg?sw=800&sh=800',
    rating: 4,
  },
  {
    name: 'Lenovo',
    price: 450,
    image: 'https://m.media-amazon.com/images/I/81gC7frRJyL._SX679_.jpg',
    rating: 3,
  },
  {
    name: 'Mouse Neck',
    price: 155,
    image: 'https://rukminim2.flixcart.com/image/850/1000/xif0q/mouse/s/v/m/mouse-laptop-mouse-computer-mouse-wired-usb-mouse-6-buttons-original-imagwzkwexbxafmy.jpeg?q=90&crop=false',
    rating: 3,
  },
  {
    name: 'HP X25LI',
    price: 872,
    image: 'https://images-cdn.ubuy.co.in/64c41e4771c5f52216163af1-hp-stream-14-laptop-intel-celeron.jpg',
    rating: 4,
  },
  {
    name: 'Fan Black',
    price: 30,
    image: 'https://technocart.com/cdn/shop/files/CGCrestar-00.png?v=1688632797',
    rating: 4,
  },
  {
    name: 'Fastack 035',
    price: 150,
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwf7cbdb2d/images/Fastrack/Catalog/38094PP01_1.jpg?sw=600&sh=600',
    rating: 4,
  },
  {
    name: 'Asus X515',
    price: 450,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLwL15Ce79tCMDvmina1Ek-Z6HLgUru-9NjQ&s',
    rating: 3,
  },
  {
    name: 'Charger Adapter - Mk121',
    price: 200,
    image: 'https://m.media-amazon.com/images/I/51DC-tOgIGL.jpg',
    rating: 5,
  },
  {
    name: 'HP Monitor M2',
    price: 410,
    image: 'https://computechstore.in/wp-content/uploads/2024/05/HP-M22F-22-Inch-99-SRGB-Gaming-Monitor-1.jpg',
    rating: 4,
  },
  {
    name: 'Headphone',
    price: 110,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQI2yaBrsOhg60x5FPzVUiINeZVKQdCQn58PkSVcFW-htMNxKHmDlWa2sHDc814ubs5q8zKmxyxZDaJv9EfY2zUeIZTfe2NLXxmpz3xKDLa3oUoybYwyZbD',
    rating: 3,
  },
];

const renderStars = (count) => {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
};

const Electronics = () => {
  return (
    <div className="electronics-page">

    
      <main className="product-section">
        <h2>Electronic Fashion</h2>
        <div className="product-grid">
          {products.map((product, idx) => (
            <div className="product-card" key={idx}>
              <img src={product.image} alt={product.name} />
              <button className="add-to-cart">🛒 Add to Cart</button>
              <h3>{product.name}</h3>
              <p><strong>$</strong> {product.price}</p>
              <div className="stars">{renderStars(product.rating)}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Electronics;
