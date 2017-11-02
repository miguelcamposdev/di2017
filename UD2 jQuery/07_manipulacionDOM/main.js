$(function(){


    $(document).on("click",".btn-eliminar",function(){
      let tituloCard = $(this).closest(".card").find(".titulo-card").text();
      let selectorCard = $(this).closest(".card-nota");
      let id = selectorCard.attr("class");
      alert("Se va a eliminar el id: "+id);
      //alert(`¿Desea eliminar ${tituloCard}?`);
      selectorCard.remove();
    });

    $(document).on("click","#btn-guardar-nota",function(){
      let textoNota = $("#texto-nueva-nota").val();

      if(textoNota!="") {
        // El método
        $("#listaNotas").append( '<div class="col-lg-4 mb-4" id="3">'
        +'<div class="card h-100"><h4 class="card-header titulo-card">'+textoNota+'</h4><div class="card-body"><p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p></div><div class="card-footer"><a href="#" class="btn btn-danger btn-eliminar">Eliminar</a></div></div></div>' );

        $('#modalNuevaNota').modal('hide');
      } else {
        alert("Escribe algo, no seas perro");
      }

    });

    $(document).on("click",".btn-visibilidad",function(){
      var cuerpoCard = $(this).closest(".card").find(".card-body");

        if($(this).hasClass("ocultar")) {
          cuerpoCard.hide();
          $(this).text("Mostrar");
        } else {
          cuerpoCard.show();
          $(this).text("Ocultar");
        }

        $(this).toggleClass("ocultar");
    });
});
