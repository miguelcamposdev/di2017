
var listadoTalleres;
var idTallerEditar;

// Cargo una api key por defecto
var key = localStorage.getItem("key");
if(key!=null) {
  $("#apikey").val(key);
}

// Definición de un objeto de tipo Taller
function Taller(id, nombre, latlng, direccion, telefono){
  this.id = id,
  this.nombre = nombre,
  this.latlng = latlng,
  this.direccion = direccion,
  this.telefono = telefono
}

function mostrarTalleres() {
  $("#listaTalleres").html("");
  listadoTalleres.forEach(function(taller){

    let htmlTaller = `<div class="col-lg-4 mb-4 card-taller" id="${taller.id}">
        <div class="card h-100">
          <h4 class="card-header titulo-card">${taller.nombre}</h4>
          <div class="card-body">
            <p class="card-text">${taller.direccion}</p>
            <input type="hidden" id="telefono" value="${taller.telefono}"/>
          </div>
          <div class="card-footer">
            <a href="tel:${taller.telefono}" class="btn btn-danger btn-eliminar">Llamar por teléfono</a>
            <a href="#" class="btn btn-primary btn-editar">Editar</a>
          </div>
        </div>
      </div>`;
    $("#listaTalleres").append(htmlTaller);
  });
}

$.ajax({
  method: "GET",
  url: "http://www.miguelcamposrivera.com/mecaround/api/v1/taller/lista",
  data: { "X-API-KEY": key }
})
.done(function( respuesta ) {
  // respuesta > es un objeto JSON que recibo del servidor
  listadoTalleres = respuesta.talleres;
  mostrarTalleres();
})
.fail(function( error){
  console.log("Error del servidor");
});

$(document).on("click",".btn-editar",function(){
  idTallerEditar = $(this).closest(".card-taller").attr("id");
  $("#telefono-taller").val($(this).closest(".card-taller").find("#telefono").val());
  $("#modalEditarTaller").modal("show")
});

$(document).on("click","#btn-guardar-taller",function(){
  // Cierro el modal cuando pulsa en el botón guardar
  $("#modalEditarTaller").modal("hide");
  $.ajax({
    method: "POST",
    url: "http://www.miguelcamposrivera.com/mecaround/api/v1/taller/editar",
    data: { "X-API-KEY": key, id: idTallerEditar, telefono: $("#telefono-taller").val()  }
  })
  .done(function( respuesta ) {
    // respuesta > es un objeto JSON que recibo del servidor
    listadoTalleres = respuesta.talleres;
    mostrarTalleres();
  })
  .fail(function( error){
    console.log("Error del servidor");
  });
});

$(document).on("click","#btn-guardar-key",function(){
  if($("#apikey").val()!="") {
    key = $("#apikey").val();
    localStorage.setItem("key",key);
  }
});
