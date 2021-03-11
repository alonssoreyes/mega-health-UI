import React, {useEffect}  from 'react';
import AddConsultaEquipo from './AddConsultaEquipo';



const ConsultarEquipo = () => { 

    useEffect(()=> {
        document.title= "Consultar Equipo";
    }, [])

    return(
        
        <AddConsultaEquipo/>
    )

}

export default ConsultarEquipo;