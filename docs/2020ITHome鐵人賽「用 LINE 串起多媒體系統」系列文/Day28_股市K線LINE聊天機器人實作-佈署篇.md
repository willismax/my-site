## 在 LINE 聊天機器人查詢 K 線圖功能實作
![](https://i.imgur.com/bm5wyXA.png)

接續擷取股價資訊繪製K線圖的內容，接著我們讓 LINE 能夠透過關鍵字輸入查詢條件。別小看這一段，坑很多，會逐步跟您說明如何克服(填坑)。

### 實作
- 先提供本篇範例完成的程式碼，首先 `app.py` 檔案包含本次K線圖功能、系列文先前開發的 `@翻英` 、 `@翻中` 、 `@翻日` 功能:
    ```python
    from flask import Flask, request, abort

    from linebot import (
        LineBotApi, WebhookHandler
    )
    from linebot.exceptions import (
        InvalidSignatureError
    )
    from linebot.models import (
        MessageEvent, TextMessage, TextSendMessage, ImageSendMessage
    )

    from googletrans import Translator

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

    def translate_text(text,dest='en'):
        """以google翻譯將text翻譯為目標語言

        :param text: 要翻譯的字串，接受UTF-8編碼。
        :param dest: 要翻譯的目標語言，參閱googletrans.LANGCODES語言列表。
        """
        translator = Translator()
        result = translator.translate(text, dest).text
        return result

    # import mplfinance as mpf
    import yfinance as yf
    import pandas_datareader.data as web
    import pyimgur

    IMGUR_CLIENT_ID = imgur_client_id

    def plot_stcok_k_chart(IMGUR_CLIENT_ID,stock="0050" , date_from='2020-01-01' ):
        """
        進行個股K線繪製，回傳至於雲端圖床的連結。將顯示包含5MA、20MA及量價關係，起始預設自2020-01-01起迄昨日收盤價。
        :stock :個股代碼(字串)，預設0050。
        :date_from :起始日(字串)，格式為YYYY-MM-DD，預設自2020-01-01起。
        """
        stock = str(stock)+".tw"
        # df = web.DataReader(stock, 'yahoo', date_from) 
        df = yf.download(stock, date_from) 
        mpf.plot(df,type='candle',mav=(5,20),volume=True, ylabel=stock.upper()+' Price' ,savefig='testsave.png')
        PATH = "testsave.png"
        im = pyimgur.Imgur(IMGUR_CLIENT_ID)
        uploaded_image = im.upload_image(PATH, title=stock+" candlestick chart")
        return uploaded_image.link

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
        if event.message.text[:2].upper() == "@K":
            input_word = event.message.text.replace(" ","") #合併字串取消空白
            stock_name = input_word[2:6] #2330
            start_date = input_word[6:] #2020-01-01
            content = plot_stcok_k_chart(IMGUR_CLIENT_ID,stock_name,start_date)
            message = ImageSendMessage(original_content_url=content,preview_image_url=content)
            line_bot_api.reply_message(event.reply_token, message)

        else: line_bot_api.reply_message(event.reply_token,
                                         TextSendMessage(text=event.message.text))


    if __name__ == "__main__":
        app.run()
    ```
- `requirements.txt` 也有新增 `yfinace`、`mplfinance` 、 `pandas_datareader` 、 `pyimgur` 等3個外部模組，您可以注意到 `pandas_datareader` 的版本居然是 `0.9.0rc1` ，如非指定不會是此版本，此時您會遇到一個難解的坑!(2022/4/15更新:`pandas_datareader`已知有未修復錯誤，之後的讀者建議採用`yfinace`模組)
    ```python
    Flask==1.1.2
    line-bot-sdk==1.16.0
    gunicorn==20.0.4
    apscheduler==3.6.3
    googletrans==3.0.0
    # mplfinance
    yfinace
    pandas_datareader==0.9.0rc1
    pyimgur
    ```
- 修正 `config.py` ，這是我們用來存帳密 Token ，作為外部模組引用的，如果您有照著系列文 [Day 16 的 Heroku 設定](https://ithelp.ithome.com.tw/articles/10235290) ，在該檔案後方增加 Imgur 的 `Client_ID`:
    ```python
    #line-bot
    channel_access_token = 'YOUR_CHANNEL_ACCESS_TOKEN' 
    channel_secret = 'YOUR_CHANNEL_SECRET'
    # Imgur
    imgur_client_id = 'YPUR_IMGUR_CLIENT_ID'
    ```
- 最後您的專案資料夾結構如下，`clock.py` 是源自系列文 [Day 17](https://ithelp.ithome.com.tw/articles/10235590) 的設定，如您到此時無法順利執行功能，建議您回頭瀏覽系列文 [Day 15](https://ithelp.ithome.com.tw/articles/10235146) 之後的一系列 Heroku 安裝解說。

    ![](https://i.imgur.com/PNeMbuu.png)
    
### 拆解說明
- 首先我們將 [Day 27 : 股市K線LINE聊天機器人實作-1](https://ithelp.ithome.com.tw/articles/10241574)已經打包裝好的函數 `plot_stcok_k_chart()` ，加入原來的程式，並且引入3個模組讓 `app.py` 認識以利操作:
    ```python
    # import mplfinance as mpf
    import yfinance as yf
    import pandas_datareader.data as web
    import pyimgur
    ```
- `plot_stcok_k_chart()`函數功能建立之後，接著繼續用 `handle_message()` 函數處理使用者透過LINE傳來的訊息，這次我們也用條件式 `if` 來判斷，當使用者的文字訊息開頭為 `@k` 或 `@K` 時，切割相關字串作為參數傳入 `plot_stcok_k_chart()` 函數裡，節錄該功能如下:
    ```python
    @handler.add(MessageEvent, message=TextMessage)
    def handle_message(event):
        if event.message.text[:2].upper() == "@K":
            input_word = event.message.text.replace(" ","") #合併字串取消空白
            stock_name = input_word[2:6] #2330
            start_date = input_word[6:] #2020-01-01
            content = plot_stcok_k_chart(IMGUR_CLIENT_ID,stock_name,start_date)
            message = ImageSendMessage(original_content_url=content,preview_image_url=content)
            line_bot_api.reply_message(event.reply_token, message)
    ```
    - `event.message.text[:2].upper() == "@K"` ，指的是收到 `@k` 或 `@K` 條件成立執行以下縮排內容，這裡透過 `str.upper()` 統一大小寫皆轉為大寫。
    -  `input_word = event.message.text.replace(" ","")` 用到了 `str.replace(" ","")` 函數，意思是凡是此字串有空白的地方，都被取代為沒有空白，方便使用者輸入時可以自由留空格，反正我都會取代掉。
    -  `stock_name` 、 `start_date` 此2變數依據使用者輸入切片計算，且已經都沒有空格，如果使用者依功能輸入可以順利切片。
    -  `content` 變數接收 `plot_stcok_k_chart()` 執行結果，參數1所要的`IMGUR_CLIENT_ID`已經在程式碼宣告，內容在 `config.py`作為外部模組引入；後續為切片內容，分別引入 `台股名稱` 、 `資料起始日` 。
    -  透過 LINE 回傳使用者圖片訊息，需要用到`linebot.models.ImageSendMessage()` 模組，已經以 `from linebot.models import ImageSendMessage` 在 `app.py` 開頭時引入。
    -  `ImageSendMessage()` 函數需要兩個參數，`original_content_url` 及 `preview_image_url` 分別代表原圖及預覽縮圖，接受以`https://` 開頭的圖片連結，這也是為何要在[Day 26](https://ithelp.ithome.com.tw/articles/10241006) 解說如何上傳圖片至圖床的原因，因為需要 `HTTPS`而且我是個免費的蹭飯仔。如果大小在限制範圍內，兩個圖片連結相等即可
    -  最後透過 `line_bot_api.reply_message(event.reply_token, message)` 將帶有 `event.reply_token` 的訊息 `message` 按照LineBot API 要求組裝，就順利完成啦!

### 關於坑，說好的坑咧?
- 首先是引入第三方模組，特別是像 `mplfinance` 、 `pandas_datareader` 這種比較高階(貼近人性使用)的模組，背後相依套件很多，且在 `Colab` 運行正常，結果佈署在 Heroku 時就出錯，還好目前 `pandas_datareader` 的 0.9.0rc 版經測試可用，特別指定引入版本。(2022/4/15更新:`pandas_datareader`已知有未修復錯誤，之後的讀者建議採用`yfinace`模組)
- 在 Colab 實作範例最終完成的第2個模組，使用者只要輸入`@k <台股代碼> <多少天>` 即可顯示K線圖，但在 Heroku 佈署時一直報錯，都跟資料型別有關，除錯很久後最後佈署採第一個版本，讓使用者輸入 `@k <台股代碼> <起始日>` 或 `@k <台股代碼>` 即可。
- 另外是 `pandas_datareader` 的資訊來源 `Yahoo! France` ，不見得有全部台股資訊，目前沒做防呆機制，如果 `Yahoo! France` 無此股票資訊，則此功能您的 LINE 會已讀不回。(2022/4/15更新:`pandas_datareader`已知有未修復錯誤，之後的讀者建議採用`yfinace`模組)

- 除錯的方式仍然離不開 log 檔查詢錯誤，會提示錯誤的檔名、行數並持續向上追溯更底層的程式，發生問題時至 Heroku 網站查看，或在終端機輸入 `$ heroku logs` 查閱。
    ```python
    $ heroku logs
    ```
  ![](https://i.imgur.com/ckczmwk.png) 

### 小結 
您已透過 Python 完成資料擷取、 Flask 伺服器架設、 Line Bot API 功能串接 、 Pandas 資料處理、 matplotlib 資料視覺化， 並且輸出至雲端圖床顯示給使用者，整個多媒體系統 IPO 流程已經走完一遍又一遍，下篇補完一些功能後準備收尾囉，我們下篇見。
