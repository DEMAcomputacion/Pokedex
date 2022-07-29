const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';

export async function llamaListadoPokemones(desde, cantidad = 20){
    return (await fetch((`${URL_BASE}?offset=${desde}&limit=${cantidad}`))).json();
}

export async function cargaPokemon(id){
    return (await fetch(`${URL_BASE}/${id}`)).json();
}

export function cargaFotoPokemon(idGrilla, multiplicadorDePagina){
    const nroPokemon = idGrilla + 1 + multiplicadorDePagina
    fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nroPokemon}.png`)
        .then(rta => rta.blob())
        .then(rta => document.querySelectorAll(".imagen")[idGrilla].setAttribute('src', URL.createObjectURL(rta)));

}