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
<a href="https://colab.research.google.com/github/willismax/MediaSystem-Python-Course/blob/main/01.Intro-Python/Intro_Python-101.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

<!-- #endregion -->

<!-- #region id="VXOUG8U3cBRg" -->
#  01.Python_basic基礎
<!-- #endregion -->

<!-- #region id="xHVa2XhJ33Jx" -->
![](https://python.rs/pylogo.png)
<!-- #endregion -->

<!-- #region id="eE4plAjFcBRh" -->

- 我們先來認識所謂「程式」的基礎吧
    - 建立環境
    
- 程式的組成
    - 基本資料型態 (整數、浮點數、字串、布林)(串列、元組、字典、集合)
    - 格式化的輸出與輸入（print, input()）
    - 運算子、運算式與敘述(+-*/、大小等於)
    - 選擇性敘述（if-else）
    - 迴圈(for, while)
    - 函數(def foo():)
    - 類別(class Foo():)
<!-- #endregion -->

```python id="n_sCN11q8ik2"
import this
```

<!-- #region id="buxG-8GOcBRp" -->
## 建立Python環境
<!-- #endregion -->

<!-- #region id="_NOY3yM4cBRq" -->
以下方法擇一皆可
- 官網下載Python: https://www.python.org/
  - 電腦直接裝Python者，可用命令列或IDEL

- 開啟Google的[Colab](https://colab.research.google.com/)
  - 線上開啟新的筆記本，也等於跟google要了一個虛擬機
  - 如果你要自學，推薦使用Colab

- 安裝[ANACONDA](https://www.anaconda.com/):
    - 安裝ANACONDA者，可用jupyter notebook，初學者建議
    - 如果你要自學，本文推薦下載，但比較大包

<!-- #endregion -->

```python colab={"base_uri": "https://localhost:8080/"} id="zvgmfF3ityP3" outputId="7234c1af-aec6-45ba-dd91-3014ed5d45de"
!nvidia-smi
```

<!-- #region id="qgN6-EPycBRr" -->
## 0.Python的變數
<!-- #endregion -->

<!-- #region id="5HiClYiDsi7H" -->
- 變數，儲存內容的盒子
- 在Python，變數更像是貼標籤的概念(標籤指向的資料改變，)
<!-- #endregion -->

```python id="P_B2GgT4c7NS"
a = 1
```

```python id="oOO2xtE-qzen"
a
```

```python id="AAzR0hNIDgdA"
#我有a隻手機
print("我有",a,"隻手機")
```

<!-- #region id="7J0vJ06BcBSO" -->
## 1.立馬進行基本計算
<!-- #endregion -->

<!-- #region id="UnmkApV1cBSP" -->
加減乘除非常方便，直接進行即可
<!-- #endregion -->

```python id="Zgq8K1ZOt7bB"
1+1
```

```python id="85gCWVfWcBSn"
# **是次方

print(2**10)
```

```python id="k0O0G5tFcBSs"
# 除法ＯＫ的

99/44
```

```python id="6xZ9jFgXcBS2"
#餘數%

dise = 9487 % 6 #012345 骰子

print(dise+1)
```

<!-- #region id="qxzzFer7cBTA" -->
## 2.輕鬆上手資料型態
<!-- #endregion -->

<!-- #region id="ONDZ14I2cBTB" -->
基本資料型態在python指的是整數int、浮點數float(就是小數)、字串str(文字)、布林bool(True or False)
<!-- #endregion -->

<!-- #region id="UKfCCVK_cBTI" -->
想知道手上資料的型態，可以用type()來確認
<!-- #endregion -->

```python id="ViwZ0XpL8zTv"
b=True
```

```python id="f0G0eO7iroF2"
b
```

```python id="jq4w17Kb81gs" colab={"base_uri": "https://localhost:8080/"} outputId="80c30af7-e8c8-487d-98b4-11f6265a6e9f"
# type()
type(b)
```

```python id="M7lzhJOpSXgh"
num1 = 78
num2 = 0.55

type(num1), type(num2)
```

```python id="rm3CaGXIxAOE"
1+2
```

```python id="-mX_NCLCr4Rg"
1+2.
```

```python id="XW5Umh7L8kza"
type(1+2.)
```

```python id="ecvcuJnbcBTI"
type(87), type(55.66),  type("5566"), type( 1 != 1 )
```

```python id="qnwmtw9tx9vj"
'我有一串"文字"'
```

<!-- #region id="pywhB907sIhB" -->
#### Question1
- 要怎麼確認是文字、整數還是小數?
<!-- #endregion -->

```python id="FxTrd1OH9RFk"
#文字的數字怎麼確認?
type('88')
```

<!-- #region id="0ppke77Qs3FO" -->
#### Question2
- 如何強制將小數轉成整數?
<!-- #endregion -->

```python id="0BFeJ99CPxBR"
#浮點數轉整數

int(100.666)
```

<!-- #region id="7m0EialPcBTW" -->

## 3.快速使用輸入與輸出
<!-- #endregion -->

<!-- #region id="dphrf_0IcBTX" -->
- 輸出以print()把資料印出來
- 輸入就以input()讓使用者使用

- 在jupyter notebook，每個cell最後一個print()可以省略
<!-- #endregion -->

```python id="JCaY4RN5EXhN"
input()
```

```python id="EE364zFat5aX"
input('請輸入姓名:')
```

```python id="RePdpTu6cBTY"
'我的名子是:'+input()
```

```python id="yiP85033uLgK"
print('我的名子是:'+input())
```

```python id="A0MRNBsHE2wR"
name = input()
print('我的名子是:' + name)
```

```python id="lvJ6_u4U0mY_"
email = input( '我的email帳號:')
print('我的email帳號:',email)
```

```python id="3JXhmLnTcBTm"
顏文字 = "(ﾟДﾟ)< ============O))"

顏文字
```

```python id="sInqpcIStWlv"
顏文字*500
```

<!-- #region id="eNjQQubk13oy" -->
#### print()
<!-- #endregion -->

```python id="qfn1Mkyp18bx"
print("hi")
```

```python id="8njH9070EN93"
#3種寫法一次比較
name = "野原新之助"
age = 5

print(f"大姊姊我是{name}，我今年{age}歲!!") # f-string

print("大姊姊我是%s，我今年%d歲!!"% (name, age))
print("大姊姊我是{}，我今年{}歲!".format(name, age))
```

<!-- #region id="J66dOy-3cBTw" -->
## 4.第一個動手做：計算BMI
- 運用前述所學，設計一個BMI計算器，能夠正確計算BMI
- BMI = 體重(公斤) / 身高平方(平方公尺)
- 由使用者輸入體重、身高，顯示計算結果
<!-- #endregion -->

```python id="Bhm4ACf_vVtc"
# 來練習吧


```

<!-- #region id="1Yjq52tocBT_" -->
## 5.條件判斷
<!-- #endregion -->

```python id="7Iw2Y5ecLPMA"
3>=2
```

```python id="AyukwKYqLSNX"
"Z" > "b" #利大於弊
```

```python id="oNSDR_Gy7OAx"
a=5
b=1

if a == b:
    print("a==b")
elif a > b:
    print('a>b')
else:
    print("a<b")

```

```python id="h_aQXu_n89l3"
if (1):
    print('成立')
else:
    print('不成立') # None, False, 0
```

```python id="HKhbJ0QOIeVM"
if 3<2:
    print("Yse")
else:
    print("NO")
```

```python id="nNE4SKNEcBUA"
if 1!=1:
    print("YES")
else:
    print("NO")

```

<!-- #region id="5YuMmErFcBUl" -->
## 6.必須知道什麼是串列list
<!-- #endregion -->

```python id="4Phg0R-m-SFV"
# list

```

```python id="muhOOP7WJ5KZ"
[ 1, 2, 3.14, 7.788, "c8763"]
```

```python id="OwTaKmFPcBUm"
[7,5,4.444,"挖苦挖苦",True,False]
```

```python id="pknFNXTfcBUx"
APPLE = [1, 2, 3, 0]
```

```python id="GP_WrJc1cBUz"
PEN = [7, 7, 3, 2]
```

```python id="nBpeNXoqcBU4"
APPLE + PEN
```

```python id="xD64NIt2cBU_"
APPLE-PEN
```

```python id="Qj6NWJmIcBVF"
APPLE*5
```

<!-- #region id="sBgZM87U_Os6" -->
#### 切片
<!-- #endregion -->

```python id="8wfh5T-gNp5e"
#APPLE[ 頭0 : 尾前 ]
```

```python id="_GhnEm2R_SwF"
APPLE=[9, 5, 2, 7]
```

```python id="Zv7Ekpfa_bDR"
APPLE[2]
```

```python id="i98TLrGcACCK"
#APPLE[ 魚頭: 魚屁股]
APPLE[0:2]
```

```python id="YHtuh1tuge1c"
APPLE[0 : 3]
```

```python id="bgyWzCzscBVQ"
APPLE[ :3]  #不包含第4
```

```python id="dThPWD5JcBVS"
APPLE[-1]
```

```python id="Os6Se9wBO5Ac"
!pip install twstock
```

```python id="BczEJReaPBvv"
import twstock

stock= twstock.Stock("2330")
```

```python id="C9SAClg1PiAz"
stock.price[-1]
```

```python id="VV5t2WVjcBVa"
詞 = "庭院深深深幾許"
```

```python id="JSlIEZr9cBVh"
詞[0]
```

```python id="n-FsI9nOcBVl"
詞[2:5]
```

```python id="tUzotRJAcBVp"
詞[-5:]
```

```python id="x-RXSD55cBVs"
list(詞)
```

<!-- #region id="kd_e77BbcBVu" -->
## 7.第二個動手做：線上遊戲命名產生器
<!-- #endregion -->

<!-- #region id="zw_SKJYMcBVv" -->
80%玩家表示，最花時間的就是命名，既然我們學會了串列list，那我們來嘗試做一個命名產生器

首先以list把地點跟明星名字存起來
<!-- #endregion -->

```python id="0al5rUdGcBVv"
local = ["基隆",'南港','松山','台北','萬華','板橋','樹林','鶯歌','桃園','中壢','楊梅','竹北','新竹','苗栗','銅鑼',
         '后里','豐原','潭子','太原','台中','大慶','烏日','新烏日','成功','彰化','花壇','大村','員林','永靖','社頭',
         '田中','二水','林內','民雄','嘉義','林鳳營','高雄']
star = ['山下智囧','囧把刀','尾田賀一航','木村倒頭哉','湯姆嗑吐司','木村唾液','今晨五','彭于晏','朝偉哥',"山道猴子"]
```

```python id="q8Ui2nif1fcW"
local[2]+star[1]
```

```python id="K5RjDv0AcBVx"
import random

a = random.sample(local,1)+ random.sample(star,1)   #shift+tab
"".join(a)
```

<!-- #region id="fP-QPiXTcBV0" -->
用亂數取出一組組合，加在一起組成新的list，最後在取出list內容將字串合在一起
<!-- #endregion -->

<!-- #region id="7On4fAShcBV4" -->
不命名變數也可以，方法百百種，python很自由
<!-- #endregion -->

```python id="JDjK5GDMcBV5"
"".join(random.sample(local, 1) + random.sample(star, 1))
```

<!-- #region id="heAWN8N5cBV6" -->
## 8.kv配對的字典
<!-- #endregion -->

```python id="6PqkmF8n40HB" colab={"base_uri": "https://localhost:8080/"} outputId="9f850cca-8531-4b68-c7c7-89cf6e823b9c"
{"ip":"0.0.0.0"}
```

```python id="uvQHQp8kPsy6"
成績 =  {"數學" : [100,90,80] }
```

```python id="gmVj2U2icBV-"
同學 = {
    "andy":[183,70],
    "Alice":[163,45]
    }
```

```python id="BC7vWPerP-ld"
同學
```

```python id="gcF4fDRJcBWA"
同學["andy"][1]
```

<!-- #region id="ytlMVeTYPf0d" -->
## 9.條件判斷II:如果，否則
<!-- #endregion -->

<!-- #region id="uqQDo1UWcBWE" -->

可以分成
- if:           #條件成立執行以下描述
- if else       #如果(成立就執行...),否則(成立就執行...)
- if elif else  #如果(成立就執行...),否則如果(成立就執行...),否則(成立就執行...)
<!-- #endregion -->

```python id="epSXRZA-cBWF"
A = 5
B = 8
```

```python id="9wGnHxWicBWH"
if A == B:
  print('A = B')
```

```python id="MNUl4k70Tmsw"
if A != B:
  print("a!=b")
```

```python id="id-GrVbacBWK"
if A == B:
  print('A == B')
else:
  print('A != B')
```

```python id="N_ZeDU4hcBWN"
if A > B:
    print('A > B')
elif A < B:
    print('A < B')
else:
    print('A == B')
```

<!-- #region id="Su_WhpiMcBWR" -->
現學現賣之「智慧聊天機器人」
<!-- #endregion -->

```python id="lBxHzw_BcBWT"
say = input(">>")
if say == '早安':
    print("早安唷")
else:
    print("你說"+say+"阿? 阿阿阿阿阿我知道了")

```

<!-- #region id="n1lfLxRTcBWZ" -->
## 10.人生就是迴圈
<!-- #endregion -->

<!-- #region id="GM6-nsp7cBWa" -->
迴圈是程式語言的特徵，讓電腦協助你重覆執行某項判斷，主流用法就是for迴圈與while迴圈，另外python還有一個枚舉可以使用。


### 10-1 For迴圈
- 先來個for迴圈吧，基本上for迴圈常與list結合使用

```
for 指標 in 要判別的資料集:
    執行項目
```

<!-- #endregion -->

```python id="oudlqYNKcBWb"
五俗蘭 = ["紅茶", "綠茶", "烏龍", "鐵觀音", "多多冰沙", "八冰綠", "抹茶拿鐵"]
```

```python id="3AA2805ll_fI"
print(五俗蘭)
```

```python id="TRsG3j6MwxZO"
五俗蘭[:4]
```

```python id="xFFA7bpM7ZNh"
for i in 五俗蘭:
    print(i)
```

```python id="cfHf90Ip2wq4"
for i in range(5):
  print(五俗蘭[i])
```

```python id="sNzF0aDMVVGQ"
len(五俗蘭)
```

```python id="CMrS9u3RmJug"
for i in range(7):
  print(五俗蘭[i])
```

```python id="9kup7hBV3Xem"
for i in range(len(五俗蘭)):
  print(五俗蘭[i])
```

```python id="XKkS-_apxO93"
for i in 五俗蘭:
    print(i)
```

```python id="DBBjvDJuydvb"
# 如果list超級大，可以用iter + next節省記憶體
五俗蘭_iterator = iter(五俗蘭)

while True:
    try:
        i = next(五俗蘭_iterator)
        print(i)
    except StopIteration:
        break
```

<!-- #region id="qrM7hgo8cBWo" -->
### 10-2 enumerate()枚舉

假設我們要迭代list成員的名稱，並獲取list中每個成員的位置。可以用enumerate，又稱枚舉


<!-- #endregion -->

```python id="CdSUMeWecBWs"
for i, v in enumerate(五俗蘭):
    print(i, v)
```

<!-- #region id="drbM_qaZcBW7" -->
### 10-3 while迴圈

while迴圈，除非成立才會跳出循環
```
初始值
while 條件式：
   程式區塊
   (索引變化)
```
<!-- #endregion -->

```python id="GdxXfux5cBW8"
count = 0

while (count < 6):
    print('The count is:', count)
    count += 1 #count =count+1

print ("Good bye!")
```

```python id="-apyeexmcBW_"
# continue用法

i = 1
while (i < 6):
    i += 1   #  i=i+1
    if i%2 > 0: #1
        continue
    print(i)
```

```python id="Ijh400zIcBXD"
# break用法
i = 1
while (1):
    print(i)
    i += 1
    if i > 10:
        break
```

<!-- #region id="juaPQpa9cBXG" -->
*現學現賣之「金庫密碼」
<!-- #endregion -->

```python id="OWCY-7QocBXG"
password = '' #先設一個空字串讓程式知道

while password != "1234":
  password = input("快點輸入密碼>>")

  if password == '1234':
    print("密碼正確")
    break
  else:
    print("密碼錯誤再來一次")

```

<!-- #region id="-3ecKtR8cBXI" -->
## 11.函數其實很精彩
<!-- #endregion -->

<!-- #region id="BczGhDdGcBXJ" -->
用來打包你所會的一切，必要時呼叫出來就可以用
```
def foo(引數1,引數2):
    執行內容
    retuen 回傳值
```

呼叫時使用
```
foo(引數1,引數2)
```
<!-- #endregion -->

```python id="IQ4xwATXYHA3"
def toto_bmi(wei, hei):
    bmi = float(wei) / float(hei)**2
    return bmi
```

```python id="iPAl8KK1YrxV"
a = toto_bmi(70, 1.73)
```

```python id="H7yUZjMLY99W"
a
```

```python id="-_x8hQv370yj"
#BMI=w/h**2

def cal_BMI(w, h):
  bmi = float(w) / float(h)**2
  return bmi
```

```python id="NxN8J63Q8nLi"
cal_BMI(70,1.7)
```

```python id="axqEjSBWkI2E"
cal_BMI(h=1.73, w=70)
```

```python id="SZW0-YH5kajP"
#BMI=w/h**2

def cal_BMI( w=70, h=1.73):
    """
    w輸入kg
    h輸入公尺
    """
    bmi = float(w) / float(h)**2
    return bmi
```

```python id="ZkLUiZW7kloj"
cal_BMI()
```

```python id="MKLCzzfMYWWl"
def add(a , b):
  sum = a + b
  return sum
```

```python id="vydTC0UfYlAF"
add(2,555)
```

```python id="4Vi4j6WGcBXJ"
def repaly_word(b):
    print(b)
    print("我想你")
```

```python id="5shGp1-5-A74"
repaly_word("真的嗎")
```

```python id="AV7jAMfvcBXM"
repaly_word("a")
```

```python id="iBLQzNklcBXS"
def 加法(a,b):
    result = a + b
    return result
```

```python id="nJLd_fEacBXX"
加法(9,9)
```

<!-- #region id="KDCvPXXRcBXc" -->
## 12.第三個動手做：打造訂餐系統
<!-- #endregion -->

<!-- #region id="oOpPP_NFcBXd" -->
當程式以函數包起來後，使用者只要呼叫函數，輸入對應的引數，即可得到結果，不需要在意裡面的細節囉
<!-- #endregion -->

```python id="SUUf0ymbcBXd"
def 訂餐(第1至3號餐,數量):
    if 第1至3號餐 == 1:
        price = 數量*60
    elif 第1至3號餐 == 2:
        price = 數量*70
    elif 第1至3號餐 == 3:
        price = 數量*80
    else:
        print("請選擇1至3號餐，輸入1個數字即可，謝謝")
    return f"您選的是{第1至3號餐}號餐, 數量是{數量}個，金額是{price}元"
```

```python id="ieH5r0Z2cBXf"
訂餐(2,3)
```

```python id="iPwNnkypcBXh"
訂餐(2,9)
```

<!-- #region id="BypzXxTESq7q" -->
## 13.用來個翻譯吧
來體驗怎麼使用外部模組
<!-- #endregion -->

<!-- #region id="JFyiNQiiW1aZ" -->
### 13-2.Python google翻譯
<!-- #endregion -->

<!-- #region id="9WIJXVlLU7Nq" -->
1. google搜尋`python google 翻譯`
2. 看文章程式碼
3. 回頭找模組的官方文件(或github的說明文件)，拓展想要的應用
<!-- #endregion -->

```python id="CfgN6owgThMM"
!pip install googletrans==3.1.0a0
```

```python id="bv4FFtejS0UG"
from googletrans import Translator

translator = Translator()

translator.translate('今晚我要來點真主單的紅茶拿鐵加珍珠', dest='en').text
```

```python id="YeQKrrQvT8ZU"
print('English:', translator.translate('水之呼吸', dest='en').text)
print('Japanese:', translator.translate('水之呼吸', dest='ja').text)
print('Korean:', translator.translate('水之呼吸', dest='ko').text)
```

<!-- #region id="6lfFAiTFVq31" -->
### 13-2. 翻譯轉語音
<!-- #endregion -->

<!-- #region id="5uS7VUVNV2JY" -->
1. google搜尋`python google 文字轉語音`
2. 看文章程式碼
3. 回頭找模組的官方文件(或github的說明文件)，拓展想要的應用
<!-- #endregion -->

```python id="PFjLu6j_V9AJ"
!pip install gtts
```

```python id="5V2mV_U3WM9f"
from gtts import gTTS
import os

mytext = 'Convert this Text to Speech in Python'

language = 'en'
mygTTS = gTTS(text=mytext, lang=language, slow=False)
mygTTS.save("output.mp3")

# Play the converted file
os.system("start output.mp3")
```

<!-- #region id="RnhxUIgKXElj" -->
### 13-3.把翻譯+語音串起來
<!-- #endregion -->

```python id="E5Pi5ZtOXKf0"
!pip install googletrans==3.1.0a0
!pip install gtts
```

```python id="l21cRd5NXS_u"
from googletrans import Translator
from gtts import gTTS
import os

def google_text_to_speak(text, to_speak_language='en'):
  translator = Translator()
  ttext = translator.translate(text, dest=to_speak_language).text
  tts = gTTS(text= ttext, lang=to_speak_language)
  tts.save(f'{text} {to_speak_language}.mp3')

if __name__ == "__main__":
  google_text_to_speak("今晚打咚咚")
  google_text_to_speak("本節目由五洲製藥贊助撥出",'ja')
```

```python id="v0dkfpiTZh7D"
google_text_to_speak("今晚打老虎")
google_text_to_speak("今晚打老虎",to_speak_language = 'ja')
```

```python id="dfONID8Ap3Zv"
import googletrans
print(googletrans.LANGCODES)
```

<!-- #region id="61vtOckbcBXj" -->
## reference
  - [蔡炎龍老師Github](https://github.com/yenlung/Python-3-Data-Analysis-Basics)
  - [A Whirlwind Tour of Python (正體中文版)](https://doggy8088.github.io/A-Whirlwind-Tour-of-Python-zh-tw/)
<!-- #endregion -->
