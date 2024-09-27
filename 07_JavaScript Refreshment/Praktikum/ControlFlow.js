function findLargest(arr) {
  if (arr.length === 0) {
    return null;
  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }

  return largest;
}

const numbers = [3, 5, 7, 2, 8, 1];
const nilaiTerbesar = findLargest(numbers);
console.log("Nilai terbesar dalam array adalah:", nilaiTerbesar);
