# ES6のモジュールシステム

## ES6のモジュールシステムについて

ES6のモジュールシステムは、JavaScriptのモジュール機能を標準化したものです。
モジュールシステムとは、プログラムを複数のファイルに分割して管理するための仕組みです。
モジュールシステムを使用することで、以下のような利点があります：

- プログラムの保守性や再利用性の向上
- 名前空間の分離によるコードの衝突防止
- コードの構造化と整理
- 依存関係の明確化

## モジュールのエクスポートとインポート

モジュールシステムの核となるのが、エクスポートとインポートの機能です。

### エクスポート（Export）

エクスポートは、モジュール内で定義された変数、関数、クラスなどを外部に公開するための機能です。
エクスポートされた要素は、他のモジュールからインポートして利用できます。

### インポート（Import）

インポートは、他のモジュールからエクスポートされた要素を自身のモジュールで利用するための機能です。
インポートすることで、他のモジュールの機能を自身のコードで使用できます。

## エクスポートとインポートの種類

### 名前付きエクスポート（Named Exports）/ 名前付きインポート（Named Imports）

- 名前付きエクスポート（Named Exports）

複数の要素をエクスポート/インポートする際に使用します。
{}内にインポートしたい値の名前を指定します。

例）

```javascript
// example.js
// それぞれの関数, 変数を名前付きでエクスポート
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const age = 20;

// main.js
import { add, subtract as sub, age } from './example'; // asを使ってエイリアスをつけることもできる
console.log(add(5, 3));  // 出力: 8
console.log(sub(5, 3));  // 出力: 2
console.log(age);  // 出力: 20
```

モジュール全体をオブジェクトとしてインポートすることもできます。

例）

```javascript
// example.js
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const age = 20;

// main.js
import * as example from './example';
console.log(example.add(5, 3));  // 出力: 8
console.log(example.subtract(5, 3));  // 出力: 2
console.log(example.age);  // 出力: 20
```

#### デフォルトエクスポート（Default Exports）/ デフォルトインポート（Default Imports）

モジュールからメインとなる1つの要素をエクスポート/インポートする際に使用します。
1つのモジュールにつき1つのデフォルトエクスポートのみ定義できます。
インポート時に任意の名前を付けることができます。

```javascript
// example.js
const exampleFunction = () => {
    return "Hello, world!";
};

export default exampleFunction;

// main.js
import hoge from './example';
console.log(hoge());  // 出力: Hello, world!
```

#### 名前付きエクスポートとデフォルトエクスポートの併用

名前付きエクスポートとデフォルトエクスポートを併用することもできます。
デフォルトエクスポートは1つのみである必要があります。

```javascript
// mathUtils.js
// 名前付きエクスポート
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// デフォルトエクスポート
export default function multiply(a, b) {
    return a * b;
}

// main.js
import multiply, { add, subtract } from './mathUtils';

console.log(add(5, 3));  // 出力: 8
console.log(subtract(5, 3));  // 出力: 2
console.log(multiply(5, 3));  // 出力: 15
```

### 名前付きエクスポートとデフォルトエクスポートの使い分け

- 名前付きエクスポート
  - 複数の関数や変数をエクスポートする場合に使用する
  - インポート時に名前を指定して取得する場合に使用する
- デフォルトエクスポート
  - 1つの関数やクラスをエクスポートする場合に使用する
  - インポート時に名前を指定せずに取得する場合に使用する

Web上の記事では、名前付きエクスポートを推奨する記事が多い。

- [named exportとdefault exportの違いを理解する](https://zenn.dev/yuji6523/articles/373a675275abc4)
- [なぜ default export を使うべきではないのか？](https://engineering.linecorp.com/ja/blog/you-dont-need-default-export)

主な理由としては、以下が挙げられる。

- 名前付きエクスポートを使うことで、エディターの補完機能が使える
- 名前付きエクスポートを使うことで、エラーが発生した際にエラー箇所が特定しやすい
- 名前付きエクスポートを使うことで、コードの可読性が向上する

以下の記事では、デフォルトエクスポートを使うべきという意見もある。

- [named exportは有害だと考えられます](https://zenn.dev/yuhr/articles/668dba202726bf)
