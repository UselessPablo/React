import React from 'react'
import carrito from '../assets/img/cart.svg';
import { UseCartContex } from './CartContext';

const CartWidget = ({Valor}) => {
    const {totalProducts} = UseCartContex();
    return (  
        <div className='carrito'>
           <img className='cart' src={carrito}  alt="Carrito" /> 
            <span className='popup'>{totalProducts() || ''}</span> 
         
        </div>
    
        )

    }


export default CartWidget;