// ## setTimeout

// setTimeoutの動作
// setTimeoutが実行されると、指定した時間が経過した後にcallback関数が実行されます。
// 実行されるタイミングは、現在のスクリプトの実行が完了した後で、イベントループによって管理されます。
// そのため、setTimeout関数を使っても、そのタイミングで即座にcallback関数が実行されるわけではありません。
// つまり、タイマーが経過するまでの間に他の処理がある場合、その処理が優先されます。
// 例)
console.log("Start!");
setTimeout(() => {
  console.log("Good Evening!");
}, 0);
console.log("End!");
// => Start!
// => End!
// => Good Evening!
