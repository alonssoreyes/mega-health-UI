import React, {useEffect}  from 'react';
import AddEquipos from './AddEquipos';



const Equipos = () => { 

    useEffect(()=> {
        document.title= "Equipos";
    }, [])

    return(
          <form class="Formulario">

          <fieldset>
            <label for="T.Equipo"> Tipo de Equipo :</label>
            <select class="T.Equipo" name="T.Equipo">

              <option value="pc">PC</option>
              <option value="monitor">Monitor</option>
              <option value="laptop">Laptop</option>

            </select>

     <br></br>
     <br></br>
           <label for="responsable" > Responsable : </label>
           <input type="text" name="responsable"  autocomplete="on"></input>
    
    <br></br>
    <br></br>
          <label for="departamento" > Departamento :</label>
          <input type="text" name="departamento"  autocomplete="on"></input>

    <br></br>
    <br></br>

    <label for="sucursal" > Sucursal :</label>
          <input type="text" name="sucursal"  autocomplete="on"></input>

    <br></br>
    <br></br>

    <label for="departamento" > Departamento :</label>
          <input type="text" name="departamento"  autocomplete="on"></input>

    <br></br>
    <br></br>
    <label for="T.Equipo"> Tipo de Equipo :</label>
            <select class="T.Equipo" name="T.Equipo" heigth="200">

              <option value="pc">PC</option>
              <option value="monitor">Monitor</option>
              <option value="laptop">Laptop</option>

            </select>

         </fieldset>
    </form>
        
       // <AddEquipos/>
    )

}

export default Equipos;