import React from "react";
import oferta from '../assets/img/offer2.svg'

import { NavLink } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="cards slideInLeft">
      <h2 className="oferta"> {info.destacado}</h2>
      <img className="offer" src={info.offer} alt=''/>

      <img className="imagenes" src={info.img} alt="xx"></img>
      
      <p className="precio">Precio $ {info.precio}</p>
      <NavLink to={`/detalle/${info.id}`}>
        {" "}
        <button className="info">I n f o </button>
      </NavLink>
    </div>
  );
};

export default Item;
