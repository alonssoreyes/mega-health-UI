import React, { useEffect } from 'react';

const AddCategoria = function () {


    return (
        <div class="card-body">
            <h6 class="card-title"></h6>
            <div className="col-md-6">
            <div class="alert alert-primary" role="alert">
            Agregar Categoria de Equipos
            </div>
                <form class="forms-sample">
                    <div class="form-group">
                        <label for="categoria">Agrege la Categoria :</label>
                        <input type="text" class="form-control" id="categoria" autocomplete="off" placeholder="Categoria" />
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Agregar</button>
                    <button class="btn btn-light">Cancelar</button>
                </form>
            </div>
        </div>


    )

}

export default AddCategoria;