// ## forEach

// forEach関数は、配列の各要素に対して、指定された関数を実行します。
// forEach関数は、引数を1つだけ受け取ります。
// - 第1引数: callback関数...配列の各要素に対して実行する関数
//  - forEach関数のcallback関数は、3つの引数を受け取ります。
//    - 第1引数: 現在の要素(currentValue)
//    - 第2引数: 現在のインデックス(index) ※省略可能
//    - 第3引数: 元の配列(array) ※省略可能
// 例) 配列の各要素をコンソールに出力する
const array = ["Taro", "Hana", "Jiro"];
array.forEach((currentValue, index, array) => {
  console.log(
    `currentValue: ${currentValue}, index: ${index}, array: ${array}`
  );
});
// => currentValue: Taro, index: 0, array: Taro,Hana,Jiro
// => currentValue: Hana, index: 1, array: Taro,Hana,Jiro
// => currentValue: Jiro, index: 2, array: Taro,Hana,Jiro
