import React, { useEffect, useState } from "react";
import EmployeeHeaders from "../headers/EmployeesHeaders.json";
import Table from "./Table";
import AddUsuarioModal from "./AddUsuarioModal";
import Modal from "react-responsive-modal";
import axios from "axios";
import Swal from "sweetalert2";
import ExportDataToExcel from './ExportDataToExcel';
import EditUsuarioModal from './EditUsuarioModal';
const Usuarios = ({ user }) => {
  const [users, setUsers] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [userSelected, setUserSelected] = useState(null);
  const [showEditModal,setShowEditModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [filterStatus,setFilterStatus] = useState(null);
  const [filterRole, setFilterRole] = useState(null);
  const onSelectStatusChange = (e) => {
    setFilterStatus(e.target.value)
  }
  const onSelectRoleChange = (e) => { 
    setFilterRole(e.target.value);
  }


  const handleFilter= () => { 
    let filteredUsers  = users;

    if(filterStatus && filterStatus!=="0"){
      const value = filterStatus==="active" ? true : false;
      filteredUsers = filteredUsers.filter(item => item.status===value)
    }

    if(filterRole && filterRole!=="0"){
      filteredUsers = filteredUsers.filter(item => item.role==filterRole);
    }

    setFilteredUsers(filteredUsers)

  }

  useEffect(()=>{
    handleFilter();
  },[filterStatus])
  useEffect(()=>{
    handleFilter();
  },[filterRole])

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


  return (
    <>
      <h3>Empleados</h3>

      <h6 className="mt-4 mb-2">Filtrar por: </h6>
      <div className="row p-2">
        <div className="col-md-3 my-2">
          <select name="filterEmployees" id="" onChange={onSelectStatusChange}>
            <option value="0" defaultValue>
              Status
            </option>

            <option value={"active"}>Activos</option>

            <option value={"inactive"}>Inactivos</option>
          </select>
        </div>
        <div className="col-md-3 my-2">
          <select name="filterEmployeesByRole" id="" onChange={onSelectRoleChange}>
            <option value="0" defaultValue>
              Rol
            </option>

            <option value="ADMIN_ROLE">Administrador</option>

            <option value="AUDITOR_ROLE">Auditor</option>
            <option value="USER_ROLE">Empleado</option>

          </select>
        </div>
      </div>
      <div className="row d-flex justify-content-around justify-content-md-end my-3">
          {user.role ==="ADMIN_ROLE" ? <button
            className="btn btn-primary mr-2"
            data-toggle="modal"
            data-target="#addEmpleadoModal"
            onClick={() => setShowModal(true)}
          >
            Agregar usuario
          </button> : null}
        <ExportDataToExcel  data={filteredUsers} headers={EmployeeHeaders} fileName={"Empleados "} />
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
          setShowEditModal={setShowEditModal}
          user={user}
          setUsers={setUsers}
          
        />
      )}

      {showEditModal ? <EditUsuarioModal onSuccess={setShowEditModal} getUsers={getUsers} data={userSelected} setUserSelected={setUserSelected}/> : null}

      {showModal ? (
        <AddUsuarioModal onSuccess={setShowModal} getUsers={getUsers} />
      ) : null}
    </>
  );
};

export default Usuarios;
