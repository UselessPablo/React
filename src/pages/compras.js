import React from 'react'
import {GetProductname} from '../components/Servicios/Productos';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';



const Compras = ({Valor}) => {
     const { nombre } = useParams();
    const [name, setName] = useState([])
    useEffect(() => {
        GetProductname(nombre).then(data => {
            setName(data) 
        })
    },[nombre])
   console.log(name.precio);

    return (
    <div className='center2'>
    <h2>{nombre}</h2>
            <img className="imagenes2" src={name.img} alt='xx'></img>
    <p>{name.stock}</p>
    Cantidad :1{Valor}
   <p>${name.precio}</p>
   
   <button>Comprar</button><button>Modificar</button><button>Borrar</button>
    </div>
  )
}

export default Compras;