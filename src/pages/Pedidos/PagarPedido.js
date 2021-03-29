import React, { useState } from "react";
import BotonPagar from '../../components/Pedidos/BotonPagar'
import alertify from 'alertifyjs'

const PagarPedido = ({ codigo_pedido }) => {

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let config = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'token': localStorage.getItem('token')
                }
            }

            let res = await fetch(`http://localhost:8000/api/pedidos/pagar/${codigo_pedido}`, config)

            let json = await res.json()
            if (json.status === 'success') {
                alertify.alert('Occásus Informa', 'Pedido Pagado Correctamente', function () { alertify.success('Pedido Pagado'); });
            } else {
                alertify.alert('Occásus Informa', json.error);
            }

        } catch (error) {
            alertify.alert('Occásus Informa', error);
        }
    }

    return (
        <>
            <BotonPagar
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default PagarPedido