import React, {useEffect}  from 'react';
import AddTiposdeEquipos from './AddTiposdeEquipos';



const TiposdeEquipos = () => { 

    useEffect(()=> {
        document.title= "TiposdeEquipos";
    }, [])

    return(
         

 <AddTiposdeEquipos/>
    )

}

export default TiposdeEquipos;