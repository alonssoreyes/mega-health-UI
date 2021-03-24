import axios from "axios";
import React, { useEffect } from "react";

const AddEquipos = function ({ users, onSuccess, getEquipments, sucursals }) {
  const handleEquipmentSubmit = async (ev) => {
    ev.preventDefault();

    const type = ev.target.equipo.value;
    const assigned_by_id = ev.target.assigned_by.value;
    const assigned_by_name =
      ev.target.assigned_by.options[ev.target.assigned_by.selectedIndex].text;
    const assigned_to_id = ev.target.assigned_to.value;
    const assigned_to_name =
      ev.target.assigned_to.options[ev.target.assigned_to.selectedIndex].text;
    const department = ev.target.department.value;
    const sucursal = ev.target.sucursal.value;
    const category = ev.target.category.value;
    const brand = ev.target.brand.value;
    const serial_number = ev.target.serial_number.value;
    const model = ev.target.model.value;
    const location = ev.target.location.value;
    const conditions = ev.target.conditions.value;
    const buy_date = ev.target.buy_date.value;
    const price_buy = ev.target.price_buy.value;
    const guarantee_date = ev.target.guarantee_date.value;
    const description = ev.target.description.value;
    const active = ev.target.active.value;

    const formData = new FormData();

    formData.append("type", type);
    formData.append("assigned_by_id", assigned_by_id);
    formData.append("assigned_by_name", assigned_by_name);
    formData.append("assigned_to_id", assigned_to_id);
    formData.append("assigned_to_name", assigned_to_name);
    formData.append("department", department);
    formData.append("sucursal", sucursal);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("serial_number", serial_number);
    formData.append("model", model);
    formData.append("location", location);
    formData.append("conditions", conditions);
    formData.append("buy_date", buy_date);
    formData.append("price_buy", price_buy);
    formData.append("guarantee_date", guarantee_date);
    formData.append("description", description);
    formData.append("active", active);
    formData.append("image", ev.target.image.files[0]);

    try {
      const response = await axios.post("/api/equipos", formData);

      if(response){
        getEquipments();
        ev.target.reset();
        document.querySelector("#addEquipoModal").classList.remove("show");
        document
          .querySelector("#addEquipoModal")
          .removeAttribute("aria-modal");
        document
          .querySelector("#addEquipoModal")
          .setAttribute("aria-hidden", true);
        document.querySelector("#addEquipoModal").style.display = "none";
        document.getElementsByClassName("modal-backdrop")[0].remove();
        document.querySelector("body").classList.remove("modal-open");
        onSuccess(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fecha = new Date();

  return (
    <div
      className="modal fade"
      id="addEquipoModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document" style={{ width: "1200px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Agregar Equipo
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
                <form class="forms-sample row" onSubmit={handleEquipmentSubmit}>
                  <div class="form-group col-md-6">
                    <label for="T.Equipo"> Tipo de Equipo :</label>
                    <select class="form-control" name="equipo">
                      <option value="PC">PC</option>
                      <option value="Monitor">Monitor</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Periferico">Periferico</option>
                      <option value="Almacenamiento">Almacenamiento</option>
                      <option value="Cable">Cable</option>



                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="assigned_by"> Asignado por:</label>
                    <select
                      class="form-control"
                      name="assigned_by"
                      id="assigned_by"
                      autocomplete="off"
                    >
                      <option value="Sin asignación" defaultValue>
                        Sin asignación
                      </option>
                      {users
                        ? users.map((user) => (
                            <option value={user.uid}>
                              {user.name} {user.lastName}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="responsable"> Responsable del Equipo : </label>
                    <select
                      name="assigned_to"
                      id="assigned_to"
                      className="form-control"
                    >
                      <option value="Sin asignación" defaultValue>
                        Sin asignación
                      </option>
                      {users
                        ? users.map((user) => (
                            <option value={user.uid}>
                              {user.name} {user.lastName}
                            </option>
                          ))
                        : null}
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="departamento"> Departamento :</label>
                    <select
                      class="form-control"
                      name="department"
                      id="department"
                    >
                      <option value="Recursos Humanos">Recursos Humanos</option>
                      <option value="TI">TI</option>
                      <option value="Mercadotecnia">Mercadoctenia</option>
                      <option value="Almacen">Almacen</option>
                      <option value="Comercial">Comercial</option>
                      <option value="Compras">Compras</option>
                      <option value="Dirección">Dirección</option>
                      <option value="Finanzas">Finanzas</option>
                      <option value="Diseño">Diseño</option>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="sucursal"> Sucursal :</label>
                    <select name="sucursal" id="sucursal">
                      {sucursals.map(sucursal => <option value={sucursal.name}>{sucursal.name}</option>)}
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="categoria"> Categoria :</label>
                    <select class="form-contro" name="category" id="category">
                      <option value="PC">Equipo de Computo </option>
                      <option value="Laptop">Equipo de Computo Portatil</option>
                      <option value="Comunicación">Comunicación</option>
                      <option value="Multimedia">Multimedia</option>
                      <option value="Bateria">UPS</option>
                      <option value="Basura">Basura electronico</option>
                    </select>
                  </div>
                  <div class="form-group col-md-4">
                    <label for="marca"> Marca :</label>
                    <select
                      class="form-contro"
                      id="brand"
                      name="brand"
                      autocomplete="of"
                    >
                      <option value="HP">HP</option>
                      <option value="Apple">Apple</option>
                      <option value="Acer">Acer</option>
                      <option value="Otro">Otro</option>

                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="nserie"> Numero de Serie :</label>
                    <input
                      type="text"
                      class="form-control"
                      id="serial_number"
                      name="serial_number"
                      autocomplete="of"
                      placeholder="Numero de Serie"
                      required
                    ></input>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="modelo"> Modelo :</label>
                    <input
                      type="text"
                      class="form-control"
                      name="model"
                      id="model"
                      autocomplete="of"
                      placeholder="Modelo"
                    ></input>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="ubicacion"> Ubicación :</label>

                    <select
                      class="form-control"
                      id="location"
                      name="location"
                      autocomplete="of"
                    >
                      <option value="Mega Health">MEGA HEALTH</option>
                      <option value="Bodega TI">BODEGA TI</option>
                      <option value="Bodega TI 2">BODEGA TI 2</option>
                      <option value="SITEGDL">SITEGDL</option>
                      <option value="CNV">CNV</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="condicion"> Condiciónes del Equipo :</label>
                    <select
                      class="form-control"
                      name="conditions"
                      id="conditions"
                      autocomplete="of"
                    >
                      <option value="Nuevo">Nuevo</option>
                      <option value="Usado">Usado</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="fechacompra"> Fecha de Compra : </label>
                    <input
                      type="date"
                      class="form-control"
                      id="buy_date"
                      name="buy_date"
                      required
                      max={`${fecha.getFullYear()}-${
                        fecha.getMonth() <= 9
                          ? "0" + (fecha.getMonth() + 1)
                          : fecha.getMonth() + 1
                      }-${
                        fecha.getDate() <= 9
                          ? "0" + fecha.getDate()
                          : fecha.getDate()
                      }`}
                      autocomplete="off"
                    ></input>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="preciocompra"> Precio de Compra : </label>
                    <input
                      type="number"
                      class="form-control"
                      name="price_buy"
                      id="price_buy"
                      placeholder="Precio"
                      autocomplete="of"
                    ></input>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="fechagarantia"> Fecha de Garantia : </label>
                    <input
                      type="date"
                      class="form-control"
                      name="guarantee_date"
                      id="guarantee_date"
                      autocomplete="of"
                      required
                    ></input>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="fechagarantia"> Imagen del equipo : </label>
                    <input
                      type="file"
                      class="form-control"
                      name="image"
                      id="image"
                      autocomplete="of"
                      required
                    ></input>
                  </div>
                  <div class="form-group col-md-12">
                    <label for="descripcion"> Descripción :</label>
                    <textarea
                      class="form-control"
                      Id="description"
                      name="description"
                      rows="10"
                      cols="40"
                      placeholder="Escribe Aqui"
                      autocomplete="of"
                    ></textarea>
                  </div>
                  <div class="form-group col-md-12">
                    <label for="activo"> El equipo esta Activo:</label>
                    <select
                      class="form-control"
                      name="active"
                      id="active"
                      autocomplete="of"
                    >
                      <option value={true}>Si</option>
                      <option value={false}>No</option>
                    </select>
                  </div>
                  <div className="col-md-12 d-flex justify-content-end">
                    <button class="btn btn-light">Cancelar</button>
                    <button type="submit" class="btn btn-primary ml-2">
                      Agregar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEquipos;
