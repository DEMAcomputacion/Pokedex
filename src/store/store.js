function crearIdentificadorPokemon(id) {
  return `nro_pokemon_${id}`;
}

function crearIdentificadorListado(desde, offset) {
  return `pagina_${desde}_${offset}`;
}

export function cargarPokemonLocalStorage(id) {
  const pokemon = JSON.parse(
    localStorage.getItem(crearIdentificadorPokemon(id))
  );
  if (pokemon === null) {
    throw new Error(`No encontrado id ${id}`);
  }
  return pokemon;
}

export function cargarListadoPokemonesLocalStorage(desde, offset) {
  const pokemones = JSON.parse(
    localStorage.getItem(crearIdentificadorListado(desde, offset))
  );
  if (pokemones === null) {
    throw new Error(`No encontrado ${desde}`);
  }
  return pokemones;
}

export function guardarPokemonLocalStorage(id, pokemon) {
  localStorage.setItem(crearIdentificadorPokemon(id), JSON.stringify(pokemon));
}

export function guardarListadoPokemonesLocalStorage(
  desde,
  offset,
  listadoPokemones
) {
  localStorage.setItem(
    crearIdentificadorListado(desde, offset),
    JSON.stringify(listadoPokemones)
  );
}
