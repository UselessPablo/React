import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { UseCartContex } from './CartContext';
import {ToastContainer} from 'react-toastify';
import AddCart from "./AddCart";
import { Button, Card, CardContent, CardMedia, Box, CardActions,Typography } from "@mui/material";

;



const Item = ({ info }) => {
  const navigate = useNavigate();
  const { addProduct, isInCart } = UseCartContex();
  const [goToCart, setGoToCart] = useState(false);
  // const [clicked, setClicked] = useState('')
  // const notify = () => toast('Agregado al Carrito!');
  
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


      

      <Card sx={{ maxWidth: 200, mr: 2, mt: 3, maxHeight: 280, padding: 1, bgcolor: 'grey.500' }} >
   
        <CardMedia  sx={{ height: 140 }}
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
            <Button size="small" sx={{ me: 1, }} variant="contained" color={'info'} onClick={goTo}>Info</Button>
          </Box>
        </CardActions>

      
      </Card>
    </>

  );
};

export default Item;
