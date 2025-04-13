import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
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
              <a href="/findDonor">Find Donor</a>
              <a href="/becomeDonor">Become Donor</a>
              <a href="/LogIn">Login</a>
              <button className="button"><a href="/Contact">Contact</a></button>
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
