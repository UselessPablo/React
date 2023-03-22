import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UseCartContex } from './CartContext';
import AddCart from "./AddCart";
import { Button, Card, CardMedia, Box, CardActions, Typography } from "@mui/material";
import { Badge } from '@mui/material'

const Item = ({ info }) => {
  const navigate = useNavigate();
  const { addProduct, isInCart, getCartProduct } = UseCartContex();
  const [goToCart, setGoToCart] = useState(false);


  const getStock = () => {
    const item = isInCart(info.id)
  
    if (item) {
      console.log("verdadero")
      return info.cantidad - item.cantidad;
    }
    else {
    
      return info.cantidad
    }
  }

  const getBadgetQuantity = () => {
    const item = getCartProduct(info.id)
    // console.log(item);
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

  return (
  

      <Box >

        <Card sx={{ maxWidth: 200, mr: 2, mt: 3, maxHeight: 280, borderRadius: 3, backgroundColor:'info2.main'}}>
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
              <Button color={'info'} size="small" sx={{ me: 1 }} variant="contained" onClick={goTo}>Info</Button>
            </Box>
          </CardActions>
        </Card>
        <div className='space3'>.</div>
       
      </Box>
    

  )

};

export default Item;
