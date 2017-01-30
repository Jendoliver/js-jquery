/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ejercicio02()
{
    var num = document.getElementById("entrada");
    num = parseInt(num.value);
    var res = document.getElementById("resultado");
    var html = "<ul>";
    for(var k=0; k<=num; k++)
    {
        html += "<li>"+k+"</li>";
    }
    res.innerHTML += html+"</ul>";
}


