import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { UseCartContex } from './CartContext';
import Counter from './Counter';
import {ToastContainer, toast} from 'react-toastify';
import AddCart from "./AddCart";
// import 'react-toastify/dist/ReactToastify.css';

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
    addProduct(info, cantidad++) 
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
          newestOnTop={true}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div> 
  <div className="space"></div>
    <div className=" slideInLeft">
      <div className="cards">
      <div className="slide">
      <img className="offer" src={info.offer} alt='' /> 
      <h2 className="oferta"> {info.destacado}</h2>
      
      <button className="btnNone" onClick={getBigImage}>

        <img src={info.img} alt="xx" className={clicked ? 'big ' : 'imagenes'}>
               
        </img>
              <h4 className="detalleInfo"> {info.detalle}</h4>  
      </button>
      
      <div className="detalleInfo">
      
      </div>
      <div className="cards2">
      
      <p className="precio">Precio $ {info.precio}</p>
      <NavLink to={`/detalle/${info.id}`}>
        {" "}
        <button className="info">I n f o </button>
      </NavLink>
              <AddCart stock={getStock()} onAdd={onAdd} initial={-0} />
      </div>
      <div className="contadorCard">
      
      </div>
    </div>
      </div>

      </div>

    </>
  );
};

export default Item;
