import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UseCartContex } from './CartContext'
import ItemCart from './ItemCart';
import Date from './Date'
import Compra from './Compra'
import ItemListContainer from './ItemListContainer';
import {  Input } from '@mui/material';
import {  Button, Box } from '@mui/material';
// import { MercadoPagoCheckout } from 'mercadopago';

// const { cart } = UseCartContex();
// const createPreference = async () => {
//   const items = cart.map(producto => ({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.cantidad }))
//   const preference = await MercadoPagoCheckout.createPreference({
//     items,
//     back_urls: {
//       success: 'https://mi-aplicacion.com/pago-exitoso',
//       failure: 'https://mi-aplicacion.com/pago-fallido',
//       pending: 'https://mi-aplicacion.com/pago-pendiente'
//     },
//     auto_return: 'approved',
//     notification_url: 'https://mi-aplicacion.com/actualizar-estado-pago',
//     payment_methods: {
//       excluded_payment_methods: [{ id: 'amex' }],
//       excluded_payment_types: [{ id: 'atm' }],
//       installments: 6
//     }
//   });
//   return preference;
// };

// const checkout = async () => {
//   const preference = await createPreference();
//   window.location.href = preference.init_point;
// };

// <button onClick={checkout}>Pagar</button>





const Cart = () => {
  const { cart, totalPrice, cleanCart } = UseCartContex();
  const [sell, setSell] = useState(false)
  const navigate = useNavigate();
  const order = {
    items: cart.map(producto => ({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.cantidad })),
    total: totalPrice(),
  }

  const [comprador, setComprador] = useState(order);
  const inputCapture = (e) => {
    const { name, value } = e.target
    setComprador({ ...comprador, [name]: value, date: new Date() })

  }
  const goHome = () => {
    navigate('/');
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
          <Button variant="contained" color='success' onClick={goHome}>Seguir comprando</Button>
        </div>
      </>
    );
  }

  return (
    <>
  <div className='cartCard'  >
      {
        cart.map(product => <ItemCart key={product.id} product={product}  cantidad={product.cantidad} />)
      }
      </div>
      <h2 sx={{mt:3}} className='center2'> Total: $ {totalPrice()}</h2>
      <Box sx={{display:'flex', justifyContent:'center'}}>
      <Button style={{ width: '160',  textAlign: 'center' }} variant="contained" color='success' onClick={goHome}>Seguir comprando</Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        <h3 > Ingrese sus datos para el envio</h3>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb:10 }}>
        
        <form sx={{ mt: 2, mb:7}}  >
          <Input sx={{m:1, width:'220px'}}  name='Nombre' placeholder='Nombre y apellido' onChange={inputCapture} value={comprador.name} />  
          <Input sx={{ m: 1 }} type='email' name='email' placeholder='Email' onChange={inputCapture} value={comprador.email} />
          <Input sx={{ m: 1 }} type='text' name='dirección' placeholder='Dirección' onChange={inputCapture} value={comprador.addres} />
          <Input sx={{ m: 1 }} type='tel' name='Teléfono' placeholder='Teléfono' onChange={inputCapture} value={comprador.phone} />
          <h3 > Total: $ {totalPrice()}</h3>
          <Button size='small'  variant="contained" color={'info'}  sx={{ mt: 2, width:160}} type='submit' value='Submit'  onClick={handleClick} >Confirmar Compra</Button>
          
        </form>
      </Box>
    
    </>
   
    
  )
}

export default Cart