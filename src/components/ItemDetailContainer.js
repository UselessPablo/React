import React from 'react'
import { useParams } from 'react-router-dom'
import { GetProduct } from './Servicios/Productos';
import { useEffect, useState } from 'react';
import CartWidget from './CartWidget';
import Counter from './Counter';
import { Link } from 'react-router-dom';


const ItemDetailContainer = () => {
 const { id } = useParams();
    const [mate, setMate] = useState([])
    useEffect(() => {
        GetProduct(id).then(data => {
            setMate(data) 
        })
    },[id])
    
    return (
         <div className='item'>
            <h1>{mate.nombre}</h1>
            <img className="imagenes2" src={mate.img} alt='mate'></img>
            <p> {mate.detalles}</p>
             <CartWidget/><Counter stock= {mate.cantidad}/>
             <p>${mate.precio}</p> 
            <Link to={`/compras/${mate.nombre}`} ><button>Comprar</button></Link>    
        
        </div>
        )

    }


export default ItemDetailContainer;