import React from 'react'
import {Button} from '@mui/material';
import { useState } from "react";


import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

const AddCart = ({ stock, onAdd, initial }) => {
        const [Valor, setValor] = useState(initial);
   

        const onAdds = () => {
            if (Valor < stock) {
                setValor(Valor + 1);
            }
        }
 
        return (

            <>
                <div >
                    <Button startIcon={< ShoppingCartCheckoutOutlinedIcon />} variant="contained" textColor='white'  sx={{ height: 23, bgcolor:'fondo.main',pt:1 }} onClick={() => onAdd(Valor, setValor(0))} onMouseUp={onAdds} >+</Button>   
                </div>

            </>
        );
    };
 


export default AddCart