import React from 'react'
import { useParams } from 'react-router-dom'
import { GetProduct } from './Servicios/Productos';
import ItemDetail from './ItemDetail';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [detail, setDetail] = useState([])

    useEffect(() => {
        GetProduct(id).then(data => {
            setDetail(data)
        });

    },);
console.log(detail);
    return (
        <div><ItemDetail product={detail} /></div>
        )

    }


export default ItemDetailContainer;