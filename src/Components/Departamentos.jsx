import React, {useEffect}  from 'react';
import AddDepartamentos from './AddDepartamentos';



const Departamentos = () => { 

    useEffect(()=> {
        document.title= "Departamentos";
    }, [])

    return(
        
        <AddDepartamentos/>
    )

}

export default Departamentos;