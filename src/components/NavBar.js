import CartWidget from './CartWidget'
import {Link} from "react-router-dom"

const NavBar = () =>
    <header>
        <Link to="/">
            <h1>SYSTEMIC EIRL</h1>
        </Link>

        <nav>
            <Link to="/categoria/1">CATEGORIA 1</Link>
            <Link to="/categoria/2">CATEGORIA 2</Link>
            <CartWidget/>
        </nav>
    </header>

export default NavBar