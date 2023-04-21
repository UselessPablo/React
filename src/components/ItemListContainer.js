import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import { Box} from "@mui/material";

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

        <Box>
            {
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly ', alignContent: 'center' }}>
                    <ItemList data={data} />
                    <Box sx={{ padding: '12.5rem' }}></Box>
                </Box>
            }
        </Box>
    );
}


export default ItemListContainer;