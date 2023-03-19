import React from 'react'
import Counter from './Counter'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { UseCartContex } from './CartContext';
import {Card, CardContent} from '@mui/material';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
 const goToCarrito = () =>{
   navigate('/cart');
 }
  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(data, cantidad)
  }

  return (
    <>
      <div className='center2 '>
      <Card sx={{ width:345, mt:7, borderRadius:2}}>
        <CardMedia
          sx={{ height: 140,width:345 }}
          image={data.img}
          title={data.detalle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          $  {data.precio} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
            {data.detalle}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
        
{/*     
      <img className="imagenes2" src={data.img} alt='xx'></img>
      <img className="offer2" src={data.offer} alt='' />
       
      <h3> {data.destacado}</h3>
      <h2 className='center'>${data.precio}</h2>
      <h2 className='center'>{data.detalle}</h2>
     */}
        <Button onClick={goTo} variant="contained" color='success' sx={{ mt: 3, mb: 2}}>Seguir Comprando</Button>
      
      {
        goToCart 
            ? <Button onClick={goToCarrito} variant="contained" color='warning' >Ir al Carrito </Button>
          : <Counter stock={getStock()} onAdd={onAdd}  initial={-0} /> 
      }
    </div>
  
       </>
  )
}


export default ItemDetail;