function sumarArray(arrayOfNumbers) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  let total = 0

  for(let i = 0; i < arrayOfNumbers.length; i++){
     total += arrayOfNumbers[i]
  }

  console.log(total)

}

let hola = [1, 2, 3, 4, 5]

sumarArray(hola)


/*
 function palabraMasLarga(frases) {
  let palabraMasLargaEncontrada = "";

  for (let frase of frases) {
    let palabras = frase.split(" ");
    for (let palabra of palabras) {
      if (palabra.length > palabraMasLargaEncontrada.length) {
        palabraMasLargaEncontrada = palabra;
      }
    }
  }
  console.log(palabraMasLargaEncontrada)
  return palabraMasLargaEncontrada
} */
