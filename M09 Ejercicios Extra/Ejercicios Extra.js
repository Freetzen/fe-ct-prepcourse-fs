/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  let nuevoArray = [];

  for (let key in objeto) {
    nuevoArray.push([key, objeto[key]]);
  }

  return nuevoArray;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  let objeto = {};

  for (let letra of string) {
    if (objeto[letra]) {
      objeto[letra]++;
    } else {
      objeto[letra] = 1;
    }
  }

  return objeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:

  let mayus = "";
  let minus = "";

  for (i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      minus += string[i];
    } else {
      mayus += string[i];
    }
  }

  let stringFinal = mayus + minus;

  return stringFinal;

  /* let resultado = []
  for(let index = 0; index < string.length; index++){
    if(string.charCodeAt(index) < 97){
      resultado.push(string.charAt(index))
    }
  }
  for(let index = 0; index < string.length; index++){
    if(string.charCodeAt(index) >= 97){
      resultado.push(string.charAt(index))
    }
  }
  let final = resultado.join('')
  return final */
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  let palabras = frase.split(" ");

  let resultado = [];

  for (let i = 0; i < palabras.length; i++) {
    for (let j = palabras[i].length - 1; j >= 0; j--) {
      resultado.push(palabras[i].charAt(j));
    }

    resultado.push(" ");
  }

  return resultado.join("").trim();

  //TAMBIÉN SE PUEDE REALIZAR DE LA SIGUIENTE FORMA:

  /* let palabras = frase.split(' ')
  
let arrayNew = palabras.map((e)=>{
  return e.split('').reverse().join('')
})   

let finish = arrayNew.join(' ') */
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:

  let numToString = numero.toString(); // String del número ingresado
  let stringToArray1 = numToString.split("");
  let stringToArray2 = numToString.split(""); // Convirtiendo a Array ['9', '8', '7', '9']
  let arrayToReverse = stringToArray2.reverse();
  let arrayToString1 = stringToArray1.join("");
  let arrayToString2 = arrayToReverse.join("");

  if (arrayToString1 === arrayToString2) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:

  let stringTerminada = "";

  for (let letra of string) {
    if (letra === "a" || letra === "b" || letra === "c") {
      continue;
    } else {
      stringTerminada += letra;
    }
  }

  return stringTerminada;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:

  arrayOfStrings.sort((a, b) => {
    return a.length - b.length;
  });

  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:

  array1.sort();
  array2.sort();
  let arrNew = [];

  for (let num of array1) {
    if (array2.includes(num)) {
      arrNew.push(num);
    }
  }

  return arrNew;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
