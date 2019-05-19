function updateProgressBar()
{
    var progress = document.getElementById('progress');

    var visitedCount = 0;

    interestingPoints.forEach(point => {
        if (point.visited)
        {
            visitedCount++;
        }
    });

    progress.style.width = Math.floor(100*visitedCount/interestingPoints.length) + '%';
}
