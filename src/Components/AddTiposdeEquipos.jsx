import React, { useEffect } from 'react';

const AddTiposdeEquipos = function () {


    return (
        <div class="card-body">
            <h6 class="card-title">Agregar nuevo Tipo de Equipo</h6>
            <div className="col-md-6">
                <form class="forms-sample">
                    <div class="form-group">
                        <label for="t.equipo">Tipo de Equipos :</label>
                        <input type="text" class="form-control" id="t.equipo" autocomplete="off" placeholder="Tipo de Equipo" />
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Agregar</button>
                    <button class="btn btn-light">Cancelar</button>
                </form>
            </div>
        </div>


    )

}

export default AddTiposdeEquipos;