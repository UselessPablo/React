import React from 'react'
import carrito from '../assets/img/cart.svg';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    return (  
        <div className='carrito'>
            <Link to={'/compras/'}> <img className='cart' src={carrito} alt="Carrito" /> </Link> 
        </div>
        )
}


export default CartWidget;