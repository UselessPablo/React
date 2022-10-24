

import logo from '../assets/img/logohuma.png';
import CartWidget from './CartWidget';


const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <img src={logo} alt="logo" />
                <li><button>Home</button></li>
                <li><select>
                    <option value='Productos'>Productos</option>
                    <option value='Cerámica'>Cerámica</option>
                    <option value='Vidrio'>Vidrios</option>
                </select></li>
                <li><button>Info</button></li>
                <CartWidget />

            </div>
        </nav>

    );

};
export default Navbar;