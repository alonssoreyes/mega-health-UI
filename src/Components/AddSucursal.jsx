import React, { useEffect } from 'react';

const AddSucursal = function () {


    return (
        <div class="card-body">
            <h6 class="card-title">Agregar Sucursal</h6>
            <div className="col-md-6">
                <form class="forms-sample">
                    <div class="form-group">
                        <label for="cnv">Nombre del CNV :</label>
                        <input type="text" class="form-control" id="cnv" autocomplete="off" placeholder="CNV" />
                    </div>
                    <div class="form-group">
                        <label for="correocnv">Corre de su CNV :</label>
                        <input type="text" class="form-control" id="correocnv" autocomplete="off" placeholder="Correo" />
                    </div>
                    <div class="form-group">
                        <label for="ciudadcnv">Ciudad :</label>
                        <select class="form-control" name="ciudadcnv">
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
                    <div class="form-group">
                        <label for="direccioncnv">Dirección :</label>
                        <input type="text" class="form-control" id="direccioncnv" autocomplete="off" placeholder="Dirección" />
                    </div>

                    <button type="submit" class="btn btn-primary mr-2">Agregar</button>
                    <button class="btn btn-light">Cancelar</button>
                </form>
                <div class="card-body">
                <h6 class="card-title">Agregar Sucursal</h6>
                <form class="forms-sample2">
                    <div class="form-group">
                        <label for="mc">Nombre del MC :</label>
                        <input type="text" class="form-control" id="cnv" autocomplete="off" placeholder="MC" />
                    </div>
                    <div class="form-group">
                        <label for="correomc">Corre de su CNV :</label>
                        <input type="text" class="form-control" id="correomc" autocomplete="off" placeholder="Correo" />
                    </div>
                    <div class="form-group">
                        <label for="ciudadmc">Ciudad :</label>
                        <select class="form-control" name="ciudadmc">
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
                    <div class="form-group">
                        <label for="direccionmc">Dirección :</label>
                        <input type="text" class="form-control" id="direccionmc" autocomplete="off" placeholder="Dirección" />
                    </div>

                    <button type="submit" class="btn btn-primary mr-2">Agregar</button>
                    <button class="btn btn-light">Cancelar</button>
                </form>
            </div>

        </div>
        
        </div>
        
        

    )


}

export default AddSucursal;