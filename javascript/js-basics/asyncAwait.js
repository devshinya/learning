// ## async-await

// async-await とは、非同期処理を同期処理のように書くことができる構文です。
// async関数とawait式で構成されています。
// async関数は、非同期処理を行う関数を定義するための構文です。
// async関数は、必ずPromiseを返します。
// await式は、Promiseの状態がfulfilled、または、rejectedになるまで待機します。
// fullfilledになったら、そのPromiseの値を返します。
// refectedになったら、そのPromiseのエラーを投げます。
// await式はasync関数内でのみ使用できます。
// 例)
async function asyncFunc() {
  // 非同期処理の結果が成功した場合
  const value1 = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("value1");
    }, 1000);
  });
  console.log(value1); // 1秒後に 'value1' が表示される

  // 非同期処理の結果が失敗した場合
  const value2 = await new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("error!!"));
    }, 1000);
  }).catch((error) => {
    return error.message;
  });
  console.log(value2); // 1秒後に 'error' が表示される
}

asyncFunc();
