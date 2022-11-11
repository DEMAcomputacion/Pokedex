/** * @jest-environment jsdom */
/// <reference types="Jest"/>

import { listado } from "./fixtures/listado.js";
import fixture from "./fixtures/fixture.js";
import {
  cargaFuncionesBotonesPaginas,
  mustraPaginasDisponibles,
} from "../paginador.js";

describe("Prueba el boton Anterior del paginador", () => {
  test("que al estar en la pagina 0 el boton Anterior esté deshabilitado", () => {
    document.body.innerHTML = fixture;
    cargaFuncionesBotonesPaginas(listado, 0);
    expect(
      document.querySelector("#botonAnterior").hasAttribute("disabled")
    ).toEqual(true);
  });

  test("que al estar en la pagina 1 el boton Anterior esté habilitado", () => {
    document.body.innerHTML = fixture;
    cargaFuncionesBotonesPaginas(listado, 1);
    expect(
      document.querySelector("#botonAnterior").hasAttribute("disabled")
    ).toEqual(false);
  });
});

describe("Prueba el boton Siguiente del paginador", () => {
  test("que al estar en la pagina 0 el boton Siguiente esté habilitado", () => {
    document.body.innerHTML = fixture;
    cargaFuncionesBotonesPaginas(listado, 0);
    expect(
      document.querySelector("#botonSiguiente").hasAttribute("disabled")
    ).toEqual(false);
  });
});

describe("Prueba la funcion que pone los botones de las paginas", () => {
  test("Se asegura que exista los botones de las paginas 1, 5 y 10", () => {
    document.body.innerHTML = fixture;
    mustraPaginasDisponibles(listado);
    expect(document.querySelector("#anchor1").innerText).toBe(1);
    expect(document.querySelector("#anchor5").innerText).toBe(5);
    expect(document.querySelector("#anchor10").innerText).toBe(10);
  });
});
