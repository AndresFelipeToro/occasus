import React, { Component } from "react";
import { Tooltip } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import "bootstrap/dist/css/bootstrap.min.css";
import MonetizationOn from '@material-ui/icons/MonetizationOn';
import { makeStyles } from '@material-ui/core/styles';


const BotonPagar=({onSubmit})=> {

    const useStyles = makeStyles({
        margin: {
            margin: '1em',
        },
    });

    const classes = useStyles();
        return (
            <>
                <Tooltip title="Pagar Pedido" aria-label="add">
                    <Fab color="secondary" size="small" >
                        <MonetizationOn onClick={onSubmit} />
                    </Fab>
                </Tooltip>
            </>
        )
    }

export default BotonPagar