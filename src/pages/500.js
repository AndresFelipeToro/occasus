import React from 'react'
import '../components/styles/Error.css'
import { Link } from 'react-router-dom'

const FatalError = () => (
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>500</h1>
                <h2>Error Inesperado</h2>
            </div>
            <Link to="/pedidos">
                Inicio
            </Link>
        </div>
    </div>
)

export default FatalError