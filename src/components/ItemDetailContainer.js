import React from 'react'
import ItemDetail from './ItemDetail'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'


export const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { detalleid } = useParams();

  useEffect(() => {

    const querydb = getFirestore();
    const queryDoc = doc(querydb, 'productos', detalleid)
    getDoc(queryDoc)
      .then(res => setData({ id: res.id, ...res.data() }))
  }, [detalleid])


  return (
    <ItemDetail data={data} />
  )
}

export default ItemDetailContainer;