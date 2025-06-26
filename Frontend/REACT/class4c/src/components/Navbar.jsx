//  
//  import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
    return (
        // <nav className="navbar">
        //     <ul className="nav-list">
        //         <li><Link to="/">Home</Link></li>
        //         <li><Link to="/about">About</Link></li>
        //         <li><Link to="/contact">Contact</Link></li>
        //     </ul>
        // </nav>
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <NavLink to="/" exact="true" activeClassName="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;