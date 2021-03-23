import React from "react";
import ReactExport from "react-export-excel";
import moment from 'moment';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;



const ExportEquipmentsToExcel = ({ headers, data, fileName}) => {
    return(
        <ExcelFile element={<button className="btn btn-secondary mr-3" style={{background:'#117c43'}}><i className="mdi mdi-file-excel "></i> </button>} filename={`${fileName} ${moment(new Date()).format("YYYY/MM/DD hh:mm")}`}>
            <ExcelSheet data={data} name="Equipos">
                <ExcelColumn label={"Tipo de equipo"} value={"type"}/>
                <ExcelColumn label={"Asignado por"} value={"assigned_by_name"}/>
                <ExcelColumn label={"Asignado a"} value={"assigned_to_name"}/>
                <ExcelColumn label={"Departamento"} value={"department"}/>
                <ExcelColumn label={"Sucursal"} value={"sucursal"}/>
                <ExcelColumn label={"Categoria"} value={"sucursal"}/>
                <ExcelColumn label={"Marca"} value={"brand"}/>
                <ExcelColumn label={"Numero de serie"} value={"serial_number"}/>
                <ExcelColumn label={"Modelo"} value={"model"}/>
                <ExcelColumn label={"Ubicacion"} value={"location"}/>
                <ExcelColumn label={"Activo"} value={"active"}/>
                <ExcelColumn label={"Condiciones"} value={"conditions"}/>
                <ExcelColumn label={"Descripcion"} value={"description"}/>
                <ExcelColumn label={"Fecha de garantia"} value={"guarantee_date"}/>
                <ExcelColumn label={"Precio de compra"} value={"buy_date"}/>




            </ExcelSheet>
        </ExcelFile>
    )
}


export default ExportEquipmentsToExcel;