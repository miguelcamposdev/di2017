
$(function(){
  console.log("v2.0");

  $("#bombilla").on("click",function(){
    if($(this).hasClass("btn-bombilla-encendida")) {
      // Entrando en el caso de apagar
      $("body").css("background-color","black");
      $(this).toggleClass("btn-bombilla-encendida");
      $(this).val("Encender");

    } else {
      // Entrando en el caso de encender
      $("body").css("background-color","white");
      $(this).toggleClass("btn-bombilla-encendida");
      $(this).val("Apagar");
    }
  });
});
