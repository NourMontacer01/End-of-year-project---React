import React from 'react';
import styles from './SingleProduct.module.css'; // Correct import statement
import Product from '../../assets/Product.jpg';
import Swal from 'sweetalert2';

const SingleProduct = () => {
  const handleClick = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your Customer has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <div className={styles.carde}>
      <img className={styles.imgeee} src={Product} alt="Avatar" />
      <div className={styles.containerr}>
        <p>Product name</p>
        <button className={styles.Details}>Details</button>
        <div className={styles.editingbuttons}>
          <button className={styles.Delete} onClick={handleClick}>Delete</button>
          <button className={styles.Edit}>Edit</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
