import React from 'react'
import Counter from './Counter'
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {UseCartContex} from './CartContext';


const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);  
    const {addProduct} = UseCartContex();
  
 
  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(data, cantidad)
  }

  return (
    <div className='center2 '>
      <img className="imagenes2" src={data.img} alt='xx'></img>
      <p>${data.precio}</p>
      <p>{data.detalle}</p>
      <button className='seguir'><Link to='/'>Seguir Comprando</Link></button>
   {
      goToCart
          ? <Link to='/cart' className='finish'><h2>Finalizar compra</h2> </Link>
      :<Counter stock={data.cantidad} onAdd={onAdd} initial={-0} />
      }
      
    </div>
  )
}


export default ItemDetail;