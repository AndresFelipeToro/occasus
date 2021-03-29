import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { green } from '@material-ui/core/colors';
import './styles/CardMesa.css'
import Card from 'react-bootstrap/Card'
import AppBarMesas from './AppBarMesasVacias'
import EditarMesa from '../../pages/Mesas/EditarMesa'
import BorrarMesa from '../../pages/Mesas/BorrarMesa'

const useStyles = makeStyles({
    root: {
        flexShrink: 0,
        width: '100%',

    },
    container: {
        maxHeight: 240,
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
});


export default function TablaMesas({ rows }) {
    const classes = useStyles();
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
            <Paper component={Paper}>
                <TableContainer className={classes.container} >
                    <Table size="small">
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                if (row.estado_mesa=='L') {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.codigo_mesa}>
                                            <TableCell>
                                                <Card style={{ width: '18rem' }} className="card mx-auto Fitness-Card">
                                                    <Card.Body>
                                                        <Card.Title>{row.nomenclatura}</Card.Title>
                                                        <Card.Text>
                                                            {row.observacion}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            Libre
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </TableCell>
                                            <TableCell align="center">

                                                <BorrarMesa
                                                    codigo_mesa={row.codigo_mesa}
                                                />

                                                <EditarMesa
                                                    codigo_mesa={row.codigo_mesa}
                                                    nomenclatura={row.nomenclatura}
                                                    observacion={row.observacion}
                                                />
                                            </TableCell>


                                        </TableRow>
                                    )
                                } else {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.codigo_mesa}>
                                            <TableCell>
                                                <Card style={{ width: '18rem' }} className="card2 mx-auto Fitness-Card">
                                                    <Card.Body>
                                                        <Card.Title>{row.nomenclatura}</Card.Title>
                                                        <Card.Text>
                                                            {row.observacion}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            Ocupada
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </TableCell>
                                            <TableCell align="center">

                                                <BorrarMesa
                                                    codigo_mesa={row.codigo_mesa}
                                                />
                                                
                                                <EditarMesa
                                                    codigo_mesa={row.codigo_mesa}
                                                    nomenclatura={row.nomenclatura}
                                                    observacion={row.observacion}
                                                />
                                            </TableCell>

                                        </TableRow>
                                    )
                                }
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
                <AppBarMesas />
            </React.Fragment>
        </div>
    );
}