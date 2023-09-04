這篇整理 Python 的格式化輸出、輸入及流程控制的做法，依樣有 Colab 的支援讓您可以實際練習，我們就繼續介紹吧!
- [Colab 支援 ![](https://i.imgur.com/pQnQ4tG.png)](https://colab.research.google.com/drive/1cXEKwcp1wkViYUudimLq7cvhOM5Af5lo?usp=sharing)

## 格式化輸出
### 認識print()函式

- `print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)` 
    - `*objects`: 接受輸出的內容，多筆資料以逗號隔開。
    - `sep`: 間隔，預設一個空白。
    - `end`: 預設為`\n`即換行。
    - `file`: 預設為螢幕輸出。
    - `flush`: 預設為布清除資料緩衝區。
- 各參數不指定修改即為預設值。
- 未來各種函數詳細內容可參閱文檔，或使用`help(print)`、`?print`查詢。

### 以類似C語言的`printf`語法輸出
- 格式碼
    語法|說明|
    -|-|
    %s|輸出文字
    %f|輸出浮點數
    %d|輸出十進位整數
    %e、%E|以科學記號輸出數值
    %o|以八進位整數方式輸出數值
    %x、%X|以十六進位整數方式輸出數值
    %c|以字元方式輸出
    %r|以 repr() 函數輸出文字
    %%|輸出 % 百分比符號
- 新八戰鬥力只比一般人高2昆布
    ```
    fp = {"新八":362, "一般人":360}
    fp1 = fp["新八"] - fp["一般人"]
    fp2 = (fp["新八"] -fp["一般人"]) / fp["一般人"] *100
    print("志村新八比一般人強%d個昆布，戰鬥力比一般人高%.2f%%個昆布" % (fp1, fp2))
    ```
    
- 空間與對齊
    - 控制輸出排版結果，以及控制小數點顯示位數
    - 以`%s`的`%`及`s`中間加入格式語法表示
    
    目的|表示|
    -|-|
    以m格輸出|`"%ms" % _`|
    數值空白前補0|`"%0md" % _`|
    以m格靠左對齊|`"%-ms" % _`|
    限制輸出字串長度上限|`"%.ms" % _`|
    浮點數設定總寬度m及小數位數n|`"%m.nf" % _`|
    強迫顯示正負號|`"%+d" % _`|
    負號顯示、正數留空|`"% d" % _`|
    
### 以 `format` 語法輸出
- `format`會自動處理各種類型的資料。
- 如有2個以上的格式化輸出內容:
    ```
    print("志村新八比一般人強{}個昆布，戰鬥力比一般人高{:.2}%個昆布".format(fp1,fp2))
    ```
- 空間與對齊 
    目的|表示|
    -|-|
    以m格輸出|`"{:m}".format()`|
    數值空白前補0|`"{:0m}".format()`|
    靠右對齊|`"{:>m}".format()`|
    靠左對齊|`"{:<m}".format()`|
    置中對齊|`"{:^m}".format()`|
    限制輸出字串長度上限|`"{:.m}".format()`|
    浮點數設定總寬度m及小數位數n|`"{:m.nf}".format()`|
    強迫顯示正負號|`"{:+m}".format()`|
    負號顯示、正數留空|`"{: m}".format()`|
- 輸出至檔案
    - `print()`預設輸出為螢幕`sys.stdout`，可以導向輸出為檔案。
    - 開啟檔案`open(file,mode="r")`

### 目前最常用的-加上格式碼 `f`
- Python 的格式化輸出自3.6版本起支援以 `f` 作為字串開頭的格式化代碼，更為簡潔易用。
- 如有2個以上的格式化輸出內容:
    ```
    print(f"志村新八比一般人強{ fp1 }個昆布，戰鬥力比一般人高{ fp2 }%個昆布")
    ```
- 3種輸出口味一次比較:
    ```
    name = "巧虎"
    age = 3

    print("大家好我是%s，我今年%s歲!"% (name, age))
    print("大家好我是{}，我今年{}歲!".format(name, age))
    print(f"大家好我是{name}，我今年{age}歲!")
    print(f"{name}好乖，叔叔帶你喝養樂多!")
    ```

## 輸入資料 input()
- `a = input("prompt:")`
    - 輸入結果儲存於變數a，型別為字串 `str`
    - prompt為輸入提示
    ```
    email = '我的email帳號:'+input("請輸入您的email: ")
    print(email)
    ```
- 來個BMI計算練習:
    - BMI = 體重(公斤) / 身高平方(平方公尺)，你會發現身高單位是公尺不是我們熟悉的30公分，然後 `input()` 的結果是 `str`，透過 `float()` 轉型才能計算喔。
    ```
    #BMI = w/h**2
    h = input("您的身高(cm): ")
    w = input("您的體重(kg): ")
    BMI = float(w)/(float(h)/100)**2
    print(f"您的輸入的身高{h}cm，體重為{w}公斤，BMI為{BMI}。")
    ```
## 控制描述

### 條件判斷 if, elif, else
- 用1個 `if` 表示:
    ```
    if True:
      print("YES")
    ```
- 用 `if else` 表示:
    ```
    鐵人幫第n日 = 19
    鐵人幫文章篇數 = 19 
    if 鐵人幫文章篇數 - 鐵人幫文章篇數 <= 0:
        print("斷炊趕稿")
    else: 
        print("不用趕稿我就讚!")   
    ```
- 用 `if elif else` 表示:
    ```
    鐵人幫第n日 = 19
    鐵人幫文章篇數 = 19 
    if 鐵人幫文章篇數 - 鐵人幫文章篇數 == 0:
        print("快趕稿，別富奸阿!!!!")
    elif 鐵人幫文章篇數 - 鐵人幫文章篇數 < 0:
        print("斷更! 挑戰失敗")
    else: 
        print("持續更新我就讚!")
    ```
### 迴圈
- `for` 迴圈:
    ```
    for x in range(10):
      print (x, "is less than 10")
    ```
- `while`迴圈
    ```
    x=0                           #設定初始值
    while x < 10:                  #while True條件判斷
      print (x, "is less than 10") #執行陳述
      x += 1                      #初值增減
    ```
- `continue` 及 `break` :
    ```
    for x in range(10):
      if x==3:
        continue # 直接開始執行下個迴圈
      if x==8:    
        break # 直接跳出迴圈
      print (x)
    #輸出 0 1 2 4 5 6 7
    ```
### 例外陳述
- 例外處理 (exception handling) 是利用 try 、 except 、 finally 及 else
- 所謂例外 (exception) 是指已知有可能發生的錯誤 (error) ，像是開啟檔案，檔案卻不存在，或除數為 0 等等的情況。
  ![](https://i.imgur.com/Sto7j7m.png)
- `try:` 所有可能發生例外的程式碼都要放在try來嘗試是否有錯誤。
- `except:` 後空一格接例外類別 (class) ，底下程式區塊做相對應的例外處理。
- `else:` 假設沒有例外發生的處理。
- `finally` 是例外處理結束後，無論如何都會執行的部分(可有可無)。
    - 請參考以下兩個程式，一個是`try`結果不成立，執行`except:`、`finally:`，不執行`else:`:
      ![](https://i.imgur.com/mFGUMZO.png)
    - `try` 結果成立，執行 `else:` 、 `finally:`，不執行 `except`:
      ![](https://i.imgur.com/M4MImnn.png)
## 小結
我們將 Python 基本語法的整理告一段落，其實挺燒腦的，希望對您有更多的認識與幫助，記得按讚訂閱開啟小鈴鐺，我們下篇見!
