function findNearestPoints(userLocation, points, maxDistance) {
    var nearestPoints = [];

    points.forEach(function (point) {
        if (!point.visited && DG.latLng(point.lat, point.lon).distanceTo(DG.latLng(userLocation.latitude, userLocation.longitude)) <= maxDistance) {
            if (confirm("Вы уверены, что посетили " + point.popup + "?")) {
                nearestPoints.push(point);
            }
        }
    });

    return nearestPoints;
}