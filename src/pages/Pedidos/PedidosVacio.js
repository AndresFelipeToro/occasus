import React from 'react'
import '../../components/styles/Error.css'
import AppBarPedidosVacios from '../../components/Pedidos/AppBarPedidosVacios'
import Navbar from '../../components/Navbar/Navbar'

const PedidosVacio = () => (
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h2>Crea un Pedido</h2>
            </div>
        </div>
        <Navbar/>
        <AppBarPedidosVacios/>
    </div>
)

export default PedidosVacio