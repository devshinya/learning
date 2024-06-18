// ## reduce

// reduce関数は、配列の各要素に対して、指定された関数を適用し、単一の値にまとめる関数です。
// reduce関数は、引数を2つ取ります。
// - 第1引数: callback関数...配列の各要素に対して実行する関数
//  - reduce関数のcallback関数は、4つの引数を受け取ります。
//    - 第1引数: 前回の関数呼び出しの戻り値(accumulator)、または、初回の場合は初期値
//    - 第2引数: 現在の要素(currentValue)
//    - 第3引数: 現在のインデックス(index) ※省略可能
//    - 第4引数: 配列(array) ※省略可能
// - 第2引数: initialValue...accumulatorの初期値 ※省略可能
// 例) 配列の要素を合計する(初期値なし)
const array = [100, 200, 300];
const sum = array.reduce((accumulator, currentValue, index, array) => {
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, array: ${array}`
  );
  return accumulator + currentValue;
});
console.log(sum);
// => accumulator: 100, currentValue: 200, index: 1, array: 100,200,300
// => accumulator: 300, currentValue: 300, index: 2, array: 100,200,300
// => 600
// この例では、reduce関数は以下のように動作します。
// 1回目: accumulator = 100, currentValue = 200 => 100 + 200 = 300
// 2回目: accumulator = 300, currentValue = 300 => 300 + 300 = 600
// 3回目: accumulator = 600, currentValue = undefined => 終了
// reduce関数の終了条件は、配列の最後の要素が処理された時点です。
// 初期値がない場合、accumulatorの初期値は配列の最初の要素になります。

// 例) 配列の要素を合計する(初期値あり)
const sumWithInitialValue = array.reduce(
  (accumulator, currentValue, index, array) => {
    console.log(
      `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, array: ${array}`
    );
    return accumulator + currentValue;
  },
  100
);
console.log(sumWithInitialValue);
// => accumulator: 100, currentValue: 100, index: 0, array: 100,200,300
// => accumulator: 200, currentValue: 200, index: 1, array: 100,200,300
// => accumulator: 400, currentValue: 300, index: 2, array: 100,200,300
// => 700
// この例では、reduce関数は以下のように動作します。
// 1回目: accumulator = 100, currentValue = 100 => 100 + 100 = 200
// 2回目: accumulator = 200, currentValue = 200 => 200 + 200 = 400
// 3回目: accumulator = 400, currentValue = 300 => 400 + 300 = 700
// 4回目: accumulator = 700, currentValue = undefined => 終了
// 初期値がある場合、accumulatorの初期値は指定した値になります。

// ---------------------------------------------------

// accumulator: 「蓄える者[物]、累積器」
// 例文
// - The rainwater accumulator collects water from the roof for later use in the garden.
//   - （雨水蓄積装置は、屋根からの水を集めて庭で後で使うために蓄えます。）
// - The program uses an accumulator to sum up all the values in the array.
//   - （そのプログラムは、配列内のすべての値を合計するために累積器を使用します。）
