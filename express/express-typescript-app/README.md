# Expressプロジェクトの作成

## プロジェクト構成

```bash
express-typescript-app
├── node_modules
├── src
│   └── index.ts
├── .gitignore
├── package.json
└── yarn.lock
```

## 手順

### プロジェクトの作成

```bash
$ mkdir express-typescript-app
$ cd express-typescript-app
$ yarn init -y
// `yarn init -y`でpackage.jsonが作成される
$ yarn add express
// expressをインストール
$ yarn add @types/node @types/express typescript ts-node -D
// node, expressの型定義ファイルとTypeScript, ts-nodeをインストール
// -Dは開発用の依存関係としてインストールするオプション
// この場合、package.jsonのdevDependenciesに追加される
// typescriptは開発時にのみ使用するため、devDependenciesに追加する
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

- `src/index.ts`を作成

```typescript
import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Express!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

- サーバーを起動

```bash
$ node src/index.ts
```

- curlでアクセス

```bash
$ curl http://localhost:3000
Hello Express!
```

