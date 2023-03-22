import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../index.css'
import Cart from './CartWidget';
import React, { useState } from 'react';
import { Box} from '@mui/material';

export const ScrollToTop = () => {
  
        window.scrollTo(-110, -100);
    
   
}
const Navbar = () => {

    const navigate = useNavigate();


    const cartBtn = () => {
        let path = `Cart`;
        navigate(path);
    }
    ScrollToTop();
    return (
        
           
        
       
      <Box>
            <nav className='sticky'>
                  <div className='navbar'>
                 
                              <div className='logo'>
                                   <h1 className=''>HumaBrc Cerámica</h1>
                            <div className='catw'>
                            <button className='cartWidget' onClick={cartBtn}><Cart/> </button>
                        </div>
                        </div>  
                    </div>
            </nav>
            <div className='breadC' >  
                    <NavLink  className='breadText' to='/'>Home </NavLink> |
                <NavLink className='breadText' to='/category/mate'>Mates</NavLink> |
                <NavLink className='breadText' to='/category/maceta'>Macetas</NavLink> |
                <NavLink className='breadText' to='/category/taza'>Tazas</NavLink> | 
                <NavLink className='breadText' to='/category/destacado'>Oferta</NavLink> |
                <NavLink className='breadText' to='/category/galeria'>Varios</NavLink> |
                <NavLink className='breadText' to='/pages/QuienesSomos'>Contacto</NavLink> |
                <NavLink className='breadText' to='/Cart'>Carrito</NavLink> 
            </div> 
            </Box>
        
     
    );
};

export default Navbar;