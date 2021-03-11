import React, {useEffect, useState}  from 'react';
import EmployeeHeaders from '../headers/EmployeesHeaders.json';
import  Table from './Table';
import AddUsuarioModal from './AddUsuarioModal';
import Modal from "react-responsive-modal";
import axios from "axios";

const Usuarios = () => { 
    const [users, setUsers] = useState(null);
    const [showModal,setShowModal] = useState(false);
    const [userSelected, setUserSelected] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    useEffect(()=> {        
        getUsers();
    }, []);


    useEffect(() => {

    }, [])

    const getUsers = async() => {
        try {
            console.log(axios.defaults.baseURL);
            const users = await axios.get('/api/usuarios');
            setUsers(users.data);
        } catch (error) {
            console.log(error);
        }
    }


    const deleteEmployee = async(id) =>{
        try{
            const deleted = await axios.delete(`/api/usuarios/${id}`);

            if(deleted){
                console.log('Ya lo borre');
            }
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <>

            <h3>Empleados</h3>
            <Modal center open={openModal} onClose={() => setOpenModal(false)}>
                <div>
                    <h1>Hola</h1>
                </div>
            </Modal>
            <div className="row justify-content-lg-end justify-content-md-end my-2">
                <div className={"col-lg-2 justify-content-end "}>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#addEmpleadoModal" onClick={() => setShowModal(true)}>
                        <i className="link-icon" data-feather="plus"></i>
                        Agregar usuario
                    </button>
                </div>


            </div>
            {!users ?
                <div className={"row justify-content-center"}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                : <Table headers={EmployeeHeaders} data={users} setUserSelected={setUserSelected} deleteEmployee={deleteEmployee}/>}


            {showModal ? <AddUsuarioModal onSuccess={setShowModal} getUsers={getUsers}/> : null}
        </>
    )

}

export default Usuarios;