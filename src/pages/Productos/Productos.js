import React, { Fragment } from 'react'
import TablaProductos from '../../components/Productos/TablaProductos'
import Navbar from '../../components/Navbar/Navbar'

const Productos = ({ data }) => (
    <Fragment>
        <Navbar />
        <br />
        <TablaProductos
            rows={data}
        />
    </Fragment>
)

export default Productos