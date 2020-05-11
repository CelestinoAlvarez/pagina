$(document).ready(function () {
            
  $(".botonMenu").hover(function(){
    $(this).css({"color":'white'});
  });

  $(".botonMenu").mouseout(function(){
    $(this).css({'color':'black'});
  });

  $("#barraMenu").mouseout(function(){
      $(".btElectricidad").css({'background-color':' #2175bc '});
  });

  $("#btInicio").click(function(){
      var url = "/principal";    
      $(location).attr('href',url);
  })

  $("#btAutomatizacion").click(function(){
      var url = "/automatizacion";    
      $(location).attr('href',url);
  })

  $("#btProgramacion").click(function(){
      var url = "/programacion";    
      $(location).attr('href',url);
  })

})