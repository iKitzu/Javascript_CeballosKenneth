const foto = document.querySelector('#foto');
const nombreUsuario = document.querySelector('#nombreUsuario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const birthday = document.querySelector('#birthday');
const address = document.querySelector('#address');
const phonenumber = document.querySelector('#phonenumber');
const password = document.querySelector('#password');

const crearUsuario = async () => {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    foto.src = datos.picture.medium;
    nombreUsuario.textContent = datos.name.first;
    email.textContent = datos.email;
    birthday.textContent = datos.dob.date;
    address.textContent = datos.location.street.name + ', ' + datos.location.city + ', ' + datos.location.country;
    phonenumber.textContent = datos.phone;
    password.textContent = datos.login.password;
}

document.addEventListener('DOMContentLoaded', crearUsuario);

