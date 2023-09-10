## 添加翻譯功能實作
本篇文章以實戰案例來認識 Python ，透過功能實現/測試、到函數/模組化您開發的功能，希望透過實作案列能對Python 函數 / 模組建立、Python 的流程控制 `if else` 、文字切片有更多的認識。


### 1. 以 Colab 實現/測試功能

當我們在網路搜尋`Python 翻譯` 等關鍵字，很快的就會找到 Google 的翻譯 API `googletrans` 模組，要如何實現其功能?

- 先至 [Google Colab](https://colab.research.google.com/notebooks/welcome.ipynb) 歡迎頁面左上方"檔案"選擇"新增筆記本"。
- 安裝外部模組，本次我們要引入的是 `googletrans` 模組，指令為 `!pip install googletrans`，有`!`是筆記本環境的魔術指令，即可進行終端機操作。
    ```
    [in]: !pip install googletrans
    ```
    回傳安裝相依套件的過程，最後出現 `Successfully...` 而無報錯代表成功安裝。
- 執行以下程式碼，執行後輸出為翻譯結果 "test" 。下方分別解說:
    ```python
    from googletrans import Translator

    text="測試"

    translator = Translator()
    result = translator.translate(text, dest='en').text
    print(result)
    ```
    - 引入模組，本次我們的模組引入方式為 `from googletrans import Translator` ，之後以 `Translator` 表示執行此模組。
    - `text="測試"` ， 我們將想要翻譯的文字存入 `text` 變數，稍後會用到此變數。
    - `translator = Translator()` ，此啟動此模組翻譯服務的做法， `translator` 為 `Translator()` 的實例，之後我們以實例進行後續操作。
    - `result = translator.translate(text, dest='en').text`，此行我們呼叫並使用了 `translator.translate(text, dest='en')` 此功能，要使用此功能的何種參數、預設的條件及可用的選項，一個優異的模組會寫的相當詳細。
        - 我們只需要將滑鼠游移到準備輸入參數(括號的開頭)，就會跳出提示畫面。
          ![](https://i.imgur.com/1r2jCC9.png)
        - 點選 "View source" 超連結， Colab 會開啟該函數所在的子畫面。包含函數名稱為 `translate()` ；參數為`()`內的內容，該參數只作用在所屬的函數之中，如果有等於代表已有預設參數值，例如 `dest='en'` 。詳細的說明會在函數以`"""..."""`成對的三個雙引號包起來，代表此段字串內容可像文章般書寫/換行，也是提示時的說明欄位，您創建自己的函數時最好敘明用途跟參數用法。
          ![](https://i.imgur.com/JiubHuj.png)
          連使用範例都寫很清楚， Google 好樣的。
          ![](https://i.imgur.com/zwBg1KN.png)

        - 其實本篇程式碼在此因為翻譯目標語系的結果預設為英文，參數 `dest='en'` 在此可以省略喔。

### 2. 多認識你的套件

- 為了自行開發符合需求的功能，對模組有基本認識後，透過參數的可能性進一步了解模組運用，像是瞭解可以翻譯的語系:
    - 在 Colab 輸入以下指令:
        ```python
        #查看文字翻譯可用語言
        import googletrans
        googletrans.LANGCODES
        ```
        您會看到一串巨大的翻譯語系列表。
        
### 3. 以函數重構你的功能

- 函數可以封裝你的執行過程，遵循一個函數只做好一件事情的原則，我們這次的功能是「文字翻譯」，把此完成翻譯功能的過程包起來變成函數，最後輸出是個翻譯好的句子即可。
    - 製作函數在 Python 的關鍵字為 `def`，寫法如下:
        ```python
        def 自訂的函數名稱( 參數1 , 參數2 , ...):
            處理過程
            處理過程
            ...
            return 處理結果
        ```
        本次重構後的程式碼為:
        ```python
        from googletrans import Translator

        def translate_text(text,dest='en'):
            translator = Translator()
            result = translator.translate(text, dest).text
            return result
        ```
        - "自訂函數名稱"，您可以自己命名，命名時建議包含動詞，已表示您此函數所處理的結果，例如命名為 `text_to_translate()` ，使用者不用通靈也可大致掌握用途。
        - "( 參數 )"，可以理解為僅作用在函數內的變數。
        - 縮排， Python 的縮排是有意義的，在函數內的處理過程要縮排，縮排的方式包含1個`tab`、4個空白鍵，而 Colab 很妙的是預設為2個空白鍵，您可以更改設定，或當您游標在程式碼末端按下`Enter`，系統自動幫您跳到該有的縮排位置。
        - "return"，將函數處理的結果「回傳」出來，您可以用一個變數來接收回傳結果。
- 使用函數，函數執行過讓電腦知道後，要使用函數即輸入 `自訂的函數名稱( 參數1 , 參數2 , ...)` 呼叫，參數如果有預設值可以省略，如果有1個以上的參數，在不寫參數名稱的情況下請依序以逗號`(參數1 , 參數2 , ...)`間隔表達。
    - 使用函數的測試如下:
        ```python
        #測試功能
        result1 = translate_text( text = "水之呼吸", dest = 'en' )
        result2 = translate_text( "水之呼吸" , dest = 'ja' )
        result3 = translate_text( "水之呼吸" , 'ko')
        print(result1)
        print(result2)
        print(result3)
        
        #輸出
        #Water breath
        #水の息
        #물 숨
        ```
        - `result1` 的參數全都有指定配對，這種方法則參數的順序可以調換。
        - `result2` 只有特別把 `dest` 指定為 `ja`，依該模組的設定為日文。
        - `result3` 參數名稱全部省略，順序不可調換。

### 4. 補強函數的模組用途及說明文件

- 當您希望函數被後續的程式碼執行，或分享開源給其他第三方使用，別人所需求的是函數的主體。 Python 可以將函數以 `.py` 檔案作為模組引入程式， 您的測試程式碼可以寫在 `if __name__ == "main":` 之下，意思是當此 `.py` 檔案作為主程式執行時才會執行 `if __name__ == "main":`之下的程式(記得要縮排)，如做為模組被引入程式時，`if __name__ == "main":` 之下是不會執行的。
- 另外模組可以寫說明會更方便使用者，寫法即是在`def 定義模組():`下方以成對的三個雙引號`"""..."""`撰寫說明文件。
    - 經過上述兩個補強函數的作法，最後程式範例如下:
        ```python
        from googletrans import Translator

        def text_to_translate(text,dest='en'):
            """以google翻譯將text翻譯為目標語言

            :param text: 要翻譯的字串，接受UTF-8編碼。
            :param dest: 要翻譯的目標語言，參閱googletrans.LANGCODES語言列表。
            """
            translator = Translator()
            result = translator.translate(text, dest).text
            return result

        if __name__ == '__main__':
            result = text_to_translate( text = "今晚我要來點麥當勞的勁辣雞腿堡加薯條可樂", dest = 'en' )
            print(result)
            
        #輸出
        #Tonight I want to order McDonald’s spicy chicken drumstick with French fries coke
        ```
    - 滑鼠移到`(參數)`前，會出現寫好的文件。
      ![](https://i.imgur.com/svpSSj3.png)

    - 按下 "View source" 也可以查閱此函數喔。
      ![](https://i.imgur.com/Qinwr16.png)
 
## 小結
本篇以新增聊天機器人的過程，先透過 Google 翻譯的 Python 模組介紹模組、函數的概念及用法，後續會建立在您的LINE 聊天機器人之中，附上本次 [Colab 範例連結 ![](https://i.imgur.com/pQnQ4tG.png)](https://is.gd/NxiCJ0) ，您可以盡情測試，或加入我的最愛當作軍火庫以後使用，本篇說明到這，我們下篇見喔!

