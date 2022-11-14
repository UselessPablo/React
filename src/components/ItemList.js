import React from "react";
import { GetProducts } from "./Servicios/Productos";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Item from "./Item";



const ItemList = () => {
  const [datos, setDatos] = useState([])
  useEffect(() => {
    GetProducts().then(data => {
      setDatos(data)
    })
  }, [datos])

  return (
    
    <div className="cards">
      {datos.map((product, i) =>
        <h2 key={i}>
          <p>{product.nombre}</p>
          <img className="imagenes" src={product.img} alt='logo'></img>
          <Link to={`/descripcion/${product.id}`}> <button >Detalle</button></Link>
        </h2>
      )
      }
    </div>
  )

}
export default ItemList;