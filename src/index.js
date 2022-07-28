import * as ui from './ui.js';
import * as llamadas from './llamadas.js';


async function inicializa(){
    const listado = await llamadas.llamaListadoPokemones()
    ui.muestraListadoPokemones(listado);
    ui.mustraPaginasDisponibles(listado);
    ui.muestraPokemon();
}

inicializa();
