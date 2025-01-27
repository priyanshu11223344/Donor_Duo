import React from 'react';
import {FaUserAlt  } from "react-icons/fa";
import './Verify.css';

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
          <h1 className='primaryText'>OTP Verification</h1>
          <div className="input-box">
            <input type="text" placeholder="Enter OTP" id="otp" name='otp' minLength={6} required />
            <FaUserAlt  className='logos'/>
          </div>
          
          <div className="remember-forget">
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>
          <button type="submit" className="button btn" id="redirectButton">VERIFY</button>
          <div className="flexColCenter register-link">
            <p>Already have an account ?</p> 
            <a href="/LogIn">LogIn</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;