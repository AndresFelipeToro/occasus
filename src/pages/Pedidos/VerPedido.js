import React, {  useState, useEffect } from "react";
import VerPedidoForm from '../../components/Pedidos/VerPedidoForm'

const VerPedido=({codigo_pedido})=>{

    const [status, setStatus]= useState([])

    const getVerPedidos = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/pedidos/verPedido/${codigo_pedido}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'token': localStorage.getItem('token')
                }
            });
            const data = await response.json();
            if (data.error == "No existen pedidos") {

            } else {
                setStatus(data.data)
                console.log(data)
            }

        } catch (error) {
            setStatus(error)
        }
    }

      
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        getVerPedidos();
    },[show])


        return (
            <>
                <VerPedidoForm
                    form={status}
                    abrirForm={handleShow}
                    cerrarForm={handleClose}
                    show={show}
                 />
            </>
        )
}

export default VerPedido