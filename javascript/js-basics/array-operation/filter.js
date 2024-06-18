// ## filter

// filter関数は、与えられた関数がtrueとなる要素だけを抽出した新しい配列を返します。
// trueとなる要素が1つもない場合は、空の配列を返します。
// filter関数は、引数を2つ取ります。
// - 第1引数: callback関数...配列の各要素に対して実行する関数
//  - filter関数のcallback関数は、引数を3つ受け取ります。
//    - 第1引数: 現在の要素(currentValue)
//    - 第2引数: 現在のインデックス(index) ※省略可能
//    - 第3引数: 元の配列(array) ※省略可能
// - 第2引数: thisArg...callback関数内でthisとして使用する値 ※省略可能
// 例)
const array = [111, 222, 333, 444, 555];
const evenNumbers = array.filter((element, index, array) => {
  console.log(`element: ${element}, index: ${index}, array: ${array}`);
  return element % 2 === 0;
});
console.log(evenNumbers);
// => element: 111, index: 0, array: 111,222,333,444,555
// => element: 222, index: 1, array: 111,222,333,444,555
// => element: 333, index: 2, array: 111,222,333,444,555
// => element: 444, index: 3, array: 111,222,333,444,555
// => element: 555, index: 4, array: 111,222,333,444,555
// => [ 222, 444 ]

// 例) 真となる要素が1つもない場合
const emptyArray = [1, 3, 5];
const emptyResult = emptyArray.filter((element) => {
  return element % 2 === 0;
});
console.log(emptyResult); // => []

// 例) filter関数のthisArgを指定する
const obj = { target: 333 };
const foundWithThisArg = array.filter(function (element) {
  return element === this.target;
}, obj);
console.log(foundWithThisArg); // => [ 333 ]
