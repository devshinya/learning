// ## アロー関数

// アロー関数は、関数式をより簡潔に書くための構文です。
// 通常の関数式と比べて、アロー関数は短く書けるのが特徴です。
// 基本構文【const 関数名 = (引数1, 引数2, ...) => { 処理 }】
// 例)
const add = (a, b) => a + b;
console.log(add(1, 2)); // => 3

const greet = (name, age) => {
  console.log(`Hello, ${name}!`);
  console.log(`You are ${age} years old.`);
};
greet("Taro", 20);
// => Hello, Taro!
