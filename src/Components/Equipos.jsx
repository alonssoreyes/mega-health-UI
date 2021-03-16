import React, { useEffect,useState } from "react";
import AddEquipos from "./AddEquipos";
import Table from "./Table";
import headers from "../headers/EquipmentHeaders.json";
import axios from 'axios';
const Equipos = () => {
  const [equipments, setEquipments] = useState(null);
    const [users,setUsers] = useState(null);
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
        <div className={"col-lg-2 justify-content-end "}>
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#addEquipoModal"
            onClick = {() => setShowModal(true)}
          >
            <i className="link-icon" data-feather="plus"></i>
            Agregar equipo
          </button>
        </div>
      </div>
      <Table headers={headers} data={equipments}/>
      {showModal &&  <AddEquipos users={users}/>}
    </>
    
  );
};

export default Equipos;
