function updateProgressBar()
{
    var bar = document.getElementById('bar');
    var progress = document.getElementById('progress');

    var visitedCount = 0;

    interestingPoints.forEach(point => {
        if (point.visited)
        {
            visitedCount++;
        }
    });

    bar.textContent = visitedCount + '/' + interestingPoints.length;

    progress.style.width = Math.floor(100*visitedCount/interestingPoints.length) + '%';
}
