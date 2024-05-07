// Categories.js

import React from 'react';
import SingleCategory from './SingleCategory';
import style from './Categories.module.css';
import Hygiene from '../../assets/Categories/Hygiene.jpg'
const Categories = () => {
  return (
    <div className={style.containerr}>
    <div className={style.main}>
      <h1>Categories</h1>
      <SingleCategory className={style.singleCategory} name='category1' image={Hygiene} />
      <SingleCategory className={style.singleCategory} name='category2'/>
      <SingleCategory className={style.singleCategory} name='category3'/>
      <SingleCategory className={style.singleCategory} />
      <SingleCategory className={style.singleCategory} />
      <SingleCategory className={style.singleCategory} />
      <SingleCategory className={style.singleCategory} />

      <SingleCategory className={style.singleCategory} />

      <SingleCategory className={style.singleCategory} />

      {/* Add more SingleCategory components as needed */}
    </div>
    </div>
  );
};

export default Categories;
