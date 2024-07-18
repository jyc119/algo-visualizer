export function bubbleSort(arr) {
  let steps = [];
  let N = arr.length;
  for (let i = 0; i < N - 1; i++) {
    for (let j = 0; j < N - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        steps.push([...arr]);
      }
    }
  }
  return steps;
}
