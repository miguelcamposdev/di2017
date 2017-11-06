
$(document).ready(function(){
  var baseURL = "http://miguelcamposrivera.com/mecaround/api/v1/";
  var key = localStorage.getItem("key");

  $.ajax({
    method: "GET",
    url: baseURL+"taller/lista",
    data: { "X-API-KEY": key }
  })
  .done(function(pepitoJson) {
      console.log(pepitoJson);

      var listaTalleres = pepitoJson.talleres;

      listaTalleres.forEach(function(taller){
        var htmlTaller = `
        <tr id="${taller.id}">
          <td>${taller.id}</td>
          <td>${taller.nombre}</td>
          <td>${taller.latlng}</td>
          <td>${taller.direccion}</td>
          <td><a href="tel:">${taller.telefono}</a></td>
          <td>
              <a href="#" class="btn btn-primary btnEditar">Editar</a>
              <a href="#" class="btn btn-danger btnEliminar">Eliminar</a>
            </td>
          </tr>`;

        $("#listadoTalleres").append(htmlTaller);
      });

  })
  .fail(function(error){
    console.log(error);
  });

  $(document).on("click",".btnEditar",function(){
    let idAEliminar = $(this).closest("tr").attr("id");
    alert("Quieres editar el taller con id "+idAEliminar);
  });

  $(document).on("click",".btnEliminar",function(){
    let idAEliminar = $(this).closest("tr").attr("id");
    alert("Quieres eliminar el taller con id "+idAEliminar);

    // OJOOOOOOOOOOOOOOO que la siguiente petición no existe en la API
    /*$.ajax({
      method: "DELETE",
      url: baseURL+"taller/delete",
      data: { "X-API-KEY": key, id: idAEliminar }
    })
    .done(function(pepitoJson) {
      $(this).closest("tr").remove();
    });
    */
  });





});
