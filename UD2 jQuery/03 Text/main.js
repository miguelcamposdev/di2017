

$(function(){
  let textoOriginal = $("#texto").text();

  $("#botonEspecial").on("click",function(){
    $("#texto").text("He cambiado el texto");
  });

  $("#botonDeshacer").on("click",function() {
    $("#texto").text(textoOriginal);
  });

});
