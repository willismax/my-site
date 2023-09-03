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

<!-- #region id="view-in-github
" colab_type="text" -->
<a href="https://colab.research.google.com/github/willismax/MediaSystem-Python-Course/blob/main/01.Intro-Python/PythonBasic_4.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

<!-- #endregion -->

<!-- #region id="6OZu7Iytc9vG" -->
#  Python->基礎語法#4 函數、類別
<!-- #endregion -->

<!-- #region id="UZ34YQevW6W4" -->
![](https://python.rs/pylogo.png)
<!-- #endregion -->

<!-- #region id="8joqiyurKQ9o" -->
## Python函式
<!-- #endregion -->

<!-- #region id="X_3zYqpvKaEG" -->
- Python有人稱之為膠水語言，因為可以豐富的自行組織為函式(function)，也可以運用別人製作的函式。
- 函式以def關鍵字定義之，並以 `return` 關鍵字回傳函式輸出。
- 函式括弧內稱之為"引數"或"參數"，通常超過2個以上會設定預設值。
- 一個函數只做好一件事情。

```python
def 自訂函式名稱(引數):
    陳述
    return 執行結果
```
<!-- #endregion -->

```python id="Ft8WNgz8WRfI"
def 自訂函式():
    return "pass"
```

```python id="-RjUGUggWjnC"
自訂函式()
```

```python id="cqpuet302Zkf"
def 加法(a,b):
    _ = a+b
    return _
```

```python id="SdJ9JeYS2_2R"
def 加法(a,b):
    return a+b
```

```python id="-2S_TQp22zPG"
加法(2,3)
```

```python id="iXfScxp4W2f7"
def add_01(a, b):
    res = a + b
    return res
```

```python id="_EC17ltd5IxI"
def cal_sum(add1,add2):
    sum = add1 + add2
    return sum
```

```python id="5YnOMaA_5gkJ"
cal_sum(1,2)
```

```python id="Rqovkp2dXdPp"
def my_function(x, y, z=1.5 , a=1 , b=2 , c=3): #x,y,z稱之為"引數"或"參數"
    result = z + x + y + a + b + c
    return result
```

```python id="47U6h4O_X9dE"
my_function(1,2,z=4,5,6,7)
```

```python id="NcbkFNucKCD3"
def my_function(x1, y, z=1.5): #x,y,z稱之為"引數"或"參數"
    if z > 1:
        result = z * (x + y)
        print(1212)
    else:
        result = z / (x + y)
        print(4002)
    return result
```

```python id="siU4OohL4aQa"
my_function(z=1, x=2, y=3)
```

```python id="GKVg4WlJ7FqC"
my_function()
```

```python id="Qf2LJcza7ORw"
my_function(1,2,z=100)
```

<!-- #region id="LZzsYCfvB9u-" -->
### 全域變數/區域變數
<!-- #endregion -->

<!-- #region id="qNqB0jMlLU7j" -->
- 如果函式未以return敘述回傳，輸出將為空無物件，即函式處理的結果不會傳出來
- 引數作用在函式內，只是區域變數

<!-- #endregion -->

<!-- #region id="xanvSyB0NNa3" -->
- 何謂全域變數？區域變數？比較以下兩者
- 在函式內引數傳遞因為只在函式內有作用，可以將引數視為區域變數

<!-- #endregion -->

```python id="yqceur0lLM0c"
z= 2

my_function(1,2)
```

```python id="66O8eUd9MZf5"
def foo_1():
  a1 = [ i for i in range(5)]           #宣告空list在函式內
  print(a1)
  return None


print( foo_1() )
print( a1 )
```

```python id="GKqzgCpZ6eH8"
def looooooop():
    a3 = []
    for i in range(7):
        a3.append(i)
    return a3

looooooop()
```

```python id="8ZINisA6S1-4"
a3
```

```python id="ad3wgihrNZKj"
a2 = []
a2222 = []             #宣告空list在函式外

def foo_2():
  for i in range(5):
    a2.append(i)


foo_2()
print(a2)
print(a2222)
```

<!-- #region id="nC1gslI3L-17" -->
- 函式的設計要多考量使用者的易用性&誤用的可能。
<!-- #endregion -->

```python id="76kXCsDgK-ha"
#誤用tuple而非list
a3 = []

# a3 = ()

def foo3(a, n):
    a.append(n)


foo3(a3, 2)
print(a3)
```

<!-- #region id="z6cqsTAkM3Xf" -->
如果要解決使用者輸入的引數非預期資料型態，可以用`try`、`except`、`assert` 先檢查參數是否為預期的資料型態。


<!-- #endregion -->

```python id="aYK0j3IJM2IR"
a4 = ()

def foo4(a, n):
  try:
    type(a) == list
    a.append(n)
  except:
    print("第一個參數必須是list")


foo4(a4, 7)
print(a4)

```

<!-- #region id="xiWTSL-nCKTO" -->
### 寫好一個函數
<!-- #endregion -->

<!-- #region id="Va7vw-OyCSTn" -->
- 參考[Pythonic 風格指引](https://tw-google-styleguide.readthedocs.io/en/latest/google-python-styleguide/python_style_rules.html)
  - 您應該要寫好說明，除非別人不應用到(不可見)，或很精簡短小。
  - 文檔描述函數的用途，而不是逐行描述程式碼怎麼做。

<!-- #endregion -->

```python id="nPGZBKTOiVzt"
def BMI(高, 重):
    """這個就是計算BMI啦
    Args:
      高:m，公尺
      重:kg,公斤
    Return:
      BMI計算結果，沒有四捨五入....
    """
    bmi = 重/(高**2)
    return [bmi, 高, 重]

```

```python id="-3pEWogbipLu"
BMI(1.70, 60)
```

```python id="3oOJ5InkNovz"
def convert_temperature_unit(raw_temperature, raw_temperature_unit):
    """溫度單位換算
    Args:
      raw_temperature: float 原始溫度
      raw_temperature_unit: str 原始溫度單位，f/F為華氏，c/C為攝氏
    Returns:
      攝氏/華氏溫度轉換結果的文字說明，如果成功並回傳 result_temperature，
      如果失敗提示請輸入c或f。
    """

    # raw_temperature轉換為float
    try:
        raw_temperature = float(raw_temperature)
    except ValueError as err:
        print(err)

    #c2f、f2c
    raw_temperature_unit = str(raw_temperature_unit).lower()
    try:
        if raw_temperature_unit == "c":
            description = "攝氏轉華氏"
            result_temperature = raw_temperature*9/5+32
        if raw_temperature_unit == "f":
            description = "華氏轉攝氏"
            result_temperature = round((raw_temperature-32)*(5/9),2)
        print(f"{description}溫度為{result_temperature}")
        return result_temperature
    except:
        print("溫度單位輸入錯誤，請輸入攝氏C/c或華氏F/f")

if __name__ == '__main__':
    t , u = input("請輸入溫度"), input("請輸入原始溫度為攝氏(C)或華氏(F)")
    convert_temperature_unit(t,u)

```

```python id="GRndxrffesFO"
convert_temperature_unit(30,"c")
```

```python id="YeBhvrHAeqky"
if __name__ == '__main__':
    t , u = input("請輸入溫度"), input("請輸入原始溫度為攝氏(C)或華氏(F)")
    convert_temperature_unit(t,u)
```

```python id="AjgziwWtc4tX"
convert_temperature_unit()
```

<!-- #region id="T3sTUH66PHt1" -->
## 練習: 自定義函式
- 練習自定義函式：如果降雨機率大於70，回傳帶雨傘；如果最高溫度大於30，回傳戴墨鏡。
- 需增加函數說明。
- 請參考[Python風格規範](https://tw-google-styleguide.readthedocs.io/en/latest/google-python-styleguide/python_style_rules.html)
<!-- #endregion -->

```python id="wqVtx77_yf33"
# Your code here:


```

```python id="ClG6N1h8l0JM"

```

<!-- #region id="-HLePPGebJ8M" -->
### 函式的引述*args及**kwargs
<!-- #endregion -->

```python id="g-v2B7NlbIyo"
def foo(a, b, *args, **kwargs): # *[], **{:}
  print(f"type:{type(args)}") #tuple
  print(f"type:{type(kwargs)}") #dict
  print(f"unnamed args:{args}")
  print(f"keyword args:{kwargs}")
```

```python id="Ny9pZE7Wb7K_"
foo(1, 2, ['護國神山', '台G店'], ship_logo="EVERGREEN", 聲明='航海王提醒您當沖有害健康')
```

<!-- #region id="wO4qas7nmXdT" -->
### 匿名函式lambda

<!-- #endregion -->

<!-- #region id="JIjeKEMWmuaq" -->
- lambda:
  - 本地限定的匿名函數。
    ```
    lambda parameter_list: expression

    ```
<!-- #endregion -->

```python id="eq7I_wrXxFYh"
add = lambda x,y: x*y
add(9,9)
```

```python id="W2a0u49HmWld"
add = lambda a,b : a + b
add(2,5)
```

<!-- #region id="V_Abk9pXoLXT" -->
- filter()
  - 結合lambda匿名函數過濾，是個生成器(generator)，產生的結果需用list或for迴圈顯示。

    ```
    filter(lambda parameter: expression, iterable)

    ```
<!-- #endregion -->

```python id="vDzz72kinWVa"
res = filter(lambda x: x>10, [9,10,11,12,13])

print(res)
print(list(res))
```

<!-- #region id="NDu0oOQiowKr" -->
### 函式裝飾器 Function Decorator
<!-- #endregion -->

<!-- #region id="iLRBEQAfo2Wt" -->
- Python的語法糖，因為Python的函式也是物件，所以可以達成函式做為一個引數引入另一個函式，而函式裝飾器提供了簡潔的方式處裡函式的傳入。
<!-- #endregion -->

```python id="76N59Fut1N6z"
def 洋蔥皮1號(arg):
    def wrapper():
        print("===洋蔥內餡開始===")
        arg()
        print("===洋蔥內餡結束===")
    return wrapper

@洋蔥皮1號
def 洋蔥內餡():
    print(">>我是洋蔥內餡<<")

o = 洋蔥內餡()
o
```

```python id="MM9k6kzc2qTF"
def 洋蔥皮1號(arg):
    print("===洋蔥內餡開始====")
    洋蔥內餡()
    print("===洋蔥內餡結束====")

def 洋蔥內餡():
    print(">>我是洋蔥內餡<<")

o = 洋蔥皮1號(洋蔥內餡)
o
```

```python id="iPAereSpovCz"
from time import sleep

def 中二裝飾器(給我函數當引數):
  def wrapper():
    print('幫我稱10秒!!!!!')
    sleep(1)
    給我函數當引數()
    sleep(1)
    print('歐拉歐拉歐拉歐拉歐拉')
    sleep(1)
    print('K.O.')
  return wrapper
```

```python id="MRpc7u7Pq_Mf"


@中二裝飾器
def 一二三():
  print('EX嘎裡棒!!!!!')

一二三()

```

<!-- #region id="XdrQTDrWsmZG" -->
#### Flask example
<!-- #endregion -->

```python id="IgS9exOhsrYL"
!pip install -q flask-ngrok
```

```python id="meLxPVrRsuqk"
from flask import Flask
from flask_ngrok import run_with_ngrok

app = Flask(__name__)
run_with_ngrok(app)   #starts ngrok when the app is run

@app.route("/")
def home():
  return "<h1> Colab 顯靈啦 !</h1><img src='https://img.technews.tw/wp-content/uploads/2021/01/07174138/meme-03-e1610012503601.png' with='600' heigh='400' alt='一張圖片'>"

app.run()
```

<!-- #region id="RwqvjRrxQaeX" -->
## 物件導向
<!-- #endregion -->

<!-- #region id="ZjeX4TakCWiS" -->
### 什麼是物件導向程式設計？
<!-- #endregion -->

<!-- #region id="HDO2jY8AIwcm" -->
- 在早期程式碼撰寫，當程式越寫約多，程式碼越來越複雜，重複的程式碼一直複製貼上既浪費記憶體空間也浪費運算資源，之後就開始有「函式」(函數)的概念，將重複會運用到的程式碼」以函式包裝起來，一次撰寫可多次呼叫，此種做法可稱函式導向程式設計(functional programming,FP)[wiki](https://en.wikipedia.org/wiki/Functional_programming)。
- 但函式多了有幾十幾百個後，實在也是不容易區分管理，為了更有系統架構，開始有個物件導向程式設計的概念，並成為現代程式語言運用的濫觴。


<!-- #endregion -->

<!-- #region id="yhiSon4vCsf1" -->

- 物件：任何實體、事物都可以當作物件，像車子、玩具、刷子，能摸到、聽到、接觸到等
- 物件導向：以物件的想法建構與延伸，像車子，可以輪子數量延伸三輪車、二輪車、履帶車等不同車種；可以依照用途分房車、商用車、休旅車。但你不需每次車子都重頭設計
- 物件導向程式設計：
   - 方便程式碼更有組織，以利重用
   - 簡化主程式邏輯（FP也有此好處）
<!-- #endregion -->

<!-- #region id="b12FL81vKb-H" -->
- Python的功能實現都基於物件，在使用模組及程式碼的易用性非常成功，但嚴格說Python並非物件導向程式語言，只是可以取OOP的精神實踐程式碼。最明顯的就是沒有真正的私有屬性，只有取其精神以底線_命名的方法當作類似私有屬性的命名方式，實際上仍可有方式呼叫。

<!-- #endregion -->

<!-- #region id="Igmzh_7vHwU6" -->
#### 參考案例
<!-- #endregion -->

<!-- #region id="1awX13ZWHmQa" -->
https://ithelp.ithome.com.tw/articles/10227231

- 不使用物件導向描述一件事
![](https://ithelp.ithome.com.tw/upload/images/20191012/20120926DofTuprV1c.png)

- 使用物件導向描述一件事
![](https://ithelp.ithome.com.tw/upload/images/20191012/201209264Bk10jRzsf.png)


<!-- #endregion -->

<!-- #region id="bdJohxS-F4hN" -->
### 類別定義
<!-- #endregion -->

<!-- #region id="mjFXZ1y6F_qL" -->
- 以class定義類別。
- 類別的設定牽涉到物件導向(Object-Oriented, OO)的觀念，物件導向程式設計(Object-Oriented Programming, OOP)，其特色可以用鴨子型別來解釋，「當他走路像鴨子、 游泳像鴨子、叫聲像鴨子，那他就是隻鴨子」
- 相關觀念有封裝、繼承、多型
<!-- #endregion -->

```python id="HzgCIeCN4T_k"
class Person():
    pass
```

```python id="gWEt51UFSTA0"
#定義一個空類別duck

class Duck:
  pass
```

<!-- #region id="Cc-eSuo7Q1MS" -->
- OOP如果有繼承別的物件，或稱有父類別的形況下，在定義類別時以()表示，此時不是引數的意思喔
- 因為Python所有皆是物件object，全部的父類別皆為object，故以下表示等同上方寫法
<!-- #endregion -->

```python id="_V68ygDKPnuC"
class Duck(object):
  pass
```

<!-- #region id="8gAaIRMYU2Lc" -->
- 比較object及duck可使用的方法差異

<!-- #endregion -->

```python id="LXJBBm-QSyL5" colab={"base_uri": "https://localhost:8080/"} outputId="23f0a02e-902f-4acc-b96a-5e05a43f651c"
print(dir(object))
print(dir(Duck))

#s1^s2 對稱差運算，取得 s1 與 s2 的對稱差集
print(set(dir(object)) ^ set(dir(Duck)))
```

```python id="2Yvar3CgTtoN" colab={"base_uri": "https://localhost:8080/"} outputId="1f334ebf-b9f7-47d8-96ab-e7cd9359f6d4"
duck實例 = Duck()
print(duck實例)
```

<!-- #region id="ny6ijFmmPo2U" -->
### 屬性與方法
<!-- #endregion -->

```python id="zzBXTzSJZMcl"
class Duck:
  def __init__(self, name="鴨子", fly=False):
    """#屬性的初始值設定"""
    self.name = name
    self.fly = fly

  def re_name(self,name):
    self.name = name
```

```python id="I-Q6vQZiQb14"
duck = Duck()
```

```python id="wktVsdd-QgdP" colab={"base_uri": "https://localhost:8080/", "height": 35} outputId="8658c310-24d6-47e4-e663-f5858e5cb5dd"
duck.name
```

```python id="P1wxJFkbQjuW" colab={"base_uri": "https://localhost:8080/", "height": 35} outputId="170cebb5-2615-4897-831f-5c0257f722b6"
duck.re_name("塞子")
duck.name
```

<!-- #region id="nZ02V2lPnmEi" -->
### 繼承與子類別獨特屬性
<!-- #endregion -->

<!-- #region id="YWXrJdLdntSf" -->
- 物件導向以繼承(inheritance)表達上述概念。繼承建立起父子關係，子類自動具有父類的所有屬性。
<!-- #endregion -->

```python id="bjgH0h4MIsQl"
class PsyDuck(Duck):
  def __init__(self):
    self.name = "可達鴨"
    self.skills =['頭槌']
    self.trainer_info = {}

  def learn_skills(self,s):
      self.skills.append(s)
      return f"學會了新技巧「{s}」 , 現在已會使用 {self.skills}"

  def set_trainer_info(self,**kv):
    for k,v in kv.items():
      self.trainer_info[k] = v
    return f" {self.name} 的訓練師資訊更新為:   {self.trainer_info}"
```

```python id="u0HmIBrwJGvP" colab={"base_uri": "https://localhost:8080/", "height": 35} outputId="1dd8fe89-d33b-4f74-a0e8-e7c4a9cfce39"
duck_1030 = PsyDuck()
duck_1030.name
```

```python id="4L4Xq01d8GjP" colab={"base_uri": "https://localhost:8080/"} outputId="6198d7a2-94f7-4398-ca7a-a0af8d882e6a"
duck_1030.skills
```

```python id="NyFEYgAKREFg" colab={"base_uri": "https://localhost:8080/", "height": 35} outputId="409a13ff-4d04-4248-d521-836014026d46"
duck_1030.learn_skills('發呆')
```

```python id="quIjwJXLNrXz" colab={"base_uri": "https://localhost:8080/", "height": 35} outputId="c00a58d7-fc9e-46d8-d0c7-dc8e884e2bce"
duck_1030.set_trainer_info( 小名='小三' , 年齡=12) # {'小名':'小三' , '年齡':'12'}
```

```python colab={"base_uri": "https://localhost:8080/", "height": 167} id="Ifhb2aZesN34" outputId="c3b81105-1308-4ccd-bc52-51cbad374dc6"
duck_1030.get_name()
```

<!-- #region id="G79TuorxzqPx" -->
## 經典案例: 銀行帳戶
<!-- #endregion -->

```python id="bDtfFuaenoQp"
class Account:
    """銀行帳戶"""
    def __init__(self, number, name):
        self.number = number
        self.name = name
        self.balance = 0
    def deposit(self, amount):
        """存款動作: amount代表存入金額"""
        if amount <= 0:
            raise ValueError('必須存入正數')
        self.balance += amount
    def withdraw(self, amount):
        """取款動作: amount代表取款金額"""
        if amount <= self.balance:
            self.balance -= amount
        else:
            raise RuntimeError('餘額不足')
```

```python id="H3HNH-3U96pU" colab={"base_uri": "https://localhost:8080/", "height": 167} outputId="c177acb0-b831-464b-ab99-17fc6a7bc7de"
acct1 = Account()
```

```python id="_WOMpk3x-HIj"
acct1 = Account('123–456–789', 'Justin') #開一個帳戶
```

```python colab={"base_uri": "https://localhost:8080/"} id="V5UXmOSltI1C" outputId="1257c29f-e629-44c8-d091-76721762586f"
acct1.balance
```

```python colab={"base_uri": "https://localhost:8080/"} id="a87_OBD8j_Ta" outputId="fb081eb2-6729-40c1-9c40-202e805db9af"
acct1.deposit(10000)
print(acct1.balance)
```

```python colab={"base_uri": "https://localhost:8080/", "height": 271} id="35b2uEl7j7OI" outputId="ece48bf3-e1b4-48d0-aa9a-571616abc54b"
acct1.withdraw(3000)
print(acct1.balance)
```

```python id="lUo_Gmxgn0O1" colab={"base_uri": "https://localhost:8080/"} outputId="4a508a88-25ed-412e-aa37-cb3cf23bc90f"
acct2 = Account('123–456–789', 'Justin') #開一個帳戶
acct2.deposit(100)
acct2.withdraw(30)
print(acct2.balance) #餘額是 70
```

```python id="PTY6modG-yCk"
acct1.skill = "我是一個多餘的技能"
```

```python id="qQUyvOi-_Arj" colab={"base_uri": "https://localhost:8080/", "height": 35} outputId="0795a52e-827c-4e61-ad1d-72cb548f34fc"
acct1.skill
```

<!-- #region id="xLpUDsCtIXoG" -->
### 封裝
- 以私有變數讓使用者難以任意取用。
- 但仍有方法可以使用，仍有風險!
<!-- #endregion -->

```python id="-nPQ_O_5IstM"
class Account:
    "銀行帳戶"
    def __init__(self, user_number, user_name):
        """初始化帳戶建構方法"""
        self.__number = user_number
        self.__name = user_name
        self.__balance = 0
    def deposit(self, amount):
        """存款動作: amount代表存入金額"""
        if amount <= 0:
            raise ValueError('必須存入正數')
        self.__balance += amount
    def withdraw(self, amount):
        """取款動作: amount代表取款金額"""
        if amount <= self.__balance:
            self.__balance -= amount
        else:
            raise RuntimeError('餘額不足')
    def get_balance(self):
        """顯示存款餘額"""
        print(f"存款餘額為{self.__balance}元")

```

```python id="mh23yGHUKYYi"
acct3 = Account('123–456–789', 'Jobs')
acct3.deposit(100)
acct3.withdraw(30)


```

```python colab={"base_uri": "https://localhost:8080/", "height": 167} id="qeHtYhbDug3z" outputId="27d34bd0-6fab-46e8-ff25-2f1b70ad25c9"
acct3.__balance #私有屬性可以呼叫嗎?
```

```python id="2NDAfwwKLu4G" colab={"base_uri": "https://localhost:8080/"} outputId="ffb53d9c-8e11-4dde-a970-56bc34b1806a"
acct3.get_balance()
```

```python id="bjffqMoqKcAE" colab={"base_uri": "https://localhost:8080/"} outputId="0a871714-2bd8-4a03-9e0d-9b0991246c88"
# 私有屬性/方法還是可以被使用!!

acct3._Account__balance=50000000000000000000000000000000000000000000
acct3.get_balance()
```
