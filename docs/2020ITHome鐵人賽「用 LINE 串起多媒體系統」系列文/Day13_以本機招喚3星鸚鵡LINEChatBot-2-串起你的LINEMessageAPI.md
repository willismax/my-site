本篇延續系列文 [Day 12](https://ithelp.ithome.com.tw/articles/10234877)，在建立好Channel設定，取得 `[你的CHANNEL_ACCESS_TOKEN]` 及 `[你的CHANNEL_SECRET]`之後，繼續一步步透過 Python 程式範例搭建機器人服務。

## 使用LINE Message API 的建立範例
 2. 在官網[使用 Heroku 建立範例聊天機器人](https://developers.line.biz/zh-hant/docs/messaging-api/building-sample-bot-with-heroku/)一文，我們點選使用 [Python Messaging API 的 SDK](https://github.com/line/line-bot-sdk-python)，將導入至LINE的 GitHub 頁面。
       ![](https://i.imgur.com/Bco9ADh.png)
       ![](https://i.imgur.com/ar4iKLe.png)
    
    
3. 將 Python Messaging API SDK，標題為[synopsis](https://github.com/line/line-bot-sdk-python#synopsis)的程式碼貼在自建的 Python 專案裡，命名為 `app.py` 。白話文就是新增一個資料夾，建立一個`.py`的檔案，程式內容如下:
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

    line_bot_api = LineBotApi('YOUR_CHANNEL_ACCESS_TOKEN')
    handler = WebhookHandler('YOUR_CHANNEL_SECRET')


    @app.route("/callback", methods=['POST'])
    def callback():
        # get X-Line-Signature header value
        signature = request.headers['X-Line-Signature']

        # get request body as text
        body = request.get_data(as_text=True)
        app.logger.info("Request body: " + body)

        # handle webhook body
        try:
            handler.handle(body, signature)
        except InvalidSignatureError:
            print("Invalid signature. Please check your channel access token/channel secret.")
            abort(400)

        return 'OK'


    @handler.add(MessageEvent, message=TextMessage)
    def handle_message(event):
        line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text=event.message.text))


    if __name__ == "__main__":
        app.run()
    ```
   ![](https://i.imgur.com/a5hIeug.png)
   - 再提醒一次可以用 [VS CODE](https://code.visualstudio.com/) 或 [PyCharm](https://www.jetbrains.com/pycharm/) 這兩個編譯器，當然你的電腦需安裝 [Python 3.X](https://www.python.org/)版本。

5. 程式內容拆解如下:
    - `from xxx import xxx`是Python輸入模組的方式，如果遇到不存在的模組會運用在終端機輸入`pip install 模組名稱`讓電腦至網路安裝模組。引入模組的規則如下:
      ```python
      from {package_name} import {module_name} as {nick_name}
      ```
    - 本次要加載的是`pip install Flask`跟`pip install line-bot-sdk`兩模組，已安裝可省略，注意套件 Flask 開頭是大寫。
      ```
      $ pip install Flask
      $ pip install line-bot-sdk
      ```
    - 以下節錄您所複製的官方程式碼，都在讓程式知道您要用的模組及取用方法，譬如: `from flask import Flask` ，接著後續程式出現 `request` (不是 `requests` ，沒有s)時，其實意思是使用了 `flask.request` 這個模組功能，也是物件導向 ( Object Oriented Programming, OOP)對使用者的意義，在此初學階段我們會用即可。
        ```python
        from flask import Flask, request, abort    #flask是一個python微型後端框架。

        from linebot import (
            LineBotApi, WebhookHandler
        )    #讀入以使用linebot的相關模組，模組的用途通常看命名就猜的到。
        from linebot.exceptions import (
            InvalidSignatureError
        )
        from linebot.models import (
            MessageEvent, TextMessage, TextSendMessage,
        )
        ```
    - `app = Flask(__name__)`將載入的flask模組實例化，即建立了flask伺服器，後續以`app`這變數操作。
        ```python
        app = Flask(__name__)
        ```
    - 替換`[你的CHANNEL_ACCESS_TOKEN]`及`[CHANNEL_SECRET]`，在你的LINE Developers console的channel都找的到。這也是每次Line bot要確認你的身分必須要post回傳的表單內容。下圖複習一下您可以在哪取得:
      ![](https://i.imgur.com/S1n0pcY.png)
        ```python
        line_bot_api = LineBotApi('YOUR_CHANNEL_ACCESS_TOKEN')
        handler = WebhookHandler('YOUR_CHANNEL_SECRET')
        ```
        記得是字串，頭尾要加成對的單引號或雙引號，也附上您複製字串後的樣式參考:
        ```python
        line_bot_api = LineBotApi('R#$%NYW#F$^N&UJHgda3435ujh5我是假的')
        handler = WebhookHandler('R#$%NYW#F$^N&UJHgda3435ujh5我是假的')
        ```
    - 接下來牽涉到Python比較進階的物件導向裝飾器decorator用法，你先這樣理解:當`@app.route("/callback", methods=['POST'])`被觸發時，也就是收到有來自`某網址/callback`的POST方法時執行以下`callback()`函數內的程式。而以下這段`callback()`函數做的是身分認證，另外`callback()`函數的名稱可以改，命名只是方便呼叫，不影響該函數內容的執行，你也可以改名叫`callcallback()`。
        ```python
        @app.route("/callback", methods=['POST'])  
        def callback():
            # get X-Line-Signature header value
            signature = request.headers['X-Line-Signature']

            # get request body as text
            body = request.get_data(as_text=True)
            app.logger.info("Request body: " + body)

            # handle webhook body
            try:
                handler.handle(body, signature)
            except InvalidSignatureError:
                print("Invalid signature. Please check your channel access token/channel secret.")
                abort(400)

            return 'OK'
        ```
    - 終於來到觸發事件時要做什麼處理囉，可以理解為當使用者在 LINE@ 官方帳號跟你留言/提出命令時，你想怎麼做，範例是 echo 使用者所說的文字訊息。
        - `event.reply_token`是每則使用者訊息 LINE Sever 都賦予的獨特 token ，僅供觸發一次不能重複使用。
        - `event.message.text`是使用者傳來的文字訊息， `TextSendMessage(text=...)` 是我們要回傳給使用者的訊息，範例讓此兩者相等，就是echo回去啦!
        ```python
        @handler.add(MessageEvent, message=TextMessage)
        def handle_message(event):
            line_bot_api.reply_message(
                event.reply_token,    #event.reply_token是每則使用者訊息line sever都賦予的獨特token，僅供觸發一次不能重複使用
                TextSendMessage(text=event.message.text))    #event.message.text是使用者傳來的文字訊息，TextSendMessage(text=...)是我們要回傳給使用者的訊息，兩者相等就是echo回去啦
        ```
    - 最後 `if __name__ == "__main__"` 是 Python 執行程式碼時會進行的內容，此段之前的引入模組、函式 function() 的設計在此主程式執行時才會呼叫使用， `app.run()` 是flask執行程式的慣用寫法，加入 `debug=True` 開啟除錯模式，好處是當程式執行期間，您對程式內容的任何修改都會及時讓開啟的服務更新，是為了等等建立webhook的必要程序喔。
        ```python
        if __name__ == "__main__":
        app.run(debug=True)
        ```
    - 執行他，終端機將有訊息顯示開啟並且有 `Running on http://127.0.0.1:5000/ ` 字樣，要中斷時按 `Ctrl + C` 即可。

## 小結
- 本篇您可以先複製程式/建立個 `app.py` 檔案後即蓋牌等下篇系列文，如對 Python 一些語法較不熟悉有稍作說明，即將進入到以本機搭建服務囉，我們下篇見。
