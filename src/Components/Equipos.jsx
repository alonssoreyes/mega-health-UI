import React, {useEffect}  from 'react';
import AddEquiposModal from './AddEquiposModal';



const Equipos = () => { 

    useEffect(()=> {
        document.title= "Equipos";
    }, [])

    return(
         

 <AddEquiposModal/>
    )

}

export default Equipos;