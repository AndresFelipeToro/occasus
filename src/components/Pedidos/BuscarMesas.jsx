import React, { useState, useEffect } from 'react'
import OptionMesas from './OptionMesas'

const BuscarMesas = () => {

    const [mesas, setMesas] = useState([])
    const [mesaId, setMesaId] = useState()
    const [error, setError] = useState(null)

    var f = new Date();
    let fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate()

    const mesaChangeHandler = (e) => {
        setMesaId(e.target.value)
    }
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

            } else {
                setMesas(data.data)
            }

        } catch (error) {
            setError(error)
        }

    }

    const onSumbitPedido = async (e) => {
        e.preventDefault();
        const pedido = {
            mesa_pedido: mesaId,
            fecha_pedido: fecha
        }
        savePedido(pedido)
    }

    const savePedido = async (pedido) => {
        const pedidoString = JSON.stringify(pedido);
        const response = await fetch('http://localhost:8000/api/pedidos', {
            method: 'POST',
            body: pedidoString,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'token': localStorage.getItem('token')
            }
        });
        const responseJSON = await response.json();
        if (responseJSON.status === 'success') {
            alertify.alert('Occásus Informa', 'Mesa asignada a pedido', function () { alertify.success('Mesa Asignada'); });
        } else {
            alertify.alert('Occásus Informa', responseJSON.error);
        }
    }

    useEffect(() => {
        getMesas();
    })

    return <>
        <OptionMesas
            mesaChangeHandler={mesaChangeHandler}
            mesaId={mesaId}
            mesas={mesas} />
        <BotonGuardarPedidoMesa
            onSumbitPedido={onSumbitPedido} />
    </>
}

export default BuscarMesas
