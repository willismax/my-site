![](https://i.imgur.com/2o7zKaG.png)
在 [Day 20](https://ithelp.ithome.com.tw/articles/10235642) 我們示範了在 Colab 如何以 Python 實現 Google 翻譯功能的過程，也做出一個 `text_to_translate()` 函數能將翻譯處理更為簡化，接下來本篇重點在於如何將包好的函數功能添加到聊天機器人理。示範的方式採用 `"關鍵字"+"參數"` 讓BOT能實現功能。

## 添加翻譯功能實作
- 我們目前在 Flask 的 `app.py` 程式碼如下，還只是個 echo 鸚鵡:
    ```python=
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

    from config import * 

    line_bot_api = LineBotApi(channel_access_token)
    handler = WebhookHandler(channel_secret)


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
        if event.source.user_id =='Udeadbeefdeadbeefdeadbeefdeadbeef':
            return 'OK'
        line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text=event.message.text))


    if __name__ == "__main__":
        app.run()
    ```
- 目前的專案的目錄:
   ![](https://i.imgur.com/6KsVYZE.png)

- 我們準備新增翻譯功能，最終結果程式碼如下，稍後再逐步介紹:
    ```python=
    from flask import Flask, request, abort

    from linebot import (
        LineBotApi, WebhookHandler
    )
    from linebot.exceptions import (
        InvalidSignatureError
    )
    from linebot.models import (
        MessageEvent, TextMessage, TextSendMessage
    )

    from googletrans import Translator # Google 翻譯模組

    app = Flask(__name__)

    from config import * 

    line_bot_api = LineBotApi(channel_access_token)
    handler = WebhookHandler(channel_secret)


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

    #新增自訂translate_text()函數
    def translate_text(text,dest='en'):
        """以google翻譯將text翻譯為目標語言

        :param text: 要翻譯的字串，接受UTF-8編碼。
        :param dest: 要翻譯的目標語言，參閱googletrans.LANGCODES語言列表。
        """
        translator = Translator()
        result = translator.translate(text, dest).text
        return result

    @handler.add(MessageEvent, message=TextMessage)
    def handle_message(event):
        if event.source.user_id =='Udeadbeefdeadbeefdeadbeefdeadbeef':
            return 'OK'
        if event.message.text[:3] == "@翻英":
            content = translate_text(event.message.text[3:], "en")
            message = TextSendMessage(text=content)
            line_bot_api.reply_message(event.reply_token, message)
        if event.message.text[:3] == "@翻日":
            content = translate_text(event.message.text[3:] , "ja")
            message = TextSendMessage(text=content)
            line_bot_api.reply_message(event.reply_token, message)
        if event.message.text[:3] == "@翻中":
            content = translate_text(event.message.text[3:] , "zh-tw")
            message = TextSendMessage(text=content)
            line_bot_api.reply_message(event.reply_token, message)
        else: line_bot_api.reply_message(event.reply_token,
                                         TextSendMessage(text=event.message.text))

    if __name__ == "__main__":
        app.run()
    ```
- 將上述程式碼複製取代原本的 `app.py` 。
- 請將您的專案資料夾內 `requirements.txt` 內容新增一行 `googletrans==3.0.0` ，讓 `commit` 至 Heroku 時由該服務安裝相關模組。
  ![](https://i.imgur.com/31fZXKq.png)
- 在終端機 'commit' 您的檔案，提醒您需要的3行指令:
    ```
    $ git add .
    $ git commit -am "add translator func"
    $ git push heroku master
    ```
## 拆解說明

- 我們在 `app.py` 新增功能，將增加先前設計的 `translate_text()` 函數，配合引入 `googletrans.Translator` 模組，您會在程式碼看到以下新增內容，全為上篇所建立的模組:
    ```python
    from googletrans import Translator # Google 翻譯模組

    #新增自訂translate_text()函數
    def translate_text(text,dest='en'):
        """以google翻譯將text翻譯為目標語言

        :param text: 要翻譯的字串，接受UTF-8編碼。
        :param dest: 要翻譯的目標語言，參閱googletrans.LANGCODES語言列表。
        """
        translator = Translator()
        result = translator.translate(text, dest).text
        return result

    ```
- 在 `handle_message()`的函數之下，新增流程控制。
    - Python 的流程控制最常用的就是 `if else` ，也可能有更多的流程需要處理時，可以用到 `if elif else`，寫法參考如下:
        ```python
        #當只用if時
        if 條件成立:
            執行程式
        ```
        ```python
        #if else
        if 條件成立:
            執行程式
        else:
            執行程式
        ```
        ```python
        #if elif else
        if A條件成立:
            執行程式
        elif B條件成立:
            執行程式
        else:
            執行程式
        ```
        - 值得一提的是，也有傾向流程控制只用`if`來撰寫程式的風格，看起來更為簡潔。
    - 接著我們來拆解，看起來目前有三個 `if` 內容都相似，選一個來介紹:
        ```python
        if event.message.text[:3] == "@翻英":
            content = translate_text(event.message.text[3:], "en")
            message = TextSendMessage(text=content)
            line_bot_api.reply_message(event.reply_token, message)
        ```
        - `event.message.text` 是使用者從 LINE 發出的訊息文字，也是由 LINE 平台傳到 Flask 收到的內容， `[:3]` 代表文字從頭開始0數到3之前的內容，即使用者傳訊息的開頭前3個字是`@翻英`時條件成立，執行縮排內的內容。
        - `translate_text()` 內容為收到訊息的第4個字之後文字，參數使用 `event.message.text[3:]` ，存入變數`content`。
        - 最後依照 LINE Message API 的格式，以 `line_bot_api.reply_message(event.reply_token, message)` 以 [POST] 方法提交給 LINE 平台處理，將處理結果回應給使用者知悉。
        - `commit` 到 Heroku 之後，記得測試看看成果如何喔!

- 補充我怎麼使用此功能，自己的用法是使用時先在 LINE 打上關鍵字"@翻英"、"翻中"等，再用語音輸入內容，幾乎可以取代翻譯APP啦，可以試試看喔。
## 小結
本篇用加入了 Google 提供的翻譯功能 API ，使用者只要以關鍵字開頭，後續的文字就會翻英/翻日/翻中，相當便捷，也藉機說明流程控制的寫法，相望對各位後續開發有些幫助，我們下篇見。
