import React from 'react';
import { HiLockClosed, HiMail } from "react-icons/hi";
import { FaGoogle, FaFacebookF,FaUserAlt  } from "react-icons/fa";
import './SignIn.css';

const Login = () => {
  const [cred, setCred] = useState({ name: "", email: "", password: "" })
    // const navigate=useNavigate();
    const handlesubmit = async(e) => {
        e.preventDefault();
        const {name,email,password}=cred;
        const response= await fetch("http://localhost:5000/api/donor/newuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({name,email,password})
        });
        const json= await response.json();
        console.log(json);
        if(json.success){
        localStorage.setItem("token",json.authtoken)
        localStorage.setItem("userId",json.userId)
          //  navigate("/OTP");
            console.log(json.authtoken);
            alert("Verify via otp","success")
        }
        else{
            alert("Invalid credentials","danger");
        }
        
        
    }
    const onChange = (e) => {
        setCred({...cred,[e.target.name]:e.target.value})
    }

  return (
    <div className="Login">
        <div className='blur-effect'/>
      <div className="wrapper">
        <form onSubmit={handlesubmit} >
          <h1 className='primaryText'>Sign In</h1>
          <div className="input-box">
          <input type="text" placeholder="Username" id="name" name='name' minLength={3} required onChange={onChange} value={cred.name}/>
            <FaUserAlt  className='logos'/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter Mail" id="email" name="email" required onChange={onChange} value={cred.email}/>
            <HiMail className='logos'/>
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" id="password" name="password" required onChange={onChange} value={cred.password}/>
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
