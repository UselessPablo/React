import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { UseCartContex } from './CartContext';
import {ToastContainer} from 'react-toastify';
import AddCart from "./AddCart";
import { Button, Card,  CardMedia, Box, CardActions,Typography } from "@mui/material";
import { purple, deepPurple, teal, green } from "@mui/material/colors";
import { createTheme, ThemeProvider } from '@mui/material/styles';







const Item = ({ info }) => {
  const navigate = useNavigate();
  const { addProduct, isInCart } = UseCartContex();
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
      info:{
        main:teal[500],
      },
      info2:{
        main:teal[200],
      },
      fondo:{
        main:green[400]
      }
      
    },
  });

  const getStock = () => {
    const item = isInCart(info.id)
    if (item)
      return info.cantidad - item.cantidad 
   ;
      else
      return info.cantidad
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
     <>
     
       <div className="" >
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div> 


      

        <Card  sx={{ maxWidth: 200, mr: 2, mt: 3, maxHeight: 280, padding: 1, borderRadius: 3, backgroundColor:'fondo.main'}}>
   
        <CardMedia   sx={{ height: 140 }}
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
    
      <div className="">
              
      </div>
        <CardActions>
          <Box xs={{ width: 200 }} sx={{ display: 'inline-flex', height: 23 }} > 
          <AddCart stock={getStock()} onAdd={onAdd} initial={-0} />
            <Button color={'info'} size="small" sx={{ me: 1}} variant="contained"  onClick={goTo}>Info</Button>
          </Box>
        </CardActions>
      </Card>
    </>
    </ThemeProvider>
  );
};

export default Item;
