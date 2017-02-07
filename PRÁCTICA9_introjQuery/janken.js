/*global $*/
/*global localStorage*/
var option1 = "none";
var option2 = "none";
var player1 = "none";
var player2 = "none";
var reset = 0;

$(document).ready(init);
function init()
{
    // Again
    if(reset)
    {
        $("#jugador1 > img").css({"display":"block","height":"100px", "position":"relative", "left":"0px", "top":"0px"});
        $("#jugador2 > img").css({"display":"block","height":"100px", "position":"relative", "left":"0px", "top":"0px"});
        $("#fight").css({"display":"inline-block"});
    }
    
    // Esconder truños
    $("#player1Win").css({"display":"none"});
    $("#player2Win").css({"display":"none"});
    $("#again").css({"display":"none"});
    $("#draw").css({"display":"none"});
    
    // Pedir nombres
    player1 = window.prompt("Introduce el nombre del jugador 1");
    player2 = window.prompt("Introduce el nombre del jugador 2");
    $("#p1").html(player1);
    $("#p2").html(player2);
    $("#fight").click(setPlayer1); // preparar J1
}

function setPlayer1()
{
    // CSS
    $("#ranking").css({"display":"none"});
    $("#p1").css({"background-color":"blue"});
    $("#jugador1 > img").css({"height":"120px", "position":"relative", "left":"0px", "top":"0px"});
    $("#jugador2 > img").css({"display":"none"});
    $("#fight").css({"display":"none"});
    
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
    option1 = $(this).attr('alt');
    $("#jugador1 > img").off();
    $("#jugador1 > img").fadeOut();
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
    option2 = $(this).attr('alt');
    $("#jugador2 > img").off();
    $("#jugador2 > img").css({"display":"none"});
    $("#p2").css({"background-color":"inherit"});
    getWinner();
}

/*function getWinner() NO RULA :(
{
    $("#taulell").off();
    reset = 1;
    
    var results = {
        rock: {rock:"draw", paper:"player2Win", scissors:"player1Win", lagarto:"player1Win", spock:"player2Win"},
        paper: {rock:"player1Win", paper:"draw", scissors:"player2Win", lagarto:"player2Win", spock:"player1Win"},
        scissors: {rock:"player2Win", paper:"player1Win", scissors:"draw", lagarto:"player1Win", spock:"player2Win"},
        lagarto: {rock:"player2Win", paper:"player1Win", scissors:"player2Win", lagarto:"draw", spock:"player1Win"},
        spock: {rock:"player1Win", paper:"player2Win", scissors:"player1Win", lagarto:"player2Win", spock:"draw"}
    };
    
    var res = "#"+results[option1, option2];
    $(res).css({"display":"inline-block"});
    option1 = "#"+option1;
    option2 = "#"+option2;
    $(option1).css({"display":"block"});
    $(option2).css({"display":"block"});
    $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
    $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
}*/

function getWinner()
{
    $("#taulell").off();
    reset = 1;
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
        else if(option2 == "paper2" || option2 == "spock2") // 2 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player2Win").css({"display":"inline-block"});
            updateRanking(2);
        }
        else if(option2 == "scissor2" || option2 == "lagarto2") // 1 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player1Win").css({"display":"inline-block"});
            updateRanking(1);
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
        else if(option2 == "scissor2" || option2 == "lagarto2") // 2 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player2Win").css({"display":"inline-block"});
            updateRanking(2);
        }
        else if(option2 == "rock2" || option2 == "spock2") // 1 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player1Win").css({"display":"inline-block"});
            updateRanking(1);
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
        else if(option2 == "rock2" || option2 == "spock2") // 2 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player2Win").css({"display":"inline-block"});
            updateRanking(2);
        }
        else if(option2 == "paper2" || option2 == "lagarto2") // 1 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player1Win").css({"display":"inline-block"});
            updateRanking(1);
        }
    }
    else if(option1 == "lagarto1")
    {
        if(option2 == "lagarto2") // EMPATE
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#draw").css({"display":"inline-block"});
        }
        else if(option2 == "rock2" || option2 == "scissor2") // 2 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player2Win").css({"display":"inline-block"});
            updateRanking(2);
        }
        else if(option2 == "paper2" || option2 == "spock2") // 1 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player1Win").css({"display":"inline-block"});
            updateRanking(1);
        }
    }
    else if(option1 == "spock1")
    {
        if(option2 == "spock2") // EMPATE
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#draw").css({"display":"inline-block"});
        }
        else if(option2 == "paper2" || option2 == "lagarto2") // 2 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player2Win").css({"display":"inline-block"});
            updateRanking(2);
        }
        else if(option2 == "rock2" || option2 == "scissor2") // 1 wins
        {
            option1 = "#"+option1;
            option2 = "#"+option2;
            $(option1).css({"display":"block"});
            $(option2).css({"display":"block"});
            $(option1).animate({"position":"absolute","left":"150px","top":"150px"},{"duration":500});
            $(option2).animate({"position":"absolute","left":"-150px","top":"150px"},{"duration":500});
            $("#player1Win").css({"display":"inline-block"});
            updateRanking(1);
        }
    }
    $("#again").css({"display":"inline-block"});
    $("#ranking").css({"display":"inline-block"});
}*/

function updateRanking(winner) 
{
    if(winner == 1)
    {
        if(localStorage.getItem(player1))
            localStorage.setItem(player1,Number(localStorage.player1) + 1);
        else
            localStorage.setItem(player1, 1);
    }
    else if(winner == 2)
    {
        if(localStorage.getItem(player2))
            localStorage.setItem(player2,Number(localStorage.player2) + 1);
        else
            localStorage.setItem(player2, 1);
    }
    else
        window.alert("ERROR EN UPDATERANKING");
}

function ranking()
{
    
}