// ## setTimeout

// 複数のsetTimeout
// 複数のsetTimeout関数を使う場合、それぞれのcallback関数が実行される順番は保証されません。
// タイマーが開始するタイミングは、それぞれのsetTimeout関数が実行されたタイミングです。
// 例)
console.log("Start!");
setTimeout(() => {
  console.log("Async1");
}, 2000);
setTimeout(() => {
  console.log("Async2");
}, 1000);
setTimeout(() => {
  console.log("Async3");
}, 3000);
console.log("End!");
// => Start!
// => End!
// => Async2
// => Async1
// => Async3
// この例では、Async2, Async1, Async3の順番でcallback関数が実行されます。
// また、それぞれのsetTimeoutのタイマーは独立して動作しているため、タイマーは並行して進行します。
