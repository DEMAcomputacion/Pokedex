export const URL_BASE = "https://pokeapi.co/api/v2/pokemon";

//Llama listado de 20 Pokemones
export async function llamaListadoPokemones(desde, cantidad = 20) {
  const idPagina = `listadoPokemones_${desde}`;
  let listado;
  if (Boolean(localStorage.getItem(idPagina))) {
    return JSON.parse(localStorage.getItem(idPagina))
  } else {
    listado = await (
      await fetch(`${URL_BASE}?offset=${desde}&limit=${cantidad}`)
    ).json();
    localStorage.setItem(idPagina, JSON.stringify(listado));
    return listado;
  }
}

//Llama a un solo Pokemon
export async function cargaPokemon(id) {
  const idPokemon = `pokemon${id}`;
  let pokemon = {};
  if (Boolean(localStorage.getItem(idPokemon))) {
    return JSON.parse(localStorage.getItem(idPokemon))
  } else {
    pokemon = await (await fetch(`${URL_BASE}/${id}`)).json();
    localStorage.setItem(idPokemon, JSON.stringify(pokemon));
    return pokemon;
  }
}

//Llama foto de pokemon
export function cargaFotoPokemon(idGrilla, multiplicadorDePagina) {
  const nroPokemon = idGrilla + 1 + multiplicadorDePagina;
  fetch(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${nroPokemon}.png`
  )
    .then((rta) => {
      if (rta.status === 404) {
        document
          .querySelectorAll(".imagen")
          [idGrilla].setAttribute("src", "./img/pokebola-no-foto.png");
      } else {
        return rta.blob();
      }
    })
    .then((rta) =>
      document
        .querySelectorAll(".imagen")
        [idGrilla].setAttribute("src", URL.createObjectURL(rta))
    );
}
