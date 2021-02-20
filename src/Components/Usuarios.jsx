import React, {useEffect}  from 'react';



const Usuarios = () => { 

    useEffect(()=> {
        document.title= "Usuarios";
    }, [])

    return(
        <h1>Usuarios</h1>
    )

}

export default Usuarios;