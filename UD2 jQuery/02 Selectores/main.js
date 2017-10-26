$(function(){
  console.log("v1.1");

  //$("#bombilla").addClass("btn-bombilla-encendida");

  $("#bombilla").on("click",function(){
    if($(this).hasClass("btn-bombilla-encendida")) {
      // Entrando en el caso de apagar
      $("body").css("background-color","black");
      $(this).removeClass("btn-bombilla-encendida");
      $(this).addClass("btn-bombilla-apagada");
      $(this).val("Encender");

    } else {
      // Entrando en el caso de encender
      $("body").css("background-color","white");
      $(this).addClass("btn-bombilla-encendida");
      $(this).removeClass("btn-bombilla-apagada");
      $(this).val("Apagar");
    }
  });
});
