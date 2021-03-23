import React, { useEffect,useState } from "react";
import AddEquipos from "./AddEquipos";
import Table from "./Table";
import headers from "../headers/EquipmentHeaders.json";
import axios from 'axios';
import ExportEquipmentsToExcel from './ExportEquipmentsToExcel';
import EditEquipoModal from './EditEquipoModal';
import Swal from "sweetalert2";
const Equipos = () => {
  const [equipments, setEquipments] = useState(null);
    const [users,setUsers] = useState(null);
  const [showEditModal,setShowEditModal] = useState(false);
  const [equipmentSelected,setEquipmentSelected] = useState(null);

  useEffect(() => {
    document.title = "Equipos";
    getEquipments();
    getUsers();
  }, []);
  const getEquipments = async () => {
    try {
      const equipments = await axios.get("/api/equipos");
      setEquipments(equipments.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async(equipment_id) => { 
    const equipment  = equipments.filter(eq => eq._id===equipment_id)[0];
    console.log(equipment);
    if(equipment.assigned_to_name != ""){
      Swal.fire('Equipo asignado','El equipo debe estar sin asignación','warning');

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

  }

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
      <div className="row justify-content-lg-end justify-content-md-end my-2">
        <div className={"row d-flex justify-content-around justify-content-md-end my-3"}>
          <button
            className="btn btn-primary mr-2"
            data-toggle="modal"
            data-target="#addEquipoModal"
            onClick = {() => setShowModal(true)}
          >
              
           Agregar equipo
          </button>
          <ExportEquipmentsToExcel data={equipments} headers={headers} fileName="Equipos" />
        </div>
      </div>
      <Table headers={headers} data={equipments} setShowEditModal={setShowEditModal} onSelectRow={setEquipmentSelected} onDeleteRow={handleDelete}/>
      {showModal &&  <AddEquipos users={users} onSuccess={setShowModal} getEquipments={getEquipments}/>}

      {showEditModal ? <EditEquipoModal onSuccess={setShowEditModal} data={equipmentSelected} setEquipmentSelected={setEquipmentSelected} users={users}  getEquipments={getEquipments}/> : null}
    </>
    
  );
};

export default Equipos;
