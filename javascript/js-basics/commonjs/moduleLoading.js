console.log("Before requiring 'greet'");
const greet = require("./module.exports.js");
console.log("After requiring 'greet'");
console.log(greet("Taro"));
// 【出力結果】
// Before requiring 'greet'
// Module 'greet' is being loaded. ★
// After requiring 'greet'
// Hello, Taro!

// このように、module.exports.js が require 関数によって読み込まれると、
// モジュール内のコードが実行されます。このため、"Module 'greet' is being loaded." が出力されます。
