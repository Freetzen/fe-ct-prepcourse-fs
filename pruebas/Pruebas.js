




function todosIguales(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   
   let tabla = []

   for(i = 0; i < 10; i++){
    if(i === 5){
      continue
    }
    num += 2
    tabla.push(num)
    console.log(tabla)
   }
   return tabla
 }

/*  if(mes === 'enero' && mes === 'marzo' && mes === 'noviembre'){
    arrayMeses.push(['enero', 'marzo', 'noviembre'])
    return arrayMeses
}else{
    return 'No encontrados'
} */


/* for(i = 0; i < array.length; i++){
    if(array[i] === 'enero' && array[i] === 'marzo' && array[i] === 'noviembre'){
        console.log('están')
    }else{
        console.log('No están')
    }
} */


 let array1 = [1, 4, 5, 6, 2, 1]

 let array2 = [180, 100, 11, 115, 19, 165]

 let array3 = ['marzo', 'diciembre', 'febrero', 'abril', 'mayo', 'julio', 'junio', 'septiembre', 'enero', 'agosto', 'octubre', 'noviembre']

 todosIguales(5)
 //agregarNumeros(array1)

 function agregarNumeros(array2) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    
     
    
 }