import React, { Fragment } from 'react'
import TablaMesas from '../../components/Mesas/TablaMesas'
import Navbar from '../../components/Navbar/Navbar'

const Mesas = ({ data }) => (
    <Fragment>
        <Navbar />
        <br />
        <TablaMesas
            rows={data}
        />
    </Fragment>
)

export default Mesas