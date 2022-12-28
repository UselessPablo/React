import React from "react";
import { useState } from "react";



const Counter = ({ stock, onAdd, initial }) => {
  const [Valor, setValor] = useState(initial);

  const onAdds = () => {
    if (Valor < stock) {
      setValor(Valor + 1);
    }
  };
  const onRest = () => {
    if (Valor > 0) {
      setValor(Valor - 1);
    }
  };

  return (
    <div>
      <button className="rest" onClick={onRest}>-</button>  
      <span>{Valor}</span>
      <button className="add" onClick={onAdds}>+</button>
      <button className="agregar" onClick={()=>onAdd(Valor)}>Agregar</button>
    </div>
  );
};

export default Counter;
