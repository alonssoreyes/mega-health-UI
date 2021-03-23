import React, { useEffect } from "react";
import axios from "axios";
import defaultUser from '../assets/images/default-userr.png';
const Table = ({
  headers,
  data,
  onSelectRow,
  onDeleteRow,
  setShowEditModal,
}) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card overflow-auto">
          <div className="card-body">
            <div className="table-responsive-sm">
              <table className="table">
                <thead>
                  <tr>
                    {headers.map((header) => {
                      return <th scope="col">{header.value}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data &&
                    data.map((element) => {
                      return (
                        <tr>
                          {headers.map((header) =>
                          
                            header.property === "status" ? (
                              <td>
                                <span
                                  className={`badge badge-${
                                    element.status ? "success" : "warning"
                                  }`}
                                >
                                  {element.status ? "Activo" : "Inactivo"}
                                </span>
                              </td>
                            ) : header.property === "actions" ? (
                              <td>
                                <div className="row justify-content-around">
                                  <button
                                    className="btn btn-sm  btn-secondary m-1"
                                    onClick={() => {
                                      setShowEditModal(true);
                                      onSelectRow(element);
                                    }}
                                    data-toggle="modal"
                                    data-target="#edit"
                                  >
                                    Actualizar
                                  </button>
                                  <button
                                    className="btn btn-sm  btn-dark m-1"
                                    onClick={() => onDeleteRow(element.uid || element._id)}
                                  >
                                    Inhabilitar
                                  </button>
                                </div>
                              </td>
                            ) : header.property === "role" ? (
                              <td scope="row">
                                {element[header.property] === "ADMIN_ROLE"
                                  ? "Administrador"
                                  : element[header.property] === "AUDITOR_ROLE"
                                  ? "Auditor"
                                  : "Usuario"}
                              </td>
                            ) : header.property === "imgPath" ? (
                              <img
                                src={element[header.property] ? element[header.property] : defaultUser}
                                alt="Image default user"
                                className="img-fluid rounded-circle text-align-center p-2"
                                style={{ width: "80px", objectFit:'cover' }}
                              />
                            ) : header.property === "active" ? (
                              <td>
                                <span
                                  className={`badge badge-${
                                    element.active ? "success" : "warning"
                                  }`}
                                >
                                  {element.active ? "Activo" : "Inactivo"}
                                </span>
                              </td>
                            ) : (
                              <td scope="row">{element[header.property]}</td>
                            )
                          )}
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
