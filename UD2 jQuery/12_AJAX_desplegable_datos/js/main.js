
$(document).ready(function(){
  var baseURL = "http://miguelcamposrivera.com/mecaround/api/v1/";
  var key = localStorage.getItem("key");

  $.ajax({
    method: "GET",
    url: baseURL+"datamaster/data",
    data: { "X-API-KEY": key }
  })
  .done(function(respuestaJson) {
      console.log(respuestaJson);

      var listaMarcas = respuestaJson.marcas;

      listaMarcas.forEach(function(marca){
        var htmlMarca = `<option value="${marca.id}">${marca.marca}</option>`;
        $("#marcas").append(htmlMarca);
      });

  })
  .fail(function(error){
    console.log(error);
  });

  $(document).on("change","#marcas",function(){
    let id = $(this).val();
    //alert(`Has seleccionado la marca ${id}`);
    let nombreMarca = $(this).find("option:selected").text();
    $("#titulo-marca").text(`Marca seleccionada: ${nombreMarca}`);
  });


});
