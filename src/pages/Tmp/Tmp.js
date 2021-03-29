import React, { Fragment } from 'react'
import TablaTmp from '../../components/Tmp/TablaTmp'

const Tmp = ({ data }) => (
    <Fragment>
        <TablaTmp
            rows={data}
        />
    </Fragment>
)

export default Tmp