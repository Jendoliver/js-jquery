<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <script src="jquery-3.1.1.min.js" type="text/javascript"></script>


        <script src="gmap3.min.js" type="text/javascript"></script>
        
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <H1>ATENCION!</H1>
        <p>
            Para que funcione teneis que crear una API KEY associada a vuestra cuenta de google:<br />
            <a href="https://developers.google.com/maps/documentation/javascript/get-api-key?hl=ES">
                Conseguir la KEY
            </a>
            Añadir el siguiente código para vincular la api de goole, sustituyendo VUESTRA_KEY por la key que os haya proporcionado Google
            <textarea style="display: none">
                <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3lxIwFb2SDyU-zt9TerWarP4i-Cm04E0&region=GB"></script>
            </textarea>

        </p>
        <?php
        $addr = $_GET["addr"];
        echo $addr;
        ?>
        <div id="mapa2" style="width: 500px; height:400px;"></div>
        <?php
        if($addr == "three")
        { ?>
        <script>
            $(document).ready(init);
            function init() {
                $('#mapa2')
                        .gmap3({
                            zoom: 4
                        })
                        .marker([
                            {address: "La çoça nostra", data: "<h3>Titulo</h3><div>La çoça nostra</div>", icon: "http://maps.google.com/mapfiles/marker_grey.png"},
                            {address: "El clot de la mel", data: "<h3>Titulo</h3><div>El clot de la mel</div>", icon: "http://maps.google.com/mapfiles/marker_grey.png"},
                            {address: "Disneyland la paraís", data: "<h3>Titulo</h3><div>Disneyland la paraís</div>", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
                        ])
                        .on('click', function (marker) {  //Al clicar obrim una finestra sobre la marca i hi insertem el data de la marca
                            marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
                            var map = this.get(0); //this.get(0) retorna la primera propietat vinculada-> gmap3
                            var infowindow = this.get(1); //this.get(1) retorna la segona propietat vinculada -> infowindow
                            infowindow.setContent(marker.data);     //dins la finestra mostrem el atribut data de la marca
                            infowindow.open(map, marker);
                        })
                        .then(function (markers) {
                            markers[1].setIcon('http://maps.google.com/mapfiles/marker_orange.png');
                        })
                        .fit();
            }
        </script>
        <?php }
        else
        { ?>
        <script>

 var contentString = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
                    '<div id="bodyContent">' +
                    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
                    'sandstone rock formation in the southern part of the ' +
                    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
                    'south west of the nearest large town, Alice Springs; 450&#160;km ' +
                    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
                    'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
                    'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
                    'Aboriginal people of the area. It has many springs, waterholes, ' +
                    'rock caves and ancient paintings. Uluru is listed as a World ' +
                    'Heritage Site.</p>' +
                    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
                    'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
                    '(last visited June 22, 2009).</p>' +
                    '</div>' +
                    '</div>';
            $(document).ready(init);
            function init() {
                $('#mapa2')
                        .gmap3({
                            zoom: 4
                        })
                        .infowindow({content: "contentString"})
                        .marker([
                            {position: [48.8620722, 2.352047], data: contentString},
                            {address: "<?php echo $addr ?>", data: "<h3>Titulo</h3><div><?php echo $addr ?></div>", icon: "http://maps.google.com/mapfiles/marker_grey.png"}
                        ])
                        .on('click', function (marker) {  //Al clicar obrim una finestra sobre la marca i hi insertem el data de la marca
                            marker.setIcon('http://maps.google.com/mapfiles/marker_green.png');
                            var map = this.get(0); //this.get(0) retorna la primera propietat vinculada-> gmap3
                            var infowindow = this.get(1); //this.get(1) retorna la segona propietat vinculada -> infowindow
                            infowindow.setContent(marker.data);     //dins la finestra mostrem el atribut data de la marca
                            infowindow.open(map, marker);
                        })
                        .then(function (markers) {
                            markers[1].setIcon('http://maps.google.com/mapfiles/marker_orange.png');
                        })
                        .fit();
            }
        </script>
    <?php } ?>
    </body>
</html>
