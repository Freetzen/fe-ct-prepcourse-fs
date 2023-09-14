function fiestaDeDisfraces(personas) {
    // Tu código aquí
    
    
        let personasConDisfraz = [];
      
        for (const persona of personas) {
          if (persona.disfraz === true && persona.hasOwnProperty('personaje')) {
            personasConDisfraz.push(persona.nombre);
          }
        }
      console.log(personasConDisfraz)
        return personasConDisfraz;
}

  

  let personas = [
    { nombre: "Juan Manuel", disfraz: true, personaje: "Wally" },
    {nombre: "Mariana", disfraz: true, personaje: "La momia"},
    {nombre: "Pedro", disfraz: false },
    ]

fiestaDeDisfraces(personas);