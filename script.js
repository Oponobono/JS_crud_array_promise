let inmueble = [
  {
    idinmueble: "001",
    direccion: "Calle 1 # 2-3",
    telefono: "3101234567",
    precio: 250000000,
    estado: "Disponible"
  },
  {
    idinmueble: "002",
    direccion: "Calle 4 # 5-6",
    telefono: "3109876543",
    precio: 180000000,
    estado: "Disponible"
  },
  {
    idinmueble: "003",
    direccion: "Calle 7 # 8-9",
    telefono: "3101112233",
    precio: 400000000,
    estado: "Disponible"
  },
  {
    idinmueble: "004",
    direccion: "Calle 10 # 11-12",
    telefono: "3104445566",
    precio: 220000000,
    estado: "Disponible"
  },
  {
    idinmueble: "005",
    direccion: "Calle 13 # 14-15",
    telefono: "3107778899",
    precio: 350000000,
    estado: "No disponible"
  },
  {
    idinmueble: "006",
    direccion: "Calle 16 # 17-18",
    telefono: "3100001111",
    precio: 150000000,
    estado: "No disponible"
  },
  {
    idinmueble: "007",
    direccion: "Calle 19 # 20-21",
    telefono: "3103334444",
    precio: 280000000,
    estado: "Disponible"
  },
  {
    idinmueble: "008",
    direccion: "Calle 22 # 23-24",
    telefono: "3106667777",
    precio: 480000000,
    estado: "No disponible"
  },
  {
    idinmueble: "009",
    direccion: "Calle 25 # 26-27",
    telefono: "3109990000",
    precio: 210000000,
    estado: "Disponible"
  },
  {
    idinmueble: "010",
    direccion: "Calle 28 # 29-30",
    telefono: "3102223333",
    precio: 320000000,
    estado: "Disponible"
  }
];



let cbInmueble = document.getElementById("cbInmueble");
cbInmueble.addEventListener('change', function() {
  var estado = document.getElementById("estado");
  if (this.checked) {
      estado.value = "Disponible";
      console.log("Disponible");
    } else {
      estado.value = "No Disponible";
      console.log("No Disponible");
    }
});


let btnEnviar = document.getElementById("btnEnviar");
btnEnviar.addEventListener("click", function() {
  let idinmueble = document.getElementById("idinmueble").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let precio = document.getElementById("precio").value;
  let estado = document.getElementById("estado").value;


  if(!idinmueble || !direccion || !telefono || !direccion || !estado){
    if(!idinmueble){
      document.getElementById("messIdInmueble").innerHTML = "Se debe ingresar un numero de ID";
    }else{
      document.getElementById("messIdInmueble").innerHTML ="";
    }

    if(!direccion){
      document.getElementById("messDireccion").innerHTML = "Se debe ingresar una dirección";
    }else{
      document.getElementById("messDireccion").innerHTML= "";
    }

    if(!telefono){
      document.getElementById("messTel").innerHTML = "Se debe ingresar un telefono";
    }else{
      document.getElementById("messTel").innerHTML = "";
    }

    if(!precio){
      document.getElementById("messPrecio").innerHTML = "Se debe ingrear un precio entre 200 millones y 300 millones";
    }else{
      document.getElementById("messPrecio").innerHTML = "";
    }
  }else{
    if(idinmueble && direccion && telefono && precio && estado) {

      if(estado === "Seleccione dando click:" || estado === "No Disponible"){
        document.getElementById("resultados").innerHTML = "Para poder guardar un nuevo registro el estado del inmueble debe ser disponible";
        document.getElementById("messEstado").innerHTML = "La seleccion debe ser disponible";
      }else{

        let inmuebleEncontrado = inmueble.find(function(elem) {
          return elem.idinmueble === idinmueble;
        });

        if(inmuebleEncontrado){
          document.getElementById("resultados").innerHTML = "Ya existe un inmueble con el ID ingresado, por favor especifique un ID diferente.";
        }else{
          if (precio >= 100000000 && precio <= 500000000) {
            let promesa = new Promise(function(resolve, reject) {
              setTimeout(function() {
                let nuevoInmueble = {
                  idinmueble: idinmueble,
                  direccion: direccion,
                  telefono: telefono,
                  precio: precio,
                  estado: estado
                };
                inmueble.push(nuevoInmueble);
                resolve("El inmueble ha sido agregado correctamente.");
              }, 2000);
            });

            promesa.then(function(mensaje) {
              document.getElementById("resultados").innerHTML = mensaje;
            }).catch(function(error) {
              document.getElementById("resultados").innerHTML = error;
            });
          } else {
            document.getElementById("resultados").innerHTML = "Para poder guardar un registro nuevo, el precio debe estar entre 100 millones y 500 millones.";
          }
        }
      }
    }
  }
});
/*
let btnActualizar = document.getElementById("btnActualizar");
btnActualizar.addEventListener("click", function() {
  let idinmueble = document.getElementById("idinmueble").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let precio = document.getElementById("precio").value;
  let estado = document.getElementById("estado").value;

  let inmuebleEncontrado = inmueble.find(function(elem) {
    return elem.idinmueble === idinmueble && elem.estado === "No disponible";
  });

  if(inmuebleEncontrado){
    document.getElementById("resultados").innerHTML = "No es posible actualizar el registro ya que no se encuentra disponible.";
  }else{
    if (precio >= 100000000 && precio <= 500000000) {
      let myObject = inmueble.find(elem => elem.idinmueble = idinmueble)
          myObject.direccion = direccion;
          myObject.telefono = telefono;
          myObject.precio = precio;
          myObject.estado = estado;
          document.getElementById("resultados").innerHTML = "El inmueble ha sido actualizado correctamente.";
    } else {
      document.getElementById("resultados").innerHTML = "El precio debe estar entre 100 millones y 500 millones.";
    }
  }
});
*/

let btnActualizar = document.getElementById("btnActualizar");
btnActualizar.addEventListener("click", function() {
  let idinmueble = document.getElementById("idinmueble").value;
  let direccion = document.getElementById("direccion").value;
  let telefono = document.getElementById("telefono").value;
  let precio = document.getElementById("precio").value;
  let estado = document.getElementById("estado").value;

  let inmuebleEncontrado = inmueble.find(function(elem) {
    return elem.idinmueble === idinmueble && elem.estado === "No disponible";
  });

  if(inmuebleEncontrado){
    document.getElementById("resultados").innerHTML = "No es posible actualizar el registro ya que no se encuentra disponible.";
  }else{
    let inmuebleIndex = inmueble.findIndex(function(elem) {
      return elem.idinmueble === idinmueble;
    });
    if (inmuebleIndex >= 0) {
      if (precio >= 100000000 && precio <= 500000000) {
        inmueble[inmuebleIndex].direccion = direccion;
        inmueble[inmuebleIndex].telefono = telefono;
        inmueble[inmuebleIndex].precio = precio;
        inmueble[inmuebleIndex].estado = estado;
        document.getElementById("resultados").innerHTML = "El inmueble ha sido actualizado correctamente.";
      } else {
        document.getElementById("resultados").innerHTML = "El precio debe estar entre 100 millones y 500 millones.";
      }
    } else {
      document.getElementById("resultados").innerHTML = "No se encontró ningún inmueble con ese ID.";
    }
  }
});


let btnBuscar = document.getElementById("btnBuscar");
btnBuscar.addEventListener("click", function() {
  let idinmueble = document.getElementById("idinmueble").value;
  let inmuebleEncontrado = inmueble.find(function(elem) {
    return elem.idinmueble === idinmueble;
  });

  if(!idinmueble){
    document.getElementById("resultados").innerHTML = "Primero debe ingresar el ID del inmueble";
    document.getElementById("messIdInmueble").innerHTML = "Se debe ingresar un numero de ID";
  }else{
    if (inmuebleEncontrado) {
      document.getElementById("direccion").value = inmuebleEncontrado.direccion;
      document.getElementById("telefono").value = inmuebleEncontrado.telefono;
      document.getElementById("precio").value = inmuebleEncontrado.precio;
      document.getElementById("estado").value = inmuebleEncontrado.estado;
      if(inmuebleEncontrado.estado === "Disponible"){
        document.getElementById("resultados").innerHTML = "";
        document.getElementById("cbInmueble").checked = true;
      }else{
        document.getElementById("resultados").innerHTML = "El inmueble no esta disponible";
        document.getElementById("cbInmueble").checked = false;
      }
    } else {
      document.getElementById("resultados").innerHTML = "El inmueble no existe.";
    }
  }
});

/*
let btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", function() {
  let inmueblesDisponibles = inmueble.filter(function(elem) {
    return elem.estado === "Disponible" && elem.precio >= 200000000 && elem.precio <= 300000000;
  });

  let lista = "<ul>";
  inmueblesDisponibles.forEach(function(elem) {
    lista += "<li>" + "Id Inmueble: " + elem.idinmueble + " - " + "Dirección: " + elem.direccion + " - " + "Teléfono: " + elem.telefono + " - " + "Precio: " + elem.precio + " - " + "Estado: " + elem.estado + "</li>";
  });
  lista += "</ul>";

  document.getElementById("resultados").innerHTML = lista;
});
*/

let btnListar = document.getElementById("btnListar");
btnListar.addEventListener("click", function() {
  let inmueblesDisponibles = inmueble.filter(function(elem) {
    return elem.estado === "Disponible" && elem.precio >= 200000000 && elem.precio <= 300000000;
  });

  let tabla = "<table><thead><tr><th>Id Inmueble</th><th>Dirección</th><th>Teléfono</th><th>Precio</th><th>Estado</th></tr></thead><tbody>";
  inmueblesDisponibles.forEach(function(elem) {
    tabla += "<tr><td>" + elem.idinmueble + "</td><td>" + elem.direccion + "</td><td>" + elem.telefono + "</td><td>" + elem.precio + "</td><td>" + elem.estado + "</td></tr>";
  });
  tabla += "</tbody></table>";

  document.getElementById("resultados").innerHTML = tabla;
});


let btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click", function() {
    document.getElementById("idinmueble").value = "";
    document.getElementById("direccion").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("estado").value = "Seleccione dando click:";
    document.getElementById("resultados").innerHTML = "";
    document.getElementById("messIdInmueble").innerHTML = "";
    document.getElementById("messDireccion").innerHTML = "";
    document.getElementById("messTel").innerHTML = "";
    document.getElementById("messPrecio").innerHTML = "";
});
