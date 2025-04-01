import React from 'react';
import './WomanFashion.css';

const products = [
  {
    name: 'Stylish Kurti Set',
    price: 120,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS6JbzuCqFbchwmNsJY4_ix5zP450hbLwLcRBPPRJSmNKG1F4T_IABz4XlIvh82sbmd4NH14tuczxHodI4br9wVhhpXBQhJ_YaWPJsLentNOB6pWKSHQ5PCGg',
    rating: 4,
  },
  {
    name: 'Trendy Handbag',
    price: 80,
    image: 'https://www.bigbasket.com/media/uploads/p/l/40322717_1-dimpy-stuff-teddy-bear-with-heart-red-love-quote.jpg',
    rating: 5,
  },
  {
    name: 'Floral Dress',
    price: 140,
    image: 'https://assets.ajio.com/medias/sys_master/root/20211009/QJcJ/6161bee5aeb2692b85c1e1ea/-473Wx593H-410259845-multi-MODEL.jpg',
    rating: 4,
  },
  {
    name: 'High Heels',
    price: 90,
    image: 'https://m.media-amazon.com/images/I/61n1EOEsEUL._AC_UY1000_.jpg',
    rating: 3,
  },
  {
    name: 'Elegant Saree',
    price: 200,
    image: 'https://4.imimg.com/data4/RH/RD/MY-11090348/gorgeous-fancy-saree-500x500.png',
    rating: 5,
  },
  {
    name: 'Women’s Watch',
    price: 150,
    image: 'https://5.imimg.com/data5/WT/PT/BI/SELLER-27258046/27-500x500.jpg',
    rating: 4,
  },
  {
    name: 'Black Casual',
    price: 70,
    image: 'https://imagescdn.thecollective.in/img/app/product/9/952951-12310174.jpg?w=500&auto=format',
    rating: 4,
  },
  {
    name: 'Fashion Earrings',
    price: 40,
    image: 'https://image.made-in-china.com/2f0j00fTNvsAgdMuoj/Fashion-Boho-Custom-Personalised-Letters-Name-Alphabet-Big-Hoop-Earrings-Stainless-Steel-Jewelry-for-Women-Girls.webp',
    rating: 3,
  },
];

const renderStars = (count) => {
  return '★'.repeat(count) + '☆'.repeat(5 - count);
};

const WomanFashion = () => {
  return (
    <div className="womanfashion-container">
  

      <h2 className="section-title">Woman’s Fashion</h2>

      <div className="products-row">
        {products.map((product, idx) => (
          <div className="product-card" key={idx}>
            <img src={product.image} alt={product.name} />
            <button className="add-to-cart">🛒 Add to Cart</button>
            <h4>{product.name}</h4>
            <div className="price">${product.price}</div>
            <div className="stars">{renderStars(product.rating)}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomanFashion;
