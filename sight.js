function renderMarkers(map, points) {
    points.forEach(el => {
        if (!el.visited){
            var marker = DG.marker([el.lat, el.lon])
                .addTo(map)
                .bindPopup(el.popup);
            el.id = marker;
        }
    });
}

function renderVisitedMarkers(map, points) {
    points.forEach(el => {
        el.visited = true;
        el.id.removeFrom(map);
        savePoints();
    });
}
