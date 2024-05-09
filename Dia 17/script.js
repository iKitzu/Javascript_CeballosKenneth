class CharacterRandomP extends HTMLElement {
    constructor(){
        super();
        this.render();
    }
    render(){
        this.innerHTML = /* Aqui va el html ;) */ `
        <center>
        <br><br><br><br><br>
        <h1>Random User Generator ;)</h1>
        <div class="container">
            <div id="container">
                
            </div>        
            
            <div id="Info">
                
            </div>
            <div class="datos">
    
                <button id="btt" onmouseover="nombre()"><i class="fa fa-user" aria-hidden="true"></i></i></i></button>
                <button id="btt" onmouseover="correo()"><i class="fa fa-envelope" aria-hidden="true"></i></button>
                <button id="btt" onmouseover="cumpleaños()"><i class="fa fa-birthday-cake" aria-hidden="true"></i></button>
                <button id="btt" onmouseover="ubicacion()"><i class="fa fa-map-marker" aria-hidden="true"></i></button>
                <button id="btt" onmouseover="telefono()"><i class="fa fa-phone" aria-hidden="true"></i></button>
                <button id="btt" onmouseover="contraseña()"><i class="fa fa-lock" aria-hidden="true"></i></button>
    
            </div>
    
        </div>
    </center>
        `;
    }
}

customElements.define('persona-r', CharacterRandomP);



function Persona(){
    let xhr = new XMLHttpRequest();
    let url = `https://randomuser.me/api/`;
    xhr.open('GET',url,true);
    xhr.onreadystatechange = function(){
        if (this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response);
            displaypersona(response);
        }
        else if( this.readyState == 4 ){
            console.log('Error:',this.statusText);
        }
    };
    xhr.send();
}

function displaypersona(data){
    let info = document.getElementById("Info");
    if (data.response === "error") {
        info.innerHTML = `<p>Error: ${data.error}</p>`;
    } else {
        info.innerHTML = `
        <br><br>
        <img id="imagen" src="${data.results['0'].picture.large}"> 
        <hr>
        <div id="container_name">
        <h4 id="descripcion" style="color: gray;">Hi, My name is</h4>
        <h1 id="nombre">${data.results['0'].name.first} ${data.results['0'].name.last}</h1>
        </div>

        <div id="container_emmail">
        <h4 id="descripcion" style="color: gray;">My email is</h4>
        <h1 id="nombre">${data.results['0'].email} </h1>
        </div>

        <div id="container_birthday">
        <h4 id="descripcion" style="color: gray;">My birthday is</h4>
        <h1 id="nombre">${data.results['0'].dob.date} </h1>
        </div>

        <div id="container_address">
        <h4 id="descripcion" style="color: gray;">My address is</h4>
        <h1 id="nombre">${data.results['0'].location.street.number} ${data.results['0'].location.street.name} </h1>
        </div>

        <div id="container_phone">
        <h4 id="descripcion" style="color: gray;">My Phone number is</h4>
        <h1 id="nombre">${data.results['0'].phone}  </h1>
        </div>

        <div id="container_password">
        <h4 id="descripcion" style="color: gray;">My password is</h4>
        <h1 id="nombre">${data.results['0'].login.password}  </h1>
        </div>
        `;
    }
}



function nombre(){
    var n = document.getElementById("container_name");
    n.setAttribute("style", "display:block;");
    var em = document.getElementById("container_emmail");
    em.setAttribute("style", "display:none;");
    var br = document.getElementById("container_birthday");
    br.setAttribute("style", "display:none;");
    var ad = document.getElementById("container_address");
    ad.setAttribute("style", "display:none;");
    var ph = document.getElementById("container_phone");
    ph.setAttribute("style", "display:none;");
    var ps = document.getElementById("container_password");
    ps.setAttribute("style", "display:none;");
}


function correo(){
    var n = document.getElementById("container_name");
    n.setAttribute("style", "display:none;");
    var em = document.getElementById("container_emmail");
    em.setAttribute("style", "display:block;");
    var br = document.getElementById("container_birthday");
    br.setAttribute("style", "display:none;");
    var ad = document.getElementById("container_address");
    ad.setAttribute("style", "display:none;");
    var ph = document.getElementById("container_phone");
    ph.setAttribute("style", "display:none;");
    var ps = document.getElementById("container_password");
    ps.setAttribute("style", "display:none;");
}

function cumpleaños(){
    var n = document.getElementById("container_name");
    n.setAttribute("style", "display:none;");
    var em = document.getElementById("container_emmail");
    em.setAttribute("style", "display:none;");
    var br = document.getElementById("container_birthday");
    br.setAttribute("style", "display:block;");
    var ad = document.getElementById("container_address");
    ad.setAttribute("style", "display:none;");
    var ph = document.getElementById("container_phone");
    ph.setAttribute("style", "display:none;");
    var ps = document.getElementById("container_password");
    ps.setAttribute("style", "display:none;");
}


function ubicacion(){
    var n = document.getElementById("container_name");
    n.setAttribute("style", "display:none;");
    var em = document.getElementById("container_emmail");
    em.setAttribute("style", "display:none;");
    var br = document.getElementById("container_birthday");
    br.setAttribute("style", "display:none;");
    var ad = document.getElementById("container_address");
    ad.setAttribute("style", "display:block;");
    var ph = document.getElementById("container_phone");
    ph.setAttribute("style", "display:none;");
    var ps = document.getElementById("container_password");
    ps.setAttribute("style", "display:none;");
}


function telefono(){
    var n = document.getElementById("container_name");
    n.setAttribute("style", "display:none;");
    var em = document.getElementById("container_emmail");
    em.setAttribute("style", "display:none;");
    var br = document.getElementById("container_birthday");
    br.setAttribute("style", "display:none;");
    var ad = document.getElementById("container_address");
    ad.setAttribute("style", "display:none;");
    var ph = document.getElementById("container_phone");
    ph.setAttribute("style", "display:block;");
    var ps = document.getElementById("container_password");
    ps.setAttribute("style", "display:none;");
}


function contraseña(){
    var n = document.getElementById("container_name");
    n.setAttribute("style", "display:none;");
    var em = document.getElementById("container_emmail");
    em.setAttribute("style", "display:none;");
    var br = document.getElementById("container_birthday");
    br.setAttribute("style", "display:none;");
    var ad = document.getElementById("container_address");
    ad.setAttribute("style", "display:none;");
    var ph = document.getElementById("container_phone");
    ph.setAttribute("style", "display:none;");
    var ps = document.getElementById("container_password");
    ps.setAttribute("style", "display:block;");
}






let refresh = document.getElementById('one');
refresh.addEventListener('click', _ => {
            location.reload();
})