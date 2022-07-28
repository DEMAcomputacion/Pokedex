export const fichas = document.querySelectorAll('.grid-item');
import * as llamadas from "./llamadas.js";

export function muestraListadoPokemones(listado) {
    fichas.forEach((elem,index) => {

        const $divContenedorTarjeta = document.createElement('div');
        $divContenedorTarjeta.className = 'card align-items-center text-center'

        const $fotoPokemon = document.createElement('img');
        $fotoPokemon.className = 'card-img-top imagen';
        llamadas.cargaFotoPokemon(index);
        $divContenedorTarjeta.appendChild($fotoPokemon);

        const $divContenedorDatosTarjeta = document.createElement('div');
        $divContenedorDatosTarjeta.className = 'card-body container-fluid'        
        
        const $nombrePokemon = document.createElement('small');
        $nombrePokemon.className = 'nombre-pokemon-listado'
        $nombrePokemon.innerText = listado.results[index]['name'].toUpperCase()
        $divContenedorDatosTarjeta.appendChild($nombrePokemon)

        const $nroPokemon = document.createElement("h6");
        $nroPokemon.className = 'numero-pokemon-listado'
        $nroPokemon.innerText = 'Nro: ' + (index + 1).toString().padStart(4, 0);
        $divContenedorDatosTarjeta.appendChild($nroPokemon)
        
        $divContenedorTarjeta.appendChild($divContenedorDatosTarjeta)
        elem.appendChild($divContenedorTarjeta)
    })
}

export async function mustraPaginasDisponibles(listado) {
    const paginas = [];
    for(let i = 1; i <= listado.count; i += 20){
        paginas.push({'desde': i, 'hasta': i + 19})
    }
    const $piePanelLateral = document.querySelector("#piePanelLateral");
    paginas.map((elem,index) => {
        const separador = document.createElement("span")
        separador.innerText = " "
        const anchor = document.createElement("a");

        anchor.innerText = index
        $piePanelLateral.appendChild(anchor);
        $piePanelLateral.appendChild(separador);

    })
}

function hola(){
    console.log("hola")
}

export async function muestraPokemon(nroPokemon = 2) {
    
    const elPokemon = await llamadas.cargaPokemon(nroPokemon);
    
    const $fotoGrandePokemon = document.querySelector("#fotoGrandePokemon");
    const $peso = document.querySelector("#cardPeso")
    const $altura = document.querySelector("#cardAltura")
    const $tipo = document.querySelector("#cardTipo")
    const $nombre = document.querySelector("#nombrePokemonPanelCentral")

    $fotoGrandePokemon.src = elPokemon.sprites.other.dream_world.front_default
    $nombre.innerText = elPokemon["name"].toUpperCase();
    $peso.innerText = `Peso: ${elPokemon.weight /10 }Kg`;
    $altura.innerText = `Altura: ${elPokemon.height / 10}cm`;
    let tipos = " ";
    elPokemon.types.forEach(tipo => tipos += (" " + tipo.type["name"]).toUpperCase())
    $tipo.innerText = `Tipo: ${tipos}`

    console.log(elPokemon)
}