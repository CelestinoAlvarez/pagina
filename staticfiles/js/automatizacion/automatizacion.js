$(document).ready(function () {
            
  $(".botonMenu").hover(function(){
    $(this).css({'color':'white'});
  });

  $(".botonMenu").mouseout(function(){
    $(this).css({'color':' black '});
  });

  $("#barraMenu").mouseout(function(){
      $(".btAutomatizacion").css({'font-weigth':'bold'});
  });

  $("#btInicio").click(function(){
      var url = "/principal";    
      $(location).attr('href',url);
  })

  $("#btProgramacion").click(function(){
      var url = "/programacion";    
      $(location).attr('href',url);
  })

  $("#btElectricidad").click(function(){
      var url = "/electricidad";    
      $(location).attr('href',url);
  })

})