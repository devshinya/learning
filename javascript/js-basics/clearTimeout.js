// ## clearTimeout

// ClearTimeoutは、setTimeoutで設定されたタイマーをクリアします。
// clearTimeout関数は、setTimeout関数の戻り値であるタイマーIDを引数に取ります。
// 例)
console.log("Start!");
const timerId = setTimeout(() => {
  console.log("Hello!");
}, 1000);
clearTimeout(timerId);
console.log("End!");
// => Start!
// => End!
// この例では、setTimeout関数で設定されたタイマーがクリアされ、callback関数が実行されません。
// そのため、"Hello!"は表示されません。
