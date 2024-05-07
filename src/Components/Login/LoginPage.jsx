import React, { useState } from 'react';

import login from './LoginPage.module.css';
import Left from './Left';

function LoginPage(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Compare the entered password with the password provided via props
      if (password === props.password) {
        // Passwords match, proceed with login actions
        console.log('Logged in');
      } else {
        // Passwords don't match, throw an error
        throw new Error('Incorrect password');
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className={login.HomePage}>
      <div className={login.Onleft}>
        <Left />
      </div>
      <div className={login.Onright}>
        <form onSubmit={handleSubmit}>
          <div className={login.inputcontainer}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className={login.inputcontainer}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className={login.Submitbtn}>
            <button className={login.Login}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
