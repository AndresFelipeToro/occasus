import React, {  useState } from "react";
import EditarMesaForm from '../../components/Mesas/EditarMesaForm'
import alertify from 'alertifyjs'

const EditarProducto=({codigo_mesa, nomenclatura, observacion})=>{

    const [status, setStatus]=useState({
        nomenclatura:nomenclatura, 
        observacion:observacion
    })
    
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
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'token': localStorage.getItem('token')

                },
                body: JSON.stringify(status)
            }

            let res = await fetch(`http://localhost:8000/api/mesas/${codigo_mesa}`, config)

            let json = await res.json()
            console.log(json)
            if (json.status === 'success') {
                alertify.alert('Occásus Informa', 'Mesa actualizada correctamente', function () { alertify.success('Mesa Actualizada'); });
                handleClose()

            } else {
                alertify.alert('Occásus Informa', json.error);
            }

        } catch (error) {
           setStatus({
                error
            })
        }
    }

        return (
            <>
                <EditarMesaForm
                    onChange={handleChange}
                    form={status}
                    onSubmit={handleSubmit}
                    abrirForm={handleShow}
                    cerrarForm={handleClose}
                    show={show} />
            </>
        )
}

export default EditarProducto