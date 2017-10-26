$(function(){
  let nombresUsuarios = $("#nombres").text();

  $("#botonAdd").on("click",function(){
    $("#form").html('<input type="text" id="nuevo" value="" placeholder="Escriba un nuevo usuario" /><input type="button" id="botonGuardar" value=">" /><input type="button" id="botonEliminar" value="X" />');
  });

  $(document).on("click","#botonGuardar",function(){
    // Guardo los nombres que hay en el párrafo #nombres
    nombresUsuarios = $("#nombres").html();
    $("#nombres").html(nombresUsuarios +"<br/>"+ $("#nuevo").val());
    $("#form").html("");
  });

  $(document).on("click","#botonEliminar",function(){
    $("#form").html("");
  });

});
