import './Menu.css';
import { NavLink } from 'react-router-dom';

function Menu()
{
    return(
        <div>
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive ? "nav-link-active" : "nav-link" }>Home page</NavLink></li>
                <li><NavLink to="/about" className={({isActive}) => isActive ? "nav-link-active" : "nav-link" }>About</NavLink></li>
                <li><NavLink to={{pathname:"/games"}}className={({isActive}) => isActive ? "nav-link-active" : "nav-link" }>Games</NavLink></li>
            </ul>
        </div>
    )
}
export default Menu;