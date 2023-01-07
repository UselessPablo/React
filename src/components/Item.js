import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { UseCartContex } from './CartContext';
import Counter from './Counter';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({ info }) => {

  const { addProduct, isInCart } = UseCartContex();
  const [goToCart, setGoToCart] = useState(false);
  const [clicked, setClicked] = useState('')
  const notify = () => toast('Agregado al Carrito!');
  
  const getStock = () => {
    const item = isInCart(info.id)
    if (item)
      return info.cantidad - item.cantidad 
    else
      return info.cantidad
    
    }

  const onAdd = (cantidad) => {
    setGoToCart(true);
    addProduct(info, cantidad) 
    
  }
  const getBigImage = () => {
    setClicked(!clicked);
//  makeBlur1();
    
  }
  

  return (
     <>
      <div className="sticky" >
        <ToastContainer
          position="top-center"
          autoClose={500}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div> 
    
    <div className="cards slideInLeft">
      <img className="offer" src={info.offer} alt='' /> 
      <h2 className="oferta"> {info.destacado}</h2>
      
      <button className="btnNone" onClick={getBigImage}>

        <img src={info.img} alt="xx" className={clicked ? 'big ' : 'imagenes'}>
        </img>
      </button>
      
      <div className="detalleInfo">
      <p> {info.detalle}</p>
      </div>
      <div className="cards2">
      
       
      <p className="precio">Precio $ {info.precio}</p>
      <NavLink to={`/detalle/${info.id}`}>
        {" "}
        <button className="info">I n f o </button>
      </NavLink>
      </div>
      <div className="contadorCard">
        <Counter stock={getStock()} onAdd={onAdd} initial={-0} />
      </div>
    </div>
      

     

    </>
  );
};

export default Item;
