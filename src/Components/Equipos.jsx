import React, { useEffect, useState } from "react";
import AddEquipos from "./AddEquipos";
import Table from "./Table";
import headers from "../headers/EquipmentHeaders.json";
import axios from "axios";
import ExportEquipmentsToExcel from "./ExportEquipmentsToExcel";
import EditEquipoModal from "./EditEquipoModal";
import Swal from "sweetalert2";
const Equipos = ({ user }) => {
  const [equipments, setEquipments] = useState(null);
  const [filteredEquipments, setFilteredEquipments] = useState(null);
  const [users, setUsers] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [equipmentSelected, setEquipmentSelected] = useState(null);
  const [filterType, setFilterType] = useState(null);
  const [filterAssignedTo, setFilterAssignedTo] = useState(null);
  const [filterAssignedBy, setFilterAssignedBy] = useState(null);
  const [filterDepartment, setFilterDepartment] = useState(null);
  const [filterSucursal,setFilterSucursal] = useState(null);
  const [sucursals,setSucursals] = useState(null);

  useEffect(() => {
    document.title = "Equipos";
    getEquipments();
    getUsers();
    getSucursales();
  }, []);


  const onSelectTypeChange = (e) => {
    setFilterType(e.target.value);
  }
  const onSelectAssignedToChange = (e) => {
    setFilterAssignedTo(e.target.value);
  }
  const onSelectAssignedByChange = (e) => {
    setFilterAssignedBy(e.target.value);
  }
  const onSelectDepartmentChange = (e) => {
    setFilterDepartment(e.target.value);
  }
  const onSelectSucursalChange = (e) => { 
    setFilterSucursal(e.target.value);
  }

  const handleFilter = () => { 
    let filteredEquipments = equipments;

    if(filterType && filterType!=="0"){
      filteredEquipments = filteredEquipments.filter(equipment => equipment.type===filterType);
    }
    if(filterAssignedTo && filterAssignedTo!=="0"){
      filteredEquipments = filteredEquipments.filter(equipment => equipment.assigned_to_name===filterAssignedTo);

    }
    if(filterAssignedBy && filterAssignedBy!=="0"){
      filteredEquipments = filteredEquipments.filter(equipment => equipment.assigned_by_name===filterAssignedBy);

    }
    if(filterDepartment && filterDepartment!=="0"){
      filteredEquipments = filteredEquipments.filter(equipment => equipment.department===filterDepartment);

    }
    if(filterSucursal && filterSucursal!=="0"){
      filteredEquipments = filteredEquipments.filter(equipment => equipment.sucursal===filterSucursal);

    }

    setFilteredEquipments(filteredEquipments);
  }

  useEffect(()=>{
    handleFilter();
  },[filterType,filterAssignedBy,filterAssignedTo,filterDepartment,filterSucursal]);

  const getEquipments = async () => {
    try {
      const equipments = await axios.get("/api/equipos");
      setEquipments(equipments.data);
      setFilteredEquipments(equipments.data)
    } catch (error) {
      console.log(error);
    }
  };

  const getSucursales = async() => {
    try{
        const sucursales = await axios.get('/api/sucursales');

        if(sucursales){
            setSucursals(sucursales.data);
        }
    }
    catch(err){
        console.log(err);
    }
}

  const handleDelete = async (equipment_id) => {
    const equipment = equipments.filter((eq) => eq._id === equipment_id)[0];
    if (equipment.assigned_to_name != "") {
      Swal.fire(
        "Equipo asignado",
        "El equipo debe estar sin asignación",
        "warning"
      );

      return;
    }

    try {
      Swal.fire({
        title: "Estas seguro de continuar?",
        text: "El equipo se inhabilitara",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const deleted = await axios.delete(`/api/equipo/${equipment_id}`);
          if (deleted) {
            Swal.fire(
              "Inhabilitado",
              "El equipo a quedado inhabilitado",
              "success"
            );
            getEquipments();
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const getUsers = async () => {
    try {
      const users = await axios.get("/api/usuarios");
      setUsers(users.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <h6 className="mt-4 mb-2">Filtrar por: </h6>
      <div className="row p-2">
        <div className="col-md-2 my-2">
          <select name="filterType" id="" onChange={onSelectTypeChange}>
            <option value="0">
              Tipo de equipo
            </option>

            <option value="PC">PC</option>
            <option value="Monitor">Monitor</option>
            <option value="Laptop">Laptop</option>
            <option value="Periferico">Periferico</option>
            <option value="Almacenamiento">Almacenamiento</option>
            <option value="Cable">Cable</option>
          </select>
        </div>
        <div className="col-md-2 my-2">
          <select name="filterAssignedTo" id="" onChange={onSelectAssignedToChange}>
            <option value="0">
              Asignado a
            </option>

            {users &&
              users.map((user) => (
                <option value={`${user.name} ${user.lastName}`}>
                  {user.name} {user.lastName}
                </option>
              ))}
          </select>
        </div>
        <div className="col-md-2 my-2">
          <select name="filterAssignedBy" id="" onChange={onSelectAssignedByChange}>
            <option value="0">
              Asignado por
            </option>

            {users &&
              users.map((user) => (
                <option value={`${user.name} ${user.lastName}`}>
                  {user.name} {user.lastName}
                </option>
              ))}
          </select>
        </div>
        <div className="col-md-2 my-2">
          <select name="departament" id="" onChange={onSelectDepartmentChange}>
            <option value="0">
              Departamento
            </option>

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
      </div>
      <div className="row-p-2">
      <div className="col-md-2 my-2">
          <select name="filterSucursal" id="" onChange={onSelectSucursalChange}>
            <option value="0">
              Sucursal
            </option>

            {sucursals && sucursals.map(sucursal => <option value={sucursal.name}>{sucursal.name}</option>)}
          </select>
        </div>
      </div>
      <div className="row justify-content-lg-end justify-content-md-end my-2">
        <div
          className={
            "row d-flex justify-content-around justify-content-md-end my-3"
          }
        >
          {user.role === "ADMIN_ROLE" ? (
            <button
              className="btn btn-primary mr-2"
              data-toggle="modal"
              data-target="#addEquipoModal"
              onClick={() => setShowModal(true)}
            >
              Agregar equipo
            </button>
          ) : null}
          <ExportEquipmentsToExcel
            data={equipments}
            headers={headers}
            fileName="Equipos"
          />
        </div>
      </div>
      <Table
        headers={headers}
        data={filteredEquipments}
        setShowEditModal={setShowEditModal}
        onSelectRow={setEquipmentSelected}
        onDeleteRow={handleDelete}
        user={user}
      />
      {showModal && (
        <AddEquipos
          users={users}
          onSuccess={setShowModal}
          getEquipments={getEquipments}
          sucursals={sucursals}
        />
      )}

      {showEditModal ? (
        <EditEquipoModal
          onSuccess={setShowEditModal}
          data={equipmentSelected}
          setEquipmentSelected={setEquipmentSelected}
          users={users}
          getEquipments={getEquipments}
          sucursals={sucursals}
        />
      ) : null}
    </>
  );
};

export default Equipos;
