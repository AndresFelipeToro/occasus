import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import BorrarTmp from '../../pages/Tmp/BorrarTmp'

const TablaTmp=({rows})=>{

    let precioTotalFactura=0;

    return(
        <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
            <TableHead>
                <TableRow>
                    <TableCell>DESCRIPCIÓN</TableCell>
                    <TableCell align="right">CANT.</TableCell>
                    <TableCell align="right">PRECIO UNITARIO</TableCell>
                    <TableCell align="right">PRECIO TOTAL</TableCell>
                    <TableCell align="right">ACCIÓN</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((tmp) => {
                    precioTotalFactura += (tmp.costounitario * tmp.cantidad_tmp)
                    return <>
                        < TableRow key={tmp.id_tmp} >
                            <TableCell component="th" scope="row">
                                {tmp.descripcion}
                            </TableCell>
                            <TableCell align="right">{tmp.cantidad_tmp}</TableCell>
                            <TableCell align="right">{tmp.costounitario}</TableCell>
                            <TableCell align="right">{(tmp.costounitario) * (tmp.cantidad_tmp)}</TableCell>
                            <TableCell align="right">
                                <BorrarTmp
                                    codigo_tmp={tmp.id_tmp}
                                />
                            </TableCell>
                        </TableRow>
                    </>
                })}
                <TableCell align="right" colSpan="3">PRECIO TOTAL</TableCell>
                <TableCell align="right">{precioTotalFactura}</TableCell>
            </TableBody>
        </Table>
    </TableContainer>
    )
}

export default TablaTmp