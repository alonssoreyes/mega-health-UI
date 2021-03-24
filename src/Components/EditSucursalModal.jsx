import axios from "axios";
import React, { useEffect } from "react";

const EditSucursalModal = function ({onSuccess, getSucursals, data,setSelectedSucursal}) {


    const handleSubmit = async (ev)=>{ 
        ev.preventDefault();

        const formData = new FormData();
        formData.append('name', ev.target.name.value);
        formData.append('correo', ev.target.correo.value);
        formData.append('city', ev.target.city.value);
        formData.append('direction', ev.target.direction.value);
        formData.append('phone', ev.target.phone.value);
        formData.append('image', ev.target.image.files[0]);

        try{
            const response = await axios.put(`/api/sucursal/${data._id}`, formData);
            if(response){
                getSucursals();
                ev.target.reset();
                document.querySelector("#edit").classList.remove("show");
                document
                  .querySelector("#edit")
                  .removeAttribute("aria-modal");
                document
                  .querySelector("#edit")
                  .setAttribute("aria-hidden", true);
                document.querySelector("#edit").style.display = "none";
                document.getElementsByClassName("modal-backdrop")[0].remove();
                document.querySelector("body").classList.remove("modal-open");
                onSuccess(false);
              }
        }
        catch(err){
            console.error(err);
        }





    }

    const handleInputChange = ev => { 
        setSelectedSucursal({...data, [ev.target.name]:ev.target.value})
    }

  return (
    <div
      className="modal fade"
      id="edit"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document" style={{ width: "1200px" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Editar Sucursal
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-12">
              <form class="forms-sample row" onSubmit={handleSubmit}>
                    <div class="form-group col-md-6">
                        <label for="cnv">Nombre del CNV :</label>
                        <input type="text" class="form-control" id="name" name="name" autocomplete="off" placeholder="CNV" value={data.name} onChange={handleInputChange} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="correocnv">Corre de su CNV :</label>
                        <input type="text" class="form-control" id="correo" name="correo" autocomplete="off" placeholder="Correo" value={data.correo} onChange={handleInputChange}/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="city">Ciudad :</label>
                        <select class="form-control" name="city" onChange={handleInputChange}>
                            <option value={data.city} selected hidden>{data.city}</option>
                            <option value="Aguascalientes">Aguascalientes</option>
                            <option value="Tijuana">Tijuana</option>
                            <option value="Mexicali">Mexicali</option>
                            <option value="Ensenada">Ensenada</option>
                            <option value="Los Cabos">Los Cabos</option>
                            <option value="La Paz">La Paz</option>
                            <option value="Ciudad del Carmen">Ciudad del Carmen</option>
                            <option value="Campeche">Campeche</option>
                            <option value="Tuxtla Gutiérrez">Tuxtla Gutiérrez</option>
                            <option value="Tapachula">Tapachula</option>
                            <option value="Juárez">Juárez</option>
                            <option value="Chihuahua">Chihuahua</option>
                            <option value="Saltillo">Saltillo</option>
                            <option value="Piedras Negras">Piedras Negras</option>
                            <option value="Monclova-Frontera">Monclova-Frontera</option>
                            <option value="La Laguna">La Laguna</option>
                            <option value="Tecomán">Tecomán</option>
                            <option value="Manzanillo">Manzanillo</option>
                            <option value="Colima-Villa de Álvarez">Colima-Villa de Álvarez</option>
                            <option value="Valle de México">Valle de México</option>
                            <option value="Durango">Durango</option>
                            <option value="San Francisco del Rincón">San Francisco del Rincón</option>
                            <option value="Salamanca">Salamanca</option>
                            <option value="León">León</option>
                            <option value="La Piedad-Pénjamo">La Piedad-Pénjamo</option>
                            <option value="Irapuato">Irapuato</option>
                            <option value="Guanajuato">Guanajuato</option>
                            <option value="Celaya">Celaya</option>
                            <option value="Chilpancingo">Chilpancingo</option>
                            <option value="Acapulco">Acapulco</option>
                            <option value="Tulancingo">Tulancingo</option>
                            <option value="Pachuca">Pachuca</option>
                            <option value="Puerto Vallarta">Puerto Vallarta</option>
                            <option value="Ocotlán">Ocotlán</option>
                            <option value="Guadalajara">Guadalajara	</option>
                            <option value="Zamora-Jacona">Zamora-Jacona</option>
                            <option value="Uruapan">Uruapan</option>
                            <option value="Morelia">Morelia</option>
                            <option value="Cuernavaca">Cuernavaca</option>
                            <option value="Cuautla">Cuautla</option>
                            <option value="Toluca">Toluca</option>
                            <option value="Tepic">Tepic</option>
                            <option value="Monterrey">Monterrey</option>
                            <option value="Tehuantepec-Salina Cruz">Tehuantepec-Salina Cruz</option>
                            <option value="Oaxaca">Oaxaca</option>
                            <option value="Tehuacán">Tehuacán</option>
                            <option value="	Puebla-Tlaxcala">	Puebla-Tlaxcala</option>
                            <option value="San Juan del Río">San Juan del Río</option>
                            <option value="Querétaro">Querétaro</option>
                            <option value="Chetumal">Chetumal</option>
                            <option value="Cancún">Cancún</option>
                            <option value="San Luis Potosí-Soledad">San Luis Potosí-Soledad</option>
                            <option value="Rioverde-Ciudad Fernández">Rioverde-Ciudad Fernández</option>
                            <option value="Mazatlán">Mazatlán</option>
                            <option value="Los Mochis">Los Mochis</option>
                            <option value="Culiacán">Culiacán</option>
                            <option value="Hermosillo">Hermosillo</option>
                            <option value="Guaymas">Guaymas</option>
                            <option value="Ciudad Obregón">Ciudad Obregón</option>
                            <option value="Villahermosa">Villahermosa</option>
                            <option value="Cárdenas">Cárdenas</option>
                            <option value="Tampico-Pánuco">Tampico-Pánuco</option>
                            <option value="Reynosa-Río Bravo">Reynosa-Río Bravo</option>
                            <option value="Nuevo Laredo">Nuevo Laredo</option>
                            <option value="Tlaxcala-Apizaco">Tlaxcala-Apizaco</option>
                            <option value="Xalapa">Xalapa</option>
                            <option value="Veracruz">Veracruz</option>
                            <option value="Poza Rica">Poza Rica</option>
                            <option value="Orizaba">Orizaba</option>
                            <option value="Minatitlán">Minatitlán</option>
                            <option value="Córdoba">Córdoba</option>
                            <option value="Coatzacoalcos">Coatzacoalcos</option>
                            <option value="Mérida">Mérida</option>
                            <option value="Zacatecas-Guadalupe">Zacatecas-Guadalupe</option>

                        </select>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="direccioncnv">Dirección :</label>
                        <input type="text" class="form-control" id="direction" name={"direction"} autocomplete="off" placeholder="Dirección" value={data.direction} onChange={handleInputChange}/>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="direccioncnv">Telefono :</label>
                        <input type="text" class="form-control" id="phone" name={"phone"} autocomplete="off" placeholder="Telefono Sucursal" value={data.phone} onChange={handleInputChange}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="image">Imagen Sucursal</label>
                        <input type="file" className="form-control" name="image" />
                    </div>
                    <div className="col-md-12 d-flex justify-content-end">
                    <button class="btn btn-light">Cancelar</button>
                        <button type="submit" class="btn btn-primary mr-2">Agregar</button>
                        
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default EditSucursalModal;
