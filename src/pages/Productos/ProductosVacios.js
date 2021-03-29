import React from 'react'
import '../../components/styles/Error.css'
import AppBarProductosVacios from '../../components/Productos/AppBarProductosVacios'
import Navbar from '../../components/Navbar/Navbar'

const ProductosVacio = () => (
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h2>Crea un Producto</h2>
            </div>
        </div>
        <Navbar/>
        <AppBarProductosVacios/>
    </div>
)

export default ProductosVacio