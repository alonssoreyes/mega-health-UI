import React from "react";
import ReactExport from "react-export-excel";
import moment from 'moment';
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;



const ExportDataToExcel = ({ headers, data, fileName}) => {

    return(
        <ExcelFile element={<button className="btn btn-secondary mr-3" style={{background:'#117c43'}}><i className="mdi mdi-file-excel " title="Exportar Datos"></i> </button>} filename={`${fileName} ${moment(new Date()).format("YYYY/MM/DD hh:mm")}`}>
            <ExcelSheet data={data} name="Empleados">
            <ExcelColumn label="Nombre" value="name"/>
            <ExcelColumn label="Apellidos" value="lastName"/>
            <ExcelColumn label="Alias" value="alias"/>
            <ExcelColumn label="Email" value="email"/>
            <ExcelColumn label="Rol" value="role"/>
            <ExcelColumn label="Estado Actual" value="status"/>

            </ExcelSheet>
        </ExcelFile>
    )
}


export default ExportDataToExcel;