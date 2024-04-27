// Selecciona los elementos HTML necesarios
const buttonPrev = document.querySelector('.btn-prev'); // Botón para mostrar el Pokémon anterior
let searchPokemon = 1; // Variable para rastrear el número de Pokémon buscado
const input = document.querySelector('.input__search'); // Input de búsqueda
const pokemonImage = document.querySelector('.pokemon__image'); // Imagen del Pokémon
const pokemonName = document.querySelector('.pokemon__name'); // Nombre del Pokémon
const form = document.querySelector('.form'); // Formulario de búsqueda
const pokemonNumber = document.querySelector('.pokemon__number'); // Número del Pokémon
const buttonNext = document.querySelector('.btn-next'); // Botón para mostrar el Pokémon siguiente

// Función para renderizar la información del Pokémon
const renderPokemon = async (pokemon) => {
    // Muestra un mensaje de carga mientras se carga el Pokémon
    pokemonName.innerHTML = 'Loading...';
    pokemonNumber.innerHTML = '';
    // Realiza una llamada a la API para obtener los datos del Pokémon
    const data = await fetchPokemon(pokemon);
    // Si se obtienen los datos, renderiza la información del Pokémon
    if (data) {
        pokemonImage.style.display = 'block';
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
        searchPokemon = data.id;
    } else {
        // Si no se encuentran datos, muestra un mensaje de error
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = '..DONT FOUND :c';
        pokemonNumber.innerHTML = '';
    }
};

// Función para realizar la solicitud a la API y obtener los datos del Pokémon
const fetchPokemon = async (pokemon)=> {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status === 200) {
        const data = await APIResponse.json();
        return data;
    }
};

// Manejador de eventos para el botón de búsqueda
form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

// Manejador de eventos para el botón de mostrar el Pokémon anterior
buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
        searchPokemon -= 1;
        renderPokemon(searchPokemon);
    }
});

// Manejador de eventos para el botón de mostrar el Pokémon siguiente
buttonNext.addEventListener('click', () => {
    searchPokemon += 1;
    renderPokemon(searchPokemon);
});

// Renderiza la información del Pokémon inicial al cargar la página
renderPokemon(searchPokemon);
