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
<a href="https://colab.research.google.com/github/willismax/MediaSystem-Python-Course/blob/main/01.Intro-Python/PythonBasic_3.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

<!-- #endregion -->

<!-- #region id="6OZu7Iytc9vG" -->
#  Python->基礎語法#3 儲存容器、控制敘述、列表推導式
<!-- #endregion -->

<!-- #region id="UZ34YQevW6W4" -->
![](https://python.rs/pylogo.png)
<!-- #endregion -->

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

```python id="BGyqM9o1oTdA" colab={"base_uri": "https://localhost:8080/"} outputId="3246d22f-4634-44a7-a621-629f163677e5"
L = [9, 5, 2, 7]

L
```

```python id="VoWmZHkiogA2"
len(L)
```

```python id="qdXA5f8NaCaZ"
L[0]
```

```python id="KaxP4OKeoqh1"
L[:] # [魚頭 : 尾前]
```

```python id="7rpX3_p5_OYe"
L[:2]
```

```python id="LU1lNsNJ_r2n"
k=['庭','院','深','深','深','幾','許']
```

```python id="3r1jy2AIsx1h"
#深深深
```

```python id="2iXDaYmz_wYH"
k[2:5]
```

```python id="47gS6DypAHCR"
!pip install twstock
```

```python id="5AZ5BJLFPLIn"
!twstock -b 2330 6223
```

```python id="lk8hCNuYAM17"
import twstock

stock = twstock.Stock("2330")
stock.price
```

```python id="qOpc8ZHrAaBc" colab={"base_uri": "https://localhost:8080/"} outputId="b7d074d2-79ba-4992-88ef-620a1da5be1e"
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

```python id="Ifllvb53tl3C"
#for 迴圈


for i in [1,2,3,4]:
    print(i*i)

```

```python id="Xc_-D-V3ux_A"
r = []

for i in range(10):
    r.append(i*i)

r
```

```python id="WMF5iRcNA1ZH"
a=[]

for i in range(100):
    if i % 2 == 1:
        a.append(i)

a
```

```python id="sd4ZOZRSwDjX"
a = [ i for i in range(10)]
a
```

```python id="jY0LBzIsxOLY"
a = [ i
     for i in range(10)
     ]
a
```

```python id="AsFVXVT0wYrg"
b = [ i*i for i in range(100) if i % 2 == 1]
b
```

```python id="_vOnagPZBN2V"
%%timeit
a=[ i**2
   for i in range(100)
   if i % 2 ==1]
a
```

```python id="5tNAtB4DozqD"
#列表推導式list comprehension
[x for x in L if x > 3]
```

```python id="kQLNC6hlj_16"
#如以原本寫法如下
result = [] #先創空list
for x in L: #for迴圈逐一判斷
    if x >3: #判斷條件
        result.append(x) #符合的結果附加到result串列裡

print(result)
```

```python id="7vzuXp_84-9D"
#sorted(iterable, *, key=None, reverse=False)

sorted_L = sorted(L , reverse=True)
sorted_L
```

```python id="xDNQ9BKWSkVK"
L.index(2)
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
`x in s`	|判斷 x 是否在 s 中
`x not in s`	|判斷 x 是否不在 s 中
`s + t`	|連接 s 及 t
`s * n, n * s`	|將 s 重複 n 次連接 s 本身
`s[i]`	|取得索引值 i 的元素
`s[i:j]`	|取得索引值 i 到 j 的子序列
`s[i:j:k]`	|取得索引值 i 到 j ，間隔 k 的子序列
`len(s)`	|回傳 s 的元素個數
`min(s)`	|回傳 s 中的最小值
`max(s)`	|回傳 s 中的最大值
`s.index(i)`	|取得 s 中第一次出現 i 的索引值
`s.count(i)`	|累計 s 中 i 出現的個數

<!-- #endregion -->

```python id="UMAdC1mvwhdO"
t = 2, 4, 6, 8
type(t)
```

```python id="oW6mwEnLwl-N"
#更改會報錯
t[0] = 1
```

```python id="KXlYCiIKDtOi"
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

```python id="rdCJjxDOxWiG"
s1 = {9,9,5,5,2,2,7,7}
s2 = {9,5,2,7}
s1 == s2
```

```python id="PQFwEpzq0Kcv"
s1
```

```python id="lnufk7NG0hrW"
# !pip install -Uq jieba
```

```python id="ElCI5lmUZd7P"
import jieba

text = """2022 iThome 鐵人賽
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
    `x in s`	|判斷 x 是否在 s 中
    `x not in s`	|判斷 x 是否不在 s 中
    `s1 & s2`	|且運算，取得 s1 與 s2 的交集，等於 s1.intersection(s2)
    `s2 \| s2`	|或運算，取得 s1 與 s2 的聯集，等於 s1.union(s2)
    `s1 ^ s2`	|對稱差運算，取得 s1 與 s2 的對稱差集，等於 s1.symmetric_difference(s2)
    `s1 - s2`	|差運算，取得 s1 與 s2 的差集，等於 s1.difference(s2)
    `s1 < s2`	|判斷 s1 是否為 s2 的真子集
    `s1 <= s2`	|判斷 s1 是否為 s2 的子集，等於 s1.issubset(s2)
    `s1 > s2`	|判斷 s2 是否為 s1 的真子集
    `s1 >= s2`	|判斷 s2 是否為 s1 的子集，等於 s1.issuperset(s2)
    `len(s)`	|回傳 s 的元素個數
    `min(s)`	|回傳 s 中的最小值， s 中的元素必須是相同型態
    `max(s)`	|回傳 s 中的最大值， s 中的元素必須是相同型態


- 由於 set 型態是可變的，因此有額外兩個新增與刪除元素的方法：

方法|說明
-|-
`s.add(e)`|增加 e 為 s 的元素
`s.remove(e)`	|從 s 中刪除元素 e

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

```python id="Aazsr6QfWZEB"
#NG

{ ["k","e","y"] : 9527}
```

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
score = {"Math": [183, 70], "English": [163, 45]}
```

```python id="qTzsMUESFGBc"
score
```

```python id="xZlstgZbWVuS"
{"one":"a", "two":"b"}
```

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
d1["b"]
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
d1.update({'b':[1,2,3] , 'c': 'ithome'})
d1  # 'b':[9,5,2,7]被覆寫掉了
```

<!-- #region id="IdIiR6zAGgqG" -->
## Python控制敘述
<!-- #endregion -->

<!-- #region id="1mABK55VGqej" -->
### 條件判斷 `if`, `elif`, `else`
<!-- #endregion -->

```python id="S4E8-KI9rIly"
if True:
  print("YES")
```

```python id="NaiboZPgG6ti"
if 1:
  print("YES")
```

```python id="ZWN3T_uJG8-J"
%%timeit
if 8+9 is 17:
  print("YES")
```

```python id="EJ6EC8dqHPwZ"
%%timeit
if 8+9 == 17:
  print("YES")
```

```python id="OGBToi4lnV04"
鐵人幫第n日 = 20
鐵人幫文章篇數 = 19
if 鐵人幫文章篇數 - 鐵人幫文章篇數 <= 0:
    print("快點寫! 連庫拉皮卡要下船了阿")
else:
    print("不用趕稿我就讚!")
```

```python id="v9JlAUc9o0Wl"
鐵人幫第n日 = 19
鐵人幫文章篇數 = 19
if 鐵人幫文章篇數 - 鐵人幫文章篇數 == 0:
    print("快趕稿，別富奸阿!!!!")
elif 鐵人幫文章篇數 - 鐵人幫文章篇數 < 0:
    print("斷更! 挑戰失敗")
else:
    print("持續更新我就讚!")
```

<!-- #region id="HIHNeolCJNWg" -->
### 迴圈
<!-- #endregion -->

<!-- #region id="zwW3MXc1_6sq" -->
迴圈是程式語言的特徵，讓電腦協助你重覆執行某項判斷，主流用法就是for迴圈與while迴圈，另外python還有一個枚舉可以使用。


### For迴圈
- 先來個for迴圈吧，基本上for迴圈常與list結合使用，也常配合`range()`。

    ```
    for 指標 in 要判別的資料集:
        執行項目
    ```

<!-- #endregion -->

```python id="Xa3v9qxZJw3p"
for i in range(10):
  print (i, "is less than 10")
```

```python id="u8EClBs1JV7X"
for x in range(10):
  if x==3:
    continue # go immediately to the next iteration
  if x==8:
    break # quit the loop entirely
  print(x)
```

```python id="JOsTCx7dEEjJ"
for i in range(5): #[0,1,2,3,4]
    print(i)
```

```python id="SKpz5Q0FBnBH"
五俗藍 = ["紅茶", "綠茶", "烏龍", "鐵觀音", "多多冰沙", "咖啡冰沙", "抹茶拿鐵"]
```

```python id="8mvMpIF61_Bi"
for i in 五俗藍:
    print(i)
```

```python id="9xzcYwKc2FJ7"
for i in range(len(五俗藍)): # 以len()取出串列內容個數
    print(五俗藍[i])
```

<!-- #region id="NfKEe2JnARFs" -->
### 補充 range()

- range()是建構式(constructor)，用來表示不可變(immutable)的數字序列，例如[0,1,2,3,4]。
- 通常配合for迴圈產生內容。
- 建構式比已經占用記憶體位置的list省空間。

    ```
    range(start, stop[, step])
    range(stop)
    ```
<!-- #endregion -->

```python id="FzrOlfrxD4_j"
a = range(1,11,2)
```

```python id="GolHhWB6c4SA"
a
#[1,3,5,7,9]
```

```python id="2NG7Rc-3mRJs"
# a.start
a.step
```

```python id="raaS--LElqKV"
a.index(5)
```

```python id="5AqXoV_mmqEu"
i = iter(a)
i
```

```python id="Yw2oyBcQm2bO"
next(i)
```

<!-- #region id="YdY-mhy2lUjz" -->
### [Do it] HW3 : 九九乘法表
<!-- #endregion -->

<!-- #region id="_NUCX8nclUj1" -->
- 試輸出以下樣式
```
2*1=02 2*2=04 2*3=06 2*4=08 2*5=10 2*6=12 2*7=14 2*8=16 2*9=18
3*1=03 3*2=06 3*3=09 3*4=12 3*5=15 3*6=18 3*7=21 3*8=24 3*9=27
4*1=04 4*2=08 4*3=12 4*4=16 4*5=20 4*6=24 4*7=28 4*8=32 4*9=36
5*1=05 5*2=10 5*3=15 5*4=20 5*5=25 5*6=30 5*7=35 5*8=40 5*9=45
6*1=06 6*2=12 6*3=18 6*4=24 6*5=30 6*6=36 6*7=42 6*8=48 6*9=54
7*1=07 7*2=14 7*3=21 7*4=28 7*5=35 7*6=42 7*7=49 7*8=56 7*9=63
8*1=08 8*2=16 8*3=24 8*4=32 8*5=40 8*6=48 8*7=56 8*8=64 8*9=72
9*1=09 9*2=18 9*3=27 9*4=36 9*5=45 9*6=54 9*7=63 9*8=72 9*9=81
```
<!-- #endregion -->

```python id="BBh2vibJlUj1"
?print
```

```python id="_U58kIOElUj1"
# Your Code Here:



```

<!-- #region id="lW0kZXDpBnBG" -->
### enumerate()枚舉

假設我們要迭代list成員的名稱，並獲取list中每個成員的位置。可以用enumerate，又稱枚舉
<!-- #endregion -->

```python id="mF7nCOd1euSg"
[9,5,2,7]
{1:9, 2:5, 3:2 , 4:7}
```

```python id="6kd2F0eIBnBH"
for i, v in enumerate(五俗藍):
    print(i,v)
```

<!-- #region id="8nM73obEICAd" -->
### while迴圈

- while迴圈，除非成立才會跳出循環。
- 注意成為無窮迴圈。
- 適合不知道要重複執行多少次任務時。

    ```
    初始值
    while 條件式：
       程式區塊
       索引變化
    ```
<!-- #endregion -->

```python id="61sIbGMMIMv4"
x=0  #設定初始值
while x < 10:  #條件判斷
  print (x, "is less than 10")  #執行陳述
  x += 1  #初值增減 x=x+1
```

```python id="27Mj_-q7GMiz"
count = 0

while count < 6:
    print('The count is:', count)
    count += 1  #count=count+1

print ("Good bye!")
```

```python id="PDURjPN1GPYF"
# continue
i = 1
while (i < 6):
    i += 1   #  i=i+1
    if i%2 > 0: #1
        continue
    print(i)
```

```python id="qGajEMhzGTHk"
# break
i = 1
while (1):
    print(i)
    i += 1
    if i > 10:
        break
```

<!-- #region id="1J0wg1qrGVxU" -->
*現學現賣之「金庫密碼」
<!-- #endregion -->

```python id="VHmhbgspGY6s"
password = '' #先設一個空字串讓程式知道

while password != "1234":
  password = input("快點輸入密碼>>")

  if password == '1234':
    print("進來吧")
    break
  else:
    print("密碼錯誤再來一次")
```

<!-- #region id="TW9dZkrB7vA3" -->
- 通常密碼會單獨儲存在另一個檔案，作為環境變數。
<!-- #endregion -->

```python id="H4lxoQDr41tZ"
%%writefile config.py

# 金庫密碼
SERECT = '5678'
SERECT2 = '1111115678'
```

```python id="3CrBLpBO5r5R"
import config

password = '' #先設一個空字串讓程式知道

while password != config.SERECT:
  password = input("快點輸入密碼>>")

  if password == config.SERECT:
    print("進來吧")
    break
  else:
    print("密碼錯誤再來一次")

print(f"註: 密碼為 {config.SERECT}")
```

<!-- #region id="uU9-G8Th8Xxj" -->
- [註]: 在 Colab 如果遇到重複寫入 `config.py` 卻未更新參數時，請在選單[執行階段]選擇[重新啟動執行階段]，再執行一次。
<!-- #endregion -->

<!-- #region id="dv8BsUE9V6Dt" -->
### 例外陳述
<!-- #endregion -->

<!-- #region id="1QwaYCYQV-E9" -->
- 例外處理 (exception handling) 是利用 try 、 except 、 finally 及 else
- 所謂例外 (exception) 是指已知有可能發生的錯誤 (error) ，像是開啟檔案，檔案卻不存在，或除數為 0 等等的情況。

<!-- #endregion -->

```python id="u8pW3M6axwuK"
1/0
```

```python id="IfCWVwZZWzHs"
result = None
try:
    result = 1 / 0
except ZeroDivisionError:
    result = 1/1
    print("......")

print(result)
```

<!-- #region id="Kyg9-AXiWgk6" -->
- try: 所有可能發生例外的程式碼都要放在try來嘗試是否有錯誤
- except: 後空一格接例外類別 (class) ，底下程式區塊做相對應的例外處理
- else:假設沒有例外發生的處理
- finally 是例外處理結束後，無論如何都會執行的部分(可有可無)
<!-- #endregion -->

```python id="dfjTPID6YGQP"
try:                     #需嘗試有無錯誤的程式區塊
    a = 1 / 0
except:                   #錯誤的話則...(省略ZeroDivisionError錯誤類別描述)
    a = 0
else:                    #未發生例外狀況則...
    m1 = "未發生例外狀況，粉好沒事"
finally:                   #無論錯誤最後一定會執行的
    print("例外判斷結束句")

print(a)
print(m1)
```

```python id="MjMqhxjSzT5y"
try:                     #需嘗試有無錯誤的程式區塊
    a = 1 / None
except:                   #錯誤的話則...(省略ZeroDivisionError錯誤類別描述)
    a = 0
else:                    #未發生例外狀況則...
    m2 = "未發生例外狀況，粉好沒事"
finally:                   #無論錯誤最後一定會執行的
    print("例外判斷結束句")

print(a)
print(m2)
```

<!-- #region id="Y1V7f_WGZXgK" -->
## 練習:以try/except撰寫模組安裝

<!-- #endregion -->

<!-- #region id="8u37VW_9cFaY" -->
- 以try/except撰寫模組安裝，嘗試如果沒有安裝twswock模組([該模組介紹](https://twstock.readthedocs.io/zh_TW/latest/))，則安裝該模組。
  - 提示1: 先嘗試import模組，沒有的話則安裝在import模組。
  - 提示2: 安裝模組用到`!pip install 模組` 指令。
<!-- #endregion -->

```python id="pe5jvvSQ8j1_"
# !pip install twstock
```

```python id="IIovm8cG5g2W"
import twstock
```

```python id="acNP3e3cZ-qh"
#Please answer here
try:
    import twstock
except:
    !pip install twstock
    import twstock
```

<!-- #region id="TY3QLDDpXzF9" -->
## 列表推導式

<!-- #endregion -->

<!-- #region id="WOJuq2FIYh2c" -->
- 列表推導式(list comprehension)非常帥氣，可以用英文List Creation from For Loop來理解，用以創建具有篩選能力的迴圈，其結果存為list
<!-- #endregion -->

<!-- #region id="P2B4ORKYcbPS" -->
### 使用列表推導式
<!-- #endregion -->

```python id="ZdoFbIHza4rY"
list1 = []

for i in range(10):
    list1.append(i)

print(list1)
```

```python id="fdhrEWlA9Har"
[ i  for i in range(10) ]
```

```python id="D2dQ2QHBaCLk"
list2 = []

for i in range(10):
  if i%2>0:
    list2.append(i)

print(list2)
```

```python id="K5ek8LtIZNWK"
[ i for i in range(10) if i%2 > 0]
```

```python id="8Tf3U0EFZiXg"
[ i*i for i in range(10)]
```

```python id="dyKGiwxkZxT0"
[ i for i in range(10) if i%2>0 ]
```

<!-- #region id="BlJPJrTbclrJ" -->
### 使用列表推導式篩選字典
<!-- #endregion -->

```python id="6KWCuLxXbPaA"
dict1 = {'國文':87, '英文':78, '韓文':101, '穿越文':178, '史豔文':999}
dict1
```

```python id="y4CYJ4-U_HNR"
[ i for i in dict1 ]
```

```python id="fiT67datASuO"
dict1.keys()
```

```python id="r1y4lvfbAY6J"
dict1.values()
```

```python id="1bcl--iuc1Ku"
[ i for i in dict1.keys()]
```

```python id="eIsiwCoQcwA4"
[ i for i in dict1.values()]
```

```python id="1guxl-4Af1aZ"
[{k:v} for k , v in dict1.items()]
```

```python id="JvnNsPn4gA3k"
[k for k , v in dict1.items()]
```

```python id="MaKoQiTHA0rt"
dict1.items()
```

```python id="bf0tRbRxA5rW"
[ v for k,v in dict1.items()   ]
```

```python id="kjVYja6_gD3C"
[{k:v} for k , v in dict1.items()]
```

<!-- #region id="l1QshDtSdFPe" -->
## 練習:使用列表推導式篩選

<!-- #endregion -->

<!-- #region id="pKLCMvqcAgsc" -->
- 使用列表推導式篩選上述dict1之中，值不大於87是哪些key?
<!-- #endregion -->

```python id="pbekRm_uieF2"
# Your code here

[ k for k,v in dict1.items() if v<87]

```

<!-- #region id="7fPXV_hqDQM7" -->
- 請執行以下程式，並使用列表推導式篩選出文字的彈幕
  - 提示: 需先用for迴圈解析list，再解析每個dict，其中key = 其中key = "text"。也就是要2個for迴圈+if條件判斷。
<!-- #endregion -->

```python id="fdS6tU9rJ4A9"
#@title
danmu = [
    {
        "text": "頭香！！",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 0,
        "sn": 29146216,
        "userid": "Joyce14"
    },
    {
        "text": "2天看完+1 中配讚讚",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 140,
        "sn": 29190448,
        "userid": "miki71003911"
    },
    {
        "text": "4",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 143,
        "sn": 29148027,
        "userid": "Cs90412"
    },
    {
        "text": "沒人？",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 205,
        "sn": 29154223,
        "userid": "owokkgg1"
    },
    {
        "text": "彈幕好少",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 205,
        "sn": 29164510,
        "userid": "dean123811"
    },
    {
        "text": "彈幕少正常，畢竟大家都看過日文了。",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 222,
        "sn": 29477266,
        "userid": "r90230222"
    },
    {
        "text": "嗨",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 243,
        "sn": 29712805,
        "userid": "n910543"
    },
    {
        "text": "把自己組織的標章這樣亂貼不怕壁r康嗎",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 271,
        "sn": 29603007,
        "userid": "Repliroid"
    },
    {
        "text": "好笑，才要看中配。",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 280,
        "sn": 29762131,
        "userid": "jackypig777"
    },
    {
        "text": "t rr  r r r r r",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 305,
        "sn": 29156538,
        "userid": "osps8787"
    },
    {
        "text": "怪醫黑傑克的旁白",
        "color": "#A7FE39",
        "size": 2,
        "position": 2,
        "time": 492,
        "sn": 29164538,
        "userid": "dean123811"
    },
    {
        "text": "航海王的旁白～",
        "color": "#0036FA",
        "size": 2,
        "position": 0,
        "time": 555,
        "sn": 29741923,
        "userid": "brenda85ee"
    },
    {
        "text": "真希望能有多一點人支持中配",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 607,
        "sn": 29190478,
        "userid": "miki71003911"
    },
    {
        "text": "台配讚",
        "color": "#FF0026",
        "size": 2,
        "position": 2,
        "time": 650,
        "sn": 29191681,
        "userid": "kikilala7777"
    },
    {
        "text": "不得不說 這部中配真是夠水準 超讚",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 666,
        "sn": 29375554,
        "userid": "a29711412"
    },
    {
        "text": "寶寶們很需要中配",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 681,
        "sn": 29692074,
        "userid": "dinosimon"
    },
    {
        "text": "我有開字幕嗎🤔",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 1460,
        "sn": 29727426,
        "userid": "nses106001"
    },
    {
        "text": "回覆白字：有",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 1516,
        "sn": 29758563,
        "userid": "bir54040111"
    },
    {
        "text": "認真地說，好興奮真的沒挖庫挖庫有感",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 1543,
        "sn": 29812485,
        "userid": "s134587"
    },
    {
        "text": "有誰時在今天10/2看的嗎？",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 1869,
        "sn": 29738975,
        "userid": "s0714279"
    },
    {
        "text": "黃昏1人抵多人",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 1959,
        "sn": 29190501,
        "userid": "miki71003911"
    },
    {
        "text": "中文沒人看笑死",
        "color": "#BEBEBE",
        "size": 1,
        "position": 0,
        "time": 2030,
        "sn": 29396980,
        "userid": "yyh5687423"
    },
    {
        "text": "抽烟不好",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 2040,
        "sn": 29153140,
        "userid": "reborn1446"
    },
    {
        "text": "安妮亞的聲音好熟悉啊~",
        "color": "#FF0026",
        "size": 1,
        "position": 0,
        "time": 2593,
        "sn": 29758577,
        "userid": "bir54040111"
    },
    {
        "text": "有人嗎",
        "color": "#00C3FC",
        "size": 2,
        "position": 0,
        "time": 2731,
        "sn": 29246686,
        "userid": "AAOX2048"
    },
    {
        "text": "支持",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 2755,
        "sn": 29783640,
        "userid": "rip66omg"
    },
    {
        "text": "安妮亞日文配音比較可愛😍",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 2994,
        "sn": 29922328,
        "userid": "JIMY230fghkb"
    },
    {
        "text": "黃昏爆肝工作中",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 3045,
        "sn": 29190546,
        "userid": "miki71003911"
    },
    {
        "text": "爆肝還要被鄰居八卦",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 3393,
        "sn": 29190557,
        "userid": "miki71003911"
    },
    {
        "text": " 整天在那八卦是有比較好嗎",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 3414,
        "sn": 29603076,
        "userid": "Repliroid"
    },
    {
        "text": "水島太太",
        "color": "#FFFFFF",
        "size": 1,
        "position": 2,
        "time": 3435,
        "sn": 29496425,
        "userid": "Yamidovik"
    },
    {
        "text": "爆肝還要被精神攻擊",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 3483,
        "sn": 29268265,
        "userid": "AHPS3335"
    },
    {
        "text": "我想到今天我的每日任務還沒解啊",
        "color": "#FF0026",
        "size": 1,
        "position": 0,
        "time": 3593,
        "sn": 29758588,
        "userid": "bir54040111"
    },
    {
        "text": "要等到10月了",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 4032,
        "sn": 29266327,
        "userid": "fcsd9822"
    },
    {
        "text": "噗，害我噴飯了!!",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 4104,
        "sn": 29266324,
        "userid": "fcsd9822"
    },
    {
        "text": "黃昏爺爺",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 4115,
        "sn": 29380929,
        "userid": "wxz810"
    },
    {
        "text": "好像被榨乾三天三夜www",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 4169,
        "sn": 29190602,
        "userid": "miki71003911"
    },
    {
        "text": "全家都藍白條紋",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 4371,
        "sn": 29603325,
        "userid": "Repliroid"
    },
    {
        "text": "安妮亞棒讀中",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 4441,
        "sn": 29190632,
        "userid": "miki71003911"
    },
    {
        "text": "棒讀中",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 4443,
        "sn": 29153153,
        "userid": "reborn1446"
    },
    {
        "text": "台配聽起來有點尷尬",
        "color": "#00C3FC",
        "size": 1,
        "position": 0,
        "time": 4539,
        "sn": 29758600,
        "userid": "bir54040111"
    },
    {
        "text": "安妮亞的棒讀好棒www",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 4607,
        "sn": 29207680,
        "userid": "maedazen"
    },
    {
        "text": "嘟嘟~ 請搶 請搶",
        "color": "#FF0026",
        "size": 1,
        "position": 0,
        "time": 4693,
        "sn": 29181624,
        "userid": "AB123BA321"
    },
    {
        "text": "nobody",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 4871,
        "sn": 29170301,
        "userid": "lladc310"
    },
    {
        "text": "今天絕不加班!!!絕不!!!",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 4922,
        "sn": 29190647,
        "userid": "miki71003911"
    },
    {
        "text": "倒不了這句聽起來異常好笑",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5082,
        "sn": 29302717,
        "userid": "spfy"
    },
    {
        "text": "wwwww",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5160,
        "sn": 29742273,
        "userid": "kasky2021"
    },
    {
        "text": "<===0\\/0",
        "color": "#00C3FC",
        "size": 2,
        "position": 2,
        "time": 5185,
        "sn": 29154379,
        "userid": "owokkgg1"
    },
    {
        "text": "這麼大聲講出來真的沒問題嗎XDD",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5288,
        "sn": 29207707,
        "userid": "maedazen"
    },
    {
        "text": "講這種事小聲一點啦",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5293,
        "sn": 29165213,
        "userid": "bctroy91224"
    },
    {
        "text": "水築館wwwww",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5306,
        "sn": 29152796,
        "userid": "lina24680"
    },
    {
        "text": "這是強制劇情",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5332,
        "sn": 29603340,
        "userid": "Repliroid"
    },
    {
        "text": "強制加班ＸＤＤ",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5367,
        "sn": 29199725,
        "userid": "cycpe92062"
    },
    {
        "text": "好好笑笑死哈哈哈哈哈哈哈哈哈哈",
        "color": "#00C3FC",
        "size": 1,
        "position": 0,
        "time": 5370,
        "sn": 29824573,
        "userid": "gr108061"
    },
    {
        "text": "直接無視啊喂",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5376,
        "sn": 29758615,
        "userid": "bir54040111"
    },
    {
        "text": "一定要加班就是了(´◑∀◐｀)",
        "color": "#00C3FC",
        "size": 1,
        "position": 0,
        "time": 5416,
        "sn": 29709830,
        "userid": "bhes107367"
    },
    {
        "text": "請給我咖啡跟果汁！！！",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5419,
        "sn": 29242677,
        "userid": "swayoung"
    },
    {
        "text": "直接無視掉",
        "color": "#BEBEBE",
        "size": 1,
        "position": 0,
        "time": 5444,
        "sn": 29824581,
        "userid": "gr108061"
    },
    {
        "text": "群眾的耳朵怎麼了？",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5502,
        "sn": 29812553,
        "userid": "s134587"
    },
    {
        "text": "鯊嘎娜～",
        "color": "#00C3FC",
        "size": 1,
        "position": 0,
        "time": 5545,
        "sn": 29758298,
        "userid": "dd6667747"
    },
    {
        "text": "第一次來水族館的我",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5608,
        "sn": 29758620,
        "userid": "bir54040111"
    },
    {
        "text": "被強迫加班的黃昏好慘",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5826,
        "sn": 29190690,
        "userid": "miki71003911"
    },
    {
        "text": "跟來的",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 5909,
        "sn": 29758626,
        "userid": "bir54040111"
    },
    {
        "text": "這是小丸子吧",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 6097,
        "sn": 29149246,
        "userid": "toranaco"
    },
    {
        "text": "企鵝: 到底關我P事",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 6128,
        "sn": 29190712,
        "userid": "miki71003911"
    },
    {
        "text": "好可愛(///▽///)",
        "color": "#00C3FC",
        "size": 1,
        "position": 0,
        "time": 6449,
        "sn": 29709852,
        "userid": "bhes107367"
    },
    {
        "text": "老皮xDDD",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 6929,
        "sn": 29162606,
        "userid": "LWT1109"
    },
    {
        "text": "還自帶翻譯功能?",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 6955,
        "sn": 29478125,
        "userid": "esonic"
    },
    {
        "text": "老皮 笑死",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 6955,
        "sn": 29742342,
        "userid": "kasky2021"
    },
    {
        "text": "呸",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 7125,
        "sn": 29154446,
        "userid": "owokkgg1"
    },
    {
        "text": "宿醉 (X",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 7138,
        "sn": 29478132,
        "userid": "esonic"
    },
    {
        "text": "中配其實還不錯，不過真的感覺有點尬....",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 7263,
        "sn": 29253253,
        "userid": "adsl161040"
    },
    {
        "text": "柯南：我去一下廁所",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 7307,
        "sn": 29263584,
        "userid": "Jimmy50315"
    },
    {
        "text": "並沒有",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 7335,
        "sn": 29154456,
        "userid": "owokkgg1"
    },
    {
        "text": "grughurghyughtrduyh gh guhfdshnhueyiuyui",
        "color": "#FFFFFF",
        "size": 1,
        "position": 1,
        "time": 7431,
        "sn": 29192789,
        "userid": "ttc107357"
    },
    {
        "text": "企鵝：幹",
        "color": "#FFFFFF",
        "size": 1,
        "position": 2,
        "time": 7770,
        "sn": 29154482,
        "userid": "owokkgg1"
    },
    {
        "text": "超强記憶",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 7890,
        "sn": 29153234,
        "userid": "reborn1446"
    },
    {
        "text": "這記憶力根本超鬼",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 8068,
        "sn": 29190791,
        "userid": "miki71003911"
    },
    {
        "text": "克金玩家",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 8076,
        "sn": 29758658,
        "userid": "bir54040111"
    },
    {
        "text": "企鵝暴動中",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 8369,
        "sn": 29190801,
        "userid": "miki71003911"
    },
    {
        "text": "超強的記憶力XD",
        "color": "#00C3FC",
        "size": 1,
        "position": 0,
        "time": 8495,
        "sn": 29709893,
        "userid": "bhes107367"
    },
    {
        "text": "E=mc²",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 8504,
        "sn": 29758668,
        "userid": "bir54040111"
    },
    {
        "text": "這是替身攻擊",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 8536,
        "sn": 29204438,
        "userid": "wcltlcwty"
    },
    {
        "text": "就可以使出替身攻擊",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 8569,
        "sn": 29603392,
        "userid": "Repliroid"
    },
    {
        "text": "這隻企鵝似乎生病了，不如...",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 8732,
        "sn": 29370364,
        "userid": "zaq2272919"
    },
    {
        "text": "企鵝肉？！！",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 8794,
        "sn": 29812617,
        "userid": "s134587"
    },
    {
        "text": "啊啊啊啊啊",
        "color": "#FFFFFF",
        "size": 1,
        "position": 2,
        "time": 8860,
        "sn": 29154513,
        "userid": "owokkgg1"
    },
    {
        "text": "帽子上的符號真的是可以的嗎？XD",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 8973,
        "sn": 29812631,
        "userid": "s134587"
    },
    {
        "text": "一臉壞人樣",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9091,
        "sn": 29190821,
        "userid": "miki71003911"
    },
    {
        "text": "有杏仁味",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9285,
        "sn": 29381092,
        "userid": "wxz810"
    },
    {
        "text": "企鵝：嘎嘎啊啊（？？",
        "color": "#00C3FC",
        "size": 1,
        "position": 0,
        "time": 9504,
        "sn": 29709917,
        "userid": "bhes107367"
    },
    {
        "text": "<====好可愛",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9580,
        "sn": 29154537,
        "userid": "owokkgg1"
    },
    {
        "text": "鳴人是你？",
        "color": "#FDE53D",
        "size": 1,
        "position": 0,
        "time": 9809,
        "sn": 29485177,
        "userid": "Fifi03"
    },
    {
        "text": "利用老媽 可以阿~",
        "color": "#FF0026",
        "size": 1,
        "position": 0,
        "time": 9850,
        "sn": 29182370,
        "userid": "AB123BA321"
    },
    {
        "text": "被迫上吊www",
        "color": "#FFFFFF",
        "size": 0,
        "position": 0,
        "time": 9885,
        "sn": 29192242,
        "userid": "kikilala7777"
    },
    {
        "text": "遇上約兒的壞人好慘",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9892,
        "sn": 29190865,
        "userid": "miki71003911"
    },
    {
        "text": "四顆牙齒",
        "color": "#00C3FC",
        "size": 2,
        "position": 0,
        "time": 9929,
        "sn": 29774114,
        "userid": "mickeymouse0"
    },
    {
        "text": "~名場面~",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9947,
        "sn": 29151810,
        "userid": "gn01136933"
    },
    {
        "text": "WOW",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9971,
        "sn": 29267630,
        "userid": "az8541"
    },
    {
        "text": "安妮亞：哇嗚~",
        "color": "#00C3FC",
        "size": 1,
        "position": 0,
        "time": 9971,
        "sn": 29709928,
        "userid": "bhes107367"
    },
    {
        "text": "wow",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9972,
        "sn": 29165415,
        "userid": "bctroy91224"
    },
    {
        "text": "Wow~",
        "color": "#FDE53D",
        "size": 1,
        "position": 0,
        "time": 9972,
        "sn": 29194003,
        "userid": "Yarrows"
    },
    {
        "text": "wow",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9975,
        "sn": 29237404,
        "userid": "sgcvn8gc54"
    },
    {
        "text": "WOW",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9975,
        "sn": 29477321,
        "userid": "r90230222"
    },
    {
        "text": "wow~",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9977,
        "sn": 29207786,
        "userid": "maedazen"
    },
    {
        "text": "哇嗚~",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 9991,
        "sn": 29181859,
        "userid": "AB123BA321"
    },
    {
        "text": "wow",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 10040,
        "sn": 29500556,
        "userid": "tldj4aaup3"
    },
    {
        "text": "哇嗚~~",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 10041,
        "sn": 29190878,
        "userid": "miki71003911"
    },
    {
        "text": "wow",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 10043,
        "sn": 29207791,
        "userid": "maedazen"
    },
    {
        "text": "wow",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 10053,
        "sn": 29162877,
        "userid": "BHSN00004lel"
    },
    {
        "text": "這Wow是怎樣...",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 10061,
        "sn": 29212920,
        "userid": "P3e7k1k9a8"
    },
    {
        "text": "比對了一下兩版的wow 都很精隨wwwww",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 10122,
        "sn": 29250816,
        "userid": "cheeseq5"
    },
    {
        "text": "外遇對象是工作",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 10216,
        "sn": 29603433,
        "userid": "Repliroid"
    },
    {
        "text": "兩個天龍國八婆",
        "color": "#FF0026",
        "size": 1,
        "position": 1,
        "time": 10540,
        "sn": 29708138,
        "userid": "stupidcr6"
    },
    {
        "text": "地方媽媽戀愛了",
        "color": "#FFFFFF",
        "size": 1,
        "position": 2,
        "time": 10710,
        "sn": 29154576,
        "userid": "owokkgg1"
    },
    {
        "text": "這幕真的好溫馨",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 10894,
        "sn": 29190952,
        "userid": "miki71003911"
    },
    {
        "text": "快喝桂格養氣人蔘雞精(？",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 10985,
        "sn": 29381180,
        "userid": "wxz810"
    },
    {
        "text": "嫁了（？",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 11165,
        "sn": 29812666,
        "userid": "s134587"
    },
    {
        "text": "h03",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 11194,
        "sn": 29848217,
        "userid": "Aka10029"
    },
    {
        "text": "台配看來有必要重追一下",
        "color": "#FF0026",
        "size": 1,
        "position": 0,
        "time": 11401,
        "sn": 29758704,
        "userid": "bir54040111"
    },
    {
        "text": "波加曼",
        "color": "#BEBEBE",
        "size": 1,
        "position": 0,
        "time": 11684,
        "sn": 29154577,
        "userid": "ksuo3616"
    },
    {
        "text": "笑死",
        "color": "#FFFFFF",
        "size": 2,
        "position": 0,
        "time": 12034,
        "sn": 29313927,
        "userid": "lovesid0923"
    },
    {
        "text": "孩子靜悄悄，必定在作妖ww",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 12508,
        "sn": 29812693,
        "userid": "s134587"
    },
    {
        "text": "上次帶你媽參觀的時候不是進去過一次",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 12554,
        "sn": 29603477,
        "userid": "Repliroid"
    },
    {
        "text": "還有能毒死大象的毒藥",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 12665,
        "sn": 29709747,
        "userid": "Inaba1995"
    },
    {
        "text": "哈哈大人眼中的中二病",
        "color": "#B538FA",
        "size": 1,
        "position": 1,
        "time": 12975,
        "sn": 29643073,
        "userid": "KUO0708KUO"
    },
    {
        "text": "每次看到這覺得很好笑www",
        "color": "#FFFFFF",
        "size": 1,
        "position": 1,
        "time": 13085,
        "sn": 29148914,
        "userid": "e850104"
    },
    {
        "text": "黃昏臉超紅www為了哄女兒也是豁出去了哈哈",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13088,
        "sn": 29191075,
        "userid": "miki71003911"
    },
    {
        "text": "好喜歡企鵝的聲線www",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13169,
        "sn": 29151400,
        "userid": "sin214"
    },
    {
        "text": "黃昏小劇場XD",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13316,
        "sn": 29532436,
        "userid": "sdes3204"
    },
    {
        "text": "遜",
        "color": "#FDE53D",
        "size": 1,
        "position": 0,
        "time": 13325,
        "sn": 29147053,
        "userid": "Qaqww223"
    },
    {
        "text": "你只是想吃糖果吧哈哈",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13365,
        "sn": 29191086,
        "userid": "miki71003911"
    },
    {
        "text": " 公開處刑XDDD",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13462,
        "sn": 29812713,
        "userid": "s134587"
    },
    {
        "text": "超羞恥",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13474,
        "sn": 29191091,
        "userid": "miki71003911"
    },
    {
        "text": "機器人你臉紅了XD",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13490,
        "sn": 29381296,
        "userid": "wxz810"
    },
    {
        "text": "已追完畢~簽個到8888",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13541,
        "sn": 29182070,
        "userid": "AB123BA321"
    },
    {
        "text": "只要花生就行也是滿好養的",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13580,
        "sn": 29603499,
        "userid": "Repliroid"
    },
    {
        "text": "黃昏:間諜不能引人注目",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13647,
        "sn": 29532445,
        "userid": "sdes3204"
    },
    {
        "text": "2022/9/5 15：32確實追完中/台配",
        "color": "#A7FE39",
        "size": 1,
        "position": 0,
        "time": 13716,
        "sn": 29334617,
        "userid": "PDCEyt"
    },
    {
        "text": "等待10月",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13730,
        "sn": 29191106,
        "userid": "miki71003911"
    },
    {
        "text": "台配感覺更可愛了~期待Part2！",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13746,
        "sn": 29248490,
        "userid": "Bearjiajia"
    },
    {
        "text": "確定重追台配",
        "color": "#FF0026",
        "size": 1,
        "position": 0,
        "time": 13752,
        "sn": 29758733,
        "userid": "bir54040111"
    },
    {
        "text": "2022/8/31",
        "color": "#00C3FC",
        "size": 2,
        "position": 0,
        "time": 13794,
        "sn": 29246845,
        "userid": "AAOX2048"
    },
    {
        "text": "真期待後續",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13820,
        "sn": 29478263,
        "userid": "esonic"
    },
    {
        "text": "期待第二季和中配~~~",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13862,
        "sn": 29207854,
        "userid": "maedazen"
    },
    {
        "text": "9/19完成，何時有第二季中配！！！",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13878,
        "sn": 29536121,
        "userid": "chiupingyu"
    },
    {
        "text": "十月見",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 13938,
        "sn": 29162939,
        "userid": "BHSN00004lel"
    },
    {
        "text": "在下半季之前先用中配回味感覺真不錯",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 14146,
        "sn": 29242945,
        "userid": "swayoung"
    },
    {
        "text": "首刷完來槍簽個到，中配也好棒！",
        "color": "#FF9496",
        "size": 1,
        "position": 0,
        "time": 14428,
        "sn": 29206396,
        "userid": "deleted5260"
    },
    {
        "text": "二刷收工~撒花~",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 14430,
        "sn": 29151870,
        "userid": "gn01136933"
    },
    {
        "text": "期待第二季!",
        "color": "#FFFFFF",
        "size": 1,
        "position": 0,
        "time": 14500,
        "sn": 29213086,
        "userid": "P3e7k1k9a8"
    }
]
```

```python id="uTEp3T6wxNPD" colab={"base_uri": "https://localhost:8080/"} outputId="5cd7bc87-cff5-4a83-e97d-bfcd23270c11"
list2 = []

for i in danmu:  # 開list
    for k,v in i.items(): # 開dict
          if k == 'text':
              list2.append(v)

list2
```

```python id="3pfjaXvvynEu"
[ v
 for i in danmu
 for k,v in i.items()
 if k == 'text'
 ]
```

```python id="gblAeVT4DE57"
# Your code here

[ ? for ? in ? for ?,? in ? if ?=='text']
```

<!-- #region id="758vCJ0FKtv2" -->
## 字典推導式
<!-- #endregion -->

```python id="jkT4ViBnAxPe"
import jieba

text = """挑戰 iThome 鐵人賽
喚醒心中最強大的鐵人
iThome 鐵人賽已經是 IT 圈的年度盛事，也是推動台灣 IT 技術向上成長的重要力量！無數的技術人報名鐵人賽「連續 30 天發表技術文章不中斷」爆發驚人的技術能量，寫出一整年的成長與學習。
鐵人們在 iThome 鐵人賽中寫下的成果受到業界肯定，博碩文化與 iThome 合作，第 12 屆的得獎作品正在陸續出版，而 2021 年第 13 屆 iThome 鐵人賽的得獎者，依然有機會將作品出版成書。
挑戰 iThome 鐵人賽不容易的事，在 30 天的挑戰中，挑戰者每一天都必須努力趕在晚上 12 點之前克服萬難，按下【送出】鍵。這麼艱鉅的挑戰，許多人懷疑自己是否能做到？挑戰的第一步，就是不要低估自己。許多鐵人們回想參賽以來最大的收獲，往往就是「原來我做得到」。
成功挑戰 iThome 鐵人賽是 IT 人技術生涯上耀眼的成績，越來越多企業將 iThome 鐵人賽的成績作為徵才的重要參考。優秀的 IT 人們，不用高估世界，也不用低估自己，今年就和眾多 IT 人一起喚醒心中最強大的鐵人！"""

wordlist = jieba.cut(text,cut_all=False)
wordlist = [ seg for seg in wordlist ]

wordlist
```

```python id="ODmAGHJbK9s-"
word_dict = { w : wordlist.count(w) for w in wordlist}
```

```python id="4xwhsRcCD_UN"
word_dict
```

```python id="SG3uWgUSLKyl"
# 如果要依據出現頻率排序，在尚未教到lambda時，先參考https://ithelp.ithome.com.tw/articles/10222946
sorted(word_dict.items(), key=lambda x:x[1], reverse=True)
```

<!-- #region id="5isngi2t9aDh" -->
## [Do it] HW3 : 九九乘法表
<!-- #endregion -->

<!-- #region id="qSXqwdE69zIP" -->
- 試輸出以下樣式
```
2*1=02 2*2=04 2*3=06 2*4=08 2*5=10 2*6=12 2*7=14 2*8=16 2*9=18
3*1=03 3*2=06 3*3=09 3*4=12 3*5=15 3*6=18 3*7=21 3*8=24 3*9=27
4*1=04 4*2=08 4*3=12 4*4=16 4*5=20 4*6=24 4*7=28 4*8=32 4*9=36
5*1=05 5*2=10 5*3=15 5*4=20 5*5=25 5*6=30 5*7=35 5*8=40 5*9=45
6*1=06 6*2=12 6*3=18 6*4=24 6*5=30 6*6=36 6*7=42 6*8=48 6*9=54
7*1=07 7*2=14 7*3=21 7*4=28 7*5=35 7*6=42 7*7=49 7*8=56 7*9=63
8*1=08 8*2=16 8*3=24 8*4=32 8*5=40 8*6=48 8*7=56 8*8=64 8*9=72
9*1=09 9*2=18 9*3=27 9*4=36 9*5=45 9*6=54 9*7=63 9*8=72 9*9=81
```
<!-- #endregion -->

```python id="DD0KBYRJ0m18"
?print
```

```python id="WpcKmGa3b8hH"
# Your Code Here:



```
