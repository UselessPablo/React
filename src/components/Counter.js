import React from 'react'
import {useState} from 'react';

const Counter = ({stock}) => {

    let [Valor, setValor] = useState(0);
    if (Valor >= stock){ 
        alert('No hay Stock')
    }
    if (Valor < 0 ){
        alert('No puedes seleccionar negativo');
    }
    return (
        <div className='counter'>
            <span>{Valor}</span>
            <button className='valores' onClick={() => setValor(Valor + 1)}>+</button>
            <button className='valores' onClick={() => setValor(Valor - 1)}> -</button>
        </div>
    
  )
}

export default Counter;