// ## アロー関数

// アロー関数は、通常の関数とは異なり、`this`の値が固定されるという特徴があります。
// 通常の関数では、関数が呼び出される際に`this`の値が決定されますが、
// オブジェクトのメソッドとして関数を定義する場合に使用される。
// アロー関数では、関数が定義された時点での`this`の値が固定されます。
// コールバック関数として関数を定義する場合に使用される。
// 例)
const obj = {
  name: "Alice",
  normalFunction: function () {
    console.log(`this is normalFunction: ${this.name}`);
  },
  arrowFunction: () => {
    console.log(`this is arrowFunction: ${this.name}`);
  },
};
obj.normalFunction(); // => this is normalFunction: Alice
obj.arrowFunction(); // => this is arrowFunction: undefined
// この例では、`obj`オブジェクトの`normalFunction`メソッドと`arrowFunction`メソッドを定義しています。
// `normalFunction`メソッドは通常の関数式で定義されているため、`this`は`obj`オブジェクトを指します。
// 一方、`arrowFunction`メソッドはアロー関数で定義されているため、`this`は`window`オブジェクトを指します。
