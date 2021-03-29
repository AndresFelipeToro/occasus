import React, { Component } from "react";
import { Tooltip } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';


const BorrarMesa=({onSubmit})=> {

    const useStyles = makeStyles({
        margin: {
            margin: '1em',
        },
    });

    const classes = useStyles();
        return (
            <>
                <Tooltip title="Eliminar Mesa" aria-label="add">
                    <Fab color="secondary" size="small" className={classes.margin}>
                        <DeleteIcon onClick={onSubmit} />
                    </Fab>
                </Tooltip>
            </>
        )
    }

export default BorrarMesa