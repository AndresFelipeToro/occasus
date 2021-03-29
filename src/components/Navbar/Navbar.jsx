import React from "react";
import logo from '../../images/logo2.png'
import { Link } from 'react-router-dom'

const Navigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/pedidos">
            <img src={logo} width='50px' />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/productos">
                        Productos
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/mesas">
                        Mesas
                    </Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/pedidos">
                        Pedidos
                    </Link>
                </li>
            </ul>
            <span>
                <Link className="nav-link" to="/login">
                    Salir
                </Link>
            </span>
        </div>
    </nav>
)

export default Navigation
