import React from 'react';
import {FaUserAlt  } from "react-icons/fa";
import './Verify.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Verify = () => {
  const [otp, setOtp] = useState('');
    const userId = localStorage.getItem('userId');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = { userId, otp };
        console.log('Sending request:', requestBody); 
        const response = await fetch("http://localhost:5000/api/donor/verifyotp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
            navigate("/FindDonor");
            localStorage.removeItem('userId');
            alert("OTP verified successfully");
        } else {
            alert("Invalid OTP");
        }
    };
  const onChange = (e) => {
    setOtp(e.target.value);
};

  return (
    <div className="Login">
        <div className='blur-effect'/>
      <div className="wrapper">
        <form onSubmit={handleSubmit} >
          <h1 className='primaryText'>OTP Verification</h1>
          <div className="input-box">
            <input type="text" placeholder="Enter OTP" id="otp" name='otp' onChange={onChange} minLength={4} required />
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

export default Verify;