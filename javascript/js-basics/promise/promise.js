// ## Promise

// Promiseとは、非同期処理を扱うためのオブジェクトです。
// Promiseは3つの状態を持ちます。
// - 未完了（pending）: 処理が完了していない状態。初期状態。
// - 完了（fulfilled）: 処理が成功した状態。
// - 拒否（rejected）: 処理が失敗した状態。
// Promiseは、new Promise()で作成します。
// Promiseは、then()メソッドで成功時の処理、catch()メソッドで失敗時の処理を行います。
// 例)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const value = Math.random();
    if (value > 0.5) {
      resolve(value);
    } else {
      reject(new Error("error!!"));
    }
  }, 1000);
});

promise
  .then((value) => {
    // 成功時(resolve)の処理
    console.log("fulfilled:", value);
  })
  .catch((error) => {
    // 失敗時(reject)の処理
    console.log("rejected:", error.message);
  });
