function setPointsState() {
    getCurrentUser().then(user => {
        interestingPoints.forEach(point => {
            database.ref('/visitedplaces/' + user.uid + '/' + point.id).set(point.visited);
        });
    })
}

function getPointsState() {
    getCurrentUser().then(user => {
        interestingPoints.forEach(function (point) {
            database.ref('/visitedplaces/' + user.uid + '/' + point.id).once('value').then(function (snapshot) {
                point.visited = (snapshot.val() && snapshot.val().visited) || false;
            })
        });
    });
}
