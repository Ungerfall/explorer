function savePoints() {
    var visitedPoints = [];

    interestingPoints.forEach(point => {
        if (point.visited) {
            visitedPoints.push(JSON.stringify({ lat: point.lat, lon: point.lon }));
        }
    });

    localStorage.setItem('points', JSON.stringify(visitedPoints));
}

function loadPoints() {
    var visitedPoints = JSON.parse(localStorage.getItem('points') || '[]');

    interestingPoints.forEach(function (point) {
        if (visitedPoints.includes(JSON.stringify({ lat: point.lat, lon: point.lon }))) {
            point.visited = true;
        }
    })
}