import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const AddUsuarioModal = ({ onSuccess, getUsers }) => {
  const [roleSelected, setRoleSelected] = useState("AUDITOR_ROLE");
  const [errors, setErrors] = useState({});

  const handleRoleChange = ({ target }) => {
    setRoleSelected(target.value);
  };

  const capitalize = (word) => {
    let convertedPhrase = "";
    let wordArr = word.split("");

    let letraMayuscula = wordArr[0];

    letraMayuscula = letraMayuscula.toUpperCase();

    wordArr[0] = letraMayuscula;

    const newWord = wordArr.join("");
    return newWord;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    let name = ev.target.name.value;
    let lastName = ev.target.lastName.value;
    const email = ev.target.email.value;
    const department = ev.target.department.value;
    let password = "";
    let confirmPassword = "";
    if (ev.target.password) {
      password = ev.target.password.value;
      confirmPassword = ev.target.confirmPassword.value;
    }
    const image = ev.target.image.files[0];

    if (Object.keys(errors).length > 0) {
      Swal.fire({
        title: "Hay Errores",
        position: "top-end",
        icon: "error",
        text: "Rellena los campos",
        timer: 1000,
      });

      return;
    }
    //Generate alias
    let alias = name.split(" ")[0] + " " + lastName.split(" ")[0];

    //Capitalize name
    name = capitalize(name);
    lastName = capitalize(lastName);
    alias = capitalize(alias);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("lastName", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("alias", alias);
    formData.append("department", department);
    formData.append("image", ev.target.image.files[0]);
    formData.append("role", ev.target.role.value);

    //Request
    try {
      const response = await axios.post("/api/usuarios", formData);
      if (response) {
        getUsers();
        ev.target.reset();
        document.querySelector("#addEmpleadoModal").classList.remove("show");
        document
          .querySelector("#addEmpleadoModal")
          .removeAttribute("aria-modal");
        document
          .querySelector("#addEmpleadoModal")
          .setAttribute("aria-hidden", true);
        document.querySelector("#addEmpleadoModal").style.display = "none";
        document.getElementsByClassName("modal-backdrop")[0].remove();
        document.querySelector("body").classList.remove("modal-open");
        onSuccess(false);
      }
    } catch (err) {
      console.log(err);
      return;
    }
  };

  const handleInputChange = ({ target }) => {};

  return (
    <div
      className="modal fade"
      id="addEmpleadoModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
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
                <form
                  className="forms-sample row"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label htmlFor="exampleInputUsername1">Nombre</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors && errors["name"]
                            ? "border border-danger"
                            : null
                        }`}
                        id="name"
                        autoComplete="off"
                        placeholder="Nombre"
                        name="name"
                        required
                      />
                    </div>
                    {errors && errors["name"] ? (
                      <small className="text-danger">{errors["name"]}</small>
                    ) : null}
                  </div>
                  <div className="col-md-6">
                    <div className="form-group mb-0">
                      <label htmlFor="exampleInputPassword1">Apellidos</label>
                      <input
                        type="text"
                        className={`form-control ${
                          errors && errors["lastName"]
                            ? "border border-danger"
                            : null
                        }`}
                        id="lastName"
                        autoComplete="off"
                        placeholder="Apellidos"
                        name="lastName"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {errors && errors["lastName"] ? (
                      <small className="text-danger">
                        {errors["lastName"]}
                      </small>
                    ) : null}
                  </div>
                  <div className="col-md-8">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Correo</label>
                      <input
                        type="email"
                        className={`form-control ${
                          errors &&
                          (errors["emptyEmail"] || errors["invalidEmail"])
                            ? "border border-danger"
                            : null
                        }`}
                        id="email"
                        name="email"
                        placeholder="Correo"
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    {errors && errors["emptyEmail"] ? (
                      <small className="text-danger">
                        {errors["emptyEmail"]}
                      </small>
                    ) : null}
                    {errors && errors["invalidEmail"] ? (
                      <small className="text-danger">
                        {errors["invalidEmail"]}
                      </small>
                    ) : null}
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Rol</label>
                      <select
                        name="role"
                        id="role"
                        className="form-control"
                        onChange={handleRoleChange}
                      >
                        <option value="AUDITOR_ROLE" defaultValue>
                          Auditor
                        </option>
                        <option value="ADMIN_ROLE">Administrador</option>
                        <option value="USER_ROLE">Usuario</option>
                      </select>
                    </div>
                  </div>
                  {roleSelected !== "" && roleSelected !== "USER_ROLE" ? (
                    <>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">
                            Contraseña
                          </label>
                          <input
                            type="password"
                            className={`form-control ${
                              errors && errors["password"]
                                ? "border border-danger"
                                : null
                            }`}
                            id="password"
                            autoComplete="off"
                            placeholder="Contraseña"
                            name="password"
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        {errors && errors["password"] ? (
                          <small className="text-danger">
                            {errors["password"]}
                          </small>
                        ) : null}
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-0">
                          <label htmlFor="exampleInputPassword1">
                            Confirmar contraseña
                          </label>
                          <input
                            type="password"
                            className={`form-control ${
                              errors && errors["confirmPassword"]
                                ? "border border-danger"
                                : null
                            }`}
                            id="confirmPassword"
                            autoComplete="off"
                            placeholder="Contraseña"
                            name="confirmPassword"
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        {errors && errors["confirmPassword"] ? (
                          <small className="text-danger">
                            {errors["confirmPassword"]}
                          </small>
                        ) : null}
                      </div>
                    </>
                  ) : null}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Departamento al que pertenece</label>
                      <select
                        name="department"
                        id="department"
                        className="form-control"
                      >
                        <option value="Recursos Humanos">
                          Recursos Humanos
                        </option>
                        <option value="TI">TI</option>
                        <option value="Mercadotecnia">Mercadoctenia</option>
                        <option value="Almacen">Almacen</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Compras">Compras</option>
                        <option value="Dirección">Dirección</option>
                        <option value="Finanzas">Finanzas</option>
                        <option value="Diseño">Diseño</option>
                        <option value="Externo Auditor">Externo Auditor</option>

                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Imagen</label>
                      <input
                        type="file"
                        name="image"
                        id="image"
                        className={"form-control"}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 d-flex justify-content-end">
                    <button
                      className="btn btn-light"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      Cancelar
                    </button>
                    <button type="submit" className="btn btn-primary mr-2">
                      Aceptar
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

export default AddUsuarioModal;
