import * as ui from './ui.js';
import * as llamadas from './llamadas.js';

//previene que se recargue la pagina al presionar enter
document.querySelector("#nombreONumeroPokemon")
    .addEventListener("keydown", (evento) => {
        if (evento.key == "Enter") {
            evento.preventDefault();
            return false;
            }
        }
    );

async function inicializa() {
    const listadoDePokemones = await llamadas.llamaListadoPokemones(0)
    ui.muestraListadoPokemones(listadoDePokemones);
    ui.mustraPaginasDisponibles(listadoDePokemones);
    ui.muestraPokemon();
    ui.cargaFuncionesBotonesPaginas(listadoDePokemones, 0)
}

export async function actualizaListado(nroPagina, desde) {
    const listadoDePokemones = await llamadas.llamaListadoPokemones(desde, 20)
    ui.muestraListadoPokemones(listadoDePokemones, nroPagina);
    ui.mustraPaginasDisponibles(listadoDePokemones, nroPagina);
    ui.muestraPokemon(desde + 1);
    ui.cargaFuncionesBotonesPaginas(listadoDePokemones, nroPagina)
}


inicializa();
