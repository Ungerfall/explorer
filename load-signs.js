function renderMarkers(map, points) {
    var signs = [
        {
            lat: 54.98,
            lon: 82.89,
            popup: "фывфыв"
        },
    ];

    signs.forEach(element => {
        DG.marker([element.lat, element.lon]).addTo(map).bindPopup(element.popup);
    });
}
console.log('loaded');