import React, { useState } from 'react';
import Sidebar from '../DashBoard/Sidebar';
import styles from './AddProduct.module.css'; // Correct import statement

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productId, setProductId] = useState('');
  const [sellPrice, setSellPrice] = useState('');
  const [category, setCategory] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductIdChange = (event) => {
    setProductId(event.target.value);
  };

  const handleSellPriceChange = (event) => {
    setSellPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePurchasePriceChange = (event) => {
    setPurchasePrice(event.target.value);
  };

  const handleSubmit = () => {
    // Add logic to handle form submission
  };

  const handleCancel = () => {
    // Add logic to handle cancellation
  };

  return (
    <div className={styles.mainn}>
      <div className={styles.lefte}>
       
      </div>

      <div className={styles.righte}>
        <div className={styles.addcontainer}>
          <h1>Add Product</h1>
          <div className={styles.champs}>
            <div className={styles["input-container"]}>
              <label htmlFor="productName">Product Name:</label>
              <input
                type="text"
                id="productName"
                placeholder="Enter product name"
                value={productName}
                onChange={handleProductNameChange}
              />
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="productId">Product ID:</label>
              <input
                type="text"
                id="productId"
                placeholder="Enter product ID"
                value={productId}
                onChange={handleProductIdChange}
              />
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="sellPrice">Sell Price:</label>
              <input
                type="text"
                id="sellPrice"
                placeholder="Enter sell price"
                value={sellPrice}
                onChange={handleSellPriceChange}
              />
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="category">Category:</label>
              <input
                type="text"
                id="category"
                placeholder="Enter category"
                value={category}
                onChange={handleCategoryChange}
              />
            </div>
            <div className={styles["input-container"]}>
              <label htmlFor="purchasePrice">Purchase Price:</label>
              <input
                type="text"
                id="purchasePrice"
                placeholder="Enter purchase price"
                value={purchasePrice}
                onChange={handlePurchasePriceChange}
              />
            </div>
          </div>
          <div className={styles.buttonss}>
            <button className={styles.Submit} onClick={handleSubmit}>Submit</button>
            <button className={styles.Delete} onClick={handleCancel}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
