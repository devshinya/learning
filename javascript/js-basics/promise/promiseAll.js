// ## Promise.all

// Promise.allは、複数のPromiseをまとめて処理するためのメソッドです。
// Promiseオブジェクトを要素とする配列を引数に取り、
// 全てのPromiseがfulfilledになった場合に、成功となり、その結果を返します。
// 1つでもrejectedになった場合、その時点で失敗となり、その結果を返します。
// それぞれの非同期処理は並列で実行されます。
// そのため、全ての非同期処理が完了するまでにかかる時間は、最も時間がかかる非同期処理に依存します。
// 例)
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const value = Math.random();
    if (value > 0.5) {
      resolve(`value1: ${value}`);
    } else {
      reject(new Error("error!!"));
    }
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("value2");
  }, 3000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("value3");
  }, 2000);
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
    // promise1が成功した場合、3秒後に['value1: x.xxx', 'value2', 'value3'] が表示される
  })
  .catch((error) => {
    console.error(error);
    // promise1が失敗した場合、即時'error!!' が表示される
    // promise2, promise3は無視されるが、バックグラウンドで処理は続行される
  });
