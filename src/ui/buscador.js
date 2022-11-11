import { muestraPokemon } from "./ui.js";

export async function buscarPokemon() {
  const $valorBuscar = document.querySelector("#nombreONumeroPokemon");
  const valorABuscar = $valorBuscar.value.toLowerCase();
  const $mensajeError = document.querySelector("#mensajeError");
  $mensajeError.innerText = "";

  if (/^[0-9a-zA-Z]+$/g.test(valorABuscar)) {
    const llamadaPoke = await muestraPokemon(valorABuscar);
    if (llamadaPoke === false) {
      $mensajeError.innerText = "No pudimos encontrar ese Pokemon";
    }
  } else {
    $mensajeError.innerText = "Solo se aceptan letras o numeros";
  }
}
