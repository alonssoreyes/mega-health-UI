import React, { useEffect } from 'react';

const AddEquipos = function ({users}) {


    return (
        <div
      className="modal fade"
      id="addEquipoModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      
    >
      <div className="modal-dialog" role="document" style={{width:'1200px'}}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Agregar usuario
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
            <div className="col-md-12">
            <div class="alert alert-primary" role="alert">
            Agregar nuevo Equipos
            </div>
                <form class="forms-sample row">
                    <div class="form-group col-md-6">
                        <label for="T.Equipo"> Tipo de Equipo :</label>
                        <select class="form-control" name="T.Equipo">

                            <option value="pc">PC</option>
                            <option value="monitor">Monitor</option>
                            <option value="laptop">Laptop</option>

                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="q.asigna" > Asignado por:</label>
                        <select class="form-control" name="q.asigna" id="q.asigna" autocomplete="of">

                            <option value="israel.garcia">Israel.Garcia</option>
                            <option value="leonardo.gonzalez">Leonardo.Gonzalez</option>
                            <option value="jesus.romero">Jesus.Romero</option>
                            <option value="luis.martinez">Luis.Martinez</option>
                            <option value="johan.arias">Johan.Arias</option>
                            <option value="ti">TI</option>

                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="responsable" > Responsable del Equipo : </label>
                        <select name="assigned-to" id="assigned-to" className="form-control">
                            {users ? users.map(user => <option value={user.uid}>
                                {user.name} {user.lastName}   
                            </option>) : null}
                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="departamento" > Departamento :</label>
                        <select class="form-control" name="departamentob " id="departamento">

                            <option value="rh">Recursos Humanos</option>
                            <option value="ti">TI</option>
                            <option value="mercadoctenia">Mercadoctenia</option>
                            <option value="almacen">Almacen</option>
                            <option value="comercial">Comercial</option>
                            <option value="compras">Compras</option>
                            <option value="direccion">Dirección</option>
                            <option value="finanzas">Finanzas</option>
                            <option value="diseño">Diseño</option>



                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="sucursal" > Sucursal :</label>
                        <input type="text" class="form-control" name="form-control" id="sucursal" autocomplete="of" placeholder="Sucursal"></input>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="categoria"> Categoria :</label>
                        <select class="form-contro" name="categoria" id="categoria" >

                            <option value="pc">Equipo de Computo </option>
                            <option value="laptop">Equipo de Computo Portatil</option>
                            <option value="comunicacion">Comunicacion</option>
                            <option value="multimedia">Multimedia</option>
                            <option value="bateria">UPS</option>
                            <option value="basura">Basura electronico</option>



                        </select>
                    </div>
                    <div class="form-group col-md-4">
                        <label for="marca" > Marca :</label>
                        <select class="form-contro" id="marca" name="marcas" autocomplete="of">

                            <option value="hp">HP</option>
                            <option value="apple">apple</option>
                            <option value="acer">Acer</option>

                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="nserie" > Numero de Serie :</label>
                        <input type="text" class="form-control" id="nserie" name="nserie" autocomplete="of" placeholder="Numero de Serie"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="modelo" > Modelo :</label>
                        <input type="text" class="form-control" name="modelo" id="modelo" autocomplete="of" placeholder="Modelo"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="ubicacion">  Ubicación :</label>

                        <select class="form-control" id="ubicacion" name="ubicaciones" autocomplete="of">

                            <option value="mh">MEGA HEALTH</option>
                            <option value="b.ti">BODEGA TI</option>
                            <option value="b.ti2">BODEGA TI 2</option>
                            <option value="side">SITEGDL</option>
                            <option value="cnv">CNV</option>

                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="condicion" > Condiciónes del Equipo :</label>
                        <select class="form-control" name="condicion" id="condicion" autocomplete="of">

                            <option value="nuevo">Nuevo</option>
                            <option value="usado">Usado</option>

                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="fechacompra" > Fecha de Compra : </label>
                        <input type="date" class="form-control" id="fechacompra" name="fecha" required autocomplete="of"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="preciocompra" > Precio de Compra : </label>
                        <input type="number" class="form-control" name="preciocompra" id="preciocompra" placeholder="Precio" autocomplete="of"></input>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="fechagarantia" > Fecha de Garantia : </label>
                        <input type="date" class="form-control" name="fecha" ID="fechagarantia" autocomplete="of" required></input>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="descripcion" > Descripción :</label>
                        <textarea class="form-control" Id="descripcion" name="descripcion" rows="10" cols="40" placeholder="Escribe Aqui" autocomplete="of"></textarea>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="activo" > El equipo esta Activo:</label>
                        <select class="form-control" name="activo" id="activo" autocomplete="of">

                            <option value="si">Si</option>
                            <option value="no">No</option>

                        </select>
                    </div>

                        <div className="col-md-12 d-flex justify-content-end">
                            <button class="btn btn-light">Cancelar</button>
                            <button type="submit" class="btn btn-primary ml-2">Agregar</button>
                        </div>
                </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        
    )

}

export default AddEquipos;