import { NavLink } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
    return (
        <div >
            <nav className="navbar">
                <ul className="Nav-List">
                    <li><NavLink to="/" className="active-link">Admin</NavLink></li>
            
                    <li><NavLink to="/user" className="active-link">User</NavLink></li>
                </ul>

            </nav>
        </div>
    )
}
export default Navbar;