import React from 'react'
import styles from '../Products/SingleProduct.module.css'
import Product from '../../assets/Product.jpg';

const SingleCategory = (props) => {
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
      <img className={styles.imgeee} src={props.image} alt="Avatar" />
      <div className={styles.containerr}>
        <p>{props.name}</p>
        
        <div className={styles.editingbuttons} style={{display:'block' , textAlign:'center'}}>
        <button className={styles.Details}  style={{borderRadius:'20px',width:'120px',height:'40px'}}>Explore</button>
          
          
        </div>
      </div>
    </div>

  )
}

export default SingleCategory
