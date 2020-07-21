const outputs = [];
const predictionPoint = 300;
const k = 3;

function distance(point) {
  return Math.abs(point - predictionPoint);
}

function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  // Ran every time a balls drops into a bucket
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
  console.log(outputs);
}

function runAnalysis() {
  // Write code here to analyze stuff
  _.chain(outputs)
    .map((row) => [distance(row[0]), row[3]])
    .sortBy((row) => row[0])
    .slice(0, k);
}
