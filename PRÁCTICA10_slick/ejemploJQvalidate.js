/*global $*/
$("document").ready(init);

function init()
{
    $("#formulari").validate(
    {
        focusCleanup: true,
        rules: 
        {
            nombre: 
            {
                required: true,
                minlength: 2,
                maxlength:10
            },
            hermanos: 
            {
                required: true,
                range: [0, 10]
            }
        },
        messages: 
        {
            nombre: 
            {
                required:"<b>requerido</b>",
                minlength:"mínimo 2 letras",
                maxlength:"máximo 10 letra"
            }
        }
    });
}