import './Navbar.css';
import { NavLink } from 'react-router-dom';
function Navbar({mycartitem}) {
    return (

        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <NavLink to="/" className="active-NavLink">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="active-NavLink">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="active-NavLink">Contact</NavLink>
                </li>
                  <li>
                    <NavLink to="/mycart" className="active-NavLink">My Cart</NavLink>
                </li>
                {
                    mycartitem?.length>0?(<p>{mycartitem.length}</p>):("")
                }
            </ul>
        </nav>
    );
}

export default Navbar;