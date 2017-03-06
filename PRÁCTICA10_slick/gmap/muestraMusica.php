<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $musica = $_GET["musica"];

        echo $musica;
        /*if ($musica == "cute") {
            ?>
            <audio controls autoplay loop preload="auto">
                <source src="bensoundcute.mp3" type="audio/mpeg">
                Audio no disponible.
            </audio>
            <?php
        }*/
        
          if ($musica == "cute" || $musica == "epic") 
          {
              ?>
              <audio controls autoplay loop preload="auto">
              <source src="<?php
              if($musica=="cute"){echo "bensoundcute.mp3";}else{
              echo "bensoundepic.mp3";
              }
              ?>" type="audio/mpeg">
              Audio no disponible.
              </audio>
              <?php
          } 
          else 
          {
              ?>
              bensound-cute.mp3
              <audio controls loop preload="auto">
              <source src="bensoundcute.mp3" type="audio/mpeg">
              Audio no disponible.
              </audio>
              bensound-epic.mp3
              <audio controls loop preload="auto">
              <source src="bensoundepic.mp3" type="audio/mpeg">
              Audio no disponible.
              </audio>
              <?php
          }
        ?>

    </body>
</html>
