import React, {useEffect}  from 'react';
import AddMarca from './AddMarca';


const Marca = () => { 

    useEffect(()=> {
        document.title= "Marca";
    }, [])

    return(
         

 <AddMarca/>
    )

}

export default Marca;