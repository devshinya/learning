// ## every

// every関数は、配列の全ての要素が指定した条件を満たすかどうかを判定します。
// 一つでも条件を満たさない要素があればfalseを返します。
// every関数は、引数を2つ取ります。
// - 第1引数: callback関数...配列の各要素に対して実行する関数
//  - every関数のcallback関数は、引数を3つ受け取ります。
//    - 第1引数: 現在の要素(currentValue)
//    - 第2引数: 現在のインデックス(index) ※省略可能
//    - 第3引数: 元の配列(array) ※省略可能
// - 第2引数: thisArg...callback関数内でthisとして使用する値 ※省略可能
// 例)
const array = [222, 444, 666];
const allEvenNumbers = array.every((element, index, array) => {
  console.log(`element: ${element}, index: ${index}, array: ${array}`);
  return element % 2 === 0;
});
console.log(allEvenNumbers); // => true
// => element: 222, index: 0, array: 222,444,666
// => element: 444, index: 1, array: 222,444,666
// => element: 666, index: 2, array: 222,444,666
// => true

// 例) 条件を満たさない要素がある場合
const array2 = [111, 222, 333];
const allEvenNumbers2 = array2.every((element) => {
  console.log(`element: ${element}`);
  return element % 2 === 0;
});
console.log(allEvenNumbers2); // => false
// => element: 111
// => false
// 条件を満たさない要素があるため、falseが返る
// falseが確定した時点で、それ以降の要素は判定されない

// 例) every関数のthisArgを指定する
const obj = { target: 222 };
const foundWithThisArg = array.every(function (element) {
  return element % this.target === 0;
}, obj);
console.log(foundWithThisArg); // => true

// every関数 ↔ some関数
