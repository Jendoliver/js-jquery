<?php
$winner = rand(1,2);
if($winner == 1)
{
    $dirwin = $_POST["direccion1"];
    $imgwin = $_POST["personaje1"];
    $edadwin = $_POST["edad1"];
}
else
{
    $dirwin = $_POST["direccion2"];
    $imgwin = $_POST["personaje2"];
    $edadwin = $_POST["edad2"];
}
header("Location: mostrarMapa.php?winner=$winner&dir=$dirwin&img=$imgwin&edad=$edadwin");