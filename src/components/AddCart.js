import React from 'react'

import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddCart = ({ stock, onAdd, initial }) => {
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
 
        return (

            <>
                <div className='AddCart'>
                    <button className="agregar" onClick={() => onAdd(Valor, setValor(0))} onMouseUp={onAdds} onClickCapture={Valor ? notify : null} >Agregar</button>   
                </div>
            </>
        );
    };
 


export default AddCart