export const URL_BASE = "https://pokeapi.co/api/v2/pokemon";

export async function llamarListadoPokemones(desde, cantidad = 20) {
  return await (await fetch(`${URL_BASE}?offset=${desde}&limit=${cantidad}`)).json();
}

export async function cargarPokemon(id) {
  return await (await fetch(`${URL_BASE}/${id}`)).json();
}

export function cargarFotoPokemon(idGrilla, multiplicadorDePagina) {
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
