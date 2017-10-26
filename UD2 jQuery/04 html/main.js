$(function(){
  let textoOriginal = $("#texto").html();

  $("#botonEspecial").on("click",function(){
    $("#texto").text("He cambiado el texto");
  });

  $("#botonDeshacer").on("click",function() {
    $("#texto").html(textoOriginal);
  });

});
