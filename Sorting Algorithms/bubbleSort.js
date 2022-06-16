const bubbleSort = function (arr) {
  console.log(arr);
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    console.log(arr);
    if (noSwaps) break;
  }
  return arr;
};

console.log(bubbleSort([6, 10, 32, 24, 12, 36]));
