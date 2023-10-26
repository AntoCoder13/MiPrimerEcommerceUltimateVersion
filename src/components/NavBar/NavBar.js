import React from "react"
import { Link } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link href="/" className="logo"> <h1>ANTOSHOP</h1> </Link>
            <ul className="menu">
                <li><Link className="menu-link" to="/">Inicio</Link></li>

                <li><Link className="menu-link submenu" to="/productos/produce">Produce</Link></li>
                <li><Link className="menu-link submenu" to="/productos/diary">Diary</Link></li>
                <li><Link className="menu-link submenu" to="/productos/bakery">Bakery</Link></li>
                <li><Link className="menu-link submenu" to="/productos/cannedgoods">Canned goods</Link></li>

                <li><Link className="menu-link" to="/Nosotros">Nosotros</Link></li>
                <li><Link className="menu-link" to="/Contactanos">Contacto</Link></li>
                <li><Link className="menu-link" to="/Encuentranos">Encuentranos</Link></li>
                <li><CartWidget /></li>
            </ul>
        </nav>
    )
}

export default NavBar