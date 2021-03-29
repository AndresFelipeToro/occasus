import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { green } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    root: {
        flexShrink: 0,
        width: '100%',

    },
    container: {
        maxHeight: 240,
        flexContainer: {
            display: 'flex',
            alignItems: 'center',
            boxSizing: 'border-box',
        },
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: 360,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    margin: {
        margin: '1em',
    },
    fabGreen: {
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[600],
        },
    },
    grow: {
        flexGrow: 1,
    },
    fabButton2: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        background: '#ff4e00',
        background: 'linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)'

    },
});



export default function AppBarPedidosVacios() {
    const classes = useStyles();
    return (

        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Fab className={classes.fabButton2} >
                        <Link to="/new/pedido">
                            <AddIcon />
                        </Link>
                    </Fab>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}