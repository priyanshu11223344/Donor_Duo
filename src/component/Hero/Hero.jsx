import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import { easeIn, motion } from 'framer-motion'
const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"></div>
                    <motion.h1 
                    initial={{y:"2rem",opacity:1}} animate={{y:0,opacity:1}} transition={{duration:2,type:easeIn}}>
                        Discover <br/> Most Suitable <br/> Donors</motion.h1>
                </div>
                <div className="flexColStart hero-desc">
                    <span className='secondaryText'>Find a variety of blood donors that match your needs effortlessly</span>
                    <span className='secondaryText'>Forget all difficulties in locating the right donor for you.</span>
                </div>
                <div className="flexCenter search-bar">
                    <HiLocationMarker color="var(--blue)" size={25}/>
                    <input type="text" placeholder='Search For Donor' />
                    <button className='button'>Search</button>
                </div>
                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={7500} end={8000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Registered Donor</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1500} end={1700} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Patients Served</span>
                    </div>
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={17}/>
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>States Presence</span>
                    </div>
                </div>
            </div>
            <div className="flexCenter hero-right">
                <motion.div initial={{x:"7rem",opacity:0}} animate={{x:0,opacity:1}} transition={{duration:2,type:easeIn}} className="image-container">
                    <img src="blood_donating.png" alt="hero-image" />
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Hero
