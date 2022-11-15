import {actualizarListado} from "../index.js";
export const OFFSET = 20;

function armarListadoOffsets(listado) {
    const paginas = [];

    for(let i = 0; i <= listado.count; i += OFFSET){
        paginas.push({'desde': i, 'offset': OFFSET})
    }
    return paginas;
}

export function cargarBotonesAnteriorSiguiente(listado, nroPagina) {
    const $botonAnterior = document.querySelector("#botonAnterior");
    const $botonSiguiente = document.querySelector("#botonSiguiente");
    const listadoOffsets = armarListadoOffsets(listado);
    
    nroPagina === 0 ? $botonAnterior.disabled = true : $botonAnterior.disabled = false;
    nroPagina === (listadoOffsets.length +1) ? $botonSiguiente.disabled = true : $botonSiguiente.disabled = false;

    $botonAnterior.onclick = function() {
        if(nroPagina !== 0){
            actualizarListado(nroPagina - 1, listadoOffsets[nroPagina].desde - OFFSET)
        }
    };
    
    $botonSiguiente.onclick = function() {
        if(nroPagina !== (listadoOffsets.length -1)){
            actualizarListado(nroPagina + 1,  listadoOffsets[nroPagina].desde + OFFSET)
        }
    }
}

export function mostrarPaginador(listado, nroPagina = 0) {
    
    const paginas = armarListadoOffsets(listado)
    //Borra los botones existentes
    const $piePanelLateral = document.querySelector("#piePanelLateral")
    $piePanelLateral.innerHTML = ''
    //Crea los botones con los nros de pagina
    paginas.map((elem, index) => {
        const separador = document.createElement("span")
        separador.innerText = " "
        const anchor = document.createElement("a");
        anchor.id = `anchor${index}`;
        index === nroPagina ? anchor.className = 'pagina-activa' : anchor.className = 'botones-paginas';
        anchor.onclick = () => {actualizarListado(index, paginas[index].desde)};
        anchor.innerText = index
        $piePanelLateral.appendChild(anchor);
        $piePanelLateral.appendChild(separador);
    })
}