import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { UseCartContex } from './CartContext'
import ItemCart from './ItemCart';
import Date from './Date'
import Compra from './Compra'
import ItemListContainer from './ItemListContainer';


const Cart = () => {
  const { cart, totalPrice, cleanCart } = UseCartContex();
  const [sell, setSell] = useState(false)
  const order = {
    items: cart.map(producto => ({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.cantidad })),
    total: totalPrice(),
  }

  const [comprador, setComprador] = useState(order);
  const inputCapture = (e) => {
    const { name, value } = e.target
    setComprador({ ...comprador, [name]: value, date: new Date() })

  }

  const handleClick = () => {

    const db = getFirestore();
    const ordersCollection = collection(db, 'order');
    addDoc(ordersCollection, comprador)
      .then(({ id }) => console.log(id));
    cleanCart();
    setSell(true);

  }

  if (cart.length <= 0) {

    return (
      <>
        {
          sell ? <Compra comprador={comprador} /> :
            <ItemListContainer />
        }
        <div className='center2'>
          <p>Carrito Vacio</p>
          <Link to='/'>Seguir comprando</Link>
        </div>
      </>
    );
  }

  return (
    <>

      {
        cart.map(product => <ItemCart key={product.id} product={product} cantidad={product.cantidad} />)
      }

      <div className='center2'><Link to='/'>Seguir Comprando</Link></div>
      <h2 className='center2'> Total: $ {totalPrice()}</h2>
      <h3> Ingrese sus datos para el envio</h3>
      <div className='formulario'>
        <form>
          <label>Nombre</label>
          <input name='Nombre' placeholder='Nombre y apellido' onChange={inputCapture} value={comprador.name} />
          <label>Email</label>
          <input type='email' name='email' placeholder='Email' onChange={inputCapture} value={comprador.email} />
          <label>Dirección</label>
          <input type='text' name='dirección' placeholder='Dirección' onChange={inputCapture} value={comprador.addres} />
          <label>Teléfono</label>
          <input type='tel' name='Teléfono' placeholder='Teléfono' onChange={inputCapture} value={comprador.phone} />
          <button type='submit' value='Submit' className='compra' onClick={handleClick} >Confirmar Compra</button>
        </form>
        <h3 className='center2'> Total: $ {totalPrice()}</h3>
      </div>
    </>
  )
}

export default Cart