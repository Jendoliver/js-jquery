/* global $ */
$(document).ready(init);

function init()
{
    $("#player1").click(altColor);
    $("#player2").click(altColor);
    $("#char1").change(changeImg);
    $("#char2").change(changeImg);
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

function changeImg()
{
    if($(this).attr("id") == "char1")
    {
        var image = $("<img id='selectedcharimg1' class='selectedchar' src='img/"+$(this).val()+".png'></img>").hide();
        $("#selectedchar1 > img").remove();
        $("#selectedchar1").append(image);
        image.show(500);
    }
    else
    {
        var image = $("<img id='selectedcharimg2' class='selectedchar' src='img/"+$(this).val()+".png'></img>").hide();
        $("#selectedchar2 > img").remove();
        $("#selectedchar2").append(image);
        image.show(500);
    }
}