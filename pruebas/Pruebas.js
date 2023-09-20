const statusConnection = (users) => {

  let filtradoFinal = []
  let filtrado = users.filter((e) => {
    if(e.status == "online"){
      return filtradoFinal.push(e.email)
    }
  });

  console.log(filtradoFinal)


};



const users = [
  {
    name: "Iván",
    lastname: "Reyes",
    email: "ivancito@gmail.com",
    status: "offline",
  },
  {
    name: "Federico",
    lastname: "Ruiz Gei",
    email: "federuizgei@gmail.com",
    status: "online",
  },
  {
    name: "María Agustina",
    lastname: "Prados Maffía",
    email: "agustinapmf1@gmail.com",
    status: "online",
  },
  {
    name: "Felix",
    lastname: "Masera",
    email: "felonmasera@gmail.com",
    status: "online",
  },
];

statusConnection(users);

























/* const personajes = (array) => {

let final = []

  for(i = 0; i < array.length; i++){
    final.push(`${array[i].toUpperCase()} OF HOUSE TARGARYEN`)
  }

  console.log(final)

}

const GOT = ['Daenerys Targaryen', 'John Snow', 'Tyrion Lannister']

personajes(GOT) */

/////////////////////////////////////////////////////////////////////////////

/* const obtenerIniciales = (nombres) => {

  let iniciales = []

  let separados = nombres.split(',')
  console.log(separados)
  let separados2 = nombres.split(' ')
  console.log(separados2)

  for(let i = 0; i < separados2.length; i++){
    iniciales.push(separados2[i][0])
  }

  console.log(iniciales)

'fr, ap, tc'

}


obtenerIniciales('fede ruiz gei, agustina prados, tomi casetti')

'fr, ap, tc' */

/////////////////////////////////////////////////////////////////////////////

/* function generarNumeroBinario(longitud) {
  let numeroBinario = '';
  for (let i = 1; i < longitud; i++) {
    if (i % 2 === 0) {
      numeroBinario += '0';
    } else {
      numeroBinario += '1';
    }
  }

  console.log(numeroBinario)
}


generarNumeroBinario(10); */

/////////////////////////////////////////////////////////////////////////////

/* const formatNameAndGang = (usuario) => {

  if(usuario.hasOwnProperty('nombre') && usuario.hasOwnProperty('apellido')){
    console.log(`${usuario.nombre.toUpperCase()} ${usuario.apellido.toUpperCase()} ${usuario.gang.toLowerCase()}`)
  }else{
    console.log('No se proporcionaron ambas propiedades')
  }

}

let usuario = {
  nombre: 'Thomas',
  apellido: 'Shelby',
  ocupacion: 'GangLeader',
  gang: 'PeakyBlinders'
}

formatNameAndGang(usuario) */

/////////////////////////////////////////////////////////////////////////////

/* function obtenerLibrosPorAutor(libros, titulo) {
  
  let tituloFiltrado = libros.filter((libro) => {
    return libro.titulo === titulo
  })

  console.log(tituloFiltrado)

}

const libros = [
  {titulo: 'Cien Años de Soledad', autor: 'Gabriel Garcia Marquez'},
  {titulo: '1948', autor: 'George Orwell'},
  {titulo: 'Un mundo feliz', autor: 'Aldous Huxley'},
  {titulo: 'Crónica de una muerte anunciada', autor: 'Gabriel Garcia Marquez'},
  {titulo: 'Iron Man', autor: 'Marvel'},
  {titulo: 'Capitan América', autor: 'Marvel'}
]

obtenerLibrosPorAutor(libros, 'Crónica de una muerte anunciada'); */
