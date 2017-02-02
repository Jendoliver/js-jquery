/*global $*/
var option1 = "none";
var option2 = "none";

$(document).ready(init);
function init()
{
    $("#fight").click(setPlayer1); // preparar J1
}

function setPlayer1()
{
    // CSS
    $("#p1").css({"background-color":"blue"});
    $("#jugador1 > img").css({"height":"120px", "position":"relative", "left":"0px", "top":"0px"});
    $("#jugador2 > img").css({"display":"none"});
    $("#fight").css({"display":"none"});
    $("#player1Win").css({"display":"none"});
    $("#player2Win").css({"display":"none"});
    $("#draw").css({"display":"none"});
    
    // ANIMACIONES Y CLICK
    $("#jugador1 > img").mouseover(animateOptions1);
    $("#jugador1 > img").click(getOption1);
}

function animateOptions1()
{
    $("#jugador1 > img").animate({"width":"100px","height":"100px"},{"duration":100});
    $(this).stop();
    $(this).animate({"width":"140px","height":"140px"},{"duration":100});
}

function getOption1()
{
    // CSS
    option1 = this.id;
    $("#jugador1 > img").off();
    $("#jugador1 > img").css({"display":"none"});
    $("#jugador2 > img").css({"display":"block"});
    $("#p1").css({"background-color":"inherit"});
    $("#p2").css({"background-color":"blue"});
    $("#jugador2 > img").css({"height":"120px", "position":"relative", "left":"0px", "top":"0px"});
    
    // ANIMACIONES Y CLICK
    $("#jugador2 > img").mouseover(animateOptions2);
    $("#jugador2 > img").click(getOption2);
}

function animateOptions2()
{
    $("#jugador2 > img").animate({"width":"100px","height":"100px"},{"duration":100});
    $(this).stop();
    $(this).animate({"width":"140px","height":"140px"},{"duration":100});
}

function getOption2()
{
    // CSS
    option2 = this.id;
    $("#jugador2 > img").off();
    $("#jugador2 > img").css({"display":"none"});
    $("#p2").css({"background-color":"inherit"});
    getWinner();
}

function getWinner()
{
    if(option1 == "rock1")
    {
        if(option2 == "rock2") // EMPATE
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#draw").css({"display":"inline-block"});
        }
        else if(option2 == "paper2") // 2 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player2Win").css({"display":"inline-block"});
        }
        else if(option2 == "scissor2") // 1 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player1Win").css({"display":"inline-block"});
        }
    }
    else if(option1 == "paper1")
    {
        if(option2 == "paper2") // EMPATE
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#draw").css({"display":"inline-block"});
        }
        else if(option2 == "scissor2") // 2 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player2Win").css({"display":"inline-block"});
        }
        else if(option2 == "rock2") // 1 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player1Win").css({"display":"inline-block"});
        }
    }
    else if(option1 == "scissor1")
    {
        if(option2 == "scissor2") // EMPATE
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#draw").css({"display":"inline-block"});
        }
        else if(option2 == "rock2") // 2 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player2Win").css({"display":"inline-block"});
        }
        else if(option2 == "paper2") // 1 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player1Win").css({"display":"inline-block"});
        }
    }
}