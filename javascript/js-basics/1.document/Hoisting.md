# ホイスティング

## ホイスティングとは

JavaScriptのコードは、実行前にコード全体が解釈されます。
その際、変数や関数の宣言がある場合、その変数や関数の定義をコード実行前にメモリに確保します。
これをホイスティングと呼びます。
宣言の巻き上げとも呼ばれます。

## 主なホイスティングの例

### 変数のホイスティング

変数の宣言は、その変数が宣言されたスコープの先頭に巻き上げられます。
このとき、varで宣言された変数は、JavaScriptエンジンによってundefinedとして初期化されます。

```javascript
console.log(a); // undefined
var a = 1;
```

上記のコードは、以下のように解釈されます：

```javascript
var a = undefined;
console.log(a); // undefined
a = 1;
```

constやletの場合は、変数の宣言は巻き上げられますが、
JavaScriptエンジンによってundefinedとして初期化されません。
なので、初期化されていない変数を参照しようとするとエラーが発生します。

```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 1;
```

### 関数のホイスティング

関数の宣言は、その関数が宣言されたスコープの先頭に巻き上げられます。

```javascript
foo(); // "Hello, World!"

function foo() {
    console.log("Hello, World!");
}
```

上記のコードは、以下のように解釈されます：

```javascript

function foo() {
    console.log("Hello, World!");
}

foo(); // "Hello, World!"
```

### 関数式のホイスティング

関数式は、変数の宣言と同様に、変数が宣言されたスコープの先頭に巻き上げられます。
ただし、関数式自体は巻き上げられません。

```javascript
foo(); // TypeError: foo is not a function
var foo = function() {
    console.log("Hello, World!");
};
```

上記のコードは、以下のように解釈されます：

```javascript
var foo = undefined;
foo(); // TypeError: foo is not a function
foo = function() {
    console.log("Hello, World!");
};
```

アロー関数は、変数の宣言と同様に、変数が宣言されたスコープの先頭に巻き上げられます。
ただし、アロー関数自体は巻き上げられません。

```javascript
foo(); // TypeError: foo is not a function
var foo = () => {
    console.log("Hello, World!");
};
```

上記のコードは、以下のように解釈されます：

```javascript
var foo = undefined;
foo(); // TypeError: foo is not a function
foo = () => {
    console.log("Hello, World!");
};
```
