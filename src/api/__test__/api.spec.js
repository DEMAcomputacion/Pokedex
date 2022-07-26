/** * @jest-environment jsdom */
/// <reference types="Jest"/>

import { llamarListadoPokemones, URL_BASE, cargarPokemon } from "../api.js";

beforeEach(() => {
  global.fetch = jest.fn();
});

test("Llama al listado de pokemones", () => {
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

test("Carga 1 pokemon", () => {
  global.fetch.mockImplementationOnce(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise });
      })
  );

  cargarPokemon(2);
  expect(global.fetch).toHaveBeenCalledTimes(1);
  expect(global.fetch).toHaveBeenCalledWith(`${URL_BASE}/2`);
});

afterAll(() => {});
