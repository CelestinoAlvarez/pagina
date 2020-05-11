$(document).ready(function () {

    var ordenadoITC=false;
    var ordenadoTemas=false;
    var temasIntroduccion=false;
    var temasAspectosGenerales=false;
    var temasRedesAereas=false;
    var temasRedesSubterraneas=false;
    var temasInstalacionesEnlace=false;
    var temasInstalacionesInteriores=false;
    var temasPublicaConcurrencia=false;
    var temasAlumbradoExterior=false;
    var temasProtecciones=false;
    var temasInstalacionesDomoticas=false;
    var temasInstalacionesEspeciales=false;
    var temasFinesEspeciales=false;
    var temasTensionesEspeciales=false;
    var temasInstalacionesReceptoras=false;
    var temasAnexos=false;
    var alturaEscritorio=$("#menu").height();

    //Inicialización
    $("#ordenadoPorITC").css("display","none");
    $("#imgSeleccionITCMenos").css("display","none");
    $("#ordenadoPorTemas").css("display","none");   
    $("#imgSeleccionTemasMenos").css("display","none");
    $("#opcionesIntroduccion").css("display","none");
    $("#imgIntroduccionMenos").css("display","none");
    $("#opcionesAspectosGenerales").css("display","none");
    $("#imgAspectosGeneralesMenos").css("display","none");
    $("#opcionesRedesAereas").css("display","none");
    $("#imgRedesAereasMenos").css("display","none");
    $("#opcionesRedesSubterraneas").css("display","none");
    $("#imgRedesSubterraneasMenos").css("display","none");    
    $("#opcionesInstalacionesEnlace").css("display","none");
    $("#imgInstalacionesEnlaceMenos").css("display","none");    
    $("#opcionesInstalacionesInteriores").css("display","none");
    $("#imgInstalacionesInterioresMenos").css("display","none");
    $("#opcionesPublicaConcurrencia").css("display","none");
    $("#imgPublicaConcurrenciaMenos").css("display","none");

    $("#opcionesAlumbradoExterior").css("display","none");
    $("#imgAlumbradoExteriorMenos").css("display","none");

    $("#opcionesProtecciones").css("display","none");
    $("#imgProteccionesMenos").css("display","none");

    $("#opcionesInstalacionesDomoticas").css("display","none");
    $("#imgInstalacionesDomoticasMenos").css("display","none");

    $("#opcionesInstalacionesEspeciales").css("display","none");
    $("#imgInstalacionesEspecialesMenos").css("display","none");

    $("#opcionesFinesEspeciales").css("display","none");
    $("#imgFinesEspecialesMenos").css("display","none");

    $("#opcionesTensionesEspeciales").css("display","none");
    $("#imgTensionesEspecialesMenos").css("display","none");
  
    $("#opcionesInstalacionesReceptoras").css("display","none");
    $("#imgInstalacionesReceptorasMenos").css("display","none");

    $("#opcionesAnexos").css("display","none");
    $("#imgAnexosMenos").css("display","none");


    var ancho = $(window).outerWidth();
    $("#tablaEncabezado").css("width",ancho-18);
   
    alturaEscritorio=$("#menu").height();

    $(window).resize(function () {
        $("#tablaEncabezado").css("width",$(window).outerWidth());
    })

    $("#menu").resize(CambiarTamanio());

    function CambiarTamanio(){
      alturaEscritorio=$("#menu").height();
      if (alturaEscritorio<$(window).outerHeight())
        alturaEscritorio=$(window).outerHeight()
      $("#escritorio").css("height",alturaEscritorio);
    }

    $("#btGUIABTRD").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABTRD.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
      CambiarTamanio();
    })

    $("#btResumenGUIABTRD").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append(" <iframe id='ventana' style='width:"+$("#escritorio").outerWidth()+"px; height:"+$("#escritorio").outerHeight()+"px' src='/reglamento/guiabtrd'></iframe> ");
      CambiarTamanio();
    })

    $("#btGUIABTINDICE").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABTINDICE.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btResumenGUIABTIndice").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append(" <iframe id='ventana' style='width:"+$("#escritorio").outerWidth()+"px; height:"+$("#escritorio").outerHeight()+"px' src='/reglamento/guiabtindice'></iframe> ");
      CambiarTamanio();
    })

    $("#btITCBT01").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT01.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT02").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT02.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT03").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT03.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT04").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT04.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btResumenITCBT04").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append(" <iframe id='ventana' style='width:"+$("#escritorio").outerWidth()+"px; height:"+$("#escritorio").outerHeight()+"px' src='/reglamento/itcbt04'></iframe> ");
      CambiarTamanio();
    })

    $("#btGUIABT05").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT05.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btResumenITCBT05").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append(" <iframe id='ventana' style='width:"+$("#escritorio").outerWidth()+"px; height:"+$("#escritorio").outerHeight()+"px' src='/reglamento/itcbt05'></iframe> ");
      CambiarTamanio();
    })

    $("#btITCBT06").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT06.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btResumenITCBT06").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append(" <iframe id='ventana' style='width:"+$("#escritorio").outerWidth()+"px; height:"+$("#escritorio").outerHeight()+"px' src='/reglamento/itcbt06'></iframe> ");
      CambiarTamanio();
    })

    $("#btITCBT07").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT07.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT08").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT08.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT09").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT09.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btResumenITCBT09").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append(" <iframe id='ventana' style='width:"+$("#escritorio").outerWidth()+"px; height:"+$("#escritorio").outerHeight()+"px' src='/reglamento/itcbt09'></iframe> ");
      CambiarTamanio();
    })

    $("#btGUIABT10").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT10.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT11").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT11.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT12").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT12.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT13").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT13.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT14").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT14.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT15").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT15.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT16").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT16.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT17").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT17.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT18").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT18.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT19").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT19.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT20").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT20.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT21").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT21.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT22").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT22.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT23").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT23.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT24").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT24.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT25").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT25.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT26").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT26.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT27").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT27.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT28").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT28.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT29").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT29.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT30").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT30.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT31").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT31.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT32").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT32.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT33").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT33.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT34").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT34.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT35").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT35.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT36").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT36.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT37").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT37.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT38").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT38.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT39").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT39.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT40").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT40.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT41").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT41.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT42").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT42.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT43").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT43.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT44").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT44.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT45").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT45.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT46").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT46.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT47").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT47.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT48").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT48.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT49").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT49.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT50").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT50.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT51").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT51.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT52").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT52.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIAANEXO1").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIAANEXO1.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIAANEXO2").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIAANEXO2.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIAANEXO3").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIAANEXO3.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIAANEXO4").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIAANEXO4.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })


    $("#btGUIABTRDTemas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABTRD.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABTINDICETemas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABTINDICE.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT01Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT01.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT02Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT02.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT03Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT03.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT04Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT04.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT05Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT05.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT06Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT06.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT07Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT07.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT08Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT08.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT09Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT09.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT10Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT10.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT11Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT11.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT12Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT12.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT13Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT13.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT14Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT14.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT15Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT15.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT16Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT16.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT17Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT17.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT18Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT18.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT19Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT19.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT20Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT20.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT21Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT21.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT22Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT22.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT23Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT23.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT24Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT24.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT25Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT25.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT26Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT26.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT27Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT27.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT28Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT28.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT29Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT29.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT30Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT30.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT31Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT31.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT32Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT32.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT33Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT33.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT34Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT34.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT35Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT35.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT36Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT36.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT37Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT37.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT38Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT38.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT39Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT39.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT40Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT40.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT41Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT41.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT42Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT42.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT43Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT43.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT44Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT44.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT45Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT45.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT46Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT46.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT47Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT47.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT48Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT48.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT49Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT49.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT50Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT50.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIABT51Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIABT51.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btITCBT52Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/ITCBT52.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIAANEXO1Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIAANEXO1.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIAANEXO2Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIAANEXO2.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIAANEXO3Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIAANEXO3.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

    $("#btGUIAANEXO4Temas").click(function(){
      $("#escritorio").empty();
      $("#escritorio").append("<embed src='/static/documents/rebt/GUIAANEXO4.pdf' type='application/pdf' width='100%' height='"+alturaEscritorio+"px'>");
    })

//BOTON GENERAL DE ORDENACIÓN POR ITC

    $("#seleccionITC").click(function(){
      ordenadoITC=!ordenadoITC
      if (ordenadoITC==false){
        $("#ordenadoPorITC").css("display","none");
        $("#imgSeleccionITCMas").css("display","contents");
        $("#imgSeleccionITCMenos").css("display","none");
      }
      else{
        $("#ordenadoPorITC").css("display","contents");
        $("#imgSeleccionITCMas").css("display","none");
        $("#imgSeleccionITCMenos").css("display","contents");
      }
      CambiarTamanio();
    })

//BOTÓN GENERAL DE ORDENACIÓN POR TEMAS

    $("#seleccionTemas").click(function(){
      ordenadoTemas=!ordenadoTemas
      if (ordenadoTemas==false){
        $("#ordenadoPorTemas").css("display","none")
        $("#imgSeleccionTemasMas").css("display","contents");
        $("#imgSeleccionTemasMenos").css("display","none");
        $()
      }
      else{
        $("#ordenadoPorTemas").css("display","contents")
        $("#imgSeleccionTemasMas").css("display","none");
        $("#imgSeleccionTemasMenos").css("display","contents");
      }
      CambiarTamanio();
    })

//BOTÓN DE AGRUPAMIENTO DE INTRODUCCIÓN

    $("#temasIntroduccion").click(function(){
      temasIntroduccion=!temasIntroduccion
      if (temasIntroduccion==false){
        $("#opcionesIntroduccion").css("display","none")
        $("#imgIntroduccionMas").css("display","contents");
        $("#imgIntroduccionMenos").css("display","none");
        $()
      }
      else{
        $("#opcionesIntroduccion").css("display","contents")
        $("#imgIntroduccionMas").css("display","none");
        $("#imgIntroduccionMenos").css("display","contents");
      }
      CambiarTamanio();
    })


//BOTÓN DE AGRUPAMIENTO DE ASPECTOS GENERALES

$("#temasAspectosGenerales").click(function(){
  temasAspectosGenerales=!temasAspectosGenerales
  if (temasAspectosGenerales==false){
    $("#opcionesAspectosGenerales").css("display","none")
    $("#imgAspectosGeneralesMas").css("display","contents");
    $("#imgAspectosGeneralesMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesAspectosGenerales").css("display","contents")
    $("#imgAspectosGeneralesMas").css("display","none");
    $("#imgAspectosGeneralesMenos").css("display","contents");
  }
  CambiarTamanio();
})

//BOTÓN DE AGRUPAMIENTO DE REDES AEREAS

$("#temasRedesAereas").click(function(){
  temasRedesAereas=!temasRedesAereas
  if (temasRedesAereas==false){
    $("#opcionesRedesAereas").css("display","none")
    $("#imgRedesAereasMas").css("display","contents");
    $("#imgRedesAereasMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesRedesAereas").css("display","contents")
    $("#imgRedesAereasMas").css("display","none");
    $("#imgRedesAereasMenos").css("display","contents");
  }
  CambiarTamanio();
})

//BOTÓN DE AGRUPAMIENTO DE REDES SUBTERRÁNEAS

$("#temasRedesSubterraneas").click(function(){
  temasRedesSubterraneas=!temasRedesSubterraneas
  if (temasRedesSubterraneas==false){
    $("#opcionesRedesSubterraneas").css("display","none")
    $("#imgRedesSubterraneasMas").css("display","contents");
    $("#imgRedesSubterraneasMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesRedesSubterraneas").css("display","contents")
    $("#imgRedesSubterraneasMas").css("display","none");
    $("#imgRedesSubterraneasMenos").css("display","contents");
  }
  CambiarTamanio();
})

//BOTÓN DE AGRUPAMIENTO DE INSTALACIONES DE ENLACE

$("#temasInstalacionesEnlace").click(function(){
  temasInstalacionesEnlace=!temasInstalacionesEnlace
  if (temasInstalacionesEnlace==false){
    $("#opcionesInstalacionesEnlace").css("display","none")
    $("#imgInstalacionesEnlaceMas").css("display","contents");
    $("#imgInstalacionesEnlaceMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesInstalacionesEnlace").css("display","contents")
    $("#imgInstalacionesEnlaceMas").css("display","none");
    $("#imgInstalacionesEnlaceMenos").css("display","contents");
  }
  CambiarTamanio();
})

//BOTÓN DE AGRUPAMIENTO DE INSTALACIONES INTERIORES

$("#temasInstalacionesInteriores").click(function(){
  temasInstalacionesInteriores=!temasInstalacionesInteriores
  if (temasInstalacionesInteriores==false){
    $("#opcionesInstalacionesInteriores").css("display","none")
    $("#imgInstalacionesInterioresMas").css("display","contents");
    $("#imgInstalacionesInterioresMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesInstalacionesInteriores").css("display","contents")
    $("#imgInstalacionesInterioresMas").css("display","none");
    $("#imgInstalacionesInterioresMenos").css("display","contents");
  }
  CambiarTamanio();
})


//BOTÓN DE AGRUPAMIENTO DE PÚBLICA CONCURRENCIA

$("#temasPublicaConcurrencia").click(function(){
  temasPublicaConcurrencia=!temasPublicaConcurrencia
  if (temasPublicaConcurrencia==false){
    $("#opcionesPublicaConcurrencia").css("display","none")
    $("#imgPublicaConcurrenciaMas").css("display","contents");
    $("#imgPublicaConcurrenciaMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesPublicaConcurrencia").css("display","contents")
    $("#imgPublicaConcurrenciaMas").css("display","none");
    $("#imgPublicaConcurrenciaMenos").css("display","contents");
  }
  CambiarTamanio();
})


//BOTÓN DE AGRUPAMIENTO DE ALUMBRADO EXTERIOR

$("#temasAlumbradoExterior").click(function(){
  temasAlumbradoExterior=!temasAlumbradoExterior
  if (temasAlumbradoExterior==false){
    $("#opcionesAlumbradoExterior").css("display","none")
    $("#imgAlumbradoExteriorMas").css("display","contents");
    $("#imgAlumbradoExteriorMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesAlumbradoExterior").css("display","contents")
    $("#imgAlumbradoExteriorMas").css("display","none");
    $("#imgAlumbradoExteriorMenos").css("display","contents");
  }
  CambiarTamanio();
})


//BOTÓN DE AGRUPAMIENTO DE PROTECCIONES

$("#temasProtecciones").click(function(){
  temasProtecciones=!temasProtecciones
  if (temasProtecciones==false){
    $("#opcionesProtecciones").css("display","none")
    $("#imgProteccionesMas").css("display","contents");
    $("#imgProteccionesMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesProtecciones").css("display","contents")
    $("#imgProteccionesMas").css("display","none");
    $("#imgProteccionesMenos").css("display","contents");
  }
  CambiarTamanio();
})


//BOTÓN DE AGRUPAMIENTO DE INSTALACIONES DOMÓTICAS

$("#temasInstalacionesDomoticas").click(function(){
  temasInstalacionesDomoticas=!temasInstalacionesDomoticas
  if (temasInstalacionesDomoticas==false){
    $("#opcionesInstalacionesDomoticas").css("display","none")
    $("#imgInstalacionesDomoticasMas").css("display","contents");
    $("#imgInstalacionesDomoticasMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesInstalacionesDomoticas").css("display","contents")
    $("#imgInstalacionesDomoticasMas").css("display","none");
    $("#imgInstalacionesDomoticasMenos").css("display","contents");
  }
  CambiarTamanio();
})


//BOTÓN DE AGRUPAMIENTO DE INSTALACIONES ESPECIALES

$("#temasInstalacionesEspeciales").click(function(){
  temasInstalacionesEspeciales=!temasInstalacionesEspeciales
  if (temasInstalacionesEspeciales==false){
    $("#opcionesInstalacionesEspeciales").css("display","none")
    $("#imgInstalacionesEspecialesMas").css("display","contents");
    $("#imgInstalacionesEspecialesMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesInstalacionesEspeciales").css("display","contents")
    $("#imgInstalacionesEspecialesMas").css("display","none");
    $("#imgInstalacionesEspecialesMenos").css("display","contents");
  }
  CambiarTamanio();
})

//BOTÓN DE AGRUPAMIENTO DE FINES ESPECIALES

$("#temasFinesEspeciales").click(function(){
  temasFinesEspeciales=!temasFinesEspeciales
  if (temasFinesEspeciales==false){
    $("#opcionesFinesEspeciales").css("display","none")
    $("#imgFinesEspecialesMas").css("display","contents");
    $("#imgFinesEspecialesMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesFinesEspeciales").css("display","contents")
    $("#imgFinesEspecialesMas").css("display","none");
    $("#imgFinesEspecialesMenos").css("display","contents");
  }
  CambiarTamanio();
})


//BOTÓN DE AGRUPAMIENTO DE TENSIONES ESPECIALES

$("#temasTensionesEspeciales").click(function(){
  temasTensionesEspeciales=!temasTensionesEspeciales
  if (temasTensionesEspeciales==false){
    $("#opcionesTensionesEspeciales").css("display","none")
    $("#imgTensionesEspecialesMas").css("display","contents");
    $("#imgTensionesEspecialesMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesTensionesEspeciales").css("display","contents")
    $("#imgTensionesEspecialesMas").css("display","none");
    $("#imgTensionesEspecialesMenos").css("display","contents");
  }
  CambiarTamanio();
})


//BOTÓN DE AGRUPAMIENTO DE INSTALACIONES RECEPTORAS

$("#temasInstalacionesReceptoras").click(function(){
  temasInstalacionesReceptoras=!temasInstalacionesReceptoras
  if (temasInstalacionesReceptoras==false){
    $("#opcionesInstalacionesReceptoras").css("display","none")
    $("#imgInstalacionesReceptorasMas").css("display","contents");
    $("#imgInstalacionesReceptorasMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesInstalacionesReceptoras").css("display","contents")
    $("#imgInstalacionesReceptorasMas").css("display","none");
    $("#imgInstalacionesReceptorasMenos").css("display","contents");
  }
  CambiarTamanio();
})

//BOTÓN DE AGRUPAMIENTO DE ANEXOS

$("#temasAnexos").click(function(){
  temasAnexos=!temasAnexos
  if (temasAnexos==false){
    $("#opcionesAnexos").css("display","none")
    $("#imgAnexosMas").css("display","contents");
    $("#imgAnexosMenos").css("display","none");
    $()
  }
  else{
    $("#opcionesAnexos").css("display","contents")
    $("#imgAnexosMas").css("display","none");
    $("#imgAnexosMenos").css("display","contents");
  }
  CambiarTamanio();
})



})