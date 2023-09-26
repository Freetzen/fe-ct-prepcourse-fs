
class Mascota {
    constructor(nombre, dueño, actividades){
        this.nombre = nombre,
        this.dueño = dueño,
        this.actividades = actividades
    }

    getNombre(){
        return this.nombre
    }

    getDueño(){
        return this.dueño
    }

    addActividades(actividad, frecuencia){
        this.actividades.push({actividad: actividad, frecuencia: frecuencia})
    }

    getFrecuencia(actividad){
        //El metodo debe retornar la frecuencia de dicha actividad
        //[{actividad: 'baño', frecuencia: '1 vez al mes'}]
        //mascota.getFrecuencia('baño') debe retornar '1 vez al mes'

        let actividadEncontrada = this.actividades.filter((x)=>{
            x.actividad === actividad
            
        })

    }


}





























/* const obtenerIniciales = (nombres) => {
  let iniciales = [];

  let separados = nombres.split(",");
  console.log(separados);
  let resultado = "";

  for (let i = 0; i < separados.length; i++) {
    let nombres = separados[i].split(" ");
    console.log(nombres);
    resultado += nombres[0].charAt(0); 
    resultado += nombres[1].charAt(0);
    resultado += ', '
  }

  resultado = resultado.substring(0, resultado.length - 2) // 

  console.log(resultado);

  ("fr, ap, tc");
};

obtenerIniciales("Fede Ruiz,Agustina Prados,Tomi Casetti");
 */