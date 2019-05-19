function setPointsState(database, user) {
    interestingPoints.forEach(point => {
        database.ref('/visitedplaces/' + user + '/' + point.id).set(point.visited);
    });
}

function getPointsState(database, user) {
    interestingPoints.forEach(function (point) {
        database.ref('/visitedplaces/' + user + '/' + point.id).once('value').then(function (snapshot) {
            point.visited = (snapshot.val() && snapshot.val().visited) || false;
        })
    });
}