function renderMarkers(map) {
    interestingPoints.forEach(el => {
        DG.marker([el.lat, el.lon]).addTo(map).bindPopup(el.popup);
    });
}