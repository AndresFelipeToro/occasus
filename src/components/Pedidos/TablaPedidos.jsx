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
import './styles/CardPedido.css'
import Card from 'react-bootstrap/Card'
import AppBarPedidos from './AppBarPedidosVacios'
import Moment from 'moment';
import BorrarPedido from '../../pages/Pedidos/BorrarPedido'
import PagarPedido from '../../pages/Pedidos/PagarPedido'
import VerPedido from '../../pages/Pedidos/VerPedido'

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
                                if (row.estado_pedido == 'N') {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.codigo_pedido}>
                                            <TableCell>
                                                <Card style={{ width: '18rem' }} className="cardPedido mx-auto Fitness-Card">
                                                    <Card.Body>
                                                        <Card.Title>Mesa: {row.nomenclatura}</Card.Title>
                                                        <Card.Text>
                                                            Fecha: {Moment(row.fecha_pedido).format('YYYY/MM/DD')}
                                                        </Card.Text>
                                                        <Card.Text>

                                                            Valor: {new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(row.valor_pedido)}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            Estado: Pendiente de Pago
                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </TableCell>
                                            <TableCell align="center">
                                                <BorrarPedido
                                                    codigo_pedido={row.codigo_pedido}
                                                />
                                                <PagarPedido
                                                    codigo_pedido={row.codigo_pedido}
                                                />
                                                <VerPedido
                                                 codigo_pedido={row.codigo_pedido}
                                                 />
                                                
                                            </TableCell>

                                        </TableRow>
                                    )
                                } else {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.codigo_pedido}>
                                            <TableCell>
                                                <Card style={{ width: '18rem' }} className="cardPedido2 mx-auto Fitness-Card">
                                                    <Card.Body>
                                                        <Card.Title>Mesa: {row.nomenclatura}</Card.Title>
                                                        <Card.Text>
                                                            Fecha: {Moment(row.fecha_pedido).format('YYYY/MM/DD')}
                                                        </Card.Text>
                                                        <Card.Text>

                                                            Valor: {new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 }).format(row.valor_pedido)}
                                                        </Card.Text>
                                                        <Card.Text>
                                                            Estado: Pago
                                                    </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </TableCell>
                                            <TableCell align="center">
                                                <BorrarPedido
                                                    codigo_pedido={row.codigo_pedido}
                                                />
                                                <VerPedido
                                                 codigo_pedido={row.codigo_pedido}
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
                <AppBarPedidos />
            </React.Fragment>
        </div>
    );
}