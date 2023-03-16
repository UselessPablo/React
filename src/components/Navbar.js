
import { NavLink, Link, useNavigate } from 'react-router-dom';
import '../index.css'
import Cart from './CartWidget';
import Theme from './Theme';
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from 'react';
import { auth, db} from "../utils/Config";
import { query, collection, getDocs, where } from "firebase/firestore";
import React from 'react';




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

    return (
       <>
            <nav className='sticky'>
                  <div className='navbar'>
                 
                              <div className='logo'>
                                   <h1 className=''>HumaBrc Cerámica</h1>
                            <div className='catw'>
                            <button className='cartWidget' onClick={cartBtn}><Cart /> </button>
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
        </>
    );
};

export default Navbar;