import React from 'react';
import { HiLockClosed, HiMail } from "react-icons/hi";
import { FaGoogle, FaFacebookF,FaUserAlt  } from "react-icons/fa";
import './SignIn.css';

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
          <h1 className='primaryText'>Sign In</h1>
          <div className="input-box">
          <input type="text" placeholder="Username" id="name" name='name' minLength={3} required />
            <FaUserAlt  className='logos'/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter Mail/Number" id="email" name="email" required/>
            <HiMail className='logos'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" id="password" name="password" required/>
            <HiLockClosed className='logos'/>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/Verify" className='verify'>Verify OTP</a>
          </div>
          <button type="submit" className="button btn" id="redirectButton">SIGNIN</button>
          <div className="flexColCenter register-link">
            <p>Already have an account ?</p> 
            <a href="/LogIn">LogIn</a>
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
