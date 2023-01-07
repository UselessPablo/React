import React from "react";
import { useState} from "react";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Counter = ({ stock, onAdd, initial }) => {
  const [Valor, setValor] = useState(initial);
  const notify = () => toast.success("Agregado al Carrito", {
    // position: "top-center",
    // autoClose: 750,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });;

   const onAdds = () => {
     if (Valor < stock) {
       setValor(Valor + 1);
      
     }
    }
   const onRest = () => {
     if (Valor > 0) {
       setValor(Valor - 1);
       
     }
   }


  return (
      
    <>
      
    <div>
      <button className="rest" onClick={onRest} >-</button>  
      <span>{Valor}</span>
      <button className="add" onClick={onAdds}>+</button>
      <button className="agregar" onClick={() => onAdd(Valor, setValor(0))} onClickCapture={Valor ? notify   : null} >Agregar</button>
             </div>    
    
    </>
       );
       
  
   
};

export default Counter;
