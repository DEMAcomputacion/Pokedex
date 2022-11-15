import * as ui from './ui/ui.js';
import * as service from './services/pokemon.js';
import * as paginador from './ui/paginador.js';


//previene que se recargue la pagina al presionar enter
document.querySelector("#nombreONumeroPokemon")
    .addEventListener("keydown", (event) => {
        if (event.key == "Enter") {
            event.preventDefault();
            return false;
            }
        }
    );

async function inicializar() {
    const listadoDePokemones = await service.llamarListadoPokemones(0)
    ui.mostrarListadoPokemones(listadoDePokemones);
    ui.mostrarUnPokemon();
    paginador.mostrarPaginador(listadoDePokemones);
    paginador.cargarBotonesAnteriorSiguiente(listadoDePokemones, 0)
}

export async function actualizarListado(nroPagina, desde) {
    const listadoDePokemones = await service.llamarListadoPokemones(desde, 20)
    ui.mostrarListadoPokemones(listadoDePokemones, nroPagina);
    ui.mostrarUnPokemon(desde + 1);
    paginador.mostrarPaginador(listadoDePokemones, nroPagina);
    paginador.cargarBotonesAnteriorSiguiente(listadoDePokemones, nroPagina)
}

inicializar();
