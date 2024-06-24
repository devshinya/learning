# CommonJS

CommonJSとは、Node.jsのモジュールシステムの仕様のことです。
このシステムは、モジュール間の依存関係を管理し、コードの再利用性と保守性を高めるために設計されています。

## CommonJSの特徴

- **同期的なモジュールローディング**
  - モジュールの読み込みは同期的に行われます。つまり、モジュールの読み込みが完了するまで次の処理に進むことはありません。
- **モジュールのエクスポートとインポート**
  - モジュールのエクスポートには、`module.exports` または `exports` オブジェクトを使います。
  - モジュールのインポートには、`require` 関数を使います。
- **モジュールのキャッシュ**
  - モジュールは一度読み込まれるとキャッシュされます。そのため、同じモジュールを複数回読み込むことはありません。

## module.exports と exports の違い

### 基本的な使い方

- **`module.exports`**: モジュール全体をエクスポートする場合に使います。

  ```javascript
  // example.js
  function exampleFunction() {
      return "Hello, world!";
  }

  module.exports = exampleFunction;

  // main.js
  const exampleFunction = require('./example');
  console.log(exampleFunction());  // 出力: Hello, world!
  ```

- **`exports`**: モジュールのプロパティを追加する場合に使います。

    ```javascript
    // example.js
    exports.exampleFunction = function() {
        return "Hello, world!";
    };

    // main.js
    const example = require('./example');
    console.log(example.exampleFunction());  // 出力: Hello, world!
    ```

### 参照関係

- module.exportsは実際にエクスポートされるオブジェクトです。
- exportsはmodule.exportsへの参照です。

### 注意点

exportsに直接代入すると、module.exportsとの参照が切れてしまいます。

  ```javascript
  // このように書くと
  exports = function() {
    return "This will not work";
  };
  // `module.exports` とは別のオブジェクトになります。
  ```
