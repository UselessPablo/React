import React from "react";
import { useState} from "react";
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from "@mui/material";

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
    theme: "light",
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
        <Button size="small" sx={{ mr: 1, height:20, width:40, minWidth:40 }} variant="contained" color='primary' className="rest" onClick={onRest} >-</Button>  
      <span className="bold">{Valor}</span>
        <Button size="small" sx={{ ml: 1, mr: 2,height:20, width: 40, minWidth: 40 }} variant="contained" color='primary' className="add" onClick={onAdds}>+</Button>
        <Button size="small" sx={{ mr: 1 }} variant="contained" color='secondary' className="agregar" onClick={() => onAdd(Valor, setValor(0))} onClickCapture={Valor ? notify   : null} >Agregar</Button>
             </div>    
    
    </>
       );
       
  
   
};

export default Counter;
