import React, {useEffect}  from 'react';
import AddCategoria from './AddCatergoria';



const Categoria = () => { 

    useEffect(()=> {
        document.title= "Categorias";
    }, [])

    return(
         

 <AddCategoria/>
    )

}

export default Categoria;