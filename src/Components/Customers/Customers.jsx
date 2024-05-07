import React from 'react';
import { AiOutlineDollar } from "react-icons/ai";
import { AiFillTool } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import style from './Customers.module.css';

const Customers = () => {
    const handleClick = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33" ,
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
    };

    return (
        <div className={style.mainn}>
            <div className={style.lefte}></div>

            <div className={style.righte}>
            <div className={style.searchbar}>
          <div className={style['search-icon']}></div> {/* Using array notation for dynamic class names */}
          <input type="search" placeholder='Search by name' />
          <button><FontAwesomeIcon icon={faSearch} /></button>
        </div>
                
                <div className={style['table-container']}>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Tel Number</th>
                                <th>CIN</th>
                                <th>Credits</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0001</td>
                                <td>Ahmed bechahed </td>
                                <td>Sousse,Bebjdid</td>
                                <td>28 703 886</td>
                                <td>04957103</td>
                                <td>857.000 TND </td>
                                <td className={style.Buttonscontainer}>
                                    <button className={style.edit} ><AiFillTool/></button>
                                    <button className={style.delete} onClick={handleClick}><AiOutlineDelete /></button>
                                    <button className={style.clearsolde}><AiOutlineDollar /> </button>
                                </td>
                            </tr>

                            {/* Add more rows as needed */}
                            <tr>
                                <td>0002</td>
                                <td>Mahmoud mabrouk</td>
                                <td>Hammem Sousse</td>
                                <td>58746921</td>
                                <td>57841236</td>
                                <td>0.000 TND </td>
                                <td className={style.Buttonscontainer}>
                                    <button className={style.edit} ><AiFillTool/></button>
                                    <button className={style.delete}><AiOutlineDelete /></button>
                                    <button className={style.clearsolde}><AiOutlineDollar /> </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className={style.Addcustomer} >Add Customer</button>
            </div>
        </div>
    );
}

export default Customers;
