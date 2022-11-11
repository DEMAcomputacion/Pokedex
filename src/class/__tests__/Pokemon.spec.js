/** * @jest-environment jsdom */
/// <reference types="Jest"/>

import Pokemon from "../Pokemon.js";
import pokemon from "./fixtures/pokemon";

describe("Clase Pokemon", () => {
  test("Prueba la creacion de propiedades de la clase Pokemon", () => {
    const unPokemon = new Pokemon(pokemon);
    expect(unPokemon).toHaveProperty("id");
    expect(unPokemon).toHaveProperty("name");
    expect(unPokemon).toHaveProperty("weight");
    expect(unPokemon).toHaveProperty("height");
    expect(unPokemon).toHaveProperty("types");
  });

  test("Prueba la creacion de propiedades de la clase Pokemon", () => {
    const unPokemon = new Pokemon(pokemon);
    expect(unPokemon.is).toBeUndefined();
    expect(unPokemon.name).toBeUndefined();
    expect(unPokemon.weight).toBeUndefined();
    expect(unPokemon.height).toBeUndefined();
    expect(unPokemon.types).toBeUndefined();
  });

  test("Prueba los metodos de la clase Pokemon", () => {
    const unPokemon = new Pokemon(pokemon);
    expect(unPokemon.identificador).not.toBeUndefined();
    expect(unPokemon.peso).not.toBeUndefined();
    expect(unPokemon.altura).not.toBeUndefined();
    expect(unPokemon.tipos).not.toBeUndefined();
  });
});
