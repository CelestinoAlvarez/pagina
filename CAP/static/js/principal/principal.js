$(document).ready(function () {
            
    $(".botonMenu").hover(function(){
      $(this).css({'color':'white'});
    });
 
    $(".botonMenu").mouseout(function(){
      $(this).css({'color':'black'});
    });

    $("#barraMenu").mouseout(function(){
        $(".btInicio").css({'background-color':' #2175bc '});
    });

    $("#btAutomatizacion").click(function(){
        var url = "/automatizacion";    
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