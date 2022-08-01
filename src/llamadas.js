const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';

//Llama listado de 20 Pokemones
export async function llamaListadoPokemones(desde, cantidad = 20){
    return (await fetch((`${URL_BASE}?offset=${desde}&limit=${cantidad}`))).json();
}

//Llama a un solo Pokemon
export async function cargaPokemon(id){
    return (await fetch(`${URL_BASE}/${id}`)).json();
}

//Llama foto de pokemon
export function cargaFotoPokemon(idGrilla, multiplicadorDePagina){
    const nroPokemon = idGrilla + 1 + multiplicadorDePagina
    fetch(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nroPokemon}.png`)
        .then(rta => {
            if (rta.status === 404) {
                document.querySelectorAll(".imagen")[idGrilla].setAttribute('src', './img/pokebola-no-foto.png')
            }else{
            return rta.blob()}
        })
        .then(rta => document.querySelectorAll(".imagen")[idGrilla].setAttribute('src', URL.createObjectURL(rta))
);
}