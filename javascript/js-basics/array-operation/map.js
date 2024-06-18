// ## map

// map関数は、配列の各要素に対して、指定された関数を適用した結果を集めた新しい配列を返します。
// map関数は、引数を1つだけ取ります。
// - 第1引数: callback関数...配列の各要素に対して実行する関数
//  - map関数のcallback関数は、引数を3つ受け取ります。
//    - 第1引数: 現在の要素(currentValue)
//    - 第2引数: 現在のインデックス(index) ※省略可能
//    - 第3引数: 元の配列(array) ※省略可能
// 例) 配列の各要素を2倍にした新しい配列を作成する
const array = [100, 200, 300];
const doubledArray = array.map((element, index, array) => {
  console.log(`element: ${element}, index: ${index}, array: ${array}`);
  return element * 2;
});
console.log(doubledArray);
// => element: 100, index: 0, array: 100,200,300
// => element: 200, index: 1, array: 100,200,300
// => element: 300, index: 2, array: 100,200,300
