import React from "react";
import { useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Counter = ({ stock, onAdd, initial }) => {
  const [Valor, setValor] = useState(initial);
  const notify = () => toast("Producto Agregado al Carrito");

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
     
 
    <div>
      <div className="toaster">
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
         />
      </div>
     
      <button className="rest" onClick={onRest} >-</button>  
      <span>{Valor}</span>
      <button className="add" onClick={onAdds}>+</button>
      <button className="agregar" onClick={()=>onAdd(Valor, setValor(0))} onClickCapture={notify}>Agregar</button>

    </div>
      
  );
   
};

export default Counter;
