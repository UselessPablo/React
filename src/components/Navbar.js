
import { NavLink, Link, useNavigate } from 'react-router-dom';
import '../index.css'
import Cart from './CartWidget';
import Theme from './Theme';
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from 'react';
import { auth, db, logout } from "../utils/Config";
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
    const logBtn = () => {
        let path = `Registration`;
        navigate(path);

    }

    return (
       <>
      
      
            {/* <p className='nombre'>{name} {user?.email} </p> */}
            <nav className='sticky'>
             
                  <div className='navbar'>
                    <div className='container nav-container'>
                    <input className='checkbox ' type='checkbox' />
                    <div className="hamburger-lines">
                        <span className="line line1"></span>
                        <span className="line line2"></span>
                        <span className="line line3"></span>     
                    </div>  
                      
                            {/* <h1 className='pulse' id='huma'><Link to='/'>Huma</Link></h1> */}
                              <div className='logo'>
                            
                                <Link className='huma' to='/'>      <h1 className=''>HumaBrc Cerámica</h1></Link>
                      {/* <img className='huma' src={huma} alt='logo' /> */}
                            <div className='catw'>
                            <button className='cartWidget' onClick={cartBtn}><Cart /> </button>
                           
                            <Theme />
                            </div>
                        </div>
                         
                        
                            <div className=' menu-items'>
                                {/* <button className='prods'>Buscar</button> */}
                                {/* <div className='dropdowncontent'> */}
                            <NavLink className='quienes' to="/pages/QuienesSomos">Contacto</NavLink>
                                    <li><NavLink className='menuu' to='/category/mate'>Mates</NavLink></li>
                                    <li><NavLink className='menuu1' to='/category/maceta'>Macetas</NavLink></li>
                                    <li><NavLink className='menuu2' to='/category/taza'>Tazas</NavLink></li>
                                    <li><NavLink className='menuu3' to='/category/destacado'>Oferta</NavLink></li>
                                {/* </div> */}
                           
                           
                        
                    
                        
                      
                        </div> 
                        </div>
                        
                    </div>

            </nav>
          
           
            <div className='breadC' >  
            
                    <NavLink  className='breadText' to='/'>Home </NavLink> |
                <NavLink className='breadText' to='/pages/QuienesSomos'>Contact</NavLink> |
                <NavLink className='breadText' to='/Cart'>Cart</NavLink>
            
            </div> 
        </>
    );
};

export default Navbar;