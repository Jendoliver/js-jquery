/* 
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
function ejercicio01()
{
    var num = document.getElementById("ent1");
    num = parseInt(num.value);
    var res = document.getElementById("res1");
    window.alert("Mira en tu consola pringao");
    for(var k=0; k<=num; k++)
    {
        if(!(k%2))
            console.log(k);
    }
}

function ejercicio02()
{
    var num = document.getElementById("ent2");
    num = parseInt(num.value);
    var res = document.getElementById("res2");
    var html = "<ul>";
    for(var k=0; k<=num; k++)
    {
        html += "<li>"+k+"</li>";
    }
    res.innerHTML = html+"</ul>";
}

function ejercicio03()
{
    var num1 = window.prompt("Introduce el primer número");
    var num2 = window.prompt("Introduce el segundo número");
    if(num1 > num2)
        window.alert("El primer número es mayor");
    else if(num2 > num1)
        window.alert("El segundo número es mayor");
    else
        window.alert("Los números son iguales");
}

function ejercicio04()
{
    var day = document.getElementById("dia").value;
    switch(day)
    {
        case "lun": window.alert("1"); break;
        case "mar": window.alert("2"); break;
        case "mie": window.alert("3"); break;
        case "jue": window.alert("4"); break;
        case "vie": window.alert("5"); break;
        case "sab": window.alert("6"); break;
        case "dom": window.alert("7"); break;
    }
}

function ejercicio05()
{
    var nicenum = Math.floor((Math.random() * 10) + 1); // numero aleatorio entre 1 y 10
    var usunum = window.prompt("Intenta adivinar el número que he pensado, parguela:");
    var tries = 1;
    while(nicenum != usunum)
    {
        if(nicenum > usunum)
        {
            window.alert("El número que he pensado es mayor!");
            usunum = window.prompt("Enchicha otro número, a ver si lo aciertas");
            tries++;
        }
        else if(nicenum < usunum)
        {
            window.alert("El número que he pensado es más pequeño!");
            usunum = window.prompt("Enchicha otro parguel que lo tienes");
            tries++;
        }
    }
    window.alert("¡Felicidades! Has acertado. Número de intentos: "+tries);
}

function suma()
{
    //TODO
}
