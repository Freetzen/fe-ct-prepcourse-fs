function mayuscula(nombre) {
    // Esta función recibe un nombre (string).
    // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
    // [Ejemplo]: "mario" ----> "Mario".
    // Tu código:
    
     let miString = nombre.split('') // miString = ['f', 'e', 'd','e', 'r', 'i','c', 'o'] 
     let posicion0 = miString[0].toUpperCase() // posicion0 = F
     miString[0] = posicion0 // miString = ['F', 'e', 'd','e', 'r', 'i','c', 'o'] 
     let final = miString.join('') // final = 'Federico'


     return final
 }

 mayuscula('federico')