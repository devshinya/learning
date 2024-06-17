// ## setTimeout

// setTimeout関数は、指定した時間後に関数を実行する関数です。
// 基本構文【setTimeout(callback, delay, ...args)】
// - callback: 遅延実行する関数
// - delay: 遅延時間（ミリ秒）
// - ...args: callback関数に渡す引数（複数指定可能）
// 例) 1秒後にcallback関数が実行される
setTimeout(() => {
  console.log("Hello!");
}, 1000);
// 1秒後に => Hello!

// 例) 複数の引数を渡す
setTimeout(
  (name, age) => {
    console.log(`Name: ${name}, Age: ${age}`);
  },
  2000,
  "Taro",
  20
);
// 2秒後に => Name: Taro, Age: 20
