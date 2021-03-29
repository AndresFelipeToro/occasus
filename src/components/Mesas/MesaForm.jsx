import React from 'react'
import { Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";

const MesaForm = ({ onChange, form, onSubmit, cerrarForm, abrirForm, show }) => {
    return (
        <>
            <Tooltip title="Adicionar Mesa" aria-label="add">
                <Fab color="secondary">
                    <AddIcon onClick={abrirForm} />
                </Fab>
            </Tooltip>

            <form>
                <Modal show={show} onHide={cerrarForm}>
                    <Modal.Header closeButton>
                        <Modal.Title>Adicionar Mesa</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="form-group">
                            <input
                                className="form-control"
                                id="nomencaltura"
                                name="nomenclatura"
                                placeholder="Nombre de la mesa"
                                required
                                maxLength="3"
                                onChange={onChange}
                                value={form.nomenclatura}

                            >
                            </input>
                        </div>
                        <div className="form-group">
                            <textarea
                                className="form-control"
                                id="observacion"
                                name="observacion"
                                placeholder="Descripción de la mesa"
                                required
                                maxLength="255"
                                onChange={onChange}
                                value={form.observacion}
                            >
                            </textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={cerrarForm} >
                            Cerrar
                            </Button>
                        <Button variant="primary" onClick={onSubmit}>
                            Guardar Mesa
                            </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>
    )
}


export default MesaForm