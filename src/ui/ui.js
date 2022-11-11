import * as api from "../api/api.js";
import Pokemon from "../class/Pokemon.js";
import { buscarPokemon } from "./buscador.js";
const OFFSET = 20;

const $formBuscar = document.querySelector("#buttonBuscar");
$formBuscar.onclick = buscarPokemon;

export function muestraListadoPokemones(listado, nroPagina = 0) {
    
    const fichas = document.querySelectorAll('.grid-item');
    const multiplicadorDePagina = nroPagina * OFFSET;
    //Borra toda la grilla
    document.querySelectorAll(".grid-item").forEach(elem => elem.innerHTML='');

    const callbackOnClickContenedorTarjeta = (index) => {
        return muestraPokemon(index+1+multiplicadorDePagina)
    }

    //Crea la grilla (foto, nombre y numero)
    fichas.forEach((elem,index) => {
        const $divContenedorTarjeta = document.createElement('div');
        $divContenedorTarjeta.className = 'card align-items-center text-center';
        $divContenedorTarjeta.onclick = () => {callbackOnClickContenedorTarjeta(index)};
        const $fotoPokemon = document.createElement('img');
        $fotoPokemon.src = "./img/cargando.gif"
        api.cargaFotoPokemon(index, multiplicadorDePagina);
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

export async function muestraPokemon(nroPokemon = 1) {
    const $fotoGrandePokemon = document.querySelector("#fotoGrandePokemon");
    try {
        $fotoGrandePokemon.src = './img/cargando.gif'
        const unPokemon = await api.cargaPokemon(nroPokemon);
        const elPokemon = new Pokemon(unPokemon)
        const $peso = document.querySelector("#cardPeso")
        const $altura = document.querySelector("#cardAltura")
        const $tipo = document.querySelector("#cardTipo")
        const $nombre = document.querySelector("#nombrePokemonPanelCentral")
  
        $fotoGrandePokemon.src = (await unPokemon.sprites.other.dream_world.front_default || './img/pokebola-no-foto.png')

        $nombre.innerText = elPokemon.identificador();
        $peso.innerText = elPokemon.peso();
        $altura.innerText = elPokemon.altura();
        $tipo.innerText = elPokemon.tipos();
    }catch(e){
        return e;
    }
}