import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom';
import { UseCartContex } from './CartContext'
import ItemCart from './ItemCart';


const Cart = () => {
  const {cart, totalPrice} = UseCartContex();

const order ={
buyer: {
  name: 'Pablo',
email: 'pablo@gmail.com',
phone: '2944232112',
addres: 'madreselvas 8812'
},
items: cart.map(producto => ({ id: producto.id, nombre:producto.nombre, precio:producto.precio, cantidad: producto.cantidad})),
total: totalPrice(),
}

const handleClick = ()=>{
  const db = getFirestore();
  const ordersCollection = collection(db, 'orders');
  addDoc(ordersCollection, order)
  .then(({id})=> console.log(id));
}

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
      
      <h3> Ingrese sus datos para el envio</h3>
      <div className='formulario'>
      <form>
        <label>Nombre</label>
        <input placeholder='Nombre'/>
        <label>Email</label>
        <input placeholder='Email' />
        <label>Dirección</label>
        <input placeholder='Dirección' />
        <label>Teléfono</label>
        <input placeholder='Teléfono' />
      </form>
       
       <button className='compra' onClick={handleClick}>Confirmar Compra</button> 
        <p className='center2'> Total: $ {totalPrice()}</p>
      </div>
    </>
  )
}

export default Cart