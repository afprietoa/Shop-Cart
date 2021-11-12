import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Nav.css';

export const Navbar = () => {
    return (
        <div>
            <div className="header">
                <nav>
                <Link className="link" to="/Registro">Add_To_Cart</Link>
                <Link className="link" to="/Listar">Shop_Cart</Link>
                </nav>
            </div>
            <hr/>
        </div>
    )
}
