import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'


export const ItemDetailSearch = () => {
    const { itemId } = useParams();
 const [data, setData] = useState([])

    useEffect(() => {

        const querydb = getFirestore();
        const queryDoc = doc(querydb, 'productos', itemId)
        getDoc(queryDoc)
            .then(res => setData({ id: res.id, ...res.data() }))
    }, [itemId])


    return (
        <ItemDetail data={data} />
    )
}

export default ItemDetailSearch;