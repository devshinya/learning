# Expressプロジェクトの作成

## プロジェクト構成

```bash
my-express
├── node_modules
├── src
│   └── index.js
├── .gitignore
├── package.json
└── yarn.lock
```

## 手順

### プロジェクトの作成

```bash
$ mkdir my-express
$ cd my-express
$ yarn init -y
// `yarn init -y`でpackage.jsonが作成される
$ yarn add express
// expressをインストール
$ touch .gitignore
// node_modulesをgitの管理対象から外す
$ echo "node_modules" >> .gitignore
```

ES Moduleを使う場合は、`package.json`に以下を追加する

```json
{
  "type": "module"
}
```

### Expressの動作確認

- `src/index.js`を作成

```javascript
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

- サーバーを起動

```bash
$ node src/index.js
```

- curlでアクセス

```bash
$ curl http://localhost:3000
Hello Express!
```

