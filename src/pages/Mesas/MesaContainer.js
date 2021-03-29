import React from 'react'
import Loading from '../../components/Loading'
import FatalError from '../500'
import Mesas from './Mesas'
import GetMesas from '../../providers/GetMesas'
import MesasVacias from '../Mesas/MesasVacias'
import { useState, useEffect } from 'react'

const MesaContainer = () => {

    const [mesas, setMesas] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [vacio, setVacio] = useState(false)

    const getMesas = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/mesas', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'token': localStorage.getItem('token')
                }
            });
            const data = await response.json();
            if (data.error == "No existen mesas") {
                setVacio(true)
                setLoading(false)
            } else {
                setMesas(data.data)
                setLoading(false)
                setVacio(false)
            }

        } catch (error) {
            setLoading(false)
            setVacio(false)
            setError(error)
        }
    }

    useEffect(() => {
        getMesas();
    });

    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    if (vacio) {
        return <MesasVacias />
    } else {
        return <Mesas data={mesas} />
    }
}

export default MesaContainer