import * as ui from './ui.js';
import * as llamadas from './llamadas.js';


async function inicializa() {
    const listado = await llamadas.llamaListadoPokemones(0)
    ui.muestraListadoPokemones(listado);
    ui.mustraPaginasDisponibles(listado);
    ui.muestraPokemon();
}

export async function actualizaListado(nroPagina, offset) {
    const listado = await llamadas.llamaListadoPokemones(offset.desde, 20)
    ui.muestraListadoPokemones(listado, nroPagina);
    ui.mustraPaginasDisponibles(listado, nroPagina);
    ui.muestraPokemon();
}


inicializa();
