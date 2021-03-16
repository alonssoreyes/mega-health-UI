import React, { useEffect } from "react";
import axios from "axios";
import defaultUser from '../assets/images/default-userr.png';
const Table = ({ headers, data, onSelectRow, onDeleteRow }) => {
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
                    data.map((user) => {
                      return (
                        <tr>
                          {headers.map((header) =>
                            header.property === "status" ? (
                              <td>
                                <span
                                  className={`badge badge-${
                                    user.status ? "success" : "warning"
                                  }`}
                                >
                                  {user.status ? "Activo" : "Inactivo"}
                                </span>
                              </td>
                            ) : header.property === "actions" ? (
                              <td>
                                <div className="row justify-content-between">
                                  <button
                                    className="btn btn-sm  btn-secondary"
                                    onClick={() => onSelectRow(user)}
                                  >
                                    Editar
                                  </button>
                                  <button
                                    className="btn btn-sm  btn-dark"
                                    onClick={() => onDeleteRow(user.uid)}
                                  >
                                    Borrar
                                  </button>
                                </div>
                              </td>
                            ) : header.property === "role" ? 
                            <td scope="row">
                              {user[header.property] ==="ADMIN_ROLE" ? "Administrador" : user[header.property]==="AUDITOR_ROLE" ? "Auditor" : "Usuario"}
                            </td>
                            : header.property === "img" ?
                            <img src={defaultUser} alt="Image default user" className="img-fluid rounded-circle py-2" style={{width:'70px'}}/>
                            :
                            (
                              <td scope="row">{user[header.property]}</td>
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
