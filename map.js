var map;

DG.then(function () {
    map = DG.map('map', {
        center: [56.8662,53.1891],
        zoom: 13
    });

    DG.control.location({ follow: true, locateOptions: { setView: false, watch: false } }).addTo(map);

    renderMarkers(map, interestingPoints);
    setInterval(function(){
        var points = findNearestPoints(map, interestingPoints, 20);
        // for demo
        /*
        var index = Math.random() * (0 - interestingPoints.length - 5) + 0;
        var points = interestingPoints.slice(index, index + 5);
        console.log(points);
        */
        renderVisitedMarkers(map, points);
    }, 2000);
});