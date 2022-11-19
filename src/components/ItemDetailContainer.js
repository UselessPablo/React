import React from 'react'
import ItemDetail from './ItemDetail'
import { Productos } from './Servicios/Productos';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader'
import {getFirestore, doc, getDoc} from 'firebase/firestore'




export const ItemDetailContainer = () => {
  const  [data, setData]= useState([]);
    const { detalleid } = useParams();
 const [loading, setLoading] = useState(true);
  
    useEffect(() => {
       
    
    const task = new Promise(resolve => {
            
      setTimeout(() => {
                resolve(Productos);
            }, 2000)
          });
        task.then(res => setData(res.find(Productos => Productos.id === parseInt(detalleid))))
       .finally(() => setLoading(false))
    }, [detalleid])

  if (loading){
  return  <Loader /> 
  }else{
    
  
  return (
   
    <ItemDetail data={data}/>
  )
}
}


export default ItemDetailContainer;