import React from "react"
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
                <Link href="/" className="logo"> <h1>ANTOSHOP</h1> </Link>
                <ul className="menu">
                    <li> </li>
                </ul>
        </nav>
    )
}

export default NavBar