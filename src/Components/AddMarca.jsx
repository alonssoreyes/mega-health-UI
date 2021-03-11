import React, { useEffect } from 'react';

const AddMarca = function () {


    return (
        <div class="card-body">
            <h6 class="card-title"></h6>
            <div className="col-md-6">
            <div class="alert alert-primary" role="alert">
            Agregar Marca
            </div>
                <form class="forms-sample">
                    <div class="form-group">
                        <label for="marca">Nombre de la Marca :</label>
                        <input type="text" class="form-control" id="marca" autocomplete="off" placeholder="Introduce la marca" />
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Agregar</button>
                    <button class="btn btn-light">Cancelar</button>
                </form>
            </div>
        </div>

    )

}

export default AddMarca;