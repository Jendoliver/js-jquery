/*global $*/
$(document).ready(init) // Cuando el documento html está listo, llama a la función init

$("selector").attr("color","red"); // Añade el atributo color = red al elemento selector
$("selector").attr("color"); // Devuelve el valor del atributo color del elemento selector

$("selector").remove(); // Se rebienta el selector

var d = $("selector"); // Guarda en d el elemento selector
d.children().click(func);