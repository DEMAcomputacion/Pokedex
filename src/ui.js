export const fichas = document.querySelectorAll('.grid-item');
import * as llamadas from "./llamadas.js";
import {actualizaListado} from "./index.js";

//Intrucciones buscador de pokemon
const $formBuscar = document.querySelector("#buttonBuscar");
const $valorBuscar = document.querySelector("#nombreONumeroPokemon");
$formBuscar.onclick = buscarPokemon;

function buscarPokemon(){
    const valorABuscar = $valorBuscar.value.toLowerCase()
    if(/[A-Za-z0-9]/.test(valorABuscar)){
        muestraPokemon(valorABuscar);
    };
}

export function muestraListadoPokemones(listado, nroPagina = 0) {
    
    const multiplicadorDePagina = nroPagina * 20;
    //Borra toda la grilla
    document.querySelectorAll(".grid-item").forEach(x => x.innerHTML='');
    
    //Crea la grilla (foto, nombre y numero)
    fichas.forEach((elem,index) => {
        const $divContenedorTarjeta = document.createElement('div');
        $divContenedorTarjeta.className = 'card align-items-center text-center';
        $divContenedorTarjeta.onclick = function() {muestraPokemon(index+1+multiplicadorDePagina)};

        const $fotoPokemon = document.createElement('img');
        $fotoPokemon.className = 'card-img-top imagen';
        llamadas.cargaFotoPokemon(index, multiplicadorDePagina);
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

export async function mustraPaginasDisponibles(listado, nroPagina = 0) {
    
    const paginas = [];
    const offset = 20

    for(let i = 0; i <= listado.count; i += offset){
        paginas.push({'desde': i, 'offset': offset})
    }
    
    //Borra los botones existentes
    const $piePanelLateral = document.querySelector("#piePanelLateral")
    $piePanelLateral.innerHTML = ''

    //Crea los botones con los nros de pagina
    paginas.map((elem, index) => {
        const separador = document.createElement("span")
        separador.innerText = " "
        const anchor = document.createElement("a");
        index === nroPagina ? anchor.className = 'pagina-activa' : anchor.className = 'botones-paginas';
        anchor.onclick = function() {actualizaListado(index, paginas[index])};
        anchor.innerText = index
        $piePanelLateral.appendChild(anchor);
        $piePanelLateral.appendChild(separador);
    })
}

export async function muestraPokemon(nroPokemon = 1) {

    const elPokemon = await llamadas.cargaPokemon(nroPokemon);
    console.log(elPokemon)
    const $fotoGrandePokemon = document.querySelector("#fotoGrandePokemon");
    const $peso = document.querySelector("#cardPeso")
    const $altura = document.querySelector("#cardAltura")
    const $tipo = document.querySelector("#cardTipo")
    const $nombre = document.querySelector("#nombrePokemonPanelCentral")

    $fotoGrandePokemon.src = elPokemon.sprites.other.dream_world.front_default
    $nombre.innerText = elPokemon["name"].toUpperCase();
    $peso.innerText = `Peso: ${elPokemon.weight /10 }Kg`;
    $altura.innerText = `Altura: ${elPokemon.height / 10} metros`;
    let tipos = " ";
    elPokemon.types.forEach(tipo => tipos += (" " + tipo.type["name"]).toUpperCase())
    $tipo.innerText = `Tipo: ${tipos}`
}