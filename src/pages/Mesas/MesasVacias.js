import React from 'react'
import '../../components/styles/Error.css'
import AppBarMesasVacias from '../../components/Mesas/AppBarMesasVacias'
import Navbar from '../../components/Navbar/Navbar'

const MesasVacias = () => (
    <div id="notfound">
        <div className="notfound">
            <div className="notfound-404">
                <h2>Crea una Mesa</h2>
            </div>
        </div>
        <Navbar/>
        <AppBarMesasVacias/>
    </div>
)

export default MesasVacias