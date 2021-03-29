import React, { useState } from "react";
import BorrarProductoBoton from '../../components/Productos/BorrarProducto'
import alertify from 'alertifyjs'

const BorrarProducto = ({ codigo_producto }) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let config = {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'token': localStorage.getItem('token')
                }
            }

            let res = await fetch(`http://localhost:8000/api/productos/${codigo_producto}`, config)

            let json = await res.json()
            console.log(json)
            if (json.status === 'success') {
                alertify.alert('Occásus Informa', 'Producto eliminado correctamente', function () { alertify.success('Producto Eliminado'); });
            } else {
                alertify.alert('Occásus Informa', json.error, function(){ alertify.success('El producto tiene asociados pedidos')});
            }

        } catch (error) {
            alertify.alert('Occásus Informa', error);
        }
    }

    return (
        <>
            <BorrarProductoBoton
                onSubmit={handleSubmit} 
            />
        </>
    )
}

export default BorrarProducto