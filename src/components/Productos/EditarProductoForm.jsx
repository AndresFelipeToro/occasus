import React, { Component } from "react";
import { Tooltip } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import "bootstrap/dist/css/bootstrap.min.css";
import EditIcon from '@material-ui/icons/Edit';


const EditarProductoForm=({ onChange, form, onSubmit, cerrarForm, abrirForm, show })=> {
        return (
            <>
                <Tooltip title="Editar Producto" aria-label="add">
                    <Fab color="primary" size="small">
                        <EditIcon onClick={abrirForm} />
                    </Fab>
                </Tooltip>

                <form>
                    <Modal show={show} onHide={cerrarForm}>
                        <Modal.Header closeButton>
                            <Modal.Title>Editar Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    id="descripcion"
                                    name="descripcion"
                                    placeholder="Descripción del producto"
                                    required
                                    maxLength="255"
                                    onChange={onChange}
                                    value={form.descripcion}

                                >
                                </textarea>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <select
                                        className="form-control"
                                        id="lineaprod"
                                        name="lineaprod"
                                        required
                                        onChange={onChange}
                                        value={form.lineaprod}

                                    >
                                        <option value="">Selecciona una Categoría</option>
                                        <option value="1">Michelada</option>
                                        <option value="2">Bebida</option>
                                        <option value="3">Combinada</option>
                                        <option value="4">Licor</option>
                                        <option value="5">Otros Gustos</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select
                                        className="form-control"
                                        id="estado"
                                        name="estado"
                                        required
                                        onChange={onChange}
                                        value={form.estado}

                                    >
                                        <option value="">Selecciona un Estado</option>
                                        <option value="A">Activo</option>
                                        <option value="I">Inactivo</option>
                                    </select>
                                </div>
                            </div>
                            <br/>
                            <div className="form-row">
                                <div className="col">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Existencia Inicial"
                                        name="existencia_inicial"
                                        min="1"
                                        required
                                        onChange={onChange}
                                        value={form.existencia_inicial}
                                    />
                                </div>
                                <div className="col">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Costo Unitario"
                                        name="costounitario"
                                        required
                                        onChange={onChange}
                                        value={form.costounitario}
                                    />
                                </div>
                            </div>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={cerrarForm} >
                                Cerrar
                        </Button>
                            <Button variant="primary" onClick={onSubmit}>
                                Editar Producto
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </form>
            </>
        )
    }

export default EditarProductoForm