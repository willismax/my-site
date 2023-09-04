上篇花了我們費盡心思終於辦理了 Heroku 入厝儀式，您已經有專屬自己的 LINE Chat Bot ，這篇我們把 Heroku 稍作改進，補完獨立管理 token 的兩種方案。

## 獨立管理 token 資訊
由於程式碼包含帳號資訊有其風險，雖然直接把各種 ID 、 token 貼在程式比較方便，但如果要分享時，譬如把你的大作放在 GitHUB ，建立在公開的雲端服務時，最好獨立為單獨檔案，並且審慎管理上傳。

### 方法1: 建立 config.py 檔案，將檔案作為 Python 模組引入(本篇建議)
Python 的 `.py` 檔案可以做為模組引入程式，以下是很好的範例，也是現階段初學/自學者較建議的方式:
1. 在專案根目錄建立 `config.py` 檔案，內容如下，記得貼入你的 `CHANNEL_ACCESS_TOKEN` 及 `CHANNEL_SECRET`，貼入時成對的單引號(或雙引號)不要拿掉:
    ```
    #line-bot
    channel_access_token = 'YOUR_CHANNEL_ACCESS_TOKEN' 
    channel_secret = 'YOUR_CHANNEL_SECRET'
    ```
    
2. 將原本程式新增使用 `config` 模組，用法是 `from config import *` ，將程式以下2行內容進行替換:
    ```python
    #原本的
    line_bot_api = LineBotApi('YOUR_CHANNEL_ACCESS_TOKEN')
    handler = WebhookHandler('YOUR_CHANNEL_SECRET')
    ```
    替換為:
    ```python
    #替換的
    from config import * 

    line_bot_api = LineBotApi(channel_access_token)
    handler = WebhookHandler(channel_secret)
    ```

5. 最終`app.py`程式碼調整如下
    ```python
    from flask import Flask, request, abort

    from linebot import (
        LineBotApi, WebhookHandler
    )
    from linebot.exceptions import (
        InvalidSignatureError
    )
    from linebot.models import (
        MessageEvent, TextMessage, TextSendMessage,
    )

    app = Flask(__name__)
    
    #config模組方案
    from config import * 

    line_bot_api = LineBotApi(channel_access_token)
    handler = WebhookHandler(channel_secret)


    @app.route("/callback", methods=['POST'])
    def callback():
        # get X-Line-Signature header value
        signature = request.headers['X-Line-Signature']

        #get request body as text
        body = request.get_data(as_text=True)
        app.logger.info("Request body: " + body)

        #handle webhook body
        try:
            handler.handle(body, signature)
        except InvalidSignatureError:
            print("Invalid signature. Please check your channel access token/channel secret.")
            abort(400)

        return 'OK'


    @handler.add(MessageEvent, message=TextMessage)
    def handle_message(event):
        if event.source.user_id =='Udeadbeefdeadbeefdeadbeefdeadbeef':
            return 'OK'
        line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text=event.message.text))


    if __name__ == "__main__":
        app.run()
    ```

### 方法2: 用 `configparser` 模組，建立 `config.ini`檔案(參考)
實測偶有狀況但較常見(正確的?)管理方式
1. 在專案根目錄建立 `config.ini` 檔，內容為:
    ```
    [line-bot]
    channel_access_token = 'YOUR_CHANNEL_ACCESS_TOKEN'
    channel_secret = 'YOUR_CHANNEL_SECRET'
    ```
2. 原本程式碼新增使用 `configparser` 模組，將以下原本20、21行內容進行替換:
    ```python
    #原本的
    line_bot_api = LineBotApi('YOUR_CHANNEL_ACCESS_TOKEN')
    handler = WebhookHandler('YOUR_CHANNEL_SECRET')
    ```
    替換為:
    ```python
    import configparser 

    config = configparser.ConfigParser()
    config.read('config.ini')

    line_bot_api = LineBotApi(config.get('line-bot', 'channel_access_token')) #已存於config.ini
    handler = WebhookHandler(config.get('line-bot', 'channel_secret'))
    ```
3. 因為有用新的模組，在 `requirements.txt` 新增 `configparser==5.0.0` ，檔案修正如下:
    ![](https://i.imgur.com/h9VqXLg.png)
4. 最終的程式碼模板
    ```python
    from flask import Flask, request, abort

    from linebot import (
        LineBotApi, WebhookHandler
    )
    from linebot.exceptions import (
        InvalidSignatureError
    )
    from linebot.models import (
        MessageEvent, TextMessage, TextSendMessage,
    )

    app = Flask(__name__)
    
    #config.ini方案
    import configparser 

    config = configparser.ConfigParser()
    config.read('config.ini')

    line_bot_api = LineBotApi(config.get('line-bot', 'channel_access_token')) #已存於config.ini
    handler = WebhookHandler(config.get('line-bot', 'channel_secret'))


    @app.route("/callback", methods=['POST'])
    def callback():
        # get X-Line-Signature header value
        signature = request.headers['X-Line-Signature']

        #get request body as text
        body = request.get_data(as_text=True)
        app.logger.info("Request body: " + body)

        #handle webhook body
        try:
            handler.handle(body, signature)
        except InvalidSignatureError:
            print("Invalid signature. Please check your channel access token/channel secret.")
            abort(400)

        return 'OK'


    @handler.add(MessageEvent, message=TextMessage)
    def handle_message(event):
        if event.source.user_id =='Udeadbeefdeadbeefdeadbeefdeadbeef':
            return 'OK'
        line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text=event.message.text))


    if __name__ == "__main__":
        app.run()
    ```

## 補充 Python 使用模組的觀念
- `import {模組}` 指令有些需要注意的地方，還是花些時間介紹。

### 外部套件引入
- 在 像是 Google Colab / Jupyter Notebook / Jupyter Lab 環境，可以用魔術指令`!pip install --files package_name`，等同在CMD下執行令。

| 指令 | 功能|
|--|--|
|`pip list`| 看目前系統有安裝哪些套件 |
|`pip search {package_name}`| 搜尋相關套件|
|`pip install {package_name}`| 安裝套件 |
|`pip uninstall {package_name}`| 移除套件|
|`pip show --files {package_name}`| 秀套件檔案列表|
|`pip list --outdated` | 列出過期套件|
|`pip install --upgrade {package_name}` | 升級套件|
#### 套件載入
- ```python
  from {package_name} import {module_name} as {nick_name}
  ```
- 以下兩者相同，哪種比較好？
    - ```python
      from requests import get
      res_example = get('http://www.example.com/')
      print(res_example.text[:100])
      ```
    - ```python
      import requests as rs
      res_example = rs.get('http://www.example.com/')
      print(res_example.text[:100])
      ```

        - 大部份時候建議使用`import`不使用`from`，環境會比較乾淨。
    
        - 最髒的是`from {package_name} import *`，意思是把該模組裡啊撒布魯全都拿來用，變數容易混淆。
        - 本篇的 `config.py` 作為模組，使用了 `from {package_name} import *` 全部引入程式中，敢這麼做是因為您自建的 `channel_access_token` 及 `channel_secret` 這兩個變數名稱都很獨特，不會與其他變數重複，較不會有弄髒程式變數的問題。

- `as` 為簡稱，簡稱為慣例（慣例有時比官方文件更需要遵守），舉例常用的模組簡稱：
    - ```python
      import pandas as pd
      import numpy as np
      import matplotlib.pyplot as plt
      import requests as rs
      ```
      例如 `import requests as rs` ，日後使用 `requests.get()` 等功能時，可以縮寫為 `rs.get()` ，真懶。



## 小結
- 上述兩者2則1採用皆可，您在這過程之中也接觸了引入自製模組(其實就是 `.py` 檔案)、引入外部模組 `pip install {package_name}` 的操作方式。
- 如果您 Coding 時擔心修改程式碼會造成原本功能失靈，建議可先註解原本程式碼，逐一調整功能並逐一測試，以確保 Bug 在可控範圍。
- 這篇如您未實作，其實不影響原本完成的鸚鵡 LINE Chat Bot 功能，但可以讓其更完整。本篇介紹到此，我們下篇見。
