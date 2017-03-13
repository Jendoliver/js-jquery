/*global $*/
$(document).ready(init);
function init()
{
    $("#mueveDiv").click(moveToContenedor);
    $("#crearNewSpan").click(crearNewSpan);
    $("#borraSpans").click(removeSpans);
}

function moveToContenedor()
{
    $(this).appendTo($("#contenedor")); // forma 1 (este elemento añádelo aquí)
    $("#contenedor").append($(this)); // forma 2 (a este elemento añádele este otro)
    
    $(this).off(); // desvincula el evento de init
    $(this).click(moveFin);
}

function moveFin()
{
    $(this).appendTo($("body")); // forma 1 (enchichalo al final del body)
    $(this).insertAfter($("contenedor")); // forma 2 (dale despues de contenedor)
    
    $(this).off();
    $(this).click(moveToContenedor);
}

function crearNewSpan()
{
    var span = $("<span>Spannabis</span>");
    span.appendTo($("#contenedor"));
    span.click(removeSpan);
}

function removeSpan()
{
    $(this).remove();
}

function removeSpans()
{
    $("contenedor > span").remove(); // forma 1 (borra spans dentro de contenedor)
    $(this).siblings("span").remove(); // forma 2 (borra los hermanos de tipo span del elemento activador de la funcion)
    $(this).parent().children("span").remove(); // forma 3 (borra los hijos de tipo span del padre que ha activado la funcion)
}