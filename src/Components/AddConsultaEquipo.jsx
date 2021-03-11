import React, { useEffect } from 'react';

const AddConsultaEquipo = function () {


    return (
        <div class="card-body">
            <h6 class="card-title"></h6>
            <div className="col-md-6">
                <div class="alert alert-primary" role="alert">
                    Consultar Equipo
            </div>
                <form class="forms-sample">
                    <div class="form-group"></div>
                    <label for="c.equipo">Consultar por :</label>
                    <select class="form-control" name="c.equipo">
                        <option value="numeroserie">Numero de Serie</option>
                        <option value="usuario">Nombre de Empleado</option>
                        <option value="t.equipo">Tipo de Equipo</option>
                    </select>
                    <div class="form-group">
                        <label for="consultar">Ingresar dato :</label>
                        <input type="text" class="form-control" id="consultar" autocomplete="off" placeholder="Escriba aqui" />
                    </div>

                </form>
            </div>

        </div>




    )


}

export default AddConsultaEquipo;