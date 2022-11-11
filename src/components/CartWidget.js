import React from 'react'
import carrito from '../assets/img/cart.svg';
import {useState} from 'react';


const CartWidget = () => {
   
    return (  
        <div className='carrito'>
        <img className='cart' src={carrito} alt="Carrito"/> 
        </div>
        )
}


export default CartWidget;