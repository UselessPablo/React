import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UseCartContex } from './CartContext'
import ItemCart from './ItemCart';
import Date from './Date'
import Compra from './Compra'
import { Input } from '@mui/material';
import { Button, Box } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';



const Cart = () => {
  const { cart, totalPrice, cleanCart } = UseCartContex();
  const [sell, setSell] = useState(false)
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const order = {
    items: cart.map(producto => ({ id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: producto.cantidad })),
    total: totalPrice(),
  }
  const [comprador, setComprador] = useState(order);
  
  useEffect(() => {
    Notification.requestPermission();
  }, []);
  
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
  const handleClose =()=>{
    setOpen(false)
  }
  const handleClick = () => {
    const requiredFields = ['Nombre', 'email', 'dirección', 'Teléfono'];
    const emptyFields = requiredFields.filter(field => !comprador[field]);
    if (emptyFields.length > 0) {
   
      setOpen(true);
    } else {
      const showNotification = () => {
        if (Notification.permission === 'granted') {
          const items = order.items.map(item => `${item.nombre} (cantidad: ${item.cantidad})`).join(', ');
          const notificationBody = `Se ha realizado una nueva compra por un total de $${order.total}. Productos: ${items}`;
          new Notification('Nueva Compra', {
            body: notificationBody,
            icon: '/path/to/notification-icon.png'
          });
        }
      };

      const db = getFirestore();
      const ordersCollection = collection(db, 'order');
      addDoc(ordersCollection, comprador)
        .then(({ id }) => {
       
          console.log(id);
        });
      cleanCart();
      setSell(true);
      showNotification();
    }
  }
  const showNotification = () => {
    if (Notification.permission === 'granted') {
      new Notification('New Order', {
        body: 'A new order has been placed!', // Customize the notification message as desired
        icon: '/path/to/notification-icon.png' // Provide a path to your notification icon
      });
    }
  };
  if (cart.length <= 0) {

    return (
      <>
        {
          sell ? <Compra comprador={comprador}  /> :
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
          cart.map(product => <ItemCart key={product.id} product={product} cantidad={product.cantidad} />)
        }
      </div>
      <h2 sx={{ mt: 3 }} className='center2'> Total: $ {totalPrice()}</h2>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={{ width: '160', textAlign: 'center' }} variant="contained" color='success' onClick={goHome}>Seguir comprando</Button>
      </Box>
      <Box sx={{ mt: 4 }}>
        <h3 > Ingrese sus datos para el envio</h3>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', pb: 10 }}>
        <Popover 
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography sx={{ p: 2, fontWeight:'bold' }}> Ingrese los datos para el envio</Typography>
        </Popover>
        <form sx={{ mt: 2, mb: 7 }} required onSubmit={handleClick} >
          <Input type='text' required={true} sx={{ m: 1, width: '220px' }} name='Nombre' placeholder=' * Nombre y apellido' onChange={inputCapture} value={comprador.name} />
          <Input type='text' required={true} sx={{ m: 1 }} name='email' placeholder=' * Email' onChange={inputCapture} value={comprador.email} />
          <Input type='text' required={true} sx={{ m: 1 }} name='dirección' placeholder=' * Dirección' onChange={inputCapture} value={comprador.addres} />
          <Input type='text' required={true} sx={{ m: 1 }} name='Teléfono' placeholder=' * Teléfono' onChange={inputCapture} value={comprador.phone} />
          <h3> Total: $ {totalPrice()}</h3>
          <Button size='small' variant="contained" color={'info'} sx={{ mt: 2, }} type='submit' value='submit' onClick={handleClick} > Comprar</Button>
        </form>
      </Box>
    </>
  )
}

export default Cart