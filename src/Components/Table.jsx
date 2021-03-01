import React, {useEffect} from "react";
import axios from 'axios';
const Table = ({ headers, data }) => {




  return (
      <div className="card" >
        <div className="card-body">
          <div className="table-responsive">
              <table className="table">
                  <thead>
                  <tr>
                      {headers.map(header => {
                          return <th>{header.value}</th>
                      })}
                  </tr>
                  </thead>
                  <tbody>
                  {data && data.map(user =>{
                      return(
                          <tr>
                              <td>{user.name}</td>
                              <td>{user.lastName}</td>
                              <td>{user.alias}</td>
                              <td>{user.email}</td>
                              <td>{user.img}</td>
                              <td>{user.role}</td>
                              <td><span className={`badge badge-${user.status ? 'success' : 'warning'}`}>{user.status ? 'Activo' : 'Inactivo'}</span></td>

                          </tr>
                      )
                  })}
                  </tbody>
              </table>
          </div>
        </div>
      </div>
  );
};

export default Table;
