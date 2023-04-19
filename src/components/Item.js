import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { UseCartContex } from './CartContext';
import AddCart from "./AddCart";
import { Button, Card, CardMedia, Box, CardActions, Typography, CardContent } from "@mui/material";
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

      <Card  sx={{ minWidth: 170, maxWidth: 170,ml:1, mr: 1, mt: 3, minHeight: 320, maxHeight: 320, borderRadius: 2 }}>
        <Badge sx={{ ml: 1.3 }} badgeContent={getBadgetQuantity()} color='pop'> </Badge>
        <CardMedia sx={{ height: 180, minWidth: 170, maxWidth: 170,display:'flex', justifyContent:'center' }} image={info.img} onClick={() => handleProductClick(info.id)} title="HUMABRC" />
        <CardMedia image={info.offer} title={info.destacado} />
        <Typography>
          <h3 className="oferta"> {info.destacado}</h3>
        </Typography>
        <CardContent sx={{ maxHeight: 10, minHeight: 10, textAlign: 'center' }} >
          <Typography sx={{ fontSize: 10 }}>
            {info.detalle}
          </Typography>
        </CardContent>
        <CardActions sx={{ maxWidth: 170 }}>
          <Box sx={{ mt: 4, mb: 2, height: 25, display: 'flex', justifyContent: 'space-between', width: '100%', alignContent: 'center' }}>
            <AddCart stock={getStock()} onAdd={onAdd} initial={-0} />
            <Button data-product-id={info.id} color={'info'} size="small" sx={{ height: 23 }} variant="text" onClick={() => handleProductClick(info.id)}>Info</Button>
          </Box>
        </CardActions>
      </Card>
      <div className='space3'></div>
    </Box>
  )
}

export default Item;
