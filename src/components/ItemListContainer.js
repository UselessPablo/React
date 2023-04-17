import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { Box } from "@mui/material";

export const ItemListContainer = () => {
    const [data, setData] = useState([])
    const { name } = useParams()

    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos')

        if (name) {
            const queryFilter = query(queryCollection, where('nombre', '==', name))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        }
    }, [name])

    return (

        <>
            {
                <div className="main">
                    <div className="slideInLeft" >
                    
                        <ItemList data={data} />
                        <div className="space3"></div>
                    
                    </div>
                </div>
            }
        </>
    );
}


export default ItemListContainer;