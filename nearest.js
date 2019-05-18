function findNearestPoints(map, points, maxDistance) {
    var nearestPoints = [];

    map.locate()
        .on('locationfound', function (userLocation) {
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