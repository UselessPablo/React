import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { UseCartContex } from './CartContext';
import AddCart from "./AddCart";
import { Button, Card, CardMedia, Box, CardActions, Typography } from "@mui/material";
import { Badge } from '@mui/material'


const Item = ({ info  }) => {
  const navigate = useNavigate();
  const { addProduct, isInCart, getCartProduct } = UseCartContex();
  const [goToCart, setGoToCart] = useState(false);
  const [ultimoPulsado, setUltimoPulsado] = useState(null);
  
 
  const getStock = () => {
    const item = isInCart(info.id)

    if (item) {
      return info.cantidad - item.cantidad;
    }
    else {
      return info.cantidad
    }
  }
  const manejarClickProducto = (infoid) => {
    setUltimoPulsado(info.id);

  };
  console.log(ultimoPulsado);

  const getBadgetQuantity = () => {
    const item = getCartProduct(info.id)

    if (item)
      return item.cantidad
        ;
    else
      return 0
  }

  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(info, cantidad++)
  }

  const goTo = () => {
    navigate(`/detalle/${info.id}`)
  }
  useEffect(() => {
    if (ultimoPulsado !== null) {
      const elementoProducto = document.getElementById(`producto-${ultimoPulsado}`);
      if (elementoProducto) {
        elementoProducto.scrollIntoView({ behavior: 'smooth' });
        console.log(ultimoPulsado);
      }
    }
  }, [ultimoPulsado]);
  return (

    <Box >

      <Card id='ultimoPulsado' sx={{ maxWidth: 200, mr: 2, mt: 3, maxHeight: 280, borderRadius: 3, backgroundColor: 'info2.main' }}>
        <Badge sx={{ ml: 2 }} badgeContent={getBadgetQuantity()} color='fondo'> </Badge>
        <CardMedia sx={{ height: 140 }}
          image={info.img} onClick={goTo}
          title="HUMABRC"
        />
        <CardMedia
          image={info.offer}
          title={info.destacado}
        />
        <Typography>
          <h3 className="oferta"> {info.destacado}</h3>
        </Typography>
        <CardActions>
          <Box xs={{ width: 200 }} sx={{ display: 'inline-flex', height: 25 }} >
            <AddCart stock={getStock()} onAdd={onAdd} initial={-0} />
            <Button color={'info'} size="small" sx={{ me: 1 }} variant="contained"
              onClick={goTo}
              onClickCapture={() => manejarClickProducto(info.id)}
            >Info</Button>
          </Box>
        </CardActions>
      </Card>
      <div className='space3'>.</div>

    </Box>

  )

};

export default Item;
