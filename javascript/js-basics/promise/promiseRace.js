// ## Promise.race

// Promise.raceは、Promiseオブジェクトを要素とする配列を引数に取り、
// 1つでもpromiseがfullfeldまたはrejectedになった場合に、その結果を返すメソッドです。
// それぞれの非同期処理は並列で実行されます。
// そのため、最も早く終了した非同期処理の結果が返されます。
// 例)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const value = Math.random();
    if (value > 0.5) {
      resolve(`value: ${value}`);
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

Promise.race([promise, promise2])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.error(error);
  });
// promiseが成功した場合、1秒後に'value: x.xxx' が表示される
// promiseが失敗した場合、即時'error!!' が表示される
// この例では、promiseの方が早く終了するため、promise2は無視されます。
// promise2は無視されるが、バックグラウンドで処理は続行される
