import React from "react";
import { Tooltip } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import Pageview from '@material-ui/icons/Pageview';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import { green } from "@material-ui/core/colors";
import { makeStyles } from '@material-ui/core/styles';


const VerPedidoForm = ({ form, cerrarForm, abrirForm, show }) => {

    let precioTotalFactura = 0

    const useStyles = makeStyles({
        margin: {
            margin: '1em',
        }
    });

    const classes = useStyles();
    return (
        <>
            <Tooltip title="Ver Pedido" aria-label="add">
                <Fab className={classes.margin} size="small">
                    <Pageview onClick={abrirForm} />
                </Fab>
            </Tooltip>

            <form>
                <Modal show={show} onHide={cerrarForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Información Pedido</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <TableContainer component={Paper}>
                            <Table size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>DESCRIPCIÓN</TableCell>
                                        <TableCell align="right">CANT.</TableCell>
                                        <TableCell align="right">PRECIO UNITARIO</TableCell>
                                        <TableCell align="right">PRECIO TOTAL</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {form.map((forms) => {
                                        precioTotalFactura += (forms.costounitario * forms.cantidad_item)
                                        return <>
                                            < TableRow key={forms.codigo_pedido} >
                                                <TableCell component="th" scope="row">
                                                    {forms.descripcion}
                                                </TableCell>
                                                <TableCell align="right">{forms.cantidad_item}</TableCell>
                                                <TableCell align="right">{forms.costounitario}</TableCell>
                                                <TableCell align="right">{(forms.costounitario) * (forms.cantidad_item)}</TableCell>
                                            </TableRow>
                                        </>
                                    })}
                                    <TableCell align="right" colSpan="3">PRECIO TOTAL</TableCell>
                                    <TableCell align="right">{precioTotalFactura}</TableCell>
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={cerrarForm} >
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    )
}

export default VerPedidoForm