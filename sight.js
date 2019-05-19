function renderMarkers(map, points) {
    points.forEach(el => {
        if (!el.visited){
            var marker = DG.marker([el.lat, el.lon])
                .addTo(map)
                .bindPopup(el.popup);
            el.markerRef = marker;
        }
    });
}

function renderVisitedMarkers(map, points) {
    points.forEach(el => {
        el.visited = true;
        el.markerRef.removeFrom(map);
    });
    setPointsState();
}
