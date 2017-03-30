/* global $ */
$(document).ready(init);

function init()
{
    $("#char1").change(changeImg);
    $("#char2").change(changeImg);
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