import React from 'react'
import carrito from '../assets/img/cart.svg';
import {useState} from 'react';


const CartWidget = () => {
    let [Valor, setValor] = useState(0);
    Valor=0;
    return (  
        <div className='carrito'>
        <img className='cart' src={carrito} alt="Carrito"/> 
            <span>{Valor}</span>
        </div>
        )
}


export default CartWidget;