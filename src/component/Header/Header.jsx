import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import { MdSpaceDashboard } from "react-icons/md";
import OutsideClickHandler from 'react-outside-click-handler'
const Header = () => {
  const [menuOpened, setMenuOpened]=useState(false);
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth <= 790){
      return {top: !menuOpened && "-100%"}
    }
  }
  return (
      <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
          <a href='/'><img src="logo_donor.png" alt="logo" width={140} /></a>
          <OutsideClickHandler onOutsideClick={()=>{
            setMenuOpened(false)
          }}>
            <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
              <a href="/">Home</a>
              <a href="/findDonor">Find/Become Donor</a>
              <a href="/RegisterHospital">Register Hospital</a>
              <a href="/LogIn">Login</a>
              <a href="/Dashboard" className="dashboard-icon">
                <MdSpaceDashboard size={24} />
              </a>
            </div>
          </OutsideClickHandler>
          <div className="menu-icon" onClick={()=>setMenuOpened((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
          </div>
        </div>
        
      </section>
  )
}

export default Header
