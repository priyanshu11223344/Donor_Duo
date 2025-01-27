import React from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import './Goto.css' 
const Goto = () => {
    const gotobtn=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
  return (
    <div className='goto'>
      <div className='top_btn' onClick={gotobtn}>
        <FaArrowCircleUp alt='' className='logo' />
      </div>
    </div>
  )
}
export default Goto;