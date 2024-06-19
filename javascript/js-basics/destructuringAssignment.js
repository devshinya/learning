// ## 代入分割

// 分割代入は、配列やオブジェクトの値を変数に代入するための構文です。
// これにより、配列やオブジェクトの値を簡単に取り出すことができます。

// 配列の分割代入
const array = [1, 2, 3];
const [a, b, c] = array;
console.log(a, b, c); // 1 2 3

// 配列の分割代入（一部の値を取り出す）
const array2 = [1, 2, 3];
const [d, e] = array2;
console.log(d, e); // 1 2

// 配列の分割代入（残りの要素を取り出す）
const array3 = [1, 2, 3];
const [f, ...rest] = array3;
console.log(f, rest); // 1 [2, 3]

// 複雑な配列の分割代入
const array4 = [1, [2, 3], 4];
const [g, [h, i], j] = array4;
console.log(g, h, i, j); // 1 2 3 4

// オブジェクトの分割代入
const object = { foo: 1, bar: 2 };
const { foo, bar } = object;
console.log(foo, bar); // 1 2

// オブジェクトの分割代入（別名で取り出す）
const object2 = { foo: 1, bar: 2 };
const { foo: x, bar: y } = object2;
console.log(x, y); // 1 2

// オブジェクトの分割代入（デフォルト値を設定する）
const object3 = { foo: 1 };
const { foo: z, bar: w = 2 } = object3;
console.log(z, w); // 1 2

// オブジェクトの分割代入（残りのプロパティを取り出す）
const object4 = { foo: 1, bar: 2, baz: 3 };
const { foo: a2, ...rest2 } = object4;
console.log(a2, rest2); // 1 { bar: 2, baz: 3 }

// 複雑なオブジェクトの分割代入
const object5 = { foo: 1, bar: { baz: 2 } };
const {
  foo: b2,
  bar: { baz: c2 },
} = object5;
console.log(b2, c2); // 1 2
