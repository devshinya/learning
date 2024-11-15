## 各データ構造の各クエリに対する計算量
| | 配列 | 連結リスト | ハッシュテーブル |
|------------|------|------------|------------------|
| JavaScript | Array | - | Set, Map |
| python | list | collections.deque | set, dict |
| i番目の要素へのアクセス | O(1) | O(N) | - |
| 要素xを挿入 | O(1) | O(1) | O(1) |
| 要素xを特定の要素の直後に挿入 | O(N) | O(1) | O(1) |
| 要素xを削除 | O(N) | O(1) | O(1) |
| 要素xを検索 | O(N) | O(N) | O(1) |


## 配列
連続したメモリ領域に要素を格納するデータ構造。
インデックスアクセスが高速であるが、挿入・削除が遅い。
これは、挿入・削除時に要素を移動させるためである。

### i番目の要素へのアクセス: O(1)
```python
arr = [1, 2, 3, 4, 5]
print(arr[2]) # 3 (O(1))
```

Pythonのリストは連続したメモリ領域に要素を格納しているため、先頭要素のアドレスとインデックスから直接アクセス（インデックスアクセス）可能。要素数に関係なくアクセス時間は一定。

### 要素xを挿入（末尾）: O(1)
```python
arr = [1, 2, 3, 4, 5]
arr.append(6) # O(1)
print(arr) # [1, 2, 3, 4, 5, 6]
```

末尾に要素を追加する場合、配列の末尾に要素を追加するだけなのでO(1)。
配列は内部的には大きめのメモリ領域を確保しているため、要素数が増えても追加時間は一定。

### 要素xを特定の要素の直後に挿入: O(N)
```python
arr = [1, 2, 3, 4, 5]

# 指定位置（インデックス2）に挿入
arr.insert(2, 10)  # O(N)
print(arr) # [1, 2, 10, 3, 4, 5]

# 処理の内部動作
def my_insert(arr, index, value):
    # 1. 配列の末尾に要素を追加して領域を確保
    arr.append(None)

    # 2. index以降の要素を1つずつ後ろにシフト
    for i in range(len(arr)-1, index, -1):
        arr[i] = arr[i-1]

    # 3. 指定位置に新しい値を挿入
    arr[index] = value

    return arr
```

挿入位置以降の全要素をシフトする必要がある。
最悪の場合（配列の先頭に挿入する）、全要素を1つずつ後ろにシフトする必要があるためO(N)。

### 要素xを削除: O(N)
```python
arr = [1, 2, 3, 4, 5]

# 値による削除
arr.remove(3)  # O(N)
print(arr) # [1, 2, 4, 5]

# インデックスによる削除
del arr[2]     # O(N)
print(arr) # [1, 2, 5]

# 処理の内部動作
def my_remove_by_value(arr, value):
    # 1. 要素を探す
    index = -1
    for i in range(len(arr)):
        if arr[i] == value:
            index = i
            break

    if index != -1:
        # 2. 見つかった位置以降の要素を前にシフト
        for i in range(index, len(arr)-1):
            arr[i] = arr[i+1]
        # 3. 配列の最後の要素を削除
        arr.pop()

    return arr

def my_remove_by_index(arr, index):
    # 1. インデックスの妥当性チェック
    if index < 0 or index >= len(arr):
        raise IndexError("list index out of range")

    # 2. 指定位置以降の要素を前にシフト
    for i in range(index, len(arr)-1):
        arr[i] = arr[i+1]

    # 3. 配列の最後の要素を削除
    arr.pop()

    return arr
```

削除位置以降の要素をシフトする必要がある。
最悪の場合（先頭の要素を削除）は全要素をシフトする必要があるためO(N)。

※ 値による削除は、要素の検索（O(N)）と削除（O(N)）の合計でO(2N)になるが、ビックオー記法では定数倍は無視されるため、O(N)と表現される。

### 要素xを検索: O(N)
```python
arr = [1, 2, 3, 4, 5]

# 値の検索
found = 3 in arr  # O(N)
print(found) # True

index = arr.index(3)  # O(N)
print(index) # 2

# 処理の内部動作
def my_search(arr, value):
    for i in range(len(arr)):
        if arr[i] == value:
            return i
    return -1
```

全要素を順番に探索する必要がある。
最悪の場合（要素が見つからない場合）は全要素を探索する必要があるためO(N)。

## 連結リスト
各要素（ノード）が値とリンク（次のノードへの参照）を持つデータ構造。
メモリ上に連続して配置される必要がないため、挿入・削除が高速だが、インデックスアクセスが遅い。
これは、i番目の要素にアクセスするには、先頭から順にi個のノードを辿る必要があるためである。

### i番目の要素へのアクセス: O(N)
```python
from collections import deque

d = deque([1, 2, 3, 4, 5])
print(d[2])  # 3 (O(N))

# 処理の内部動作
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def get(self, index):
        if index < 0:
            raise IndexError("Index out of range")

        current = self.head
        for i in range(index):  # indexの位置まで辿る
            if current is None:
                raise IndexError("Index out of range")
            current = current.next

        if current is None:
            raise IndexError("Index out of range")
        return current.value
```

i番目の要素にアクセスするには、先頭から順にi個のノードを辿る必要がある。
そのため、アクセス時間はインデックスに比例し、O(N)となる。

### 要素xを挿入（末尾）: O(1)
```python
d = deque([1, 2, 3, 4, 5])
d.append(6)  # O(1)
print(d)  # deque([1, 2, 3, 4, 5, 6])

# 処理の内部動作
def append(self, value):
    new_node = Node(value)
    if self.head is None:
        self.head = new_node
        return

    # 末尾ポインタを保持している場合
    if self.tail is not None:
        self.tail.next = new_node
        self.tail = new_node
        return

    # 末尾ポインタを保持していない場合
    current = self.head
    while current.next:
        current = current.next
    current.next = new_node
```

末尾ポインタを保持している場合、新しいノードを作成して末尾ノードの next に設定するだけなのでO(1)。
ただし、末尾ポインタを保持していない場合は、末尾まで辿る必要があるためO(N)となる。

### 要素xを特定の要素の直後に挿入: O(1)
```python
d = deque([1, 2, 3, 4, 5])
d.insert(2, 10)  # 実際のdequeでは O(N)
print(d)  # deque([1, 2, 10, 3, 4, 5])

# 処理の内部動作
def insert_after_node(self, node, value):
    if node is None:
        return

    new_node = Node(value)
    new_node.next = node.next
    node.next = new_node
```

挿入位置のノードが分かっている場合、新しいノードのポインタを設定するだけなのでO(1)。
ただし、特定のインデックスに挿入する場合は、そのノードまで辿る必要があるためO(N)となる。

### 要素xを削除: O(1)
```python
d = deque([1, 2, 3, 4, 5])
d.remove(3)  # 実際のdequeでは O(N)
print(d)  # deque([1, 2, 4, 5])

# 処理の内部動作
def remove_after_node(self, node):
    if node is None or node.next is None:
        return

    # 削除対象のノードをスキップ
    node.next = node.next.next
```

削除位置のノードが分かっている場合、ポインタの付け替えだけなのでO(1)。
ただし、特定の値やインデックスの要素を削除する場合は、そのノードまで辿る必要があるためO(N)となる。

### 要素xを検索: O(N)
```python
d = deque([1, 2, 3, 4, 5])
found = 3 in d  # O(N)
print(found)  # True

# 処理の内部動作
def search(self, value):
    current = self.head
    while current:
        if current.value == value:
            return current
        current = current.next
    return None
```

全要素を順番に探索する必要がある。
最悪の場合（要素が見つからない場合）は全要素を探索する必要があるためO(N)。

### 補足
1. 上記のコードは基本的な単方向連結リストの実装例です。実際の`collections.deque`は双方向連結リストを使用しており、より効率的な操作が可能。

2. 連結リストは以下のような場合に有用：
   - 要素の挿入・削除が頻繁に行われる
   - データサイズが動的に変化する
   - ランダムアクセスが少ない

3. 一方で、以下のような場合は配列の方が適している：
   - インデックスによるランダムアクセスが多い
   - キャッシュ効率が重要
   - メモリ使用量を最小限に抑えたい
