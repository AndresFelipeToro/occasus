import React from 'react'
import '../components/styles/Inicio.css'

const LoginForm = ({ onChange, onSubmit, form }) => (
    <div className="container">
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div className="card card-signin my-5">
                    <div className="card-body">
                        <h5 className="card-title text-center">Iniciar Sesión</h5>
                        <br />
                        <form
                            className="form-signin"
                            onSubmit={onSubmit}>
                            <div className="form-label-group">
                                <input
                                    type="email"
                                    id="inputEmail"
                                    className="form-control"
                                    placeholder="Correo Electrónico"
                                    required
                                    autoFocus
                                    name="email"
                                    onChange={onChange}
                                    value={form.email}
                                />
                                <label htmlFor="inputEmail">Dirección de Correo</label>
                            </div>

                            <div className="form-label-group">
                                <input
                                    type="password"
                                    id="inputPassword"
                                    className="form-control"
                                    placeholder="Password"
                                    required
                                    name="password"
                                    onChange={onChange}
                                    value={form.password}
                                />
                                <label htmlFor="inputPassword">Contraseña</label>
                            </div>
                            <br />
                            <button
                                className="btn btn-block text-uppercase"
                                type="submit">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

)

export default LoginForm