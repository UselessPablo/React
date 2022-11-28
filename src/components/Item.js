import React from "react";

import { NavLink } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <div className="cards slideInLeft">
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
