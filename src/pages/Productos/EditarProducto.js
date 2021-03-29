import React, {  useState } from "react";
import EditarProductoForm from '../../components/Productos/EditarProductoForm'
import alertify from 'alertifyjs'

const EditarProducto=({codigo_producto, descripcion, lineaprod, existencia_inicial, costounitario, estado})=>{

    const [status, setStatus]=useState({
        descripcion:descripcion, 
        lineaprod:lineaprod, 
        existencia_inicial:existencia_inicial, 
        costounitario:costounitario, 
        estado:estado
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

            let res = await fetch(`http://localhost:8000/api/productos/${codigo_producto}`, config)

            let json = await res.json()
            console.log(json)
            if (json.status === 'success') {
                alertify.alert('Occásus Informa', 'Producto actualizado correctamente', function () { alertify.success('Producto Actualizado'); });
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
                <EditarProductoForm
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