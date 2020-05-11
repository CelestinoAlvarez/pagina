$(document).ready(function () {
            
  $(".botonMenu").hover(function(){
    $(this).css({'color':'white'});
  });

  $(".botonMenu").mouseout(function(){
    $(this).css({'color':'black'});
  });

  $("#barraMenu").mouseout(function(){
      $(".btProgramacion").css({'background-color':' #2175bc '});
  });

  $("#btInicio").click(function(){
      var url = "/principal";    
      $(location).attr('href',url);
  })

  $("#btAutomatizacion").click(function(){
      var url = "/automatizacion";    
      $(location).attr('href',url);
  })

  $("#btElectricidad").click(function(){
      var url = "/electricidad";    
      $(location).attr('href',url);
  })

})