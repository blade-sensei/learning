// [3, 4, 5, 6, 8] 3/2 = 1.5 = 1 -> 4 (mid)
function binarySearch(array, toFind) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (array[mid] === toFind) return true;

    else if (array[mid] < toFind) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}

const array = [1, 3, 5, 7, 8, 9];
const find = 8;
const missed = 6;

console.log(binarySearch(array, find));
console.log(binarySearch(array, missed));
