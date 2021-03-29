import { useState, useEffect } from 'react'

const FunctionGet = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [vacio, setVacio] = useState(null)


    useEffect(() => {
        const fetchResource = async () => {
            try {
                let config = {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'token': localStorage.getItem('token')
                    }
                }
                let res = await fetch(url, config)
                let data = await res.json()
                if (data.error == "No existen productos") {
                    setVacio(data.error)
                    setLoading(false)
                } else {
                        setData(data.data)
                        setLoading(false)
                }
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    }, [url])

    return { data, loading, error, vacio }
}


export default FunctionGet