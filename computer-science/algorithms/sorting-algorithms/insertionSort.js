// 問題文:
// 与えられた整数の配列をインサートソートを使って昇順に並び替えるプログラムを実装してください。
const insertionSortAsc = (array) => {
  for (let key = 1; key < array.length; key++) {
    for (let i = 0; i < key; i++) {
      if (array[key] < array[i]) {
        array.splice(i, 0, array[key]);
        array.splice(key + 1, 1);
      }
    }
  }
  return array;
};

console.log(insertionSortAsc([6, 3, 16, 9, 1, 7, 1])); // [1, 1, 3, 6, 7, 9, 16]
