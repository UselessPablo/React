import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Item = ({ info }) => {

  const [toggle, setToggle] = useState(0.5)

  // function makeBlur1() {
  //   if (toggle === 0.5) {
  //     setToggle(1)
  //   } else {
  //     setToggle(0.5)
  //   }
  //   document.body.style.opacity= toggle;
  // }

  const [clicked, setClicked] = useState('')

  const getBigImage = () => {
    setClicked(!clicked);
//  makeBlur1();

  }


  return (
    <div className="cards slideInLeft">
      <h2 className="oferta"> {info.destacado}</h2>
      <img className="offer" src={info.offer} alt='' />

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
    </div>
  );
};

export default Item;
