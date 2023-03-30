import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ButtonBase from '@mui/material/ButtonBase';
import { NavLink, useNavigate } from 'react-router-dom';
import '../index.css'
import Cart from './CartWidget';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';


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

    const [open, setOpen] = useState(false);

    const toggleDrawer = () => {
        setOpen(!open);
    };
const goContact = () =>{
    navigate('/pages/QuienesSomos/')
    toggleDrawer()
}
    const goGaleria = () => {
        navigate('/pages/Galeria/')
        toggleDrawer()
    }
    const goWorkshop = () => {
        navigate('/pages/Workshops/')
        toggleDrawer()
    }
    const goHome = ()=>{
        navigate('/')
        toggleDrawer()
    }
   
    return (

        
        <>
           
                <AppBar>  
                </AppBar>
            
                <nav className='sticky'>
                    <div className='navbar'>
                        <div className='logo'>
                        <Toolbar>

                                <ButtonBase sx={{ display: 'block' }} onClick={toggleDrawer}>
                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>

                                </ButtonBase>
                            <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                                 
                                    <List sx={{ backgroundColor: 'fondoDrawer.main', height:'25vh' }}>
                                    <ListItemButton  onClick={goHome} sx={{ backgroundColor: 'secondary.main', borderRadius: 3, mt: 6, mr: 1, ml: 6, textAlign:'center', width:'50%'}}>
                                        <ListItemText primary="Inicio" />
                                    </ListItemButton> 
                                        <ListItemButton onClick={goGaleria} sx={{ backgroundColor: 'fondo.main', borderRadius:3, mt:12, mr:4, ml:1 }}>
                                            <ListItemText primary="Galería" />
                                        </ListItemButton>
                                        <ListItemButton onClick={goWorkshop} sx={{ backgroundColor: 'success.main', borderRadius: 3,mt:2, ml:4, mr:1 }}>
                                            <ListItemText primary="WorkShops y Taller" />
                                        </ListItemButton>
                                        <ListItemButton onClick={goContact} sx={{ backgroundColor: 'eliminar.main', borderRadius: 3, mt: 2, mb: 16, mr: 4, ml: 1}}>
                                            <ListItemText primary="Contactame" />
                                        </ListItemButton>
                                    </List>
                                </Drawer>
                            </Toolbar>
                            <h1 className=''>HumaBrc Cerámica</h1>
                            <div className='catw'>
                                <button className='cartWidget' onClick={cartBtn}><Cart /> </button>
                            </div>
                    </div>
                </div>
            </nav>

                <div />
            <div/>
            
                <Box >
                <div className='breadC' >
                    <NavLink className='breadText' to='/'>Home </NavLink> |
                    <NavLink className='breadText' to='/category/mate'>Mates</NavLink> |
                    <NavLink className='breadText' to='/category/maceta'>Macetas</NavLink> |
                    <NavLink className='breadText' to='/category/taza'>Tazas</NavLink> |
                    <NavLink className='breadText' to='/category/destacado'>Oferta</NavLink> |
                    <NavLink className='breadText' to='/category/galeria'>Varios</NavLink> |
                    <NavLink className='breadText' to='/pages/QuienesSomos'>Contacto</NavLink> |
                    <NavLink className='breadText' to='/Cart'>Carrito</NavLink>
                </div>

            </Box>
      
        </>
    );
};

export default Navbar;