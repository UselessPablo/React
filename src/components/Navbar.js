
import { NavLink, Link, useNavigate} from 'react-router-dom';
import '../index.css'
import Cart from './CartWidget';
import Theme from './Theme';




const Navbar = ({user}) => {
    let navigate = useNavigate();
const cartBtn =()=>{
    let path = `Cart`;
    navigate(path);
}
    const logBtn = ()=>{
    let path = `Registration`;
    navigate(path);

}
console.log({user});
    return (
        <header>
        <nav>
           <p>{user}</p>
            <div className="navbar">
                <Theme/>
                <h1 className='pulse'><Link to='/'>Huma</Link></h1>
                {/* <li><NavLink to='/'>Home</NavLink></li>  */}
                <div className='dropdown'>
                    <button className='prods'>Productos</button>
                    <div className='dropdowncontent'>
                        <li><NavLink className='menu' to='/category/mate'>Mates</NavLink></li>
                        <li><NavLink className='menu' to='/category/maceta'>Macetas</NavLink></li>
                        <li><NavLink className='menu' to='/category/taza'>Tazas</NavLink></li>
                        <li><NavLink className='menu' to='/category/destacado'>Oferta</NavLink></li>
                    </div>
                   
                    
                </div> 
                <button className='cartWidget' onClick={cartBtn}><Cart /> </button>
                <button onClick={logBtn}>Log In</button>
                <h3>{user}</h3>
            </div>
           
        </nav>
        </header>
    );
};

export default Navbar;