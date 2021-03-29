import React, { useEffect } from 'react'
import FatalError from '../500'
import Tmp from './Tmp'
import { useState } from 'react'
import MensajeVacio from './MensajeVacio'

const TmpContainer = () => {

    const [tmp, setTmp] = useState([])
    const [error, setError] = useState(null)
    const [vacio, setVacio] = useState(false)

    const getTmp = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/tmp', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'token': localStorage.getItem('token')
                }
            });
            const data = await response.json();
            if (data.error == "No existen Tmp") {
                setVacio(true)

            } else {
                setTmp(data.data)
                setVacio(false)
            }
        } catch (error) {
            setError(error)
        }
    }

    useEffect(() => {
        getTmp();
    })


    if (error)
        return <FatalError />

    if (vacio) {
        return <MensajeVacio />
    } else {
        return <Tmp
            data={tmp}
        />
    }

}

export default TmpContainer