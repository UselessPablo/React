import React from 'react'
import { Button } from '@mui/material';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

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
                <div >
                    <Button startIcon={< ShoppingCartCheckoutOutlinedIcon />} variant="contained" color='success' sx={{ mr: 2, height: 23 }} onClick={() => onAdd(Valor, setValor(0))} onMouseUp={onAdds} onClickCapture={Valor ? notify : null} >+</Button>   
                </div>
            </>
        );
    };
 


export default AddCart