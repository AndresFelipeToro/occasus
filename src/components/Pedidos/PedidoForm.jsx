import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import FatalError from '../../pages/500'
import alertify from 'alertifyjs'
import { Tooltip } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import BorrarTmp from '../../pages/Tmp/BorrarTmp'
import TmpContainer from '../../pages/Tmp/TmpContainer'
import GuardarPedido from '../../pages/Pedidos/GuardarPedido'

const PedidoForm = () => {

    const useStyles = makeStyles({
        table: {
            minWidth: 650,
        },
    });

    const [productos, setProductos] = useState([])
    const [mesas, setMesas] = useState([])
    const [error, setError] = useState(null)
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    var f = new Date();
    let fecha = f.getFullYear() + "-" + (f.getMonth() + 1) + "-" + f.getDate()

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

    const getProductos = async () => {
        try {
            const response = await fetch('http://localhost:8000/api/productos', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'token': localStorage.getItem('token')
                }
            });
            const data = await response.json();
            if (data.error == "No existen productos") {

            } else {
                setProductos(data.data)
            }

        } catch (error) {
            setError(error)
        }
    }

  
    const [mesaId, setMesaId] = useState()

    const mesaChangeHandler = (e) => {
        setMesaId(e.target.value)
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
    },[])

    useEffect(()=>{
        getProductos();
    }, [productos])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(3);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [cantidad_tmp, setCantidadTmp] = useState(1)

    const cantidadTmpChangeHandler = (e) => {
        setCantidadTmp(e.target.value)
    }

    const guardarTmp = async (codigo, cantidad, precio) => {
        const tmp = {
            id_producto: codigo,
            cantidad_tmp: cantidad,
            precio_tmp: precio
        }
        saveTmp(tmp)
    }

    const saveTmp = async (tmp) => {
        const pedidoString = JSON.stringify(tmp);
        const response = await fetch('http://localhost:8000/api/tmp', {
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
        console.log(responseJSON)
    }

    if (error)
        return <FatalError />


    return (
        <>
            <Navbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="well well-sm">
                            <form className="form-horizontal" onSubmit={onSumbitPedido}>
                                <fieldset>
                                    <legend className="text-center header">Nuevo Pedido</legend>
                                    <br />
                                    <div className="form-row">
                                        <span className="col-md-2 col-md-offset-2 text-center"></span>
                                        <div className="col-md-4">
                                            <select
                                                className="form-control"
                                                id="lineaprod"
                                                name="lineaprod"
                                                required
                                                value={mesaId}
                                                onChange={mesaChangeHandler}

                                            >
                                                <option value="">Selecciona una Mesa</option>
                                                {mesas.map((mesa) => {
                                                    return (
                                                        < option value={mesa.codigo_mesa} key={mesa.codigo_mesa}> {mesa.nomenclatura}</option>
                                                    )
                                                })}
                                            </select>

                                        </div>

                                        <span className="col-md-offset-2 text-center"></span>
                                        <br />
                                        <div className="col-md-4">
                                            <input id="fname" name="name" type="text" placeholder="First Name" className="form-control text-center" value={fecha} disabled />
                                        </div>

                                    </div>
                                    <br />
                                    <div className="form-group">
                                        <div className="col-md-11 text-center">
                                            <button type="submit" className="btn btn-primary btn-lg">Confirmar Mesa</button>
                                            <span className="col-md-2 col-md-offset-2 text-center"></span>
                                            <Tooltip title="Adicionar Productos" aria-label="add">
                                                <Fab color="primary" size="small">
                                                    <AddIcon onClick={handleShow} />
                                                </Fab>
                                            </Tooltip>
                                            <span className="col-md-2 col-md-offset-2 text-center"></span>
                                            <GuardarPedido />
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>

                <form>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Adicionar Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Producto</th>
                                            <th>Categoría</th>
                                            <th>Precio</th>
                                            <th>Agregar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {productos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((producto) => {
                                            var textLinea
                                            if (producto.lineaprod == 1) {
                                                textLinea = 'Michelada'
                                            } else if (producto.lineaprod == 2) {
                                                textLinea = 'Bebida'
                                            } else if (producto.lineaprod == 3) {
                                                textLinea = 'Combinada'
                                            } else if (producto.lineaprod == 4) {
                                                textLinea = 'Licor'
                                            } else if (producto.lineaprod == 5) {
                                                textLinea = 'Otros Gustos'
                                            }

                                            if (producto.estado == 'A') {
                                                return (
                                                    <TableRow key={producto.codigo_producto}>
                                                        <td>{producto.descripcion}</td>
                                                        <td>{textLinea}</td>
                                                        <td>{producto.costounitario}</td>
                                                        <td className='text-center'>
                                                            <Tooltip title="Adicionar Producto" aria-label="add">
                                                                <Fab color="secondary" size="small">
                                                                    <AddIcon onClick={() => {
                                                                        guardarTmp(producto.codigo_producto, cantidad_tmp, producto.costounitario)
                                                                    }} />
                                                                </Fab>
                                                            </Tooltip>
                                                        </td>
                                                    </TableRow>
                                                )
                                            }
                                        })}
                                        <th>Cantidad</th>
                                        <td>
                                            <input
                                                type="number"
                                                min="1"
                                                max="100"
                                                maxLength="2"
                                                required
                                                name="cantidad"
                                                value={cantidad_tmp}
                                                onChange={cantidadTmpChangeHandler}
                                            />
                                        </td>
                                    </tbody>
                                </Table>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} >
                                Cerrar
                        </Button>
                        </Modal.Footer>
                        <TablePagination
                            rowsPerPageOptions={[3, 6, 9]}
                            component="div"
                            count={productos.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Modal>
                </form>
                <React.Fragment>
                    <TmpContainer></TmpContainer>
                </React.Fragment>
            </div>
        </>
    )
}

export default PedidoForm