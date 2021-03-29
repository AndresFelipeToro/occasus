import React from 'react'

const GuardarPedidoMesa = ({ onSumbitPedido }) => {

    return (
        <button type="submit" className="btn btn-primary btn-lg" onClick={onSumbitPedido}>Confirmar Mesa</button>
    )

}

export default GuardarPedidoMesa