import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <div className="flexColStart f-left">
          <img src="logo_donor.png" alt="DonorDuo Logo" width={140} />
          <span className="secondaryText">
            Our mission is to connect those in need with lifesaving blood donors, <br /> 
            making every life healthier and safer.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Contact Us</span>
          <span className="secondaryText">House 16, Indira Nagar, India</span>
          <div className="flexCenter f-menu">
            <span className="secondaryText">Donors</span>
            <span className="secondaryText">Services</span>
            <span className="secondaryText">FAQs</span>
            <span className="secondaryText">About Us</span>
          </div>
        </div>
      </div>
      <div className="sb_footer_below innerWidth flexCenter f-container">
        <div className="sb_footer_copyrights">
          <p className="secondaryText f-bottom">
            &copy; {new Date().getFullYear()} DonorDuo. All rights reserved.
          </p>
        </div>
        <div className="f-bottom flexCenter">
          <span className="secondaryText">Terms & Conditions</span>
          <span className="secondaryText">Privacy Policy</span>
          <span className="secondaryText">Security</span>
          <span className="secondaryText">Cookies Policy</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
