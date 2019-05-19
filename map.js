var map;

DG.then(function () {
    map = DG.map('map', {
        center: [56.8662, 53.1891],
        zoom: 13
    });

    DG.control.location({ locateOptions: { setView: false, watch: true } }).addTo(map);

    loadPoints();
    renderMarkers(map, interestingPoints);
    map.locate({ setView: false, watch: true })
        .on('locationfound', function (userLocation) {
            var points = findNearestPoints(userLocation, interestingPoints, 20);
            // for demo
            /*
            var index = Math.random() * (0 - interestingPoints.length - 5) + 0;
            var points = interestingPoints.slice(index, index + 5);
            console.log(points);
            */
            renderVisitedMarkers(map, points);
        })
        .on('locationerror', function (e) {
            var popup = DG.popup()
                .setLatLng(map.getCenter())
                .setContent('Доступ к определению местоположения отключён')
                .openOn(map);
        });
});