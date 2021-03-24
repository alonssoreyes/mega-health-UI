import axios from 'axios';
import React, {useEffect, useState}  from 'react';
import AddSucursal from './AddSucursal';
import EditSucursalModal from './EditSucursalModal';
import Sucursal from './Sucursal/Sucursal';



const Sucursales = ({user}) => { 
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [sucursals, setSucursals] = useState(null);
  const [selectedSucursal, setSelectedSucursal] = useState(null);

    useEffect(()=> {
        document.title= "Sucursales";

        
        getSucursales();    
    }, []);
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

    return(
        <>

<div className="row justify-content-lg-end justify-content-md-end my-2">
        <div className={"row d-flex justify-content-around justify-content-md-end my-3"}>
          {user.role==="ADMIN_ROLE" ? <button
            className="btn btn-primary mr-4"
            data-toggle="modal"
            data-target="#addSucursalModal"
            onClick = {() => setShowModal(true)}
          >
              
           Agregar Sucursal
          </button> :null}
        </div>
      </div>
            <div className="row mt-4 d-flex justify-content-between">
                {sucursals && sucursals.map(sucursal => <Sucursal data={sucursal} onSelectSucursal={setSelectedSucursal} setShowEditModal={setShowEditModal} getSucursals={getSucursales} user={user}/>)}
            </div>
            {showEditModal ? <EditSucursalModal setShowEditModal={setShowEditModal} getSucursals={getSucursales} data={selectedSucursal} setSelectedSucursal={setSelectedSucursal}/> : null}
            {showModal ?<AddSucursal onSuccess={setShowModal} getSucursals={getSucursales}/> : null}
            
        </>
    )

}

export default Sucursales;