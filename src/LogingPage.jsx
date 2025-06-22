import React, { useState } from 'react';  // Add useState here
import { useNavigate } from 'react-router-dom';
import './Logingpage.css';
import backgroundLogo from './images/Carecloud.png';
import signinIcon from './images/signin.png';  // Importing image
import guideinfor from "./images/downlodge.png";
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send a Posst request to the backend API for login
      const response = await axios.post('http://localhost:8080/api/login', { 
        username, 
        password 
      });

      //Assuming backend returns a JWT token in the response
      localStorage.setItem('token', response.data.jwt); // Store the token in locanStorage
      console.log('Logged in successfully, Token: ', response.data.jwt);
      navigate('/Signin');

    } catch (err) {
      setError('Invalid username or password');
      console.error(err);
    }
  };

  return (
    <div className="login-container">
      <div className="overlay">
        <div className="logo">
          <img src={backgroundLogo} alt="Company Logo" />
        </div>
        <div className="logo-container">
          <h1>CARE CLOUD <br/>HEALTH RECODE SYSTEM</h1>
        </div>
        <div className="login-box">
          <form className="login-form" onSubmit={handleLogin}>  {/* Changed to form to handle submit properly */}
            <label htmlFor="username"></label>
            <input 
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="User Name" // Placeholder text
          
            />

            <label htmlFor="password"></label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password" // Placeholder text
              
              
            />

            {error && <p className='error-message'>{error}</p>}
            <div className="button-container">
            <button className="sign-in-button" type="submit"> {/* Submit type for form */}
              <img src={signinIcon} alt="Sign In Icon" className="button-icon" />
              Sign In
            </button>

            <button className="user-guide-button" type="button">
              <img src={guideinfor} alt="Guide Information" className="button-icon" />
              User Guide
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
