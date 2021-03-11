import React, { useEffect } from 'react';

const AddEquipos = function () {


    return (
        <div class="card-body">
            <h6 class="card-title"></h6>
            <div className="col-md-6">
            <div class="alert alert-primary" role="alert">
            Agregar nuevo Equipos
            </div>
                <form class="forms-sample">
                    <div class="form-group">
                        <label for="T.Equipo"> Tipo de Equipo :</label>
                        <select class="form-control" name="T.Equipo">

                            <option value="pc">PC</option>
                            <option value="monitor">Monitor</option>
                            <option value="laptop">Laptop</option>

                        </select>
                    </div>
                    <div class="form-group">
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
                    <div class="form-group">
                        <label for="responsable" > Responsable del Equipo : </label>
                        <input type="text" class="form-control" name="responsable" id="responsable" autocomplete="of" placeholder="Asignar a" ></input>
                    </div>
                    <div class="form-group">
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
                    <div class="form-group">
                        <label for="sucursal" > Sucursal :</label>
                        <input type="text" class="form-control" name="form-control" id="sucursal" autocomplete="of" placeholder="Sucursal"></input>
                    </div>
                    <div class="form-group">
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
                    <div class="form-group">
                        <label for="marca" > Marca :</label>
                        <select class="form-contro" id="marca" name="marcas" autocomplete="of">

                            <option value="hp">HP</option>
                            <option value="apple">apple</option>
                            <option value="acer">Acer</option>

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="nserie" > Numero de Serie :</label>
                        <input type="text" class="form-control" id="nserie" name="nserie" autocomplete="of" placeholder="Numero de Serie"></input>
                    </div>
                    <div class="form-group">
                        <label for="modelo" > Modelo :</label>
                        <input type="text" class="form-control" name="modelo" id="modelo" autocomplete="of" placeholder="Modelo"></input>
                    </div>
                    <div class="form-group">
                        <label for="ubicacion">  Ubicación :</label>

                        <select class="form-control" id="ubicacion" name="ubicaciones" autocomplete="of">

                            <option value="mh">MEGA HEALTH</option>
                            <option value="b.ti">BODEGA TI</option>
                            <option value="b.ti2">BODEGA TI 2</option>
                            <option value="side">SITEGDL</option>
                            <option value="cnv">CNV</option>

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="condicion" > Condiciónes del Equipo :</label>
                        <select class="form-control" name="condicion" id="condicion" autocomplete="of">

                            <option value="nuevo">Nuevo</option>
                            <option value="usado">Usado</option>

                        </select>
                    </div>
                    <div class="form-group">
                        <label for="fechacompra" > Fecha de Compra : </label>
                        <input type="date" class="form-control" id="fechacompra" name="fecha" required autocomplete="of"></input>
                    </div>
                    <div class="form-group">
                        <label for="preciocompra" > Precio de Compra : </label>
                        <input type="number" class="form-control" name="preciocompra" id="preciocompra" placeholder="Precio" autocomplete="of"></input>
                    </div>
                    <div class="form-group">
                        <label for="fechagarantia" > Fecha de Garantia : </label>
                        <input type="date" class="form-control" name="fecha" ID="fechagarantia" autocomplete="of" required></input>
                    </div>
                    <div class="form-group">
                        <label for="descripcion" > Descripción :</label>
                        <textarea class="form-control" Id="descripcion" name="descripcion" rows="10" cols="40" placeholder="Escribe Aqui" autocomplete="of"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="activo" > El equipo esta Activo:</label>
                        <select class="form-control" name="activo" id="activo" autocomplete="of">

                            <option value="si">Si</option>
                            <option value="no">No</option>

                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary mr-2">Agregar</button>
                    <button class="btn btn-light">Cancelar</button>
                </form>
            </div>

        </div>
    )

}

export default AddEquipos;