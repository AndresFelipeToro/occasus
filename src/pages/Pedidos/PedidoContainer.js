import React, { useEffect } from 'react'
import Loading from '../../components/Loading'
import FatalError from '../500'
import Pedidos from './Pedidos'
import PedidosVacio from '../Pedidos/PedidosVacio'
import { useState } from 'react'

const PedidoContainer = () => {

    const [pedidos, setPedidos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [vacio, setVacio] = useState(false)

    const getPedidos = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/pedidos', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'token': localStorage.getItem('token')
                }
            });
            const data = await response.json();
            if (data.error == "No existen pedidos") {
                setVacio(true)
                setLoading(false)
            } else {
                setPedidos(data.data)
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
        getPedidos();
    })

    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    if (vacio) {
        return <PedidosVacio />
    } else {
        return <Pedidos
            data={pedidos}
        />
    }
}

export default PedidoContainer