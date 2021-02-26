import React, { useEffect } from 'react';

const AddDepartamentos = function () {


    return (
        <div class="card-body">
            <h6 class="card-title">Agregar nuevo usuario</h6>
            <div className="col-md-6">
                <form class="forms-sample">
                    <div class="form-group">
                        <label for="exampleInputUsername1">Nombre</label>
                        <input type="text" class="form-control" id="exampleInputUsername1" autocomplete="off" placeholder="Nombre" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Apellidos</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" autocomplete="off" placeholder="Apellidos" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Correo" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" autocomplete="off" placeholder="Contraseña" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Confirmar contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" autocomplete="off" placeholder="Contraseña" />
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Aceptar</button>
                    <button class="btn btn-light">Cancelar</button>
                </form>
            </div>
            
        </div>
    )

}

export default AddDepartamentos;