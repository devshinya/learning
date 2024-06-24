console.log("Before requiring 'greet' first time");
const greet1 = require("./module.exports.js");
console.log("After requiring 'greet' first time");

console.log("Before requiring 'greet' second time");
const greet2 = require("./module.exports.js");
console.log("After requiring 'greet' second time");

console.log(greet1 === greet2); // true (同じオブジェクトを参照している)

// このように、同じモジュールを複数回 require しても、
// 一度読み込んだモジュールはキャッシュされ、
// 2回目以降はキャッシュされたモジュールが返されます。
