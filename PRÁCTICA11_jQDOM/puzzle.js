/* global $ */
var fitxes_inici = {
        fitxa1: "img1"
    , fitxa2: "img3"
    , fitxa3: "img4"
    , fitxa4: "img7"
    , fitxa5: "img6"
    , fitxa6: "img2"
    , fitxa7: "img4"
    , fitxa8: "img9"
    , fitxa9: "img8"
};

var fitxes_final = {
        fitxa1: "img1"
    , fitxa2: "img2"
    , fitxa3: "img3"
    , fitxa4: "img4"
    , fitxa5: "img5"
    , fitxa6: "img6"
    , fitxa7: "img7"
    , fitxa8: "img8"
    , fitxa9: "img9"
};

$(document).ready(init);
function init()
{
    $("#fitxes_iguals > img").click(selectFitxa);
    $(".fitxa > img").click(selectFitxa);
}

function selectFitxa()
{
    $("#fitxa_seleccionada > img").appendTo("#fitxes_iguals");
    $(this).appendTo("#fitxa_seleccionada");
    $(this).off();
    $(".fitxa").click(selectPosition);
    $("#fitxes_iguals > img").click(selectFitxa);
}

function selectPosition()
{
    var img = $("#fitxa_seleccionada > img");
    img.off();
    $(this).children("img").click(selectFitxa);
    $(this).children("img").appendTo("#fitxa_seleccionada");
    $(this).append(img);
}

function check()
{
    
}