import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UseCartContex } from './CartContext'
import ItemCart from './ItemCart';
import Date from './Date'
import Compra from './Compra'
import {  Input} from '@mui/material';
import {  Button, Box } from '@mui/material';





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

    if (value.trim() === '') {
      alert('faltan datos')
    } else {
      setComprador({ ...comprador, [name]: value, date: new Date() })
    }
  }
  const goHome = () => {
   
    navigate('/')
  }

  const handleClick = () => {
    const requiredFields = ['Nombre', 'email', 'dirección', 'Teléfono'];
    const emptyFields = requiredFields.filter(field => !comprador[field]);
    if (emptyFields.length > 0) {
      alert('Faltan datos obligatorios para seguir con el envío');
    } else {
      const db = getFirestore();
      const ordersCollection = collection(db, 'order');
      addDoc(ordersCollection, comprador)
        .then(({ id }) => console.log(id));
      cleanCart();
      setSell(true);
    }
  }

  // const handleClick = () => {
  //   const requiredFields = ['Nombre', 'email', 'dirección', 'Teléfono'];
  //   const emptyFields = requiredFields.filter(field => !comprador[field]);
  //   if (emptyFields.length > 0) {
  //     alert('Faltan datos obligatorios para seguir con el envío');
  //   } else {
  //     const db = getFirestore();
  //     const ordersCollection = collection(db, 'order');
  //     addDoc(ordersCollection, comprador)
  //       .then(({ id }) => {
  //         mercadopago.preferences.create({
  //           items: order.items,
  //           payer: {
  //             name: comprador.Nombre,
  //             email: comprador.email
  //           },
  //           payment_methods: {
  //             excluded_payment_methods: [{ id: '1800286423148403' }],
  //             excluded_payment_types: [{ id: 'fwTm3jsr2MoolJnwoqTjt3Mi7vyO8d1z' }]
  //           },
  //           back_urls: {
  //             success: 'https://TU_DOMINIO/pago-exitoso',
  //             failure: 'https://TU_DOMINIO/pago-fallido',
  //             pending: 'https://TU_DOMINIO/pago-pendiente'
  //           },
  //           auto_return: 'approved',
  //           notification_url: 'https://TU_DOMINIO/webhook-notificaciones'
  //         })
  //           .then(function (response) {
  //             // Redireccionar al checkout de Mercado Pago
  //             window.location.href = response.body.init_point;
  //           })
  //       });
  //     cleanCart();
  //     setSell(true);
  //   }
  // }






  if (cart.length <= 0) {

    return (
      <>
        {
          sell ? <Compra comprador={comprador} /> :
        <div className='center2'>
          <p>El Carrito Está Vacio, continuar la compra...</p>
          <Button variant="contained" color='success' onClick={goHome}>Seguir comprando</Button>
        </div>
      }
      
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
        
        <form sx={{ mt: 2, mb:7}} required >
          <Input type='text' required={true} sx={{m:1, width:'220px'}}  name='Nombre' placeholder='Nombre y apellido' onChange={inputCapture} value={comprador.name} />  
          <Input type='text' required={true} sx={{ m: 1 }}  name='email' placeholder='Email' onChange={inputCapture} value={comprador.email} />
          <Input type='text' required={true} sx={{ m: 1 }} name='dirección' placeholder='Dirección' onChange={inputCapture} value={comprador.addres} />
          <Input type='text' required={true} sx={{ m: 1 }}  name='Teléfono' placeholder='Teléfono' onChange={inputCapture} value={comprador.phone} />
          <h3 > Total: $ {totalPrice()}</h3>
          <Button size='small'  variant="contained" color={'info'}  sx={{ mt: 2, width:160}} type='submit' value='Submit'  onClick={handleClick} >Confirmar Compra</Button>
          
        </form>
      </Box>
    
    </>
   
    
  )
}

export default Cart