import React from "react";
import Whatsapp from "../assets/img/logos/whatsapp.png";
import Instagram from "../assets/img/logos/instagram.png";
import Facebook from "../assets/img/logos/facebook.png";



const Footer = () => {
  return (
    <div className="footer sticky2">
      <a className='footImg' href='https://www.whatsapp.com/' target="_blank" rel="noreferrer" ><img className='footImg' src={Whatsapp} alt='whatsapp logo' /></a>
      <a className='footImg' href='https://www.instagram.com/' target="_blank" rel="noreferrer" ><img className='footImg' src={Instagram} alt='Instagram logo' /></a>
      <a className='footImg' href='https://www.facebook.com/' target="_blank" rel="noreferrer" ><img className='footImg' src={Facebook} alt='Facebook logo' /></a>
      <p>Copyright Pablo A.</p>
    </div>
  );
};

export default Footer;
