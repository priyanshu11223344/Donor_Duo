import React, { useState } from 'react'
import './Value.css'
import { Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel,AccordionItemState } from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import data from '../../utils/accordion'
const Value = () => {
  return (
    <div>
      <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
          <div className="v-left">
            <div className="image-container">
              <img src="about_bg1.png" alt="image" />
            </div>
          </div>
          <div className="flexColStart v-right">
            <span className='orangeText'>Our Value</span>
            <span className='primaryText'>Value we give to you:</span>
            <span className='secondaryText'>We are always ready to support you by connecting you with life-saving blood donors whenever you need them
            We believe that timely and reliable donor matches can make a difference and save lives.
            </span>
            <Accordion className='accordion accordian-border' allowMultipleExpanded={false} preExpanded={[0]} style={{border:'none'}}>
              {
                data.map((item,i)=>{
                  const [className,setClassName]=useState(null)
                  return(
                    <AccordionItem className= {`accordionItem ${className}`} key={i} uuid={i}>
                      <AccordionItemHeading>
                        <AccordionItemButton className='flexCenter accordionButton '>
                          <AccordionItemState>
                            {({expanded})=>expanded ? setClassName("expanded"): setClassName("collapsed")}
                          </AccordionItemState>
                          <div className="flexCenter icon">
                            {item.icon}
                          </div>
                          <span className="primaryText">
                            {item.heading}
                          </span>
                          <div className="flexCenter icon">
                            <MdOutlineArrowDropDown size={20} />
                          </div>
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
                        <p className="secondaryText">
                          {item.detail}
                        </p>
                      </AccordionItemPanel>
                    </AccordionItem>
                  )
                })
              }
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Value
