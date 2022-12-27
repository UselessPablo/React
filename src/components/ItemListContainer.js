import React, { useEffect } from "react";
import { useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'
import Loader from './Loader'



export const ItemListContainer = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const { name } = useParams()

    useEffect(() => {
        setLoading(true)
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
        setLoading(false)
    }, [name])

    return (
        <>
            <h1 className="slideInLeft">Productos</h1>
            {
                loading ? <Loader />
                    :
                    <div className="slideInLeft" >
                        <ItemList data={data} />

                    </div>
            }
        </>
    );
}








export default ItemListContainer;