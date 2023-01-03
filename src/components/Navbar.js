
import { NavLink, Link, useNavigate} from 'react-router-dom';
import '../index.css'
import Cart from './CartWidget';
import Theme from './Theme';
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect, useState } from 'react';
import { auth, db, logout } from "../utils/Config";
import { query, collection, getDocs, where } from "firebase/firestore";




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
   
const cartBtn =()=>{
    let path = `Cart`;
    navigate(path);
}
    const logBtn = ()=>{
    let path = `Registration`;
    navigate(path);

}

    return (
        <header>
            <h2 className='emailed'>Bienvenido <p className='nombre'>{name} {user?.email} </p></h2>
        <nav className='sticky'>
          
            <div className="navbar">
           <div className='container nav-container'>

                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span class="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>
                
                    <div className='logo'>
                            <h1 className='pulse'><Link to='/'>Huma</Link></h1>
                            <button className='cartWidget' onClick={cartBtn}><Cart /> </button>
                            <div className='dropdown'>
                                <button className='prods'>Productos</button>
                                <div className='dropdowncontent'>
                                    <li><NavLink className='menuu' to='/category/mate'>Mates</NavLink></li>
                                    <li><NavLink className='menuu1' to='/category/maceta'>Macetas</NavLink></li>
                                    <li><NavLink className='menuu2' to='/category/taza'>Tazas</NavLink></li>
                                    <li><NavLink className='menuu3' to='/category/destacado'>Oferta</NavLink></li>
                                </div>
                            </div>

                            <Theme />
                    </div>
                  
              
                {/* <li><NavLink to='/'>Home</NavLink></li>  */}
                <div className='menu-items' >
                               <div className='logged'>
                                <button className='login' onClick={logBtn}>Log In</button>
                                <h2 className='emailed'>Bienvenido <p className='nombre'>{name} {user?.email} </p></h2>
                                {/* <h2 className='nombre'>{name}</h2> */}
                                {/* <p className='emailed'>{user?.email}</p> */}
                                <button className="login" onClick={logout}>Logout </button>
                            </div>

                           <div/>
                           
                  
                </div> 
               
                
            
           </div>
                </div>
     
     
        </nav>
        </header>
    );
};

export default Navbar;