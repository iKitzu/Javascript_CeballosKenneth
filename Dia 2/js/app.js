import datos from '../data/data.json' assert {type: "json"};

import { Gift } from './clases.js';

const cuerpoTabla=document.querySelector("#cuerpo-tabla")


const cargarTabla=()=>{

    datos.map((item)=>{

        const fila=document.createElement("tr")

        const celdas=`<th>${item.id}</th>
        <td>${item.nombres}</td>
        <td>${item.apellidos}</td>
        <td>${item.direccion}</td>
        <td>${item.acudiente}</td>
        <td>${item.telefonocelular}</td>
        <td>${item.telefonofijo}</td>
        <td>${item.estado}</td>
        <td>${item.riesgo}</td>`

        fila.innerHTML=celdas
        cuerpoTabla.append(fila)


    })
}

