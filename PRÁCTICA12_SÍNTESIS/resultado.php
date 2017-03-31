<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <!-- BOOTSTRAP with JQUERY -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="libs/jquery-3.1.1.min.js" type="text/javascript"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <!-- STYLESHEETS -->
        <link href="css/win.css" rel="stylesheet" type="text/css"/>
        <!-- GMAP -->
        <script src="libs/gmap3.min.js" type="text/javascript"></script>
        <title>PRÁCTICA DE SÍNTESIS</title>
    </head>
    <body background="img/wingif.gif">
        <textarea style="display: none">
            <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCnV6FRgLTJdy8PLzdaKgRV-FmMNbyULUk"></script>
        </textarea>

        <?php
        $winner = rand(1,2);
        if($winner == 1)
        {
            $addr = $_POST["direccion1"];
            $img = $_POST["personaje1"];
            $edad = $_POST["edad1"];
        }
        else
        {
            $addr = $_POST["direccion2"];
            $img = $_POST["personaje2"];
            $edad = $_POST["edad2"];
        }
        ?>
        <audio autoplay loop>
            <source src="<?php if($winner == 1) echo "audio/victory1.mp3"; else echo "audio/victory2.mp3"; ?>" type="audio/mpeg">
        </audio>
        <div class="row">
            <div class="col-md-4"></div>
            <div class="col-md-4"><h1>¡Ha ganado el jugador <?php echo $winner ?>!</h1></div>
            <div class="col-md-4"></div>
        </div>
        <div class="row">
            <div class="col-md-2"></div>
            <div id="mapcontainer" class="col-md-8">
                <div id="mapa"></div>
            </div>
            <div class="col-md-2"></div>
        </div>
        <script>
            $(document).ready(init);
            function init() 
            {
                $('#mapa')
                    .gmap3({
                        zoom: 4
                    })
                    .infowindow()
                    .marker([
                        {address: "<?php echo $addr ?>", data: "<h3>Ganador:</h3><img src='img/<?php echo $img ?>.png' height='100px' width='100px'></img><h4>Edad: <?php echo $edad ?></h4>", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
                    ])
                    .on('click', function (marker) {  //Al clicar obrim una finestra sobre la marca i hi insertem el data de la marca
                        marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
                        var map = this.get(0); //this.get(0) retorna la primera propietat vinculada-> gmap3
                        var infowindow = this.get(1); //this.get(1) retorna la segona propietat vinculada -> infowindow
                        infowindow.setContent(marker.data);     //dins la finestra mostrem el atribut data de la marca
                        infowindow.open(map, marker);
                    })
                    .fit();
            }
        </script>
    </body>
</html>