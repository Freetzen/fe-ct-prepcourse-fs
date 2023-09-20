function stringMasLarga (strings){
//debemos crear una variable vacía, para almacenar el string más largo.
// crearemos un bucle FOR, para recorrer el array y comparar la longitud de cada palabra.
// la palabra más larga, la igualamos a la variable anteriormente creada.

let palabraLarga = ''

for(let i = 0; i < strings.length; i++ ){
    if(strings[i].length > palabraLarga.length){
        palabraLarga = strings[i]
    }
}

console.log(palabraLarga)





}



let arr = ['fede', 'felon', 'fri987987987987987', 'Felon Putito']

stringMasLarga(arr)

