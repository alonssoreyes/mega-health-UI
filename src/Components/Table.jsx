import React, { useEffect } from "react";
import axios from "axios";
const Table = ({ headers, data, onSelectRow, onDeleteRow }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                {headers.map((header) => {
                  return <th>{header.value}</th>;
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
                                onClick={() => onDeleteRow(user._id)}
                              >
                                Borrar
                              </button>
                            </div>
                          </td>
                        ) : (
                          <td>{user[header.property]}</td>
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
  );
};

export default Table;
