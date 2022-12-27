import React from 'react'
import { useState, useEffect } from 'react';
import {getFirestore, getDocs, collection, query, where} from 'firebase/firestore';



export const Search = (props) => {
    const [data, setData] = useState([]);


    useEffect(() => {

        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'productos')
        getDocs(queryCollection)
            .then(res => setData({ id: res.id, ...res.data() }))
          if (props.input) {
            const queryFilter = query(queryCollection, where('nombre', '==', props.input))
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        } else {
            // getDocs(queryCollection) 
            //     .then(res => setData(res.docs.map(productos => ({ id: productos.id, ...productos.data() }))))
        }    
      
        }, [props.input])
    
        console.log(data);
 
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id}>{item.nombre}</li>
            ))}
        </ul>
    )
}

export default Search;