import React from 'react'
import { useState } from 'react';
import Item from './ItemListContainer';

const SeachBar = () => {

   const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
        //convert input text to lower case
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };

    return (
        <div>
        
            <div className="search">
                <input  className='busqueda' onChange={inputHandler} label="Search" placeholder='Buscar'/>
            </div>
            <Item input={inputText} />
        </div>
    );
}
  


export default SeachBar