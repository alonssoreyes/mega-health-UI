import React, { useEffect, useState } from "react";
import EmployeeHeaders from "../headers/EmployeesHeaders.json";
import Table from "./Table";
import AddUsuarioModal from "./AddUsuarioModal";
import Modal from "react-responsive-modal";
import axios from "axios";
import Swal from "sweetalert2";
import ExportDataToExcel from './ExportDataToExcel';

const Usuarios = ({ user }) => {
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    document.title = "Usuarios - Mega Health";
    getUsers();
  }, []);
  const getUsers = async () => {
    try {
      const users = await axios.get("/api/usuarios");
      setUsers(users.data);
      setFilteredUsers(users.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      Swal.fire({
        title: "Estas seguro de continuar?",
        text: "El usuario se inhabilitara",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const deleted = await axios.delete(`/api/usuarios/${id}`);
          if (deleted) {
            Swal.fire(
              "Inhabilitado",
              "El empleado a quedado inactivo",
              "success"
            );
            getUsers();
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };
  const handleFilterChange = (ev) => {
    const status = ev.target.value;
    let filteredEmployees = [];
    if (status === "active") {
      filteredEmployees = users.filter((user) => user.status === true);
    }

    if (status === "inactive") {
      filteredEmployees = users.filter((user) => user.status === false);
    }
    if (status === "0") {
      filteredEmployees = users;
    }

    setFilteredUsers(filteredEmployees);
  };

  //Filter
  const usuariosFiltrados =
    users && users.filter((user) => user.status === true);

  console.log(usuariosFiltrados);

  //reduce

  return (
    <>
      <h3>Empleados</h3>

      <h6 className="mt-4 mb-2">Filtrar por: </h6>
      <div className="row">
        <div className="col-md-3">
          <select name="filterEmployees" id="" onChange={handleFilterChange}>
            <option value="0" defaultValue>
              Status
            </option>

            <option value="active">Activos</option>

            <option value="inactive">Inactivos</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-lg-end justify-content-md-end mb-2">
          <button
            className="btn btn-primary mr-2"
            data-toggle="modal"
            data-target="#addEmpleadoModal"
            onClick={() => setShowModal(true)}
          >
            Agregar usuario
          </button>
        <ExportDataToExcel  data={filteredUsers} headers={EmployeeHeaders} />
      </div>
      {!users ? (
        <div className={"row justify-content-center"}>
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Table
          headers={EmployeeHeaders}
          data={filteredUsers}
          onSelectRow={setUserSelected}
          onDeleteRow={deleteEmployee}
        />
      )}

      {showModal ? (
        <AddUsuarioModal onSuccess={setShowModal} getUsers={getUsers} />
      ) : null}
    </>
  );
};

export default Usuarios;
