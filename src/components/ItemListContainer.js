import React, { useEffect } from "react";
import { useState } from "react";
import { Productos} from './Servicios/Productos'
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
    const [data, setData] = useState([])
   
    const {name} =useParams()

    useEffect(() => {  
    const task = new Promise(resolve => {
        setTimeout(() => {
           resolve(Productos);
            }, 1000)
    });
        
        if(name){
            task.then(res => setData(res.filter(Productos => Productos.categoria === name)));    
        }else{
            task.then(res => setData(res));
        }
   
    }, [name])
      
    return (

  <>
            <h1 className="slideInLeft">Productos</h1>
            <div className="slideInLeft" >
        <ItemList data={data}/>
            </div>
        </>
    )

}


    
        

export default ItemListContainer;