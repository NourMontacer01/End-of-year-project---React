import React from 'react';
import styles from '../Products/Products.module.css'; // Correct import statement
import SingleProduct from './SingleProduct';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Products = () => {
  return (
    <div className={styles.containerrr}>
      <div className={styles.rightpart}>
        <div className={styles.searchbar}>
          <div className={styles['search-icon']}></div> {/* Using array notation for dynamic class names */}
          <input type="search" placeholder='Search by name' />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </div>
        <div className={styles.cardscontainerr}>
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
          <SingleProduct />
        </div>
      </div>
      <div className={styles.Buttons}>
        <button className={styles.Submit}>Add New Product</button> {/* Updated button text and class name */}
      </div>
    </div>
  );
}

export default Products;
