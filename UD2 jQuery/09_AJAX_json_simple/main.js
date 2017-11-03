
var respuestaServidor;

// Definición de un objeto de tipo RespuestaRegistro
function RespuestaRegistro(key, nombre, email){
  this.key = key,
  this.nombre = nombre,
  this.email = email
}

$.ajax({
  method: "POST",
  url: "http://miguelcamposrivera.com/mecaround/api/v1/auth/register",
  data: { nombre: "Pepe", email: "primos@email.com", password: "4567" }
})
.done(function( respuesta ) {
  // respuesta > es un objeto JSON que recibo del servidor
  respuestaServidor = new RespuestaRegistro(respuesta.key,respuesta.nombre,respuesta.email);
})
.fail(function( error){
  console.log("Error del servidor");
});
