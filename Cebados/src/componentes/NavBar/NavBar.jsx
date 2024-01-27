import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/" className="logo-container">
        <img src="..//..//../public/img/matelogopag.jpg" alt="Logo" className="logo-image" />
        <h1 id="logo">Cebados</h1>
      </Link>

        <nav>
            <ul>

                <li>
                  <NavLink to="/categoria/2">
                    Mates
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/3">
                    Termos
                  </NavLink>
                </li>

            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

export default NavBar