import React from 'react'
import {Button, Popover, Typography} from '@mui/material';
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';

const AddCart = ({ stock, onAdd, initial }) => {
        const [Valor, setValor] = useState(initial);
    const [anchor, setAnchor] = useState(null);
    const openPopover = (event) => {
        setAnchor(event.currentTarget);
    }
   
        const onAdds = () => {
            if (Valor < stock) {
                setValor(Valor + 1);
            }
        }
 
        return (

            <>
                <div >
                    <Button startIcon={< ShoppingCartCheckoutOutlinedIcon />} variant="contained" textColor='white'  sx={{ mr: 2, height: 23, bgcolor:'primary.main' }} onClick={() => onAdd(Valor, setValor(0))} onMouseUp={onAdds} onClickCapture={Valor ? openPopover : null} >+</Button>   
                </div>
                {/* <Popover
    open={Boolean(anchor)}
    anchorEl={anchor}
    anchorOrigin={{
      vertical:'top',
      horizontal:'left',
    }}
    transformOrigin={{
      vertical:'bottom',
      horizontal:'left',
    }}
    onClose={()=> setAnchor(null)}
    >
      <Typography variant='h6'> Agregado Al Carrito</Typography>
    </Popover> */}
            </>
        );
    };
 


export default AddCart