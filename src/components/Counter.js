import React from "react";
import { useState} from "react";
import { Button, Popover, Typography} from "@mui/material";


const Counter = ({ stock, onAdd, initial }) => {
  const [Valor, setValor] = useState(initial);
  const [anchor, setAnchor] = useState(null);
const openPopover = (event) =>{
  setAnchor(event.currentTarget);
}
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
        <Button size="small" sx={{ mr: 1, backgroundColor:'success.main' }} variant="contained"  className="agregar" onClick={() => onAdd(Valor, setValor(0))} onClickCapture={Valor ? openPopover   : null} >Agregar</Button>
             </div>    
    <Popover
    open={Boolean(anchor)}
    anchorEl={anchor}
    anchorOrigin={{
      vertical:'top',
      horizontal:'right',
    }}
    transformOrigin={{
      vertical:'bottom',
      horizontal:'left',
    }}
    >
      <Typography variant='h6'> Agregado Al Carrito</Typography>
    </Popover>
    </>
       );
       
  
   
};

export default Counter;
