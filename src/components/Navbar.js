
import { NavLink, Link, useNavigate } from 'react-router-dom';
import '../index.css'
import Cart from './CartWidget';
import Theme from './Theme';
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from 'react';
import { auth, db, logout } from "../utils/Config";
import { query, collection, getDocs, where } from "firebase/firestore";
import React from 'react';
import huma from '../assets/img/logohuma.png'
import QuienesSomos from '../pages/QuienesSomos';



const Navbar = () => {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();


    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();
            setName(data.name);
            console.log(data.name);
        } catch (error) {
            console.error(error);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("./");
        fetchUserName();
    }, []);

    const cartBtn = () => {
        let path = `Cart`;
        navigate(path);
    }
    const logBtn = () => {
        let path = `Registration`;
        navigate(path);

    }

    return (
       <>
      
       <header className='sticky'>
            {/* <p className='nombre'>{name} {user?.email} </p> */}
            <nav className='sticky'>
                
                  
                        <div className='logo'>
                      <div className='logoTheme'>
                            {/* <h1 className='pulse' id='huma'><Link to='/'>Huma</Link></h1> */}
                    <Link className='huma' to='/'>    <img className='huma' src={huma} alt='logo' /></Link>
                    <Theme />
                    </div>
                            <div className='dropdown'>
                                <button className='prods'>Buscar</button>
                                <div className='dropdowncontent'>
                                    <li><NavLink className='menuu' to='/category/mate'>Mates</NavLink></li>
                                    <li><NavLink className='menuu1' to='/category/maceta'>Macetas</NavLink></li>
                                    <li><NavLink className='menuu2' to='/category/taza'>Tazas</NavLink></li>
                                    <li><NavLink className='menuu3' to='/category/destacado'>Oferta</NavLink></li>
                                </div>
                           
                            </div>
                        <NavLink className='quienes' to="/pages/QuienesSomos">Contacto</NavLink>
                    <button className='cartWidget' onClick={cartBtn}><Cart /> </button>
                        
                    
                        </div> 
                
                            <div />
               

            </nav>
          
           
           
        </header>
       <h1 className='space'>Huma Cerámica</h1>
        </>
    );
};

export default Navbar;