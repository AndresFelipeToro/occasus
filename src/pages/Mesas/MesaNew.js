import React, { useState } from "react";
import MesaForm from '../../components/Mesas/MesaForm'
import alertify from 'alertifyjs'


const MesaNew = () => {


    const [status, setStatus] = useState({ nomencaltura: '', observacion: '', estado_mesa: '' });
    const [show, setShow] = useState(false);

    const handleChange = (e) => {
        let newStatus = {
            ...status,
            [e.target.name]: e.target.value
        }
        setStatus(newStatus)
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'token': localStorage.getItem('token')

                },
                body: JSON.stringify(status)
            }

            let res = await fetch('http://localhost:8000/api/mesas', config)

            let json = await res.json()
            console.log(json)
            if (json.status === 'success') {
                handleClose()
                alertify.alert('Occásus Informa', 'Mesa creada correctamente', function () { alertify.success('Mesa Creada'); });
            } else {
                alertify.alert('Occásus Informa', json.error);
            }

        } catch (error) {
            setStatus({
                error
            })
        }
    }


    return <>
        <MesaForm
            onChange={handleChange}
            form={status}
            onSubmit={handleSubmit}
            abrirForm={handleShow}
            cerrarForm={handleClose}
            show={show} />
    </>


}


export default MesaNew