import React from 'react'
import {useState} from 'react';


const Counter = ({stock}) => {
  const [Valor, setValor] = useState(0);
    const onAdd = ()=> {
        if (Valor < stock) {
           setValor(Valor + 1)
        }
    }
    const onRest = ()=>{
        if (Valor > 1) {
           setValor(Valor-1)
        }
    }
  const BotonStock =({Cambios, texto})=>{
      return (
          <div className='counter'>
              <button className='valores' onClick={Cambios}>{texto}</button>
          </div>
      )
  }
 
   return(
    <>
    <div>
           <BotonStock texto = '-' Cambios={onRest}/>
           <span>{Valor}</span>
           <BotonStock texto= '+' Cambios={onAdd}/>
       </div>
       </>
   )
            
  
}

export default Counter;