let ingredienteEnMalEstado = (menu, comida, ingrediente) => {
  let array = [];

  for (let comidas in menu) {
    if (comidas === comida) {
      menu[comida].forEach((item, index) => {
        if (ingrediente != item) {
          array.push(item)
          array.push(menu[comida][index - 1])
          array.push(menu[comida][index + 1])

        }
      });
    }
  }

  console.log(array)
};

let menuDelDia = {
  raviolesConSalsa: ["Harina", "Sal", "Huevos", "aceite", "peceto", "ricota"],
  bagnaCauda: ["Harina", "Sal", "Huevos"],
  tallarines: ["Harina", "Sal", "Huevos"],
};

ingredienteEnMalEstado(menuDelDia, "raviolesConSalsa", "peceto");

/* let prueba = (array, actividad) => {
    let actividadEncontrada = array.filter(x =>
     x.actividad === actividad  
    )

    if(actividadEncontrada.length > 0){
        console.log(actividadEncontrada[0].frecuencia)
    }

}

let arr = [{actividad: 'baño', frecuencia: '1 vez al mes'}]

prueba(arr, 'baño') */
