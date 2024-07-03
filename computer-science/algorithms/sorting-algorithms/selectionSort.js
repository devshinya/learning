// 問題文:
// 与えられた整数の配列を選択ソートを使って昇順に並び替えるプログラムを実装してください。
const findMinIndex = (array) => {
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[minIndex]) {
      minIndex = i;
    }
  }
  return minIndex;
};

const selectionSortAsc = (array) => {
  const sortedArray = [];
  while (0 < array.length) {
    let minIndex = findMinIndex(array);
    sortedArray.push(array[minIndex]);
    array.splice(minIndex, 1);
  }
  return sortedArray;
};

console.log(selectionSortAsc([6, 3, 16, 9, 1, 7, 1])); // [1, 1, 3, 6, 7, 9, 16]
