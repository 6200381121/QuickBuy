import React from 'react';
import './ManFashion.css';

const products = [
  {
    name: "Cream plain oversized t-shirt",
    price: 10,
    image: "https://maxsmile.in/cdn/shop/files/6688967458.jpg?v=1733990382",
    rating: 5
  },
  {
    name: "Oversized Organic",
    price: 50,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZXC2ZHQs7ri94xtGkJ_infMq9m4dTved7A&s",
    rating: 2
  },
  {
    name: "Valvet Heel Jutti",
    price: 155,
    image: "https://merchshop.in/wp-content/uploads/2019/07/mockup-of-a-ghosted-long-sleeve-tee-with-a-customizable-background-41797-r-el2.png",
    rating: 4
  },
  {
    name: "Sneakers",
    price: 330,
    image: "https://onedegree.com.pk/cdn/shop/files/39_6fb6be73-ff30-4df7-868e-00bb9b0d7771.jpg?v=1706092698&width=1206",
    rating: 4
  },
  {
    name: "Plain Royal blue black",
    price: 230,
    image: "https://www.jiomart.com/images/product/original/rvtzzsjzuc/flynce-casual-fashion-chunky-shoes-sneaker-for-women-and-girls-sneakers-shoes-for-women-and-girls-7013-white-uk-ind-6-euro-39-product-images-rvtzzsjzuc-0-202301181702.jpg?im=Resize=(500,630)",
    rating: 2
  },
  {
    name: "Olive green",
    price: 200,
    image: "https://5.imimg.com/data5/NG/HQ/MY-40996358/_a4a8784-500x500.jpg",
    rating: 3
  },
  {
    name: "Water Botel",
    price: 210,
    image: "https://m.media-amazon.com/images/I/51wbpjDl-3L.jpg",
    rating: 4
  },
  {
    name: "Beautiful Pink Teddy bear",
    price: 110,
    image: "https://images.meesho.com/images/products/79299816/pkmsi_512.jpg",
    rating: 3
  }
];

const renderStars = (count) => {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
};

const ManFashion = () => {
  return (
    <div className="manfashion-container">
      <h2 className="section-title">Man`s Fashion</h2>
      <div className="products-row">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.image} alt={product.name} />
            <button className="add-to-cart">🛒 Add To Cart</button>
            <h4>{product.name}</h4>
            <p className="price">$ {product.price}</p>
            <div className="stars">{renderStars(product.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManFashion;
