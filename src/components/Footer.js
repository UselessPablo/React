import React from 'react'
import Whatsapp from '../assets/img/logos/whatsapp.png'
import Instagram from '../assets/img/logos/instagram.png'
import Facebook from '../assets/img/logos/facebook.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <NavLink to='https://www.whatsapp.com/?lang=es'><img className='cart' src={Whatsapp} alt="whatsapp" /> </NavLink>  
          <img className='cart' src={Instagram} alt="Carrito" />
          <img className='cart' src={Facebook} alt="Carrito" />
          <NavLink>Quienes Somos</NavLink>
    <p>Copyright Pablo A.</p>
    </div>
  )
}

export default Footer