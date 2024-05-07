import React, { useState } from 'react';
import styles from './ModifyProduct.module.css';
import Swal from 'sweetalert2';
import Sidebar from '../DashBoard/Sidebar';

const ModifyProduct = () => {
    const [productName, setProductName] = useState('');
    const [productId, setProductId] = useState('');
    const [sellPrice, setSellPrice] = useState('');
    const [category, setCategory] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');

    const handleClick = () => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

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

    return (
        <div className={styles.mainn}> 
            <div className={styles.lefte}> 
               
            </div>
            <div className={styles.righte}> 
                <div className={styles.editcontainer}> 
                    <h1>Edit Product </h1><br></br>
                    <div className={styles.champs}> {/* Use the CSS module class for champs */}
                        <div className="input-container">
                            <label htmlFor="productName">Product Name:</label>
                            <input
                                type="text"
                                id="productName"
                                placeholder="Enter product name"
                                value={productName}
                                onChange={handleProductNameChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="productId">Product ID:</label>
                            <input
                                type="text"
                                id="productId"
                                placeholder="Enter product ID"
                                value={productId}
                                onChange={handleProductIdChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="sellPrice">Sell Price:</label>
                            <input
                                type="text"
                                id="sellPrice"
                                placeholder="Enter sell price"
                                value={sellPrice}
                                onChange={handleSellPriceChange}
                            />
                        </div>
                        <div className="input-container">
                            <label htmlFor="category">Category:</label>
                            <input
                                type="text"
                                id="category"
                                placeholder="Enter category"
                                value={category}
                                onChange={handleCategoryChange}
                            />
                        </div>
                        <div className="input-container">
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
                    <div className={styles.buttonss}> {/* Use the CSS module class for buttonss */}
                        <button className={styles.Edit} onClick={handleClick}> Edit </button>
                        <button className={styles.Delete}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModifyProduct;
