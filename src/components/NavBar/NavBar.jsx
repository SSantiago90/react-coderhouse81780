import { Link } from "react-router"
import CartWidget from "./CartWidget"
import './NavBar.css';

function NavBar(){
  return (
    <nav className="nav-menu">

        <Link to="/">
           <span className="nav-logo">miTienda</span>
        </Link>

      <ul className="nav-links">
        <li>
         <Link to="/category/accesorios">
         Accesorios
         </Link>
        </li>
        <li>
         <Link to="/category/electronica">Electrónica</Link>
        </li>
        <li>
         <Link to="/category/redes">Redes</Link>
        </li>
        <li>
         <Link to="/category/almacenamiento">Almacenamiento</Link>
        </li>        
      </ul>     
      <span><CartWidget/></span>
    </nav>
  )
}

export default NavBar