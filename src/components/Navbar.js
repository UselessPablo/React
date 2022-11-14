
import { Link, NavLink } from 'react-router-dom';
import Date from './Date';
import '../index.css'
import CartWidget from './CartWidget';


const Navbar = () => {
  
     return (
       <nav>
           <div className="center"><Date /> </div>
            <div className="navbar">
                <h1>Huma</h1>
                <li><NavLink to='/'>Home</NavLink></li>
                 <li>  <NavLink to='/productos/Mates'>Mates</NavLink></li>
                 <li>  <NavLink to='/page2/detalle'>Macetas</NavLink></li>
                 <li><Link> Info</Link></li>
            <CartWidget />
           
            </div>
       
        </nav>
    );

};

export default Navbar;