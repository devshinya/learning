# JavaScriptの誕生とその背景

## JavaScriptとは

JavaScriptは、ECMAScriptの仕様に基づいて実装されているプログラミング言語。
環境によって利用できる機能が異なる。

- ブラウザ環境
  - JavaScript = ECMAScript + WebAPIs（DOM API、Fetch API、Geolocation APIなど）
- Node.js環境
  - JavaScript = ECMAScript + Node.js独自のAPI（CommonJS、ファイルシステムAPIなど）

JScriptが衰退した現在、ECMAScriptの仕様に基づいて実装されているプログラミング言語の代表はJavaScript。

### ECMAScriptとは

ECMAScriptとは、JavaScriptの基本仕様を定めた標準規格です。
具体的には以下のような部分がECMAScriptに該当します。

- 文法: 変数宣言、条件分岐、ループ、関数などの基本的な構文。
- データ型: 数値、文字列、配列、オブジェクトなどのデータ型の定義。
- 組み込みオブジェクト: Math、Date、String、Arrayなどの組み込みオブジェクトとそのメソッド。
- 演算子: 算術演算子、比較演算子、論理演算子など。
- 例外処理: try...catch構文などによるエラーハンドリング。

### JavaScriptとECMAScriptの関係

JavaScriptとECMAScriptの関係を車でたとえると次のようになります。

- ECMAScript:
  - 自動車の製造標準のようなもの。
  - 基本的な仕様（エンジン、ブレーキ、ステアリングなど）を定めている。
- JavaScript:
  - この標準に基づいて作られた特定の車種。
  - たとえば、トヨタのカムリやホンダのシビックのように、各メーカーが標準に独自の機能やカスタマイズを加えたもの。

## JavaScriptの歴史

### 1. 1990年代前半：インターネットの普及

- 1990年: Tim Berners-LeeがWorld Wide Web（WWW）を発明。これにより、インターネット上での情報共有が急速に拡大。
- 1993年: モザイク（Mosaic）ウェブブラウザが登場し、一般のユーザーにもインターネットが広がり始める。

### 2. 1994年：Netscapeの登場

- 1994年: Netscape Communications Corporationが設立され、Netscape Navigatorというウェブブラウザをリリース。このブラウザは非常に人気を博し、インターネットの普及を加速。

### 3. 1995年：JavaScriptの誕生

- 1995年5月: Netscapeは、ウェブページに動的なコンテンツを追加するためのスクリプト言語を開発する必要性を感じる。当時、サーバーサイドスクリプティングは普及していたが、クライアントサイドでの操作は限定的だった。
  - Brendan Eich: NetscapeのBrendan Eichがこの新しいスクリプト言語の開発を任される。Eichはわずか10日間で最初のバージョンを作成。
  - Mocha: 最初、この新しい言語は「Mocha」と呼ばれていた。その後、「LiveScript」と改名され、最終的に「JavaScript」と命名される。これは、当時の人気言語であるJavaの名前を利用したマーケティング戦略の一環。

### 4. 1996年：JavaScriptの普及

- 1996年3月: Netscape Navigator 2.0がリリースされ、JavaScriptが正式に搭載される。
- Microsoftの参入: Microsoftもインターネットブラウザ市場に参入し、Internet Explorerをリリース。MicrosoftはJavaScriptに似た言語を作成し、これを「JScript」と名付ける。
- これにより、JavaScriptとJScriptという、基本的に似ているが微妙に異なる2つのスクリプト言語がウェブブラウザ市場に存在することになりました。
- ブラウザごとに異なるスクリプト言語の実装が乱立している状況は大きな問題でした。
  - 問題点
    - 開発の複雑化
    - テストの負担増
    - ユーザー体験の不一致

### 5. 1997年：標準化

- ECMAScript: JavaScriptの標準化を目的に、ECMA（European Computer Manufacturers Association）がECMAScriptという標準仕様を策定。ECMAScriptはJavaScriptの仕様を定義し、異なるブラウザ間での互換性を向上。
- ECMAScriptは、JavaScriptやJScriptなどのスクリプト言語の標準仕様として機能します。
- 各ブラウザメーカー（Netscape、Microsoftなど）は、このECMAScript仕様に準拠することで、スクリプト言語の互換性と一貫性を保つようになりました。

### 6. 2000年代前半：ブラウザ戦争と進化

- ブラウザ戦争: 1990年代後半から2000年代前半にかけて、NetscapeとMicrosoftの間でブラウザ戦争が勃発。Internet Explorerが市場を制し、Netscapeはしだいに衰退。
- DOMとAJAX: この時期、Document Object Model（DOM）とAsynchronous JavaScript and XML（AJAX）が登場し、より動的でインタラクティブなウェブアプリケーションの開発が可能に。

### 7. 2000年代後半：JavaScriptの再評価

- 2005年: Jesse James GarrettがAJAXという概念を提唱し、JavaScriptの重要性が再評価。AJAXにより、ウェブページが非同期にサーバーと通信し、ページ全体をリロードすることなくコンテンツを更新できるように。
- ライブラリとフレームワーク: jQueryなどのJavaScriptライブラリが登場し、開発がより簡単かつ効率的に。

### 8. 2009年：Node.jsの登場

- Node.js: Ryan DahlがNode.jsを発表。Node.jsは、GoogleのV8 JavaScriptエンジンを使用してサーバーサイドでもJavaScriptを実行可能に。これにより、フロントエンドとバックエンドの両方でJavaScriptを使用できるようになり、JavaScriptの適用範囲が大幅に拡大。

### 9. 2010年代：モダンJavaScriptの進化

- ECMAScript 6（ES6）: 2015年にリリースされたES6（ECMAScript 2015）は、JavaScriptに多数の新機能（let、const、アロー関数、クラス、モジュールなど）を導入し、言語としての表現力と効率性を大幅に向上。
- フレームワークの発展: React、Angular、Vue.jsなどのフロントエンドフレームワークが登場し、モダンなウェブアプリケーションの開発がさらに進化。

#### 補足

- JScriptは現代ではほとんど使用されていません。
- その役割は、ECMAScriptの標準化とInternet Explorerの衰退に伴い、JavaScript（とくに最新のES6以降の仕様）に取って代わられました。
- 現在のWeb開発において、JScriptを使用することは推奨されず、標準的なJavaScriptや他のモダンな技術が使用されています。

## まとめ

JavaScriptは、1995年にNetscapeでBrendan Eichによって開発され、ウェブページに動的な要素を追加するための言語として誕生しました。その後、標準化や技術革新により、クライアントサイドだけでなくサーバーサイドでも広く使用されるようになり、現在のウェブ開発の中心的な技術となっています。
