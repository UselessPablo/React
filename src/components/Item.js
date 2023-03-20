import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { UseCartContex } from './CartContext';
import AddCart from "./AddCart";
import { Button, Card, CardMedia, Box, CardActions, Typography } from "@mui/material";
import { purple, deepPurple, teal, green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Badge } from '@mui/material'






const Item = ({ info }) => {
  const navigate = useNavigate();
  const { addProduct, isInCart, getCartProduct } = UseCartContex();
  const [goToCart, setGoToCart] = useState(false);

  // const [clicked, setClicked] = useState('')
  // const notify = () => toast('Agregado al Carrito!');
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[400],
      },
      secondary: {
        // This is green.A700 as hex.
        main: deepPurple[600],
      },
      success: {
        main: deepPurple['A400'],
      },
      info: {
        main: teal[300],
      },
      info2: {
        main: teal[900],
      },
      fondo: {
        main: green[400]
      }

    },
  });

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
    <ThemeProvider theme={theme}>

      <Box >

        <Card sx={{ maxWidth: 200, mr: 2, mt: 3, maxHeight: 280, borderRadius: 3}}>
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

    </ThemeProvider>

  );
};

export default Item;
