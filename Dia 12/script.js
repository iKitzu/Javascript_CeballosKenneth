function mostrarMensaje() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("holaMundo").style.fontSize = "36px";
    document.getElementById("holaMundo").style.opacity = "1";
    document.getElementById("holaMundo").innerText = "¡HOLA MUNDO!";
}

document.getElementById("modoNormal").onclick = function() {
    window.location.href = "http://127.0.0.1:5500/Dia%2012/Normal%20Mode/index.html";
};

document.getElementById("modoPesadilla").onclick = function() {
    window.location.href = "http://127.0.0.1:5500/Dia%2012/Hard%20Mode/index.html";
};
