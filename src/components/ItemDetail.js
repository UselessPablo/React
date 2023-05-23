import React from 'react'
import Counter from './Counter'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UseCartContex } from './CartContext';
import { Card, CardContent, Box, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';
import ShareIcon from '@mui/icons-material/Share';

const ItemDetail = ({ data }) => {
  const [goToCart, setGoToCart] = useState(false);
  const { addProduct, isInCart } = UseCartContex();
  const navigate = useNavigate();

  const getStock = () => {
    const item = isInCart(data.id)
    if (item)
      return data.cantidad - item.cantidad
    else
      return data.cantidad
  }
  const goTo = () => {
    navigate('/');
  }
  const goToCarrito = () => {
    navigate('/cart');
  }
  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(data, cantidad)
  }
  const shareProduct = () => {
    const shareUrl = window.location.href; // Obtén la URL actual del producto
    const message = `¡Hola, Mirá este producto: ${data.detalle}\n\nPrecio: $${data.precio}\n\n${shareUrl}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`);
  };

  return (
    <Box sx={{ mt: 8 }}>
      <div className='center2 '>
        <Card variant='elevation' sx={{ width: 345, mt: 7, borderRadius: 2 }}>
          <CardMedia
            sx={{ height: 140, width: 345 }}
            image={data.img}
            title={data.detalle}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              $  {data.precio}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 'bold' }}>
              {data.detalle}
            </Typography>
          </CardContent>
          <WhatsappShareButton // Usa el componente WhatsappShareButton
            url={window.location.href} // Pasa la URL actual del producto
            title={data.detalle} // Pasa el título/detalle del producto
            separator="  " // Puedes ajustar el separador entre el título y la URL
            onClick={shareProduct}>
            <ShareIcon size={24} sx={{ ml: '600%', mb: 1 }} title='compartir' />
            <span style={{ display: 'none' }} color='primary'>Compartir en WhatsApp</span>
          </WhatsappShareButton>
        </Card>
        <Button onClick={goTo} variant="contained" color='fondo' sx={{ mt: 3, mb: 2 }}>Seguir Comprando</Button>
        {
          goToCart
            ? <Button onClick={goToCarrito} variant="contained" color='success' >Ir al Carrito </Button>
            : <Counter stock={getStock()} onAdd={onAdd} initial={-0} />
        }
      </div>
      
    </Box>
  )
}


export default ItemDetail;