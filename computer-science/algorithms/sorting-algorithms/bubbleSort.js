// 問題文:
// 与えられた整数の配列をバブルソートを使って昇順に並び替えるプログラムを実装してください。

const bubbleSortAsc = (array) => {
  const arrayLength = array.length;
  for (let end = arrayLength - 1; 0 < end; end--) {
    let swapped = false;
    for (let i = 0; i < end; i++) {
      if (array[i + 1] < array[i]) {
        swapped = true;
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    if (!swapped) break;
  }
  return array;
};

console.log(bubbleSortAsc([6, 3, 16, 9, 1, 7, 22, 10, 9]));

// 問題文:
// 与えられた整数の配列をバブルソートを使って降順に並び替えるプログラムを実装してください。

const bubbleSortDesc = array => {
  const arrayLength = array.length;
  for (let end = arrayLength - 1; 0 < end; end--) {
    let swapped = false;
    for (let i = 0; i < end; i++) {
      if (array[i] < array[i + 1]) {
        swapped = true;
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
      }
    }
    if (!swapped) break;
  }
  return array;
}

console.log(bubbleSortDesc([6, 3, 16, 9, 1, 7, 22, 10, 9]));