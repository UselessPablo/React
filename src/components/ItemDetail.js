import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetProduct } from './Servicios/Productos';
const ItemDetail = () => {

    const{id} = useParams()
  console.log(id);
  
  const [detail, setDetail] = useState([])
  useEffect(() => {
    GetProduct().then(data => {
      setDetail(data)
    });
  return {detail};
  },);
  return (
    <div>ItemDetail
     <h2>{detail.cantidad}</h2>  
      <img className="imagenes" src={detail.img} alt='logo'></img>
    </div>
  )
}

export default ItemDetail;