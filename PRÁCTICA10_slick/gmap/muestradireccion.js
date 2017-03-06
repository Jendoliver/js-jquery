 /*global $*/
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
function init() 
{
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