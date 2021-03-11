import React, {useEffect}  from 'react';
import AddResponsivas from './AddResponsivas';



const Responsivas = () => { 

    useEffect(()=> {
        document.title= "Responsivas";
    }, [])

    return(
        
        
        <AddResponsivas/>
    )

}


export default Responsivas;