import React from 'react';
import { Link } from 'react-router-dom';
import { HiLockClosed, HiMail } from "react-icons/hi";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import './Login.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="Login">
        <div className='blur-effect'/>
      <div className="wrapper">
        <form >
          <h1 className='primaryText'>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" id="email" name="email" />
            <HiMail className='logos'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" id="password" name="password" />
            <HiLockClosed className='logos'/>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="button btn" id="redirectButton">LOGIN</button>
          <div className="flexColCenter register-link">
            <p>Don't have an account ?</p> 
            <a href="/SignIn">Register</a>
          </div>
          <h3>OR</h3>
          <div className="media-option">
            <a href="https://google.com" target="_blank" rel="noopener noreferrer">
              <FaGoogle className='logos'/>
              <span>Login with Google</span>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className='logos'/>
              <span>Login with Facebook</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
