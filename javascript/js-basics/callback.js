// ## callback

// callbackとは、関数を引数として受け取る関数のことです。
// 例)
const callbackFunction = (callback) => {
  callback("Taro");
};

callbackFunction((name) => console.log(`Hello, ${name}!`));
// => Hello, Taro!
// この例では、callbackFunction関数が引数として受け取った関数を実行しています。
// このように、関数を引数として受け取る関数を高階関数と呼びます。
// 高階関数を使うことで、コードの再利用性が高まります。
// また、非同期処理を扱う際にもcallback関数を使うことがあります。
// 例)
const asyncFunction = (callback) => {
  setTimeout(() => {
    callback("Hanako");
  }, 1000);
}

asyncFunction((name) => console.log(`Hello, ${name}!`));
// 1秒後に => Hello, Hanako!
// この例では、1秒後にcallback関数が実行されます。
// このように、非同期処理を扱う際にはcallback関数を使うことが多いです。
