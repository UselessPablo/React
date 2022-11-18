import React from 'react'
import { Link } from 'react-router-dom';
import { UseCartContex } from './CartContext'
import ItemCart from './ItemCart';


const Cart = () => {
  const {cart, totalPrice} = UseCartContex();


    if (cart.length <= 0){
        return(
            <>
                <div className='center2'>
                <p>Vacio</p>
                <Link to='/'>Seguir comprando</Link>
            </div>
</>
        );
    }
  
  return (
    <>
        {
            cart.map(product => <ItemCart key={product.id} product={product}/>)
        }
    <h2 className='center2'> Total: $ {totalPrice()}</h2>
       <Link className='center2' to='/Compra'>Confirmar Compra</Link> 
    </>
  )
}

export default Cart