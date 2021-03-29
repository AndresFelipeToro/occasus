import React, { useState } from "react";
import BotonGuadarPedido from '../../components/Pedidos/BotonGuadarPedido'
import alertify from 'alertifyjs'
import { Redirect } from "react-router-dom";

const GuardarPedido = () => {

    const handleSubmit = async (e) => {
        e.preventDefault()
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

            let res = await fetch('http://localhost:8000/api/pedidos/tmp', config)

            let json = await res.json()
            if (json.status === 'success') {
                alertify.alert('Occásus Informa', 'Pedido Guardado Exitosamente', function () { alertify.success('Pedido Guardado'); });
                var history = require('browser-history')
                history('/pedidos')
                window.location.reload(true);
            } else {
                alertify.alert('Occásus Informa', 'No se pudo Guardar el Pedido', function () { alertify.success('Error al Guardar Pedido'); });
            }

        } catch (error) {
            alertify.alert('Occásus Informa', error);
        }
    }

    return (
        <>
            <BotonGuadarPedido
                onSubmit={handleSubmit}
            />
        </>
    )
}

export default GuardarPedido