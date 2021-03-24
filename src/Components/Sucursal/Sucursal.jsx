import React from "react";

import "./Sucursal.css";

import Swal from "sweetalert2";
import axios from "axios";

const Sucursal = ({
  data,
  onSelectSucursal,
  setShowEditModal,
  getSucursals,
  user,
}) => {
  const handleDelete = (sucursal_id) => {
    try {
      Swal.fire({
        title: "Estas seguro de continuar?",
        text: "La sucursal y su informacion se eliminara para siempre",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const deleted = await axios.delete(`/api/sucursal/${sucursal_id}`);
          if (deleted) {
            Swal.fire(
              "Eliminada!",
              "La sucursal a sido eliminada",
              "success"
            );
            getSucursals();
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="col-lg-4 col-md-6 col-sm-12 cartita my-2">
      <div className="card">
        <img
          src={`${process.env.REACT_APP_API_HOST || "http://localhost:3001"}${
            data.imgPath
          }`}
          alt="Imagen Sucursal"
          className="card-img-top"
          style={{ height: "18em", width: "100%" }}
        />
        <div className="card-body">
          <h4 className="text-center mb-3"> {data.name}</h4>
          <hr />
          <b>Correo:</b>
          <span><a href={`mailto:${data.correo}`}> {data.correo}</a></span>
          <br />
          <br />
          <b>Ciudad:</b>
          <span> {data.city}</span>
          <br />
          <br />
          <p>
            <b>Dirección:</b> {data.direction}
          </p>
          <br />
          <b>Telefono:</b>
          <a href={`tel:+${data.phone}`}> {data.phone}</a>
          {user.role === "ADMIN_ROLE" ? (
            <div className="d-flex justify-content-md-end">
              <button
                className="btn btn-sm  btn-secondary m-1"
                onClick={() => {
                  setShowEditModal(true);
                  onSelectSucursal(data);
                }}
                data-toggle="modal"
                data-target="#edit"
              >
                Actualizar
              </button>
              <button
                className="btn btn-sm  btn-dark m-1"
                onClick={() => handleDelete(data._id)}
              >
                Eliminar Sucursal
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Sucursal;
