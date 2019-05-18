function renderMarkers(map, points) {
    points.forEach(el => {
        DG.marker([el.lat, el.lon]).addTo(map).bindPopup(el.popup);
    });
}