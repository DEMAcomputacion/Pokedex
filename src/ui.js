export const fichas = document.querySelectorAll('.grid-item');
import * as llamadas from "./llamadas.js";
import {actualizaListado} from "./index.js";
const OFFSET = 20;

//Intrucciones buscador de pokemon
const $formBuscar = document.querySelector("#buttonBuscar");
const $valorBuscar = document.querySelector("#nombreONumeroPokemon");
$formBuscar.onclick = buscarPokemon;

async function buscarPokemon(){
    const valorABuscar = $valorBuscar.value.toLowerCase()
    const $mensajeError = document.querySelector("#mensajeError")
    $mensajeError.innerText = "";

    if(/^[0-9a-zA-Z]+$/g.test(valorABuscar)){
        const llamadaPoke = await muestraPokemon(valorABuscar);
          if(llamadaPoke === false){
            $mensajeError.innerText = "No pudimos encontrar ese Pokemon"
        }
    }else{
        $mensajeError.innerText = "Solo se aceptan letras o numeros"
    };
}

export function muestraListadoPokemones(listado, nroPagina = 0) {
    
    const multiplicadorDePagina = nroPagina * OFFSET;
    //Borra toda la grilla
    document.querySelectorAll(".grid-item").forEach(x => x.innerHTML='');
    
    //Crea la grilla (foto, nombre y numero)
    fichas.forEach((elem,index) => {
        const $divContenedorTarjeta = document.createElement('div');
        $divContenedorTarjeta.className = 'card align-items-center text-center';
        $divContenedorTarjeta.onclick = function() {muestraPokemon(index+1+multiplicadorDePagina)};

        const $fotoPokemon = document.createElement('img');
        $fotoPokemon.src = "./img/cargando.gif"
        llamadas.cargaFotoPokemon(index, multiplicadorDePagina);
        $fotoPokemon.className = 'card-img-top imagen';
        $divContenedorTarjeta.appendChild($fotoPokemon);

        const $divContenedorDatosTarjeta = document.createElement('div');
        $divContenedorDatosTarjeta.className = 'card-body container-fluid'        
        
        const $nombrePokemon = document.createElement('small');
        $nombrePokemon.className = 'nombre-pokemon-listado'
        $nombrePokemon.innerText = listado.results[index]['name'].toUpperCase()
        $divContenedorDatosTarjeta.appendChild($nombrePokemon)

        const $nroPokemon = document.createElement("h6");
        $nroPokemon.className = 'numero-pokemon-listado'
        $nroPokemon.innerText = 'Nro: ' + (index + 1 + multiplicadorDePagina).toString().padStart(4, 0);
        $divContenedorDatosTarjeta.appendChild($nroPokemon)
        
        $divContenedorTarjeta.appendChild($divContenedorDatosTarjeta)
        elem.appendChild($divContenedorTarjeta)
    })
}

function armaListadoOffsets(listado) {
    const paginas = [];

    for(let i = 0; i <= listado.count; i += OFFSET){
        paginas.push({'desde': i, 'offset': OFFSET})
    }
    return paginas;
}

export async function mustraPaginasDisponibles(listado, nroPagina = 0) {
    
    const paginas = armaListadoOffsets(listado)
    console.log(paginas)
    //Borra los botones existentes
    const $piePanelLateral = document.querySelector("#piePanelLateral")
    $piePanelLateral.innerHTML = ''

    //Crea los botones con los nros de pagina
    paginas.map((elem, index) => {
        const separador = document.createElement("span")
        separador.innerText = " "
        const anchor = document.createElement("a");
        index === nroPagina ? anchor.className = 'pagina-activa' : anchor.className = 'botones-paginas';
        anchor.onclick = function() {actualizaListado(index, paginas[index].desde)};
        anchor.innerText = index
        $piePanelLateral.appendChild(anchor);
        $piePanelLateral.appendChild(separador);
    })
}

export async function muestraPokemon(nroPokemon = 1) {

    try {
        const elPokemon = await llamadas.cargaPokemon(nroPokemon);

        const $fotoGrandePokemon = document.querySelector("#fotoGrandePokemon");
        const $peso = document.querySelector("#cardPeso")
        const $altura = document.querySelector("#cardAltura")
        const $tipo = document.querySelector("#cardTipo")
        const $nombre = document.querySelector("#nombrePokemonPanelCentral")

        $fotoGrandePokemon.src = './img/cargando.gif'

        if(elPokemon.sprites.other.dream_world.front_default != null){
            $fotoGrandePokemon.src = await elPokemon.sprites.other.dream_world.front_default
        }else{
            $fotoGrandePokemon.src = './img/pokebola-no-foto.png'
        }
        
        $fotoGrandePokemon.className = 'img-fluid d-block my-auto py-auto p-3'
        $nombre.innerText = elPokemon["name"].toUpperCase() + "   " + "°" + elPokemon.id;
        $peso.innerText = `Peso: ${elPokemon.weight /10 }Kg`;
        $altura.innerText = `Altura: ${elPokemon.height / 10} metros`;
        let tipos = " ";
        elPokemon.types.forEach(tipo => tipos += (" " + tipo.type["name"]).toUpperCase())
        $tipo.innerText = `Tipo: ${tipos}`;
    }catch{
        return false;
    }
}

export function cargaFuncionesBotonesPaginas(listado, nroPagina) {
    const $botonAnterior = document.querySelector("#botonAnterior");
    const $botonSiguiente = document.querySelector("#botonSiguiente");
    const listadoOffsets = armaListadoOffsets(listado);

    nroPagina === 0 ? $botonAnterior.disabled = true : $botonAnterior.disabled = false;
    nroPagina === (listadoOffsets.length -1) ? $botonSiguiente.disabled = true : $botonSiguiente.disabled = false;
console.log(listadoOffsets.length -1)
    $botonAnterior.onclick = function() {
        if(nroPagina != 0){
            actualizaListado(nroPagina - 1, listadoOffsets[nroPagina].desde - OFFSET)
        }
    };
    
    $botonSiguiente.onclick = function() {
            actualizaListado(nroPagina + 1,  listadoOffsets[nroPagina].desde + OFFSET)
    }

}