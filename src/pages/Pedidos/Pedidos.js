import React, { Fragment } from 'react'
import TablaPedidos from '../../components/Pedidos/TablaPedidos'
import Navbar from '../../components/Navbar/Navbar'

const Pedidos = ({ data }) => (
    <Fragment>
        <Navbar />
        <br />
        <TablaPedidos
            rows={data}
        />
    </Fragment>
)

export default Pedidos