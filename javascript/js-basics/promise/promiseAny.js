// ## Promise.any

// Promise.anyは、Promiseオブジェクトを要素とする配列を引数に取り、
// 1つでもpromiseがfulfilledになった場合に、その結果を返すメソッドです。
// 全てのPromiseがrejectedになった場合に失敗となり、その結果を返します。
// 例)
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const value = Math.random();
    if (value > 0.5) {
      resolve("first success");
    } else {
      reject(new Error("error!!"));
    }
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("error"));
  }, 2000);
});

Promise.any([promise1, promise2])
  .then((value) => {
    console.log(value);
    // promise1が成功した場合、1秒後に'first success' が表示される
  })
  .catch((error) => {
    console.error(error);
    // promise1が失敗した場合、2秒後に'AggregateError: All promises were rejected' が表示される
  });
