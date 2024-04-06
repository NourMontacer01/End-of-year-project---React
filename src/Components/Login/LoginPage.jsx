import React from 'react'
import AppLogo from '../../assets/fruit-shop.svg'
import './LoginPage.css'
import Left from './Left';

function LoginPage() {
    return(
    <div className='HomePage'>

        
          <div className='Onleft'>
            <Left/>
          </div>
         

        <div className='Onright'>
          <form>
              <div className="input-container">
              <label htmlFor="username">Username :</label>
              <input type="text" id="username" placeholder="Enter your username" />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password :</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>
            <div className='Submitbtn'>
              <button className='Submit' type="submit">Login</button>
            </div>
          </form>
        </div>
     

    </div>
    )
    
}
export default LoginPage ;