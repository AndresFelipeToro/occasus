import React from 'react'
import '../components/styles/Error.css'
import { Link } from 'react-router-dom'

const Notfound = () => (
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h1>400</h1>
                <h2>Página no Encontrada</h2>
            </div>
            <Link to="/pedidos">
                Inicio
            </Link>
        </div>
    </div>
)

export default Notfound