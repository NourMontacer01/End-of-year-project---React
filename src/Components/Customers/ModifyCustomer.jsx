import React, { useState } from 'react';
import style from './ModifyCustomer.module.css';
import Swal from 'sweetalert2';

const ModifyCustomer = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [cin, setCin] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [credits, setCredits] = useState('');

    const handleClick = () =>{
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
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };

    const handleCinChange = (event) => {
        setCin(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleCreditsChange = (event) => {
        setCredits(event.target.value);
    };

    return (
        <div className={style.mainn}>
            <div className={style.lefte}></div>

            <div className={style.righte}>
                <div className={style.addcontainer}>
                    <h1>Edit Customer </h1>
                    <div className={style.champs}>
                        <div className={style["input-container"]}>
                            <label htmlFor="firstName">First Name:</label>
                            <input
                                type="text"
                                id="firstName"
                                placeholder="Enter first name"
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />
                        </div>
                        <div className={style["input-container"]}>
                            <label htmlFor="lastName">Last Name:</label>
                            <input
                                type="text"
                                id="lastName"
                                placeholder="Enter last name"
                                value={lastName}
                                onChange={handleLastNameChange}
                            />
                        </div>
                        <div className={style["input-container"]}>
                            <label htmlFor="cin">CIN (National ID):</label>
                            <input
                                type="text"
                                id="cin"
                                placeholder="Enter CIN"
                                value={cin}
                                onChange={handleCinChange}
                            />
                        </div>
                        <div className={style["input-container"]}>
                            <label htmlFor="phoneNumber">Phone Number:</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                placeholder="Enter phone number"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                            />
                        </div>
                        <div className={style["input-container"]}>
                            <label htmlFor="address">Address:</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="Enter address"
                                value={address}
                                onChange={handleAddressChange}
                            />
                        </div>
                        <div className={style["input-container"]}>
                            <label htmlFor="credits">Credits:</label>
                            <input
                                type="text"
                                id="credits"
                                placeholder="Enter credits"
                                value={credits}
                                onChange={handleCreditsChange}
                            />
                        </div>
                    </div>
                    <div className={style.buttonss}>
                        <button className={style.Edit} onClick={handleClick}>Edit</button>
                        <button className={style.Delete}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModifyCustomer;
