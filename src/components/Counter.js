import React from "react";
import { useState} from "react";
import { Button} from "@mui/material";


const Counter = ({ stock, onAdd, initial }) => {
  const [Valor, setValor] = useState(initial);

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
        <Button size="small" sx={{ mr: 1, backgroundColor:'success.main' }} variant="contained"  className="agregar" onClick={() => onAdd(Valor, setValor(0))} >Agregar</Button>
             </div>    
   
    </>
       );
       
  
   
};

export default Counter;
