import React from 'react'

const OptionMesas = ({mesas, mesaId, mesaChangeHandler}) => {
    return (
        <div className="col-md-4">
            <select
                className="form-control"
                id="lineaprod"
                name="lineaprod"
                required
                value={mesaId}
                onChange={mesaChangeHandler}

            >
                <option value="">Selecciona una Mesa</option>
                {mesas.map((mesa) => {
                    return (
                        < option value={mesa.codigo_mesa} key={mesa.codigo_mesa}> {mesa.nomenclatura}</option>
                    )
                })}
            </select>

        </div>
    )
}

export default OptionMesas
