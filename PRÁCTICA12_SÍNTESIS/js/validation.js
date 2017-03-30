/* global $ */
$(document).ready(init);

function init()
{
    $("#formulario").validate(
    {
        focusCleanup: true,
        rules: 
        {
            direccion1: 
            {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            edad1: 
            {
                required: true,
                min: 18,
                max: 99
            },
            personaje1:
            {
                required: true
            },
            direccion2: 
            {
                required: true,
                minlength: 5,
                maxlength: 20
            },
            edad2: 
            {
                required: true,
                min: 18,
                max: 99
            },
            personaje2:
            {
                required: true
            },
        },
        messages: 
        {
            direccion1: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Campo requerido</div>",
                minlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce más de 5 letras</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce menos de 20 letras</div>"
            },
            direccion2: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Campo requerido</div>",
                minlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce más de 5 letras</div>",
                maxlength:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce menos de 20 letras</div>"
            },
            edad1: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Campo requerido</div>",
                min:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce un número mayor que 18</div>",
                max:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce un número menor que 99</div>"
            },
            edad2: 
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Campo requerido</div>",
                min:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce un número mayor que 18</div>",
                max:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Introduce un número menor que 99</div>"
            },
            personaje1:
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Campo requerido</div>"
            },
            personaje2:
            {
                required:"<div class='formalert'><span class='glyphicon glyphicon-chevron-right'></span> Campo requerido</div>"
            }
        }
    });
}