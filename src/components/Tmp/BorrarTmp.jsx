import React, { Component } from "react";
import { Tooltip } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';


const BorrarTmp=({onSubmit})=> {

    const useStyles = makeStyles({
        margin: {
            margin: '1em',
        },
    });

    const classes = useStyles();
        return (
            <>
                <Tooltip title="Borrar Producto del Pedido" aria-label="add">
                    <Fab color="primary" size="small" >
                        <DeleteIcon onClick={onSubmit} />
                    </Fab>
                </Tooltip>
            </>
        )
    }

export default BorrarTmp