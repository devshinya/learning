// ## falsy

// falsy とは、条件式の評価結果が false になる値のことです。
// JavaScript において falsy な値は次の通りです。
console.log(Boolean(false)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(0n)); // false  (0n は BigInt 型の 0)
console.log(Boolean(NaN)); // false
console.log(Boolean("")); // false
console.log(Boolean("")); // false
console.log(Boolean(``)); // false

// ------------------------------------------------------------

// ## truthy

// truthy とは、条件式の評価結果が true になる値のことです。
// JavaScript において truthy な値は次の通りです。
console.log(Boolean(true)); // true
console.log(Boolean(1)); // true
console.log(Boolean(-1)); // true
console.log(Boolean(Infinity)); // true (Infinity は無限大を表す特殊な値)
console.log(Boolean(-Infinity)); // true (-Infinity は負の無限大を表す特殊な値)
console.log(Boolean("JS")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
console.log(Boolean(function () {})); // true
