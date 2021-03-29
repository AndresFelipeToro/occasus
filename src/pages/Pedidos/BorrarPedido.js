import React, { useState } from "react";
import BotonBorrarPedido from '../../components/Pedidos/BotonBorrarPedido'
import alertify from 'alertifyjs'

const BorrarPedido = ({ codigo_pedido }) => {

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

            let res = await fetch(`http://localhost:8000/api/pedidos/${codigo_pedido}`, config)

            let json = await res.json()

        } catch (error) {
            alertify.alert('Occásus Informa', error);
        }
    }

    return (
        <>
            <BotonBorrarPedido
                onSubmit={handleSubmit} 
            />
        </>
    )
}

export default BorrarPedido