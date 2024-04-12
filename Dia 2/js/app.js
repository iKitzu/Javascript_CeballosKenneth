import datos from '../data/data.json' assert {type: "json"};

import { Camper } from './clases.js';

const cuerpoTabla = document.querySelector("#cuerpo-tabla")


const cargarTabla = () => {

    datos.map((item) => {

        const fila = document.createElement("tr")

        const celdas = `
        <th>${item.ti}</th>
        <td>${item.nombrec}</td>
        <td>${item.apellidoc}</td>
        <td>${item.direccionc}</td>
        <td>${item.acudientec}</td>
        <td>${item.telefonocelularc}</td>
        <td>${item.telefonofijoc}</td>
        <td>${item.estadoc}</td>
        <td>${item.riesgoc}</td>
        <td>${item.rutac}</td>
        <td> 
        <div>
        <button class="btn btn-outline-warning"><i class="fa fa-pencil" aria-hidden="true"></i>
        </button>
        <button class="btn btn-outline-danger"><i class="fa fa-times" aria-hidden="true"></i>
        </button>
        </div>
        </td>

        `

        fila.innerHTML = celdas
        cuerpoTabla.append(fila)


    });
};



const agregarCamper = (event) => {
    event.preventDefault();

let id = datos.at(-1).id + 1
let ti = document.querySelector('#ti').value
let nombrec = document.querySelector('#nombrec').value
let apellidoc = document.querySelector('#apellidoc').value
let direccionc = document.querySelector('#direccionc').value
let acudientec = document.querySelector('#acudientec').value
let telefonocelularc = document.querySelector('#telefonocelularc').value
let telefonofijoc = document.querySelector('#telefonofijoc').value
let estadoc = document.querySelector('#estadoc').value
let riesgoc = document.querySelector('#riesgoc').value
let rutac = document.querySelector('#rutac').value
    

    datos.push(new Camper(id,ti,nombrec,apellidoc,direccionc,acudientec,telefonofijoc,telefonocelularc,estadoc,riesgoc,rutac))

    cargarTabla()


}

cargarTabla()

document.querySelector('#formCamper').addEventListener('submit', agregarCamper)