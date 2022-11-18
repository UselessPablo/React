import React from 'react'
import Whatsapp from '../assets/img/logos/whatsapp.png'
import Instagram from '../assets/img/logos/instagram.png'
import Facebook from '../assets/img/logos/facebook.png'

const Footer = () => {
  return (
    <div className='footer'>
      <img className='cart' src={Whatsapp} alt="Carrito" />
          <img className='cart' src={Instagram} alt="Carrito" />
          <img className='cart' src={Facebook} alt="Carrito" />
    <p>Copyright Pablo A.</p>
    </div>
  )
}

export default Footer