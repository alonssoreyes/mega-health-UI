import React, {useEffect}  from 'react';
import AddSucursal from './AddSucursal';



const Sucursal = () => { 

    useEffect(()=> {
        document.title= "Sucursal";
    }, [])

    return(
        
        <AddSucursal/>
    )

}

export default Sucursal;