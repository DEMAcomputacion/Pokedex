/** * @jest-environment jsdom */
/// <reference types="Jest"/>

import { buscarPokemon } from "../buscador";
import fixture from "./fixtures/fixture";


describe("Mensajes de error en el buscador", () => {
  test("Texto de error al buscar un pokemon con un id que no existe", () => {
    document.body.innerHTML = fixture;
    const contenedor = document.querySelector("#nombreONumeroPokemon");
    contenedor.value = 123456;
    buscarPokemon();
    expect(document.querySelector("#mensajeError").textContent) ===
      "No pudimos encontrar ese Pokemon";
  });

  test("Texto de error al buscar un nombre no existente de pokemon", () => {
    document.body.innerHTML = fixture;
    const contenedor = document.querySelector("#nombreONumeroPokemon");
    contenedor.value = "123456";
    buscarPokemon();
    expect(document.querySelector("#mensajeError").textContent) ===
      "No pudimos encontrar ese Pokemon";
  });

  test("Texto de error al buscar con un numero no valido", () => {
    document.body.innerHTML = fixture;
    const contenedor = document.querySelector("#nombreONumeroPokemon");
    contenedor.value = -1;
    buscarPokemon();
    expect(document.querySelector("#mensajeError").textContent) ===
      "Solo se aceptan letras o numeros";
  });

  test("Texto de error al buscar con un caracter no valido", () => {
    document.body.innerHTML = fixture;
    const contenedor = document.querySelector("#nombreONumeroPokemon");
    contenedor.value = "#";
    buscarPokemon();
    expect(document.querySelector("#mensajeError").textContent) ===
      "Solo se aceptan letras o numeros";
  });
});
