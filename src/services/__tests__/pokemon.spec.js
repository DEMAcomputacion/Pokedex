/** * @jest-environment jsdom */
/// <reference types="Jest"/>

import { cargarPokemon, llamarListadoPokemones } from "../pokemon.js";
const URL_BASE = "https://pokeapi.co/api/v2/pokemon";
beforeEach(() => {
  global.fetch = jest.fn();
});
test("prueba cargar un pokemon", () => {
  global.fetch.mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      })
  );
  cargarPokemon(1);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}/1`);
});

test("prueba cargar un listado de pokemones", () => {
  global.fetch.mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      })
  );
  llamarListadoPokemones(2);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}?offset=2&limit=20`);
});
