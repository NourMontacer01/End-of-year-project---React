import React from 'react';
import login from './LoginPage.module.css';
import Left from './Left';
import { doSignInWithEmailAndPassword } from '../../Config/Auth';
import { useAuth } from '../Contexts/authContext';
import { Navigate } from 'react-router-dom';

function LoginPage() {
    const { userLoggedIn } = useAuth(); // Ensure useAuth is imported correctly
  console.log(userLoggedIn)
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
 
  const handleSignIn = async (e) => {
    e.preventDefault();
    if(!isSigningIn){
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
     
    }
  };

  return (

    

    <div className={login.HomePage}>    <div className={login.HomePage}>
      {userLoggedIn && (<Navigate to="/Home" replace={true} />)}
      <div className={login.Onleft}>
        <Left />
      </div>
      <div className={login.Onright}>
        <form>
          <div className={login.inputcontainer}>
            <label htmlFor="Email">Username:</label>
            <input
              type="email"
              id="Email"
              placeholder="Enter your Email"
              value={email}
              onChange={handleEmailChange}
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
            <button className={login.Login} onClick={handleSignIn}>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
    </div>

  );
}

export default LoginPage;
