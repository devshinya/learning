// グローバルコンテキストでは、以下が参照できます：
// - 実行中のコンテキスト内の変数・関数（グローバル変数・関数）
// - グローバルオブジェクト（ブラウザでは`window`、Node.jsでは`global`）
// - `this`（通常はグローバルオブジェクトを指す）
const globalName = 'グローバルコンテキスト';
const globalFunc = () => {
  console.log(globalName)
}
globalFunc();

// 関数コンテキストでは、以下が参照できます：
// - 実行中のコンテキスト内の変数・関数（ローカル変数・関数）
// - 外部変数・関数（レキシカルスコープに基づく）
// - `this`（呼び出し方法によって変わる）
// - `arguments`オブジェクト（アロー関数以外の通常の関数で利用可能）
// - `super`（クラス内のメソッドでのみ利用可能）

const sentence = '私の生まれた国は、';//外部変数
const country = 'Japan';
const fuc1 = function (name) {
  const country = 'America';
  console.log(this);
  console.log(arguments);
  console.log(`${name}は、${sentence}${country}出身です`);
}
fuc1('Bob');
const fuc2 = () => {
  const country = 'Korea';
  console.log(sentence + country);
}
fuc2();

class Parent {
  constructor() {
      this.name = "Parent";
  }
  sayHello() {
      console.log("Hello from Parent");
  }
}

class Child extends Parent {
  constructor() {
      super(); // 親クラスのコンストラクタを呼び出す
      this.name = "Child";
  }
  sayHello() {
      super.sayHello(); // 親クラスのメソッドを呼び出す
      console.log(`Hello from ${this.name}`);
  }
}

const child = new Child();
child.sayHello();
// 出力:
// Hello from Parent
// Hello from Child