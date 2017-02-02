/*global $*/
$(document).ready(inicio); // para ejecutar algo justo cuando se carga el html
function inicio()
{
    $("#div1").css({"background-color":"blue", "width":"200px", "height":"100px"});
    
    $("#div1").click(changeColors);
    $(".div23").mouseover(agrandaDivs); //hover
    $(".div23").mouseout(contraeDivs); //al dejar de hover
    $(".div23").click(showClass);
}

function showClass()
{
    var c = $(this).attr("class"); // para obtener la clase del elemento
    var color = $(this).css("background-color") // para obtener el bgcolor del elemento
    $(this).html("La class: "+c+" El color: "+color);
}

function agrandaDivs()
{
    $(this).stop();
    $(this).animate({"width":"600px","height":"200px"}, // propiedades a animar
                    {"duration":500, "complete":setColorOrange}); // propiedades de la animación
}

function contraeDivs()
{
    $(this).animate({"width":"300px","height":"100px"},
                    {"duration":500, "complete":setColorBlue});
}

function setColorOrange()
{
    $(this).css({"background-color":"orange"});
}

function setColorBlue()
{
    $(this).css({"background-color":"blue"});
}

function changeColors()
{
    $(".div23").css({"color":"red", "background-color":"green"});
}