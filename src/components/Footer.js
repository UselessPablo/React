import React from 'react'
import Whatsapp from '../assets/img/logos/whatsapp.png'
import Instagram from '../assets/img/logos/instagram.png'
import Facebook from '../assets/img/logos/facebook.png'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Link target='_blank' to="https://www.whatsapp.com/?lang=es">
        <img className='cart' src={Whatsapp} alt="whatsapp link" />
      </Link>
      <Link target='_blank' to="https://www.https://www.instagram.com/.com/?lang=es">
        <img className='cart' src={Instagram} alt="Instagram link" />
      </Link>
      <Link target='_blank' to="https://www.https://es-la.facebook.com/.com/?lang=es">  
          <img className='cart' src={Facebook} alt="facebook link" />
         </Link> 
          <NavLink to='/pages/QuienesSomos'>Info</NavLink>
    <p>Copyright Pablo A.</p>
    </div>
  )
}

export default Footer