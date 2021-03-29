import React, { useEffect } from 'react'
import FatalError from '../500'
import { useState } from 'react'

const GetMesas = () => {

    const [mesas, setMesas] = useState([])
    const [error, setError] = useState(null)

    const getMesas = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/mesas/pedidos', {
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
                setMesas([])
            } else {
                setMesas(data.data)
            }

        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getMesas();
    })

    if (error)
        return <FatalError />

    return <Mesas
        data={tmp}
    />
}

export default GetMesas