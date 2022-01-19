if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        function (p) {
            var x = document.getElementById("cord");
            var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
            x.innerHTML = "Latitude  : "+ p.coords.latitude + "<br>Longitude : " + p.coords.longitude;
        var mapOptions = {
            center: LatLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("dvMap"), mapOptions);
        var marker = new google.maps.Marker({
            position: LatLng,
            map: map
        });
        
    });
} else {
    var x= document.getElementById("cord");
    x.innerHTML="Not found";
}