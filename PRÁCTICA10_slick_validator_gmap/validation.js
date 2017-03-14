/*global $*/
$("document").ready(init);

function init()
{
    $("#idnut").click(checkConditions);
        
    $("#formulari1").validate(
    {
        focusCleanup: true,
        rules: 
        {
            nombre: 
            {
                required: true,
                minlength: 3
            },
            apellido: 
            {
                required: true,
                minlength: 4
            },
            nacimiento:
            {
                required: true,
                date: true
            },
            pcs:
            {
                required: true,
                range: [0, 10]
            },
            conditions:
            {
                required: true,
            }
        },
        messages: 
        {
            nombre: 
            {
                required:"<b>requerido</b>",
                minlength:"mínimo 2 letras"
            }
        }
    });
    
    $("#formulari2").validate(
    {
        focusCleanup: true,
        rules:
        {
            nombre:
            {
                required: true,
                minlength: 3
            },
            codigo:
            {
                required: false,
                minlength: 13,
                maxlength: 13
            },
            caducidad:
            {
                required: false,
                date: true
            },
            estado:
            {
                required: true
            },
            infonut:
            {
                required: false
            }
        }
    });
}

function checkConditions()
{
    if($("#idnut").is(':checked'))
        $("#infonutricional").show();
    else
        $("#infonutricional").hide();
}