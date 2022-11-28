import React from 'react'
import Counter from './Counter'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { UseCartContex } from './CartContext';


const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct, isInCart } = UseCartContex();

  const getStock = () => {
    const item = isInCart(data.id)
    if (item)
      return data.cantidad - item.cantidad
    else
      return data.cantidad
  }

  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(data, cantidad)
  }

  return (
    <div className='center2 '>
      <img className="imagenes2" src={data.img} alt='xx'></img>
      <p>${data.precio}</p>
      <p>{data.detalle}</p>
      <button id='seguir'><Link to='/'>Seguir Comprando</Link></button>
      {
        goToCart
          ? <Link to='/cart' className='finish'><h2>Finalizar compra</h2> </Link>
          : <Counter stock={getStock()} onAdd={onAdd} initial={-0} />
      }
    </div>
  )
}


export default ItemDetail;