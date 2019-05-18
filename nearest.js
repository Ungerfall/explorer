function findNearestPoints(map, points, maxDistance) {
    var nearestPoints = [];

    map.locate({ setView: true, watch: true })
        .on('locationfound', function (userLocation) {
            console.log(userLocation);

            points.forEach(function (point) {
                if (DG.latLng(point.lat, point.lon).distanceTo(DG.latLng(userLocation.latitude, userLocation.longitude)) <= maxDistance) {
                    nearestPoints.push(point);
                }
            })
        })
        .on('locationerror', function (e) {
            DG.popup()
                .setLatLng(map.getCenter())
                .setContent('Доступ к определению местоположения отключён')
                .openOn(map);
        });

    return nearestPoints;
}