

// 1. Definir evento click sobre el Botón de login

$(document).on("click","#btnLogin",function(){
  // Obtenemos lo que el usuario ha escrito en los input Email y Password
  // Para obtener el valor que se ha escrito en un input, utilizamos la función .val()
  var e = $("#inputEmail").val();
  var p = $("#inputPassword").val();

  $.ajax({
    method: "POST",
    url: "http://miguelcamposrivera.com/mecaround/api/v1/auth/login",
    data: { email: e, password: p }
  })
  .done(function(pepitoJson) {
    // respuesta > es un objeto JSON que recibo del servidor
    let key = pepitoJson.key;
    let nombre = pepitoJson.nombre;
    let email = pepitoJson.email;

    console.log(`${key}, ${nombre}, ${email}`);

    // Redirecciono al usuario a la página de inicio
    window.location.href = "index.html";
  })
  .fail(function(error){
    alert("Login incorrecto");
    console.log(error);
  });

});
