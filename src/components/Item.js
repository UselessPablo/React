import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { UseCartContex } from './CartContext';
import {ToastContainer} from 'react-toastify';
import AddCart from "./AddCart";
import { Button, Card, CardContent, CardMedia, Box, CardActions,Typography } from "@mui/material";


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
      <Card sx={{ maxWidth: 200, mr: 2, mt: 3, maxHeight: 280}} wrap-xs-nowrap >
   
        <CardMedia sx={{ height: 140 }}
          image={info.img} onClick={goTo}
            title="HUMABRC"
           />
      <CardMedia
     image={info.offer}
      title={info.destacado}
        />
      {/* <img className="offer" src={info.offer} alt='' />  */}
      {/* <h2 className="oferta"> {info.destacado}</h2> */}
      
      {/* <NavLink to={`/detalle/${info.id}`}>
        {" "}
        <button className="info">I n f o </button>
      </NavLink> */}
    {/* <CardContent>
        <Typography variant="h6" color="text.primary"  component='div'>
        ${info.precio}
        </Typography>  
              {/* <p className="precio">$ {info.precio}</p> */}
        {/* </CardContent> */} 
      {/* </div> */}
      <div className="">
              
      </div>
        <CardActions>
          <Box container xs={{ width: 200 }} sx={{ display: 'inline-flex', height: 23 }} > 
          <AddCart stock={getStock()} onAdd={onAdd} initial={-0} />
            <Button size="small" sx={{me:1}}  variant="contained" color='secondary' onClick={goTo}>Info</Button>
          {/* <Link to={`/detalle/${info.id}`}>Detalles</Link>  */}
          </Box>
        </CardActions>

      
      </Card>
    </>

  );
};

export default Item;
