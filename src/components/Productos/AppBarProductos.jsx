import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import { green } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import ProductoNew from '../../pages/Productos/ProductoNew'
import InputBase from '@material-ui/core/InputBase';

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

const useStyles2 = makeStyles((theme) => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function AppBarProductos() {
    const classes = useStyles();
    const classes2 = useStyles2();

    return (

        <React.Fragment>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                <Toolbar>
                    <Fab color="secondary" aria-label="add" className={classes.fabButton2} >
                        <ProductoNew/>
                    </Fab>
                    <div className={classes2.grow} />
                    <div className={classes2.search}>
                        <div className={classes2.searchIcon}>
                            <SearchIcon onClick={'ss'} />
                        </div>
                        <InputBase
                            placeholder="Buscar..."
                            classes={{
                                root: classes2.inputRoot,
                                input: classes2.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>

                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}