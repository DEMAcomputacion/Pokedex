import * as api from "../api/api.js";
import {
  cargarPokemonLocalStorage,
  guardarPokemonLocalStorage,
  cargarListadoPokemonesLocalStorage,
  guardarListadoPokemonesLocalStorage,
} from "../store/store.js";

export async function llamarListadoPokemones(desde, cantidad = 20) {
  let listadoPokemones;
  try {
    listadoPokemones = cargarListadoPokemonesLocalStorage(desde, cantidad);
  } catch (e){
    listadoPokemones = await api.llamarListadoPokemones(desde, cantidad);
    guardarListadoPokemonesLocalStorage(desde, cantidad, listadoPokemones);
  }
  return listadoPokemones;
}

export async function cargarPokemon(id) {
  let pokemon;
  try {
    pokemon = cargarPokemonLocalStorage(id);
  } catch {
    pokemon = await api.cargarPokemon(id);
    guardarPokemonLocalStorage(id, pokemon);
  }

  return pokemon;
}
