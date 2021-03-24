import React, {useEffect, useState}  from 'react';
import AddResponsivas from './AddResponsivas';
import axios from 'axios';
import Responsiva from './Responsiva';


const Responsivas = () => { 
    const [showButton,setShowButton] = useState(false);
    const [users,setUsers] = useState(null);
    const [equipments,setEquipments] = useState(null);
    const [equipmentsByUser, setEquipmentsByUser] = useState(null);
    useEffect(()=> {
        document.title= "Responsivas";
        getUsers();
        getEquipments();
    }, [])

    const getEquipments = async () => {
        try {
          const equipments = await axios.get("/api/equipos");
          setEquipments(equipments.data);
        } catch (error) {
          console.log(error);
        }
      };

    const handleGenerate = (e) => {
        e.preventDefault();

            setEquipmentsByUser(null);
            setShowButton(false)

        const name = e.target.name.value;

        const eqs = equipments.filter(eq => eq.assigned_to_name === name);

        if(eqs.length > 0 ){
            setShowButton(true);
            setEquipmentsByUser(eqs);
        }else{
            alert("El empleado no tiene equipos asignados")
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

    return(
        
        <>
        <div className="row">
                <form className="col-md-6 d-flex justify-content-end" onSubmit={handleGenerate}>
                <select name="name" id="" className="form-control">
                    {users && users.map(user => <option value={`${user.name} ${user.lastName}`}>{user.name} {user.lastName}</option>)}
                    </select>
                <button className="btn btn-primary ml-3">Generar Responsiva</button>
                </form>
        </div>

        {showButton && equipmentsByUser ? <Responsiva data={equipmentsByUser} setEquipmentsByUser={setEquipmentsByUser} setShowButton={setShowButton}/>: null}
        </>
    )

}


export default Responsivas;