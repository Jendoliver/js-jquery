/* global $ */
$(document).ready(init);

function init()
{
    $("#player1").click(altColor);
    $("#player2").click(altColor);
}

function altColor()
{
    switch($(this).css("background-color"))
    {
        case "rgb(128, 128, 128)": $(this).css({"background-color":"blue"}); break;
        case "rgb(0, 0, 255)": $(this).css({"background-color":"green"}); break;
        case "rgb(0, 128, 0)": $(this).css({"background-color":"red"}); break;
        case "rgb(255, 0, 0)": $(this).css({"background-color":"blue"}); break;
    }
}