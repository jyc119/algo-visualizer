export function quickSort(arr) {
  let steps = [];
  let sortedArr = [...arr];

  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        steps.push([...arr]);
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    steps.push([...arr]);
    return i + 1;
  }

  function quickSortRecursive(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);
      quickSortRecursive(arr, low, pi - 1);
      quickSortRecursive(arr, pi + 1, high);
    }
  }

  quickSortRecursive(sortedArr, 0, sortedArr.length - 1);
  return steps;
}
