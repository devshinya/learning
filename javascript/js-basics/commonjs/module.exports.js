console.log("Module 'greet' is being loaded.");

function greet(name) {
  return `Hello, ${name}!`;
}

module.exports = greet;

// 複数の値をエクスポートする場合は、module.exports にオブジェクトを代入します。
// 例)
// module.exports = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   }
// };
// このようにすることで、require 関数でオブジェクトを取得できます。
