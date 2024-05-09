//Creación de un elemento personalizable
class crearBoton extends HTMLElement{
    constructor(){
        super();
        this.textContent = '¡Haz click aquí!';
        this.addEventListener('click',()=> alert('¡Hiciste click! Sos Inteligente'));
    }

}

customElements.define('mi-boton',crearBoton)

class crearBotonShadow extends HTMLElement{
    constructor(){
        super();
        let miShadow = this.attachShadow({mode:'open'});
        miShadow.innerHTML=`
        <button>Soy un boton lindo!</button>
        `
    }
}

customElements.define('boton-shadow',crearBotonShadow)
