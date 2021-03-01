import React, {useEffect}  from 'react';
import AddEquipos from './AddEquipos';



const Equipos = () => { 

    useEffect(()=> {
        document.title= "Equipos";
    }, [])

    return(
         

 <AddEquipos/>
    )

}

export default Equipos;