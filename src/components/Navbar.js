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
import { Box, Button, Link } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import HomeIcon from '@mui/icons-material/Home';
import ListItemIcon from '@mui/material/ListItemIcon';
import ImageIcon from '@mui/icons-material/Image';
import PaletteIcon from '@mui/icons-material/Palette';
import { ConnectWithoutContact } from '@mui/icons-material';
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from '@mui/material/Badge';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

export const ScrollToTop = () => {
    window.scrollTo(-110, -100);
}


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [showNotification, setShowNotification] = useState(false);
    const [datos, setDatos] = useState([]);
    const [informacion, setInformacion] = useState({});
    const [workshops, setWorkshops] = useState([]);
    const [workshopNotification, setWorkshopNotification] = useState('');
    const [final, setFinal] = useState('')
    const [fecha, setFecha] = useState('');

    const notificationTime = new Date();
    notificationTime.setHours(11, 0, 0, 0);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'workshop');
        getDocs(queryCollection).then((res) => {
            const data = res.docs.map((doc) => doc.data());
            setDatos(data);
        
            const workshop = data[0];
            const fecha = workshop.fecha;
            const final = workshop.finalizado;

            setInformacion(workshop);
            setFecha(fecha);
            setFinal(final);

            checkWorkshopNotification(fecha, final);
           
        })
    },[]);

        useEffect(() => {
            workshops.forEach((workshop) => checkWorkshopNotification(workshop));
        }, []);

        const checkWorkshopNotification = (fecha, final) => {
            const now = new Date();
            const startTime = new Date(fecha);
            const endTime = new Date(final);

            if (now < startTime) {
                setWorkshopNotification(`Nuevo  ${fecha}`);
            } else if (now >= startTime && now <= endTime) {
                setWorkshopNotification(` En Curso`);
            } else {
                setWorkshopNotification(` Finalizado  ${final}`);
            }
        };
    useEffect(() => {
        let intervalId;

        if (showNotification) {
            intervalId = setInterval(() => {
                setShowNotification(false);
            }, 3000);
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [showNotification]);
    
        const navigate = useNavigate();

        const cartBtn = () => {
            let path = `Cart`;
            navigate(path);
        }
        const toggleDrawer = () => {
            setOpen(!open);
        };

        const goContact = () => {
            navigate('/pages/QuienesSomos/');
            toggleDrawer();
        };

        const goGaleria = () => {
            navigate('/pages/Galeria/');
            toggleDrawer();
        };

        const goWorkshop = () => {
            navigate('/pages/Workshops/');
            toggleDrawer();
        };
    const goWorkshopDirect = () => {
        navigate('/pages/Workshops/');
      setInterval(() => {
          setShowNotification(false)
      }, 3000);
       
     
    };
        const goHome = () => {
            navigate('/');
            toggleDrawer();
        };

        return (


            <>

                <AppBar>
                </AppBar>
                <nav className='sticky'>
                    <div className='navbar'>
                        <div className='logo'>
                            <Toolbar>
                                <ButtonBase sx={{ display: 'block' }} onClick={toggleDrawer}>
                                    <IconButton edge="start" color="primary" aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                </ButtonBase>
                                <Drawer anchor="left" open={open} onClose={toggleDrawer}>
                                    <List sx={{ height: '100%' }}>
                                        <ListItemButton onClick={goHome} sx={{ borderRadius: 3, ml: 6, padding: 1, mr: 3, mt: 3, textAlign: 'center', width: '50%' }}>
                                            <ListItemIcon><HomeIcon sx={{ pt: 0.3, pr: 0.2, color: 'black', mr: 1 }} />
                                                <ListItemText sx={{ fontWeight: 'bold' }} primary="Inicio" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                        <ListItemButton onClick={goGaleria} sx={{ borderRadius: 3, mt: 12, mr: 2, ml: 3, textAlign: 'center', fontWeight: 'body' }} >
                                            <ListItemIcon><ImageIcon sx={{ pt: 0.3, pr: 0.2, color: 'black', mr: 1 }} />
                                                <ListItemText primary="Galería" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                        <ListItemButton onClick={goWorkshop} sx={{ borderRadius: 3, mt: 2, ml: 3, mr: 2, textAlign: 'center' }}>
                                            <ListItemIcon><PaletteIcon sx={{ pt: 0.3, pr: 0.2, color: 'black', mr: 1 }} />
                                                <ListItemText primary="WorkShops" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                        <ListItemButton onClick={goContact} sx={{ borderRadius: 3, mt: 2, mb: 16, mr: 2, ml: 3, textAlign: 'center' }}>
                                            <ListItemIcon><ConnectWithoutContact sx={{ pt: 0.3, pr: 0.2, color: 'black', mr: 1 }} />
                                                <ListItemText primary="Contactame" />
                                            </ListItemIcon>
                                        </ListItemButton>
                                    </List>
                                </Drawer>
                            </Toolbar>
                            <h1>Huma  Brc </h1>
                            <Box >
                                <Button
                                    onClick={() => setShowNotification(!showNotification)}
                                    sx={{ padding: '0' }}
                                >
                                    <Badge color="error" variant={showNotification ? "standard" : "dot"} >
                                        <NotificationsIcon />
                                    </Badge>
                                </Button>
                            </Box>
                            {showNotification && (
                             
                                <div className="notification">
                                    <Button size='small' variant='text' color='info' sx={{ pt:1}} onClick={goWorkshopDirect}>Workshop</Button>
                                    <span className='workshopNotification'>{workshopNotification}</span>
                                </div>
                            )}
                            <div className='catw'>
                                <button className='cartWidget' onClick={cartBtn}><Cart /> </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div />
                <div />
                <Box >
                    <Box sx={{ display: 'flex', position: 'relative', mt: 8, justifyContent: 'center' }}>
                        <SearchBar />
                    </Box>
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
    
}

export default Navbar;