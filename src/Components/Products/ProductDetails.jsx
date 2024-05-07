import React from 'react';
import Product from '../../assets/Product.jpg';
import styles from './Productdetails.module.css'; // Correct import statement

const ProductDetails = () => {
  return (
    <div className={styles.main}> 
      <div className={styles.lefte}> 
        
      </div>
      <div className={styles.righte}> 
        <div className={styles.cardee}>
          <img className={styles.imgee} src={Product} alt="Avatar" />
          <div className={styles.containerrr}>
            <h1>Product name</h1>
            <p>Id :</p>
            <p> purchace unit Price : $</p>
            <p>Sell unit Price : $</p>
            <p>Supplier</p>
            <p>Quantity</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
