import React from 'react';
import { Link } from 'react-router-dom';
import { HiLockClosed, HiMail } from "react-icons/hi";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Login = () => {
  const [cred,setCred]=useState({email:"",password:""})
    const navigate=useNavigate();
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response= await fetch("http://localhost:5000/api/donor/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({email:cred.email,password:cred.password})
        });
        const data=await response.json();
        console.log(data)
        if(data.success){
            localStorage.setItem("token",data.authtoken);
            localStorage.setItem("email",cred.email)
            console.log(cred.email);
        navigate("/FindDonor")
        console.log(data.authtoken)
        alert("Logged in","success");
        }
        else{
            alert("Invalid credentials","danger");
        }
        

    }
    const onchange=(e)=>{
       setCred( {...cred,[e.target.name]:e.target.value})
    }

  return (
    <div className="Login">
        <div className='blur-effect'/>
      <div className="wrapper">
        <form onSubmit={handlesubmit}>
          <h1 className='primaryText'>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" id="email" name="email" onChange={onchange}/>
            <HiMail className='logos'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" id="password" onChange={onchange} name="password" />
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
            <Link to="/SignIn">Register</Link>

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
