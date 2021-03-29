import React from 'react'
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { green } from '@material-ui/core/colors';
import AppBarProductos from '../../components/Productos/AppBarProductosVacios'
import EditarProducto from '../../pages/Productos/EditarProducto'
import BorrarProducto from '../../pages/Productos/BorrarProducto'


const columns = [
    { id: 'descripcion', label: 'Descripción', align: 'left', },
    {
        id: 'lineaprod',
        label: 'Línea de Producto',
        minWidth: 120,
        align: 'right',
    },
    {
        id: 'existencia_inicial',
        label: 'Existencia Inicial',
        minWidth: 150,
        align: 'right',
    },
    {
        id: 'existencia_actual',
        label: 'Existencia Actual',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'costounitario',
        label: 'Costo Unitario',
        minWidth: 150,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'estado',
        label: 'Estado',
        minWidth: 120,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'acciones',
        label: 'Acciones',
        minWidth: 100,
        align: 'center',

    },
];

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



export default function TablaProductos({ rows }) {
    const classes = useStyles();
    const classes2 = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(4);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>

            <br />
            <br />
            <Paper component={Paper}>
                <TableContainer className={classes.container} >
                    <Table stickyHeader aria-label="sticky table" size="small">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                var textLinea
                                var textEstado
                                if(row.estado=='A'){
                                    textEstado='Activo'
                                }else{
                                    textEstado='Inactivo'
                                }

                                if (row.lineaprod == 1) {
                                    textLinea = 'Michelada'
                                } else if (row.lineaprod == 2) {
                                    textLinea = 'Bebida'
                                } else if (row.lineaprod == 3) {
                                    textLinea = 'Combinada'
                                } else if (row.lineaprod == 4) {
                                    textLinea = 'Licor'
                                } else if (row.lineaprod == 5) {
                                    textLinea = 'Otros Gustos'
                                }
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.codigo_producto}>
                                        <TableCell align="left">{row.descripcion}</TableCell>
                                        <TableCell align="right">{textLinea}</TableCell>
                                        <TableCell align="right">{row.existencia_inicial}</TableCell>
                                        <TableCell align="right">{row.existencia_actual}</TableCell>
                                        <TableCell align="right">{row.costounitario}</TableCell>
                                        <TableCell align="right">{textEstado}</TableCell>
                                        <TableCell align="center">

                                            <BorrarProducto
                                                codigo_producto={row.codigo_producto}
                                            />


                                            <EditarProducto
                                                codigo_producto={row.codigo_producto}
                                                descripcion={row.descripcion}
                                                lineaprod={row.lineaprod}
                                                existencia_inicial={row.existencia_inicial}
                                                costounitario={row.costounitario}
                                                estado={row.estado}
                                            />
                                        </TableCell>

                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[4, 8, 12]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <br />
            <React.Fragment>
                <AppBarProductos />
            </React.Fragment>
        </div>
    );
}