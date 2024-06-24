const greet = require("./module.exports.js");
console.log(greet("Taro")); // Hello, Taro!

const math = require("./exports.js");
console.log(math.add(5, 3)); // 8
console.log(math.subtract(5, 3)); // 2
