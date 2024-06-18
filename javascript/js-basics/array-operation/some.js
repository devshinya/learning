// ## some

// some関数は、配列の各要素に対して、指定された関数の条件を満たすかどうかを判定します。
// いずれかの要素が条件を満たす場合はtrueを返し、全ての要素が条件を満たさない場合はfalseを返します。
// some関数は、引数を2つ取ります。
// - 第1引数: callback関数...配列の各要素に対して実行する関数
//  - some関数のcallback関数は、引数を3つ受け取ります。
//    - 第1引数: 現在の要素(currentValue)
//    - 第2引数: 現在のインデックス(index) ※省略可能
//    - 第3引数: 元の配列(array) ※省略可能
// - 第2引数: thisArg...callback関数内でthisとして使用する値 ※省略可能
// 例)
const array = [111, 222, 333, 444, 555];
const hasEvenNumber = array.some((element, index, array) => {
  console.log(`element: ${element}, index: ${index}, array: ${array}`);
  return element % 2 === 0;
});
console.log(hasEvenNumber); // => true
// => element: 111, index: 0, array: 111,222,333,444,555
// => element: 222, index: 1, array: 111,222,333,444,555
// => true
// ※ 2つ目の要素で条件を満たすため、それ以降の要素は判定されない

// 例) 条件を満たす要素が1つもない場合
const array2 = [1, 3, 5];
const hasEvenNumberInEmptyArray = array2.some((element) => {
  console.log(`element: ${element}`);
  return element % 2 === 0;
});
console.log(hasEvenNumberInEmptyArray); // => false

// 例) some関数のthisArgを指定する
const obj = { target: 333 };
const foundWithThisArg = array.some(function (element) {
  return element === this.target;
}, obj);
console.log(foundWithThisArg); // => true

// some関数 ↔ every関数