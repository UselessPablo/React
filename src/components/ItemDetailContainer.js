import React from 'react'
import ItemDetail from './ItemDetail'
import { Productos } from './Servicios/Productos';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
  const  [data, setData]= useState([]);
    const { detalleid } = useParams();
 
  
    useEffect(() => {
       
    
    const task = new Promise(resolve => {
            
      setTimeout(() => {
                resolve(Productos);
            }, 500)
          });
        task.then(res => setData(res.find(Productos => Productos.id === parseInt(detalleid))));

    }, [detalleid])

  
    return (
   
    <ItemDetail data={data}/>
  )
}



export default ItemDetailContainer;