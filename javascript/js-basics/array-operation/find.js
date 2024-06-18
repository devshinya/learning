// ## find

// find関数は、配列の要素を条件に従って検索し、"最初にtrueと評価される要素"を返します。
// この関数は、条件に合致する要素が見つかった時点で検索を終了します。
// 見つからなかった場合は、undefinedを返します。
// find関数は、引数を2つ取ります。
// - 第1引数: callback関数...配列の各要素に対して実行する関数
//  - find関数のcallback関数は、引数を3つ受け取ります。
//    - 第1引数: 現在の要素(currentValue)
//    - 第2引数: 現在のインデックス(index) ※省略可能
//    - 第3引数: 元の配列(array) ※省略可能
// - 第2引数: thisArg...callback関数内でthisとして使用する値 ※省略可能
// 例)
const array = [111, 222, 333];
const found = array.find((element, index, array) => {
  console.log(`element: ${element}, index: ${index}, array: ${array}`);
  return element % 2 === 0;
});
console.log(found);
// => element: 111, index: 0, array: 111,222,333
// => element: 222, index: 1, array: 111,222,333
// => 222
// ※ 2つ目以降の要素は検索されない

// 例) find関数のthisArgを指定する
const obj = { target: 333 };
const foundWithThisArg = array.find(function (element) {
  return element === this.target;
}, obj);
console.log(foundWithThisArg); // => 333
