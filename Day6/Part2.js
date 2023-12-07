str = getValues().split('\n');
times = removeItemAll(str[0].split(':')[1].split(' '), '');
distance = removeItemAll(str[1].split(':')[1].split(' '), '');
combinedTime = '';
combinedDistance = '';
times.forEach(element => {
  combinedTime += element;
});
distance.forEach(element => {
  combinedDistance += element;
});


console.log(calculateTotalWays(parseInt(combinedTime), parseInt(combinedDistance)));

function countWaysToWin(time, distance) {
    let count = 0;
    for (let holdTime = 0; holdTime < time; holdTime++) {
        const travelTime = time - holdTime;
        const travelDistance = holdTime * travelTime;
        if (travelDistance > distance) {
            count++;
        }
    }
    return count;
}

function calculateTotalWays(times, distances) {
    let total = 1;
    total *= countWaysToWin(times, distances);
    return total;
}

function removeItemAll(arr, value) {
    var i = 0;
    while (i < arr.length) {
      if (arr[i] === value) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

function getValues(){
//     return `Time:      7  15   30
// Distance:  9  40  200`;
  return `Time:        38     94     79     70
Distance:   241   1549   1074   1091`;
}