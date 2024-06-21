// ## JavaScriptの変数の宣言方法

// JavaScriptの変数は、var、let、constの3つの変数宣言方法があります。

// ### 変数宣言の使い分け
// 変数宣言は原則としてconstを使う。
// 変数の再代入がどうしても必要な場合のみletを使う。
// varは絶対に使わない。

// 基本的に変数はimmutableに保つべきである。
// なぜimmutableが重要か:
// 1. 予測可能性: 変数が変更されないことで、コードの挙動が予測しやすくなります。
// 2. バグ防止: 変数が変更されることによる予期しない副作用を防ぐことができます。
// 3. コードの可読性: 変数が変更されないことが明示されるため、コードの可読性が向上します。

// ### var
// varは、ES5以前のJavaScriptで使われていた変数宣言方法です。
// 現在は、varの変数宣言は非推奨とされています。
// その理由は、var変数のスコープがグローバルスコープまたは関数スコープであるため、変数のスコープが広すぎるためです。

// #### varの主な問題点
// 1. スコープの問題:
// varで宣言された変数は関数スコープを持ち、ブロックスコープを持ちません。
// そのため、forループやif文の内部で宣言した変数が、ループやブロックの外からもアクセス可能になってしまいます。
function varScopeExample() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10
}
varScopeExample();

// また、関数の外でvarで宣言された変数はグローバルスコープを持ちます。
// グローバルスコープを持つ変数は、どこからでもアクセス可能です。
// それゆえに、意図しない上書きやバグが発生しやすくなります。
var globalVar = 10;
function varGlobalScopeExample() {
  globalVar += 100;
}
varGlobalScopeExample();
console.log(globalVar); // 110

// 2. 再宣言が可能:
// varで宣言された変数は再宣言が可能です。
// これにより、予期しない変数の上書きが発生する可能性があります。
var varVariable = 10;
var varVariable = 20;
console.log(varVariable); // 20

// 3. 変数巻き上げ(ホイスティング):
// varで宣言された変数は、宣言前に参照することができます。
// これを変数巻き上げ(ホイスティング)と呼びます。
console.log(varHoisting); // undefined
var varHoisting = 10;

// ### let
// letは、ES6で導入された変数宣言方法です。
// letはvarと違い、ブロックスコープを持ちます。
// また、再宣言が不可能であるため、変数の上書きを防ぐことができます。
// そのため、letはvarよりも安全に変数を扱うことができます。
// 再宣言は不可能ですが、再代入は可能です。
let letVariable = 10;
// let letVariable = 20; // SyntaxError: Identifier 'letVariable' has already been declared
letVariable = 20;
console.log(letVariable); // 20

const blockScopeExample = () => {
  if (true) {
    let x = 10;
    console.log(x); // 10
  }
  // console.log(x); // ReferenceError: x is not defined
};
blockScopeExample();

// ### const
// constは、ES6で導入された変数宣言方法です。
// constはletと同様にブロックスコープを持ちますが、再代入が不可能です。
// そのため、constで宣言された変数は、一度値を代入すると再代入することができません。
// 再代入が不可能なため、constで宣言された変数はimmutableであると言えます。
// constで宣言されたオブジェクトや配列のプロパティは変更可能です。
const constVariable = 10;
// const constVariable = 20; // SyntaxError: Identifier 'constVariable' has already been declared
// constVariable = 20; // TypeError: Assignment to constant variable.

const constObject = { key: "value" };
constObject.key = "new value";
console.log(constObject); // { key: 'new value' }
// constObject = { newKey: "value" }; // TypeError: Assignment to constant variable.

const constArray = [1, 2, 3];
constArray.push(4);
console.log(constArray); // [1, 2, 3, 4]
// constArray = [4, 5, 6]; // TypeError: Assignment to constant variable.

// ### まとめ
// 1. 変数宣言は原則としてconstを使う。
// 2. 変数の再代入がどうしても必要な場合のみletを使う。
// 3. varは絶対に使わない。
// 4. 変数はイミュータブルに保つべきである。
