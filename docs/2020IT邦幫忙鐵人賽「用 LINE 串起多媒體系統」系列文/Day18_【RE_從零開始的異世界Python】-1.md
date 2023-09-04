細心呵護的多媒體系統準備進入下個篇章，不過在準備文章時發現會時常需要回頭說明 Python 基本語法，故停下腳步回頭集中說明 Python 語法及即便熟手也不常運用的方便指令，以奠定後續自學及架構服務的基石，大約分兩篇介紹，本篇集中在 Python 語法的變數、運算、資料型態及儲存器類型。
- [Colab支援 ![](https://i.imgur.com/pQnQ4tG.png)](https://colab.research.google.com/drive/1iC3DsVYJZSE2YIac_o8qzid71fA5dXXP?usp=sharing)

## 認識 Python :
- 語法簡潔但不失優雅，以及 Python 龐大的生態環境可在不同領域都發揮作用所帶來的便利。
- Python 是動態語言、直譯式語言:
    - Python的變數使用前不必宣告其資料型態，增加程式設計便利性，這類程式執行前不必經過**編譯**(compile)的過程，而是使用**直譯器**(interpreter)直接直譯與執行，稱為**動態語言**(dynamic language)，或稱腳本語言(scripting language)。靜態語言如:C、C++、JAVA；動態語言如:Python、JavaScript、Ruby。

## Python 的組成摘要
- 我們先來認識所謂「程式」的基礎，任何程式語言必備的元素有:
    - 程式的組成
        - 基本資料型態。如: 整數`int`、浮點數`float`、字串`str`、布林`bool`。
        - 儲存容器-串列 list 、元組 tuple 、集合 Set。
        - 格式化的輸出與輸入。如: `print()`、`input()`，可以用參數自定輸入、輸出格式。
        - 運算能力，包含運算子、運算式。如: 加減乘除、大小等於。
        - 流程控制(選擇性敘述)。如: `if-else` 、 `if elif else`。
        - 迴圈。如: `for`, `while`。
    - 進階程式的組成
        - 函數fucntion。如: `def my_function():`。
        - 類別class。如 `class MyClass():`。
## Python 變數與基本運算
大賢者: [Colab](https://colab.research.google.com/drive/1iC3DsVYJZSE2YIac_o8qzid71fA5dXXP?usp=sharing) 支援。
### 變數命名原則
- 變數
    - 如同可以儲存資料內容的箱子，命名不能與關鍵字重複，自訂義的命名也不要跟引入的模組重複。
- 變數命名原則
    - 開頭必須為英文字母、_(底線)或中文字，不能是數字起始。
    - 變數名稱只能由英文、數字、_(底線)或中文組成，除了關鍵字之外， Python 可用任何 Unicode 編碼的字元當作識別字。英文大小寫是敏感的。
        - 關鍵字: `and` 、 `as` 、 `assert` 、 `break` 、 `class` 、 `continue`、 `def`、`del` 、`elif` 、 `else` 、 `except` 、 `False` 、 `finally` 、 `for` 、 `from` 、 `global` 、 `if` 、 `import` 、 `in` 、 `is` 、 `lambda` 、 `none` 、 `nonlocal` 、 `not`  、 `or` 、 `pass` 、 `raise` 、 `return` 、 `True` 、 `try` 、 `while` 、 `with` 、 `yield`。
    - 如果變數需要超過兩個英文單字表達，可用底線符號 (_) ，或是駝峰型如: MyName 或 myName。
- 進階慣例(牽涉到設計 `class` 及 `module` )
    - 命名 `class` 時，**通常以大寫駝峰型**命名，如`MyClass`。
    - 命名函式或方法時，**通常用小寫及底線** (如：`my_module`)。
    - 要保護 module 變數或函式不被`from foo import *` 時，可在**變數名稱前加上單一底線**，除非用 `from foo import _var` 才能使用 _var 變數。
    - 若要在 `class` 內宣告 private 變數或方法，則在變數名或方法名之前加上兩個底線 (__)，如`MyClass.__my_private_module`，但其實本質上使用者若執意要呼叫private變數還是能夠達成。
- Python內建函數[內建函數](http://www.runoob.com/python/python-built-in-functions.html)名稱建議不當作變數名稱，如使用到程式不會錯誤，但功能會被覆蓋。

### 運算
- 運算子
    - 算術運算子: 加 `+` 、減 `-` 、乘 `*` 、除 `/` 、取餘數 `%`、 a的b次方 `a**b` 、a取b整除 `a//b`。
    - 關係運算子: 兩者間的關係判斷，判斷成立回傳 `True`，不成立回傳 `False`。如: 等於 `==` 、不等於 `!=` 、 `>` 、 `<` 、 `>=` 、 `<=` 。
    - 賦值（指派）運算子: 賦值(指派) `a = b` ， `a += b` 即 `a = a + b` ，以此類推。

### 基本資料型態
- 以`type()`檢查資料型態。
- **整數int**
    - Python解除了儲存空間大小的限制，記憶體夠大就可以放無限制整數，不會造成**溢位**(overflow)。
- **浮點數float**
    - 有小數點的數字，Python運算時具有簡易自動轉換能力。
    - 由於電腦是以二進位的數值組合，轉換為十進位的浮點數會有誤差。
        - 轉換二進位用`bin()`，在Python中為**0b**開頭的數字，如0b1101。
        - 轉換八進位用`oct()`，在Python中為**0o**開頭的數字，如0o61。
        - 轉換十六進位用`hex()`，在Python中為**0x**開頭的數字，如0x5D。
- **布林Boolean**
    - 經條件判斷後，回傳結果為`True`或`False`
    - `type(True)`回傳1；`type(False)`回傳0。
- **字串String**
    - 以單引號(`'`)或雙引號(`"`)前後括起來的任意輸入文字。
    - 如果文句中有單/雙引號，則應以雙/單引號避免錯誤。
    - 超過一行的字串以3個單引號或3個雙引號包夾
    - 不想換行的分段輸入，在程式行末增加`\`符號
        - ```python
            #會因程式換行以致輸出結果換行
            """
            我是胖虎，我是孩子王
            我是胖虎，我是孩子王
            """

            ##輸出結果不會換行的方式，行末增加"\"
            '''
            我是胖虎，我是孩子王\
            我是胖虎，我是孩子王
            '''
            ```
      
-  轉型
    - 轉為文字`str()`，如`str(87)`，結果原來會判別為數字的87變成文字的'87'。
    - 轉為整數`int()`。
    - 轉為浮點數`float()`。
    - 轉為布林`bool()`，非0即為真。


### 儲存容器-串列 list 、元組 tuple 、集合 Set

- 串列list
    - 串列list是Python大量使用的工作型態

        |計算|說明|
        |-|-|
        x in L	|判斷 x 是否在 L 中
        x not in L	|判斷 x 是否不在 L 中
        L + t	|連接 L 及 t 接再一起
        L * n, n * L	|將 L 重複 n 次連接 L 本身
        L[i]|	取得索引值 i 的元素
        L[i:j]	|取得索引值 i 到 j 的子序列
        L[i:j:k]	|取得索引值 i 到 j ，間隔 k 的子序列
        len(L)	|回傳 L 的元素個數
        min(L)	|回傳 L 中的最小值
        max(L)	|回傳 L 中的最大值
        L.index(i)	|取得 L 中第一次出現 i 的索引值
        L.count(i)	|累計 L 中 i 出現的個數

        |計算|說明|
        |-|-|
        L[i] = x	|將索引值 i 的元素指派為 x
        L[i:j] = t	|將索引值 i 到 j 的元素指派為 t
        del L[i:j]	|刪除索引值 i 到 j 的元素
        L[i:j:k] = t	|將索引值 i 到 j ，間隔 k 的元素指派為 t 
        del L[i:j:k]	|刪除索引值 i 到 j ，間隔 k 的元素
        list comprehension	|列表推導式：運用運算式生成新的串列
        list.append(x)	|將 x 附加到 list 的最後
        list.extend(x)	|將 x 中的元素附加到 list 的最後
        list.count(x)	|計算 list 中 x 出現的次數
        list.index(x[, i[, j]])	|回傳 x 在 list 最小的索引值
        list.insert(i, x)	|將 x 插入 list 索引值 i 的地方
        list.pop([i])	|取出 list 中索引值為 i 的元素，預設是最後一個
        list.remove(x)	|移除 list 中第一個 x 元素
        list.reverse()	|倒轉 list 中元素的順序
        list.sort([key[, reverse]])	|排序 list 中的元素

    - 列表推導式 list comprehension
        ```
        L = [9,5,2,7]
        [x for x in L if x > 3]
        #輸出:[9,5,2]
        ```
    - 如以原本寫法如下:
        ```
        result = [] #先創空list
        for x in L: #for迴圈逐一判斷
            if x >3: #判斷條件
                result.append(x) #符合的結果附加到result串列裡

        print(result)
        ```
### 元組 tuple
- 元組 tuple 屬於不可變 (mutable) 的序列 (sequence) 型別，是不可更改的，可進行以下序列通用的計算。
    計算|	說明
    -|-
    x in s	|判斷 x 是否在 s 中
    x not in s	|判斷 x 是否不在 s 中
    s + t	|連接 s 及 t
    s * n, n * s	|將 s 重複 n 次連接 s 本身
    s[i]	|取得索引值 i 的元素
    s[i:j]	|取得索引值 i 到 j 的子序列
    s[i:j:k]	|取得索引值 i 到 j ，間隔 k 的子序列
    len(s)	|回傳 s 的元素個數
    min(s)	|回傳 s 中的最小值
    max(s)	|回傳 s 中的最大值
    s.index(i)	|取得 s 中第一次出現 i 的索引值
    s.count(i)	|累計 s 中 i 出現的個數


### 集合Set
- 集合set使用大括弧圍起來，但沒有重複的元素，且無序的存放元素。
- 可將集合視為無鍵的字典物件 。
    計算	|說明
    -|-
    x in s	|判斷 x 是否在 s 中
    x not in s	|判斷 x 是否不在 s 中
    s1 & s2	|且運算，取得 s1 與 s2 的交集，等於 s1.intersection(s2)
    s2 | s2	|或運算，取得 s1 與 s2 的聯集，等於 s1.union(s2)
    s1 ^ s2	|對稱差運算，取得 s1 與 s2 的對稱差集，等於 s1.symmetric_difference(s2)
    s1 - s2	|差運算，取得 s1 與 s2 的差集，等於 s1.difference(s2)
    s1 < s2	|判斷 s1 是否為 s2 的真子集
    s1 <= s2	|判斷 s1 是否為 s2 的子集，等於 s1.issubset(s2)
    s1 > s2	|判斷 s2 是否為 s1 的真子集
    s1 >= s2	|判斷 s2 是否為 s1 的子集，等於 s1.issuperset(s2)
    len(s)	|回傳 s 的元素個數
    min(s)	|回傳 s 中的最小值， s 中的元素必須是相同型態
    max(s)	|回傳 s 中的最大值， s 中的元素必須是相同型態


- 由於 set 型態是可變的，因此有額外兩個新增與刪除元素的方法：
    方法	|說明
    -|-
    s.add(e)	|增加 e 為 s 的元素
    s.remove(e)	|從 s 中刪除元素 e



## 字典Dict
- 以`{}`以及冒號`:`來分隔鍵與值，以創建字典物件。
- 建立字典變數可利用大括弧，裡頭以 `key:value` 為配對的資料項目，每一筆資料再以逗號區隔開，例如
`d1 = {one:"a", two:"b"}`

- 使用字典須注意， key 必須是不可變的資料型態，且不可重複，如數字、字串 (string) 等； value 沒有限制，因此有需要的話，使用串列 (list) 或字典皆可。

- 也可以利用字典型態的建構子 (constructor) 建立物件。
    ```
    d1 = {one:"a", two:"b"}

    #以下方法與d1同
    d2 = dict(one="a", two="b")
    d3 = dict({"one":"a", "two":"b"})
    d4 = dict(zip(("one", "two"), ("a", "b")))
    d5 = dict([["one", "b"], ["two", "a"]])
    ```

- 字典物件的方法

    |方法|	描述|
    -|-
    dict.clear()	|清空 dict 的所有配對資料
    dict.copy()	|回傳 dict 的拷貝
    classmethod dict.fromkeys(seq[, value])	|由 seq 中的元素構成 key ，每個 key 都給相同的 value 值
    dict.get(key[, default])	|從 dict 中取得 key 的 value ，若無此 key 則回傳 default ， default 預設為 None
    dict.items()	|回傳 dict_items 物件，使 key:value 儲存為序對，然後依序儲存在 dict_items 物件中
    dict.keys()	|回傳 dict_items 物件，使 key 依序儲存在 dict_items 物件中
    dict.pop(key[, default])	|將 key 的 value 從 dict 移除，若無此 kay ，回傳 default
    dict.popitem()	|從 dict 移除任意一組 key:value
    dict.setdefault(key[, default])	|如果 key 在 dict 中，回傳 value 值，反之，將 key:default 加入 dict 之中
    dict.update([other])	|將 dict 以 other 更新
    dict.values()	|回傳 dict_items 物件，使 value 依序儲存在 dict_items 物件中
    
## 小結
本篇說明 Python 語法的變數、運算、資料型態及儲存器類型，其中常用的 list 操作，像是列表推導式 list comprehension 相當實用有趣，Python 的字典 dict 與 JSON 相似，在資料傳遞時經常使用，有興趣可自行延伸，我們下篇見。
