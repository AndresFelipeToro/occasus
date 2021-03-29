import React, { useState } from "react";
import BorrarMesaBoton from '../../components/Mesas/BorrarMesa'
import alertify from 'alertifyjs'

const BorrarProducto = ({ codigo_mesa }) => {

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

            let res = await fetch(`http://localhost:8000/api/mesas/${codigo_mesa}`, config)

            let json = await res.json()
            console.log(json)
            if (json.status === 'success') {
                alertify.alert('Occásus Informa', 'Mesa eliminada correctamente', function () { alertify.success('Mesa Eliminada'); });
            } else {
                alertify.alert('Occásus Informa', json.error,function(){ alertify.success('La mesa tiene asociados pedidos')});                
            }

        } catch (error) {
            alertify.alert('Occásus Informa', error);
        }
    }

    return (
        <>
            <BorrarMesaBoton
                onSubmit={handleSubmit} 
            />
        </>
    )
}

export default BorrarProducto