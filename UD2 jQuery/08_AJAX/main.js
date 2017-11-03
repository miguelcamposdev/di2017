var listadoAverias = Array();



    function Averia(id, userId, marcaId, modelo, titulo, descripcion) {
      this.id = id;
      this.user_id = userId;
      this.marca_id = marcaId;
      this.modelo = modelo;
      this.titulo =  titulo;
      this.descripcion = descripcion;
    }

    $.ajax({
      url: "http://miguelcamposrivera.com/mecaround/api/v1/averia/lista",
      data: { "X-API-KEY": "80kwcc8gwwcgc08g4ogkckoc8oggwcc4gogok8c4" },
    }).done(function(jsonRespuesta) {

      console.log(jsonRespuesta);

      jsonRespuesta.averias.forEach(function(av){
          listadoAverias.push(new Averia(av.id,av.user_id,av.marca_id,this.modelo,av.titulo,av.descripcion));
      });

    }).fail(function(error) {

      console.log(error);

    });


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
