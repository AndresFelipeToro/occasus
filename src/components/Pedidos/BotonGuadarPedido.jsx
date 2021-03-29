import React, { Component } from "react";
import { Tooltip } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import "bootstrap/dist/css/bootstrap.min.css";
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
import { makeStyles } from '@material-ui/core/styles';


const GuardarPedidoBoton=({onSubmit})=> {

    const useStyles = makeStyles({
        margin: {
            margin: '1em',
        },
    });

    const classes = useStyles();
        return (
            <>
                <Tooltip title="Guardar Pedido" aria-label="add">
                    <Fab color="primary" size="small" >
                        <AssignmentTurnedIn onClick={onSubmit} />
                    </Fab>
                </Tooltip>
            </>
        )
    }

export default GuardarPedidoBoton