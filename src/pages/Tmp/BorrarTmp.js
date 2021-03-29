import React, { useState } from "react";
import BorrarTmpBoton from '../../components/Tmp/BorrarTmp'
import alertify from 'alertifyjs'

const BorrarTmp = ({ codigo_tmp }) => {

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

            let res = await fetch(`http://localhost:8000/api/tmp/${codigo_tmp}`, config)

            let json = await res.json()
            console.log(json)
            if (json.status === 'success') {
                alertify.alert('Occásus Informa', 'Producto eliminado del pedido', function () { alertify.success('Producto Eliminado'); });
            } 

        } catch (error) {
            alertify.alert('Occásus Informa', error);
        }
    }

    return (
        <>
            <BorrarTmpBoton
                onSubmit={handleSubmit} 
            />
        </>
    )
}

export default BorrarTmp