---
jupyter:
  jupytext:
    text_representation:
      extension: .md
      format_name: markdown
      format_version: '1.3'
      jupytext_version: 1.15.1
  kernelspec:
    display_name: Python 3
    name: python3
---

<!-- #region id="view-in-github" colab_type="text" -->
<a href="https://colab.research.google.com/github/willismax/MediaSystem-Python-Course/blob/main/01.Intro-Python/PythonBasic_2.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>
<!-- #endregion -->

<!-- #region id="6OZu7Iytc9vG" -->
Python 基礎語法
<!-- #endregion -->

<!-- #region id="TJiUVgRg4YC9" -->
![](https://python.rs/pylogo.png)
<!-- #endregion -->

<!-- #region id="3M2f3-y_OT5A" -->
## 前言 - 程式的組成
<!-- #endregion -->

<!-- #region id="X1BqefV2c9vH" -->
- 我們先來認識所謂「程式」的基礎，任何程式語言必備的元素有:
    - 程式的組成
        - 變數
        - 基本資料型態
          - 如: 整數、浮點數、字串、布林
          - 如: 串列、元組、字典、集合等
        - 格式化的輸出與輸入
          - 如: print(), input()
        - 運算子、運算式與敘述
          - 如: 加減乘除
          - 如: 大小等於
        - 選擇性敘述
          - 如: if-else
        - 迴圈
          - 如: for, while
    - 進階程式的組成
        - 函數fucntion
          - 如: def my_function():
        - 類別
          - 如: class MyClass():
<!-- #endregion -->

<!-- #region id="ONRogSZwaJ4C" -->
## 認識 Python
<!-- #endregion -->

<!-- #region id="VIBZSp-YaPy9" -->
- 語法簡潔但不失優雅，以及 Python 龐大的生態環境可在不同領域都發揮作用所帶來的便利。
- Python 是動態語言(dynamic language)
    - 變數使用前不必宣告其資料型態，增加程式設計便利性，缺點是需要在底層判斷變數型別，較耗時。
- Python 是直譯語言
    - 執行前不必經過**編譯**(compile)的過程，而是使用**直譯器**(interpreter)直接直譯與執行，或稱腳本語言(scripting language)。
    - 靜態語言如:C、C++、JAVA；動態語言如:Python、JavaScript、Ruby。
- Why Python?
    - 活躍的社群
    - 開放原始碼
    - 眾多第三方資源
    - 可快速打造產品原型的工具
    - 工程師的第二個程式語言

- Python 的魅力:
    - 語法簡潔但不失優雅，以及 Python 龐大的生態環境可在不同領域都發揮作用所帶來的便利。
<!-- #endregion -->

<!-- #region id="lsFRYln1amZq" -->
## Python 變數與基本運算
<!-- #endregion -->

<!-- #region id="F3KT9XAJbRpA" -->
### 變數
- Python變數正確來說是資料內容的「標籤」，變數不是盒子。
- 物件先存在，所以說是「變數x被指派給(assigned to) something」比較精確。
- 命名不能與關鍵字重複，自訂義的命名也不要跟引入的模組重複。


<!-- #endregion -->

<!-- #region id="KnCzDgJtao2-" -->
### 變數命名原則
<!-- #endregion -->

<!-- #region id="vDS0TCDeb4L2" -->
- 開頭可以是: 英文字母、`_`底線)或中文字，支援`UTF-8`編碼，大小寫敏感。
- 開頭不能是：數字。
- 要避開Python關鍵字:
    ```python
    and, as, assert, break, class, continue, def, del, elif, else, except,
    False, finally, for, from, global, if, import, in, is, lambda, None,
    nonlocal, not, or, pass, raise, return, True, try, while, with, yield
    ```
- 建議避開[Python 函數](http://www.runoob.com/python/python-built-in-functions.html)名稱，會覆蓋功能。
- 如果變數需要超過兩個英文單字表達，可用`_`底線連結，或是駝峰型如: MyName 或 myName。
    ```python
    my_name = 9527
    MyName = 9527
    myName = 9527
    ```
- 類別的命名依 PEP8，建議為"大寫駝峰"命名，如`MyClass`。
    ```python
    class MyClass():
        pass
    ```
- 命名函式依 PEP8，以小寫及底線連結 (如：`my_function`)。
    ```python
    def my_function():
        return result
    ```
---

- 模組命名與保護，通常引入模組可以用的方式
    ```python
    import foo
    from foo import *
    import foo as fo
    from foo import qoo as qo
    ```
- 要保護 module 變數或函式不被`from foo import *`
    - 在名稱前底線`_`，例如除非用 `from foo import _var` 呼叫，才能使用 `_var` 模組 。
- 要保護類別的 private 變數或方法，名稱前加上兩個底線`__`，如`MyClass.__my_private_module`，才能呼叫該私有變數或方法，但不夠嚴謹。
<!-- #endregion -->

```python id="2Jkz-0kKmc3A"
便利貼 = "水壺"
```

```python id="c-jKqHFMbNOq" colab={"base_uri": "https://localhost:8080/", "height": 133} outputId="569e2aac-0326-4b16-c0eb-30741c736d36"
#錯誤示範-數字不能當命名開頭

9527_is_good = '多拉a夢'
```

<!-- #region id="BxUsyirNSQRK" -->
### 基本資料型態
<!-- #endregion -->

<!-- #region id="l7P3tdp8kFag" -->
### 整數 int
- Python的int依記憶體可放無限制整數，不易溢位(overflow)。
- C語言int佔4個位元組，取值範圍-2147483648～+2147483647，超過範圍會溢位。

<!-- #endregion -->

<!-- #region id="T-O0o-ujj9Y1" -->
### 浮點數 float
- 有小數點的數字，Python運算會簡易判斷自動轉換。
- 由於電腦是以二進位的數值組合，轉換為十進位的浮點數會有誤差，依[IEEE 754](https://zh.wikipedia.org/wiki/IEEE_754)實作。
    - 轉換二進位用`bin()`，在Python中為`0b`開頭的數字，如0b1101。
    - 轉換八進位用`oct()`，在Python中為`0o`開頭的數字，如0o61。
    - 轉換十六進位用`hex()`，在Python中為`0x`開頭的數字，如0x5D。

<!-- #endregion -->

<!-- #region id="i7k08BDUkQDh" -->
### 布林 Boolean
- 經條件判斷後，回傳結果為`True`或`False`
- `int(True)`回傳1；`int(False)`回傳0。
<!-- #endregion -->

```python id="D6o5Z69rTmz0" colab={"base_uri": "https://localhost:8080/"} outputId="35b9c037-24e2-42d2-dd63-3ea54ff8e32b"
type(True)
```

```python id="L0dceqn4TsJB" colab={"base_uri": "https://localhost:8080/"} outputId="2b002f90-560b-4c96-b240-b2b31d115bf3"
type(int(True))
```

```python id="gBKWyis9TvQi" colab={"base_uri": "https://localhost:8080/"} outputId="88a712ef-cd84-4ee5-9e18-24a9e756febe"
int(False)
```

<!-- #region id="Lg8-UjeUkawQ" -->
### 字串 String
- 以單引號(`'`)或雙引號(`"`)前後括起來的任意輸入文字。
- 如果文句中有單/雙引號，則應以雙/單引號避免錯誤。
- 超過一行的字串以3個單引號或3個雙引號包夾
- 不想換行的分段輸入，在程式行末增加`\`符號
    
<!-- #endregion -->

```python id="zMExXr8VlwDq" colab={"base_uri": "https://localhost:8080/"} outputId="5fd7b0ff-9455-4791-eb82-1b6dc530d979"
print("Hello World")
print('Hello World')

print('I love "eat" !')
print("I love 'eat' !")
```

```python colab={"base_uri": "https://localhost:8080/", "height": 35} id="zkNHnHkoX41W" outputId="d08d1d93-02bb-418f-d90d-ffa6f90c42ab"
"""ghghghjhjhjlhjk
jkjkjkjkj"""

```

```python id="4iIuZRdM-c59" colab={"base_uri": "https://localhost:8080/", "height": 35} outputId="97e6a5f0-b62b-4815-9ada-be81b66902a3"
  #會因程式換行以致輸出結果換行
  """
  我是胖虎，我是孩子王
  我是胖虎，我是孩子王
  """
```

```python id="Z9Hrr9yKm5sA" colab={"base_uri": "https://localhost:8080/", "height": 35} outputId="b30e04c7-2eed-4885-cbe9-10f078915615"
  #輸出結果不會換行的方式，行末增加"\"
  '''\
  我是胖虎，我是孩子王\
  我是胖虎，我是孩子王\
  '''
```

<!-- #region id="LCXZNqWMiFw-" -->
### 逸出字元(Escape Character)
    
|逸出字元|意義|
|-|-|
|`\'`|顯示出單引號|
|`\"`|顯示出雙引號|
|`\\`|顯示出反斜線|
|`\n`|換行|
|`\t`|tab|
<!-- #endregion -->

<!-- #region id="9OcZ8EpvlG3q" -->
### 檢查資料型態
```
type()
```
<!-- #endregion -->

<!-- #region id="9V4pjX4olOCw" -->
### 轉換資料型態
- 轉為文字`str()`，如`str(87)`，結果原來會判別為數字的87變成文字的'87'。
- 轉為整數`int()`。
- 轉為浮點數`float()`。
- 轉為布林`bool()`，非0即為真。
<!-- #endregion -->

```python id="ue9GjsFScrZL" colab={"base_uri": "https://localhost:8080/", "height": 35} outputId="9d58824d-2a53-4dcc-f41e-4fe3695ff95f"
# your code here:

str(87)

```

<!-- #region id="RzlIdwOKu2xP" -->
## 儲存容器
-串列 list 、元組 tuple 、集合 Set

<!-- #endregion -->

<!-- #region id="QTqmcPogoAs0" -->
### 串列 list `[]`


<!-- #endregion -->

<!-- #region id="rDYDucLroF4i" -->
|計算|說明|
|-|-|
x in L	|判斷 x 是否在 L 中
x not in L	|判斷 x 是否不在 L 中
L + t	|連接 L 及 t
L ＊ n, n ＊ L	|將 L 重複 n 次連接 L 本身
L[i]|	取得索引值 i 的元素
L[i:j]	|取得索引值 i 到 j 的子序列
L[i:j:k]	|取得索引值 i 到 j ，間隔 k 的子序列
len(L)	|回傳 L 的元素個數
min(L)	|回傳 L 中的最小值
max(L)	|回傳 L 中的最大值
L.index(i)	|取得 L 中第一次出現 i 的索引值
L.count(i)	|累計 L 中 i 出現的個數
<!-- #endregion -->

```python id="BGyqM9o1oTdA" colab={"base_uri": "https://localhost:8080/"} outputId="3c45210c-f1d3-4b10-905f-1efc6191333a"
L = [9, 5, 2, 7]

L
```

```python id="VoWmZHkiogA2" colab={"base_uri": "https://localhost:8080/"} outputId="e5972b2b-5a0e-4815-a482-b57643b08b53"
len(L)
```

```python colab={"base_uri": "https://localhost:8080/"} id="qdXA5f8NaCaZ" outputId="20584ad4-a0da-47b8-8dab-0e036641cb69"
L[0]
```

```python id="KaxP4OKeoqh1" colab={"base_uri": "https://localhost:8080/"} outputId="6e9092a0-4c13-4027-af35-1b76da8acd81"
L[:] # [魚頭 : 尾前]
```

```python id="7rpX3_p5_OYe" colab={"base_uri": "https://localhost:8080/"} outputId="ea4b724f-ac2c-4ddc-c570-a10bfd934d52"
L[0:2]
```

```python id="LU1lNsNJ_r2n"
k=['庭','院','深','深','深','幾','許']
```

```python id="3r1jy2AIsx1h"
#深深深
```

```python id="2iXDaYmz_wYH" colab={"base_uri": "https://localhost:8080/"} outputId="c51175f4-3517-4c3d-8698-903129dd14e5"
k[2:5]
```

```python id="47gS6DypAHCR"
!pip install twstock
```

```python id="lk8hCNuYAM17" colab={"base_uri": "https://localhost:8080/"} outputId="1b598552-05ae-40b0-ed73-4e1afac2838b"
import twstock

stock = twstock.Stock("2330")

stock.price
```

```python id="qOpc8ZHrAaBc" colab={"base_uri": "https://localhost:8080/"} outputId="d5225e46-766d-4e6f-f017-5efac01592f1"
stock.price[-1]
```

<!-- #region id="s1UpBOeVoKjw" -->
|計算|說明|
|-|-|
L[i] = x	|將索引值 i 的元素指派為 x
L[i:j] = t	|將索引值 i 到 j 的元素指派為 t ， t 為迭代器
del L[i:j]	|刪除索引值 i 到 j 的元素
L[i:j:k] = t	|將索引值 i 到 j ，間隔 k 的元素指派為 t ， t 為迭代器
del L[i:j:k]	|刪除索引值 i 到 j ，間隔 k 的元素
list comprehension	|列表推導式：運用運算式生成新的串列
<!-- #endregion -->

```python id="Ifllvb53tl3C" colab={"base_uri": "https://localhost:8080/"} outputId="87b0f693-55e8-421e-d9e6-af21c200f761"
#for 迴圈


for i in [1,2,3,4]:
    print(i*i)

```

```python id="Xc_-D-V3ux_A" colab={"base_uri": "https://localhost:8080/"} outputId="c14580ed-fb7d-4f90-822f-de15a1860c7d"
r = []

for i in range(10):
    r.append(i)

r
```

```python id="WMF5iRcNA1ZH"
a=[]
for i in range(100):
  if i % 2 == 1:
    a.append(i)

a
```

```python id="kQLNC6hlj_16"
#如以原本寫法如下

L = [9, 5, 2, 7]

result = [] #先創空list

for x in L: #for迴圈逐一判斷
  if x > 3: #判斷條件
    result.append(x) #符合的結果附加到result串列裡

print(result)
```

```python id="5tNAtB4DozqD"
#列表推導式list comprehension

[x for x in L if x > 3]
```

```python id="sd4ZOZRSwDjX"
a = [ i for i in range(10)]
a
```

```python id="AsFVXVT0wYrg"
b = [ i*i for i in range(10) if i % 2 == 1]
b
```

```python id="_vOnagPZBN2V" colab={"base_uri": "https://localhost:8080/"} outputId="f41ec84e-457b-4aca-a66a-280530c51590"
%%timeit
a=[ i**2
   for i in range(100)
   if i % 2 ==1]
a
```

```python colab={"base_uri": "https://localhost:8080/"} id="Cap7FWwWRe--" outputId="a1465d7e-4846-4134-bff2-7d9d3dda074b"
%%timeit

a=[]
for i in range(100):
  if i % 2 == 1:
    a.append(i*i)

a
```

```python id="7vzuXp_84-9D"
#sorted(iterable, *, key=None, reverse=False)

sorted_L = sorted(L , reverse=True)
sorted_L
```

<!-- #region id="cLMHuRG5oNKI" -->
|計算|說明|
|-|-|
list.append(x)	|將 x 附加到 list 的最後
list.extend(x)	|將 x 中的元素附加到 list 的最後
list.count(x)	|計算 list 中 x 出現的次數
list.index(x[, i[, j]])	|回傳 x 在 list 最小的索引值
list.insert(i, x)	|將 x 插入 list 索引值 i 的地方
list.pop([i])	|取出 list 中索引值為 i 的元素，預設是最後一個
list.remove(x)	|移除 list 中第一個 x 元素
list.reverse()	|倒轉 list 中元素的順序
list.sort([key[, reverse]])	|排序 list 中的元素
<!-- #endregion -->

<!-- #region id="CEPfC4nYwcNK" -->
### 元組 tuple ()
<!-- #endregion -->

<!-- #region id="B73EuJmmwYUl" -->
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

<!-- #endregion -->

```python id="UMAdC1mvwhdO" colab={"base_uri": "https://localhost:8080/"} outputId="b78bfb71-1c0c-4aba-ca6c-403b206fa7b1"
t = 2, 4, 6, 8
type(t)
```

```python id="ohA0lfRQze1B" colab={"base_uri": "https://localhost:8080/"} outputId="15a6a4ab-98c3-406d-b3c5-e1fe8d643f3d"
L
```

```python id="oW6mwEnLwl-N" colab={"base_uri": "https://localhost:8080/", "height": 201} outputId="576240b1-2130-4853-8023-67b70235757e"
#更改會報錯
t[0] = 1
```

```python id="KXlYCiIKDtOi" colab={"base_uri": "https://localhost:8080/"} outputId="580d73f3-900a-43ba-e6d2-07d7159ccd0f"
2 in t
```

<!-- #region id="XtYhHji5xVjZ" -->
### 集合Set {}

<!-- #endregion -->

<!-- #region id="1CUyljg5xURE" -->
- 集合set使用大括弧圍起來，但沒有重複的元素，且無序的存放元素。可將集合視為無鍵的字典物件。
- 針對集合的`in`操作速度非常快，資料量大時更適合。
- 不常用，但用在找出不重複的資料時好用。
<!-- #endregion -->

```python id="rdCJjxDOxWiG" colab={"base_uri": "https://localhost:8080/"} outputId="9f8ecd83-3b89-4894-a65c-bf9a15572eed"
s1 = {9,9,5,5,2,2,7,7}
s2 = {9,5,2,7}
s1 == s2
```

```python id="PQFwEpzq0Kcv" colab={"base_uri": "https://localhost:8080/"} outputId="4bfdc9c9-f4c5-4651-ddba-778eb342e0ad"
s1
```

```python id="lnufk7NG0hrW"
# !pip install jieba
```

```python id="ElCI5lmUZd7P"
import jieba

text = """2023 iThome 鐵人賽
iThome 鐵人賽是 IT 圈的年度盛事，是推動台灣 IT 技術向上成長的重要力量！每年逾千名 IT 行內人透過鐵人賽「連續 30 天發表技術文章不中斷」，寫出一整年的成長與學習、爆發驚人的技術能量。
鐵人們在賽事中寫下的成果，深獲業界好評與肯定。在博碩文化與 iThome 攜手合作之下，從 2018 年開始，陸續出版了多位得獎者的作品，讓得獎的鐵人們得以分享他們的榮耀與成果，幫助更多的讀者群、發揮更大的影響力，並且在寫code的人生中，為自己寫下最珍貴的那一頁。
在 iThome 鐵人賽的 30 天挑戰中，參賽者每一天都必須努力趕在午夜 12 點前、克服萬難，按下【送出】鍵，更別說賽期中還有中秋、國慶兩大殺手連假。當你已經艱辛奮鬥，攀越學業、社交、職場、家庭等一座座山峰，不管是喘氣休息、還是正駐足欣賞當前美景，是否還有勇氣與毅力，繼續登頂？許多鐵人們回想參賽以來最大的收獲，往往就是「原來我做得到」。
越來越多 IT 人透過 iThome 鐵人賽展現自我，並自豪地將賽事成果列入自己的履歷（讓徵才企業垂涎不已）。不用高估世界，也不用低估自己，今年就和眾多 IT 同儕一起喚醒心中最強大的鐵人！再一步，世界就在你的腳下。"""

wordlist = jieba.cut(text,cut_all=False)
wordlist = [ seg for seg in wordlist ]

wordlist
```

```python id="oBT4TyDGcons"
wordset = set(wordlist)
wordset
```

```python id="xBkiJvWG2ZRs"
'鐵人' in wordlist
```

```python id="kRC_l6BDM2Iq"
%%timeit
'鐵人' in wordlist
```

```python id="TwD4ebjbM9Qb"
%timeit '鐵人' in wordset
```

<!-- #region id="oLfIEvonyY8i" -->
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

方法|說明
-|-
s.add(e)|增加 e 為 s 的元素
s.remove(e)	|從 s 中刪除元素 e

<!-- #endregion -->

<!-- #region id="QwX0KwQBVi-1" -->
### 字典Dictionary
<!-- #endregion -->

<!-- #region id="9IWvGnwmVq0I" -->
- 以`{}`以及冒號`:`來分隔鍵與值，以創建字典物件
- 建立字典變數可利用大括弧，裡頭以 `key:value` 為配對的資料項目，每一筆資料再以逗號區隔開，例如
`d1 = {one:"a", two:"b"}`

- 使用字典須注意， key 必須是不可變的資料型態，且不可重複，如數字、字串 (string) 等； value 沒有限制，因此有需要的話，使用串列 (list) 或字典皆可。

- 也可以利用字典型態的建構子 (constructor) 建立物件。
<!-- #endregion -->

<!-- #region id="Ho0QRmRsEU4B" -->
- 字典、串列與JSON相似，用法可以相互參照
- 一個公車交通資訊API [MOTC Transport API V2](https://ptx.transportdata.tw/MOTC/?t=Tourism&v=2#/)
<!-- #endregion -->

<!-- #region id="9mg2VtUeDAH5" -->
- 一個產品資訊API
    ```
    //
    //取得產品列表(Get)：/api/livejs/v1/customer/{api_path}/products
    {
    "status": true,
    "products": [
        {
        "category": "產品分類 (String)",
        "image": "產品圖片 (String)",
        "id": "產品ID  (String)",
        "title": "產品名稱  (String)",
        "origin_price": "產品原始價錢 (Number)",
        "price": "產品銷售價錢 (Number)"
        }
    ]
    }
    ```
<!-- #endregion -->

```python id="zdrucczYE6al"
{"數學": [100, 90, 80, 70] }
```

```python id="aC9BgZiSE-EA"
身高體重 = {"andy": [183, 70], "Alice": [163, 45]}
```

```python id="qTzsMUESFGBc"
身高體重
```

```python id="xZlstgZbWVuS" colab={"base_uri": "https://localhost:8080/"} outputId="4aa4e100-68d5-42c9-90c2-1792a268974b"
{"one":"a", "two":"b"}
```

<!-- #region id="R9DcrdEBUMhW" -->
- 組成dict的4種方法
<!-- #endregion -->

```python id="vNMqqvQTFLUW"
dict(one="a", two="b")
```

```python id="5AdTF5ZeFM03"
dict({"one":"a", "two":"b"})
```

```python id="75nYlnOEFPE0"
dict(zip(("one", "two"), ("a", "b")))
```

```python id="f75wL86m4YaP"
dict([["one", "a"], ["two", "b"]])
```

<!-- #region id="cb6Y3ySDWvaS" -->
- 字典物件可進行以下的運算

|計算|	說明|
-|-
d[key]	|從 d 中取得 key 的 value
d[key] = value	|指定 d 的 key 的值為 value
del d[key]	|刪除 d 的 key 值
key in d	|判斷 key 是否在 d 中
key not in d	|判斷 key 是否不在 d 中
iter(d)	|回傳由 d 的 key 建立的迭代器
len(d)	|回傳 d 的配對資料個數
<!-- #endregion -->

<!-- #region id="nV9n9aSyXAAR" -->
- 字典物件的方法 (method)

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

<!-- #endregion -->

```python id="zCjgtIELt_Po"
d1 = {'a' : 'C8763', "b" : [9, 5, 2, 7]}
d1
```

```python id="4SlfFqXU5rNT"
type(d1["b"])
```

```python id="RdJ02qDbuDRq"
d1["天線寶寶"]="你好"
d1
```

```python id="O4OpK27r6A1Y"
bike = [{"地點":"台中火車站","車位":0},{"地點":"高美濕地","車位":100}]
```

```python id="y3TYe_PjuH2t"
d1['b']
```

```python id="_irZR6qluL94"
'b' in d1
```

```python id="qi3nSp6QuP_K"
del d1['b']
d1
```

```python id="85JNHCiDuWZS"
d1.keys()
```

```python id="q898i3dEuaQR"
d1.values()
```

```python id="ssU0_oTS3Som"
d1.items()
```

<!-- #region id="d3Y7iVhiug3C" -->
- 可以update方法將字典合併
<!-- #endregion -->

```python id="--Qq2vucurMp"
d1.update({'b':9487 , 'c': 'ithome'})
d1  # 'b':[9,5,2,7]被覆寫掉了
```

<!-- #region id="9y236yrdSumf" -->
## 格式化輸出
<!-- #endregion -->

<!-- #region id="0ucylrK0Sw3g" -->
### 認識print()函式

<!-- #endregion -->

<!-- #region id="MNGgXNA3y3aS" -->

- `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)`
    - `*objects`: 接受輸出的內容，多筆資料以逗號隔開。
    - `sep`: 間隔，預設一個空白。
    - `end`: 預設為`\n`即換行。
    - `file`: 預設為螢幕輸出。
    - `flush`: 預設為布清除資料緩衝區。
- 各參數不指定修改即為預設值。
- 未來各種函數詳細內容可參閱文檔，或使用`help(print)`、`?print`查詢。
<!-- #endregion -->

```python id="5cfymMVxUXCt"
?print
# help(print)
```

<!-- #region id="oUsFs5RcSzWy" -->
### 格式化 print() 輸出語法
<!-- #endregion -->

<!-- #region id="fTxPF08mS4PI" -->
#### `%`
- 以類似C語言的`printf`語法輸出


<!-- #endregion -->

<!-- #region id="_vCXXuaQVHa5" -->

|語法|說明|
|-|-|
|%s|輸出文字
|%f|輸出浮點數
|%d|輸出十進位整數
|%e、%E|以科學記號輸出數值
|%o|以八進位整數方式輸出數值
|%x、%X|以十六進位整數方式輸出數值
|%c|以字元方式輸出
|%r|以 repr() 函數輸出文字
|%%|輸出 % 百分比符號

<!-- #endregion -->

```python id="8gzV5_7RinVp" colab={"base_uri": "https://localhost:8080/"} outputId="78d7591d-ddd5-42a8-97fa-1004f535bfad"
word_1 = 'Main9'
word_2 = '48794'
word_3 = '狂'
print('%s%s%s' % (word_1, word_2, word_3))
```

<!-- #region id="UAMskvadWh0y" -->
![](https://imgur.dcard.tw/P30BHIO.jpg)

<!-- #endregion -->

```python id="fCtrN1qMAx2C"
#新八戰鬥力
fp = {"新八":362, "一般人":360}
```

```python id="_2f5-dN89GjU" colab={"base_uri": "https://localhost:8080/"} outputId="f48edb04-8b37-4df3-dde2-f6f430d85bd7"
fp["新八"]
```

```python id="t5wzI5_B9mKa" colab={"base_uri": "https://localhost:8080/"} outputId="823b3ab4-8160-4182-b5dd-71cb43a07c7d"
print(
    "志村新八比一般人強%d個昆布，戰鬥力比一般人高%.2f%%個昆布" %(
        fp["新八"] - fp["一般人"],
        (fp["新八"] - fp["一般人"])/fp["一般人"] *100)
    )
```

```python id="eJx4RyxcEkXs" colab={"base_uri": "https://localhost:8080/"} outputId="1b83d102-a2e9-4962-fac6-21bb1e5af546"
fp1 = fp["新八"] - fp["一般人"]
fp2 = (fp["新八"] - fp["一般人"]) / fp["一般人"] *100

print("志村新八比一般人強%d個昆布，戰鬥力比一般人高%.2f%%個昆布" % (fp1, fp2))
```

<!-- #region id="M3WkiendU-g1" -->

##### `%`空間與對齊
- 控制輸出排版結果，以及控制小數點顯示位數
- 以`%s`的`%`及`s`中間加入格式語法表示

|目的|表示|
|-|-|
|以m格輸出|`"%ms" % _`|
|數值空白前補0|`"%0md" % _`|
|以m格靠左對齊|`"%-ms" % _`|
|限制輸出字串長度上限|`"%.ms" % _`|
|浮點數設定總寬度m及小數位數n|`"%m.nf" % _`|
|強迫顯示正負號|`"%+d" % _`|
|負號顯示、正數留空|`"% d" % _`|
<!-- #endregion -->

<!-- #region id="nYsQWeFXVNZO" -->
#### `format`
<!-- #endregion -->

<!-- #region id="Cp_3xAYyS_oK" -->
- `format`會自動處理各種類型的資料。
- 如有2個以上的格式化輸出內容

<!-- #endregion -->

```python id="AmvkbMTwVPst" colab={"base_uri": "https://localhost:8080/"} outputId="83b86321-80b2-4685-f079-5193fe42c100"
# 字串格式化
msg='{}, {}!'.format('Hello','World')
print(msg)
```

```python id="9cfZMwCNVbzP" colab={"base_uri": "https://localhost:8080/"} outputId="24a46679-fa65-4398-fa3b-bdf2f3013eaf"
#照順序
print("{} , {}!".format("Hello","World"))
```

```python id="AYL4MfuKJBG9" colab={"base_uri": "https://localhost:8080/"} outputId="26394d8b-0550-48b1-92fa-9fa764f4c952"
#自編順序
print("{1} , {0}!".format("World","Hello"))
```

```python id="gT5SnivHFkBA" colab={"base_uri": "https://localhost:8080/"} outputId="5f96b3bc-9660-416b-e8d1-0ae7661ff684"
print("志村新八比一般人強{:^+10.3f}個昆布，戰鬥力比一般人高{:.2}%個昆布".format(fp1,fp2))
```

<!-- #region id="L5PmSyumVYKj" -->
##### `format`空間與對齊
    
|目的|表示|
|-|-|
|以m格輸出|`"{:m}".format()`|
|數值空白前補0|`"{:0m}".format()`|
|靠右對齊|`"{:>m}".format()`|
|靠左對齊|`"{:<m}".format()`|
|置中對齊|`"{:^m}".format()`|
|限制輸出字串長度上限|`"{:.m}".format()`|
|浮點數設定總寬度m及小數位數n|`"{:m.nf}".format()`|
|強迫顯示正負號|`"{:+m}".format()`|
|負號顯示、正數留空|`"{: m}".format()`|

<!-- #endregion -->

<!-- #region id="uNwe6na8o5NM" -->
#### `f-string`
- Python 的格式化輸出自3.6版本起支援以 `f` 作為字串開頭的格式化代碼，更為簡潔易用。
- 排版比照`format()`用法。
```
f"{word:m.nf}"
```

<!-- #endregion -->

```python id="lBPhsGt7pM5g"
#3種寫法一次比較
name = "巧虎"
age = 3
```

```python id="onf75mL_KuHM" colab={"base_uri": "https://localhost:8080/"} outputId="3aed5855-07a9-4fa6-c9b8-0b435895db5c"
print("大家好我是%s，我今年%s歲!"% (name, age))
print("大家好我是{}，我今年{}歲!".format(name, age))
```

```python id="qGKQMAfkKpr2" colab={"base_uri": "https://localhost:8080/"} outputId="522fa07f-a032-42de-97d4-c04470f5c41b"
print(f"大家好我是{name}，我今年{age}歲!")
print(f"{name}好乖，叔叔帶你喝養樂多!")
```

```python id="UqWQyFlliuSi" colab={"base_uri": "https://localhost:8080/"} outputId="1d4fc519-02ae-47cc-816b-4a1935e18f93"
print(f"大家好我是{name:^10}，我今年{age:^10.1f}歲!")
```

```python id="P1clQpHllbKe" colab={"base_uri": "https://localhost:8080/"} outputId="10f75213-ec4a-4c97-af74-8c1e23c33ba0"
import requests

say = "大家好我是啾啾協"
url = f"https://howger.orange.tw/?mode=convert&translate=1&keys={say}&s=1.5"

r = requests.get(url)
mov = r.text.split("id=")[1][:13]
mp4 = f"https://howger.orange.tw/data/{mov}.mp4?"
print(mp4)
```

```python id="ALiKlYNKnCcg" colab={"base_uri": "https://localhost:8080/", "height": 471} outputId="029f2204-a22d-48e4-a51d-51182d2ffe46"
from IPython.display import HTML
from base64 import b64encode


HTML(f"""
    <video width=800 controls>
        <source src={mp4} type="video/mp4">
    </video>"""
    )
```

<!-- #region id="qfTjluhRySkS" -->
## 第二個動手做 - 用`f-string`製作Google Map 有效的超連結


<!-- #endregion -->

<!-- #region id="bUJuEVfciR-7" -->
### 網址挖洞練習:
- 透過以下程式碼，搜尋地名、經緯度。
- 用地名、經緯度等方法建立有效的 Google Map 連結
- 完成要求:
  1. 用 f-string
  2. 輸出連結可連到正確位址
  3. 換地點

### 有效連結範例，請好好觀察網址
- 經緯度定位
    - https://www.google.com/maps/search/?api=1&map_action=map&zoom=16&query=24.149660,120.684166
- 以地標搜尋
    - https://www.google.com/maps/search/?api=1&query=台中科大
- 導航
    - https://www.google.com/maps/dir/?api=1&origin=台中火車站&destination=台中高鐵&travelmode=transit  (travelmode = [driving, walking, bicycling, transit)


### 可查閱的資料
- [Google Map Url 指引](https://developers.google.com/maps/documentation/urls/get-started?hl=zh-tw)
- [好心人整理](https://svc.011.idv.tw/CodeHelper/Google/GISApi/index.htm)

<!-- #endregion -->

```python id="yTk3wlwwvTUU"
!pip install geocoder
```

```python id="WtxBQFeGsWoy"
# 查經緯度座標，注意Google MAP經緯度少一位數
import geocoder

location_name = "國立台中科技大學" #@param {type:"string"}
location_gps = geocoder.osm(location_name).latlng

print(location_gps)
```

```python id="T-t5Csg4uaE6"
# 作業- 建立使用 f-string 建立有效的 Google Map 連結
# 完成要求: 1.用 f-string 2.輸出連結可連到正確位址

locate= "???"

url = f'...{locate}.'



print(url)
```

<!-- #region id="D0eFantpcZML" -->
## 延伸學習(後續會教)
<!-- #endregion -->

```python id="xSBGeQbVaAbF"
import requests

# https://www.google.com/maps/search/?api=1&map_action=map&zoom=16&query=24.149660,120.684166
payload  = {"api":"1", "map_action":"map", "zoom":"16", "query":"24.149660,120.684166"}
r = requests.get(
    'https://www.google.com/maps/search/',
    params=payload
    )

print(r.url)
```

```python id="_ovvqTCFZUg8"
params = {'key1': 'value1', 'key2': 'value2'}
r = requests.get('http://httpbin.org/get', params=params)
print(r.url)
```
