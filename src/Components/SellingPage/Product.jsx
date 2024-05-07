import React from 'react';
import style from './Product.module.css'; // Assuming you've saved the CSS code in a file named Product.css

const Product = ({ name, onClick }) => {
  const handleClick = () => {
    onClick(name);
  };

  return (
    <button className={style.productbutton} onClick={handleClick}> {name} </button>
  );
}

export default Product;
