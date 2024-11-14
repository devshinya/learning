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
