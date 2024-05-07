import React from 'react';
import style from './Number.module.css'
const Number = ({ value, handleButtonClick }) => {
    return (
        <button onClick={() => handleButtonClick(value)}>
            {value}
        </button>
    );
};

export default Number;
