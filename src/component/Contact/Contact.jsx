import React from 'react'
import './Contack.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>
                    Our Contacts
                </span>
                <span className="primaryText">Reach Us Easily:</span>
                <span className="secondaryText">
                We are always ready to assist you by connecting you with the best blood donors quickly and efficiently. We believe that timely support and accessible services can make a lifesaving difference.
                </span>
                <div className="flexColstart contactModes">
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icons">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primarytext'>Call</span>
                                    <span className='secondaryText'>011 122 2333</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Call Now</div>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icons">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primarytext'>Chat</span>
                                    <span className='secondaryText'>011 122 2333</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Chat Now</div>
                        </div>
                    </div>
                    <div className="flexStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icons">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primarytext'>Video Call</span>
                                    <span className='secondaryText'>011 122 2333</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Video Now</div>
                        </div>
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icons">
                                    <HiChatBubbleBottomCenter size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className='primarytext'>Message</span>
                                    <span className='secondaryText'>011 122 2333</span>
                                </div>
                            </div>
                            <div className='flexCenter button'>Message Now</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flexCenter c-right">
                <div className="image-container">
                    <img src="about_bg2.png" alt="image" className='c-image'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
