import * as ui from './ui/ui.js';
import * as api from './api/api.js';
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
    const listadoDePokemones = await api.llamaListadoPokemones(0)
    ui.muestraListadoPokemones(listadoDePokemones);
    ui.muestraPokemon();
    paginador.mustraPaginasDisponibles(listadoDePokemones);
    paginador.cargaFuncionesBotonesPaginas(listadoDePokemones, 0)
}

export async function actualizaListado(nroPagina, desde) {
    const listadoDePokemones = await api.llamaListadoPokemones(desde, 20)
    ui.muestraListadoPokemones(listadoDePokemones, nroPagina);
    ui.muestraPokemon(desde + 1);
    paginador.mustraPaginasDisponibles(listadoDePokemones, nroPagina);
    paginador.cargaFuncionesBotonesPaginas(listadoDePokemones, nroPagina)
}

inicializar();
