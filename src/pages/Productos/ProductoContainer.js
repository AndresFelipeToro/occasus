import React, { useEffect } from 'react'
import Loading from '../../components/Loading'
import FatalError from '../500'
import Productos from './Productos'
import FunctionGet from '../../providers/FunctionGet'
import ProductosVacios from '../Productos/ProductosVacios'
import { useState } from 'react'

const ProductoContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [vacio, setVacio] = useState(false)

    const getProductos = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/productos', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'token': localStorage.getItem('token')
                }
            });
            const data = await response.json();
            if (data.error == "No existen productos") {
                setVacio(true)
                setLoading(false)
            } else {
                setProductos(data.data)
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
        getProductos();
    })

    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    if (vacio) {
        return <ProductosVacios />
    } else {
        return <Productos
            data={productos}
        />
    }
}

export default ProductoContainer