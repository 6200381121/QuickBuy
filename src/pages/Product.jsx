import React, { useState } from 'react';
import './Product.css'; // Make sure to import the CSS file

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [stockQuantity, setStockQuantity] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!productName || !description || !price || !stockQuantity) {
      setError('All fields are required');
      return;
    }
    
    if (isNaN(price) || isNaN(stockQuantity)) {
      setError('Price and Stock must be numbers');
      return;
    }

    // Clear errors and show success
    setError('');
    setSuccess('Product added successfully!');
    
    // Reset form
    setProductName('');
    setDescription('');
    setPrice('');
    setStockQuantity('');

    // Clear success message after 3 seconds
    setTimeout(() => setSuccess(''), 3000);
  };

  return (
    <div className="add-product-container">
      <h1 className="add-product-title">Add Product</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            className="form-input"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            placeholder="Enter product name"
          />
        </div>

        <div className="form-group">
          <label>Product Description</label>
          <textarea
            className="form-input textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter product description"
          />
        </div>

        <div className="form-group">
          <label>Price ($)</label>
          <input
            type="number"
            className="form-input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label>Stock Quantity</label>
          <input
            type="number"
            className="form-input"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
            placeholder="Enter stock quantity"
            min="0"
          />
        </div>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}

        <button
          type="submit"
          className="submit-button"
          disabled={!productName || !description || !price || !stockQuantity}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;