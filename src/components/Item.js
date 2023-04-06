import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { UseCartContex } from './CartContext';
import AddCart from "./AddCart";
import { Button, Card, CardMedia, Box, CardActions, Typography, Grid } from "@mui/material";
import { Badge } from '@mui/material'


const Item = ({ info }) => {
  const navigate = useNavigate();
  const { addProduct, isInCart, getCartProduct } = UseCartContex();
  const [goToCart, setGoToCart] = useState(false);
  const [lastClickedProduct, setLastClickedProduct] = useState();
  const productsContainerRef = useRef(null);

  const getStock = () => {
    const item = isInCart(info.id)

    if (item) {
      return info.cantidad - item.cantidad;
    }
    else {
      return info.cantidad
    }
  }

  const getBadgetQuantity = () => {
    const item = getCartProduct(info.id)

    if (item)
      return item.cantidad;
    else
      return 0;
  }

  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(info, cantidad);
  }

  const goTo = () => {
    setLastClickedProduct(info.id);
    navigate(`/detalle/${info.id}`);
  }

  const handleProductClick = (productId) => {
    setLastClickedProduct(productId);
    console.log(productId);
    navigate(`/detalle/${info.id}`);
  };

  useEffect(() => {
    if (lastClickedProduct && productsContainerRef.current) {
      const lastClickedProductElement = productsContainerRef.current.querySelector(`[data-product-id='${lastClickedProduct}']`);
      if (lastClickedProductElement) {
        lastClickedProductElement.scrollIntoView({ behavior: 'smooth' });
        setLastClickedProduct(null);
      }
    }
  }, [lastClickedProduct]);

  return (
    <Box>
      <Card sx={{ maxWidth: 200, mr: 2, mt: 3, maxHeight: 280, borderRadius: 3, backgroundColor: 'fondoCard.main' }}>
        <Badge sx={{ ml: 2 }} badgeContent={getBadgetQuantity()} color='fondo'> </Badge>
        <CardMedia sx={{ height: 140 }} image={info.img} onClick={() => handleProductClick(info.id)} title="HUMABRC" />
        <CardMedia image={info.offer} title={info.destacado} />
        <Typography>
          <h3 className="oferta"> {info.destacado}</h3>
        </Typography>
        <CardActions>
          <Box xs={{ width: 200 }} sx={{ height: 25, display: 'flex', justifyContent: 'space-around' }}>
            <AddCart stock={getStock()} onAdd={onAdd} initial={-0} />
            <Button data-product-id={info.id} color={'info'} size="small" sx={{ ml: 3, height: 23 }} variant="contained" onClick={() => handleProductClick(info.id)}>Info</Button>
          </Box>
        </CardActions>
      </Card>
      <div className='space3'></div>
    </Box>
  )
}

export default Item;
