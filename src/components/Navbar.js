
import { NavLink } from 'react-router-dom';
import Date from './Date';
import '../index.css'
import Cart from './CartWidget';


const Navbar = () => {
  
     return (
       <nav>
           <div className="center"><Date /> </div>
            <div className="navbar"> 
                <h1 className='pulse'>Huma</h1>
           <li><NavLink to='/'>Home</NavLink></li> 
                 <div className='dropdown'>
                     <button className='prods'> Productos</button>
                    <div className='dropdowncontent'>
                     <li><NavLink to='/category/mate'>Mates</NavLink></li>
                     <li><NavLink to='/category/maceta'>Macetas</NavLink></li>
                     <li><NavLink to='/category/tasa'>Tasas</NavLink></li>
                     </div>
                 </div>
                 <NavLink to='Cart'><Cart /> </NavLink>  
            
            </div>
       
        </nav>
    );

};

export default Navbar;