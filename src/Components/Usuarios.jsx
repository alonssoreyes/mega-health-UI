import React, {useEffect, useState}  from 'react';
import EmployeeHeaders from '../headers/EmployeesHeaders.json';
import  Table from './Table';
import AddUsuarioModal from './AddUsuarioModal';
import Modal from "react-responsive-modal";
import axios from "axios";

const Usuarios = () => { 
    const [users, setUsers] = useState(false);
    const [showModal,setShowModal] = useState(false);
    useEffect(()=> {
        document.title= "Usuarios";
        const getUsers = async() => {
            const users = await axios.get('/api/usuarios');
            setUsers(users.data);
        }
        getUsers();
    }, [users]);


    useEffect(() => {

    }, [])


    return(
        <>

            <h3>Empleados</h3>

            <div className="row justify-content-lg-end justify-content-md-end my-2">
                <div className={"col-lg-2 justify-content-end "}>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#addEmpleadoModal" onClick={() => setShowModal(true)}>
                        <i className="link-icon" data-feather="plus"></i>
                        Agregar empleado
                    </button>
                </div>


            </div>
            {!users ?
                <div className={"row justify-content-center"}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                : <Table headers={EmployeeHeaders} data={users}/>}


            {showModal ? <AddUsuarioModal onSuccess={setShowModal} setUsers={setUsers}/> : null}
        </>
    )

}

export default Usuarios;