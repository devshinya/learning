# bubble sort（バブルソート）

## 基本概念

- 隣接する要素を比較し、必要に応じて交換を繰り返すことで整列を行います。
- 大きな値が徐々に末尾に「浮かび上がる」様子から、バブル（泡）ソートと呼ばれています。

## アルゴリズムの手順

1. 配列の先頭から順に隣接する要素を比較します。
2. 左の要素が右の要素より大きい場合、それらを交換します。
3. 配列の最後まで到達したら、最大の要素が最後に位置することになります。
4. このプロセスを、配列が完全にソートされるまで繰り返します。

## 時間複雑度

- 最悪の場合：O(n^2)
- 平均の場合：O(n^2)
- 最良の場合：O(n)（すでにソートされている場合）

## 空間複雑度

- O(1)：追加の空間をほとんど使用しません。

## 特徴

- 単純で理解しやすい
- 小さなデータセットに対しては効率的
- 大きなデータセットに対しては非効率
- データが多くなると処理時間が急激に増加
- 使用するメモリは常に少量

## 用途

- 教育目的でよく使用される
- 非常に小さなデータセットや、ほぼソートされたデータに対して有効

## 欠点

- 大規模データに対して非常に遅い
- 他の高度なアルゴリズム（クイックソート、マージソートなど）と比べて効率が悪い

バブルソートは、その単純さゆえに初心者のアルゴリズム学習には適していますが、
実際のアプリケーションでは他のより効率的なアルゴリズムが選択されることが多いです。