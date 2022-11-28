
import { NavLink,Link } from 'react-router-dom';
import Date from './Date';
import '../index.css'
import Cart from './CartWidget';


const Navbar = () => {
  
     return (
       <nav>
           <div className="date"><Date /> </div>
            <div className="navbar"> 
                 <h1 className='pulse'><Link to='/'>Huma</Link></h1>
           {/* <li><NavLink to='/'>Home</NavLink></li>  */}
                 <div className='dropdown'>
                     <button className='prods'>Productos</button>
                    <div className='dropdowncontent'>
                     <li><NavLink  className='menu' to='/category/mate'>Mates</NavLink></li>
                         <li><NavLink className='menu' to='/category/maceta'>Macetas</NavLink></li>
                         <li><NavLink className='menu' to='/category/tasa'>Tasas</NavLink></li>
                     </div>
                 </div>
                 <NavLink to='Cart'><Cart /> </NavLink>  
            
            </div>
       
        </nav>
    );

};

export default Navbar;