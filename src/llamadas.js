const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';

export async function llamaListadoPokemones(desde = 1, hasta = 20){
    return (await fetch((`${URL_BASE}?offset=${desde}&limit=${hasta}`))).json();
}

export async function cargaPokemon(id){
    return (await fetch(`${URL_BASE}/${id}`)).json();
}

export function cargaFotoPokemon(id){
    fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`)
        .then(rta => rta.blob())
        .then(rta => document.querySelectorAll(".imagen")[id].setAttribute('src', URL.createObjectURL(rta)));

}