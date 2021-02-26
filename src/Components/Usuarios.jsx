import React, {useEffect}  from 'react';
import AddUsuario from './AddUsuario';



const Usuarios = () => { 

    useEffect(()=> {
        document.title= "Usuarios";
    }, [])

    return(
        
        <AddUsuario/>
    )

}

export default Usuarios;