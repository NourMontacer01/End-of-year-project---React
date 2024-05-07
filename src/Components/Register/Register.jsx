import React from 'react';
import AppLogo from '../../assets/fruit-shop.svg';
import Left from "../Login/Left";
import styles from './Register.module.css';

function Register() {
    return (
        <div className={styles.Register}> {/* Use the CSS module class for Register */}
            <div className={styles.Onleft}> {/* Use the CSS module class for Onleft */}
                <Left/>
            </div>
           
            <div className={styles.Onright}> {/* Use the CSS module class for Onright */}
            
                <form>
                    <div className="input-container">
                        <label htmlFor="username">Username :</label>
                        <input type="text" id="username" placeholder="Enter your username" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">Email :</label> {/* Change the id to email */}
                        <input type="text" id="email" placeholder="Enter your email" /> {/* Change the id to email */}
                    </div>
                    <div className="input-container">
                        <label htmlFor="dob">Date of Birth :</label> {/* Change the id to dob */}
                        <input type="text" id="dob" placeholder="dd/mm/yyyy" /> {/* Change the id to dob */}
                    </div>
                    <div className="input-container">
                        <label htmlFor="password">Password :</label>
                        <input type="password" id="password" placeholder="Enter your password" />
                    </div>
                    <div className="input-container">
                        <label htmlFor="confirmPassword">Confirm Password :</label> {/* Change the id to confirmPassword */}
                        <input type="password" id="confirmPassword" placeholder="Confirm your password" /> {/* Change the id to confirmPassword */}
                    </div>
                    <div className={styles.Submitbtn}> {/* Use the CSS module class for Submitbtn */}
                        <button className={styles.Submit} type="submit">Register</button> {/* Use the CSS module class for Submit */}
                        <button className={styles.Cancel} type="submit">Cancel</button> {/* Use the CSS module class for Submit */}

                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
