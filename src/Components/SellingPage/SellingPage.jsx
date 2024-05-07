import React from 'react'
import style from './SellingPage.module.css'
import Number from './Number'
import Product from './Product'
import { GiMoneyStack  } from "react-icons/gi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { AiOutlineUndo } from "react-icons/ai";



const SellingPage = () => {

  const handleClick = (productName) => {
    console.log(`Product ${productName} clicked!`);
    // Handle click event logic here
  };

  const handleButtonClick = (value) => {
    // Handle the button click logic here
    console.log(`Button ${value} clicked`);
};
  return (
    <div>
        <div className={style.main} >

        <div className={style.Left}>
              
                  <div className={style.numbers}>
                    <div className={style.numberpad}>
                {/* Render Number components for each number */}
                <Number value={1} handleButtonClick={handleButtonClick} />
                <Number value={2} handleButtonClick={handleButtonClick} />
                <Number value={3} handleButtonClick={handleButtonClick} />
                <Number value={4} handleButtonClick={handleButtonClick} />
                <Number value={5} handleButtonClick={handleButtonClick} />
                <Number value={6} handleButtonClick={handleButtonClick} />
                <Number value={7} handleButtonClick={handleButtonClick} />
                <Number value={8} handleButtonClick={handleButtonClick} />
                <Number value={9} handleButtonClick={handleButtonClick} />
                <Number value={0} handleButtonClick={handleButtonClick} />
                <Number value='.' handleButtonClick={handleButtonClick} />
                <Number value='00' handleButtonClick={handleButtonClick} />


            </div>

                  </div>
                  <div className={style.products}>
                    <Product name="Product 1" onClick={handleClick} />
                    <Product name="Product 2" onClick={handleClick} />
                    <Product name="Product 3" onClick={handleClick} />
                    <Product name="Product 3" onClick={handleClick} />
                    <Product name="Product 3" onClick={handleClick} />
                    <Product name="Product 3" onClick={handleClick} />
                    <Product name="Product 3" onClick={handleClick} />
                    <Product name="Product 3" onClick={handleClick} />

      {/* Add more Product components as needed */}
                  </div>
            </div>
            <div className={style.Right}  >
              <div className={style.numticket} >
                <div className={style.ticket} >
                  <p>ticket number</p>
                </div>
              </div>
                <div className={style.billsection}>
                  
                  <div className={style.bill}>
                  

                  </div>
                </div>
                
                <div className={style.total} >
                  <div className={style.totall}>
                  <p>Total=</p>
                  </div>
                </div>
                <div className={style.payment} >
                    <button className={style.iconundo}><AiOutlineUndo /></button>
                    <button className={style.icon}> <GiMoneyStack /></button>
                    <button className={style.icon}> <FaMoneyCheckAlt />  </button>
                    <button className={style.icon}> <MdOutlineSupervisorAccount /> </button>
                    
                </div>

            </div>
            
        </div>
      
    </div>
  )
}

export default SellingPage
