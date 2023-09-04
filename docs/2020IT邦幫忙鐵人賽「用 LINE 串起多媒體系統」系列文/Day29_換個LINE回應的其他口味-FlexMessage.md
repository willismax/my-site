- LINE 可以建立漂亮的 Flex 訊息，官網雖然以 JSON 檔案介紹，但 Python 也可以實現喔! 透過 Flex Message等在手機跟電腦桌面版本都可以看到圖卡介面，相當美觀，在[官方文件](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)揭露可以完成的樣式範例，本篇來實作完成吧!
  ![](https://i.imgur.com/yD7LLrp.png)


### 實作 LINE Bot SDK 範例測試
- 回到LINE Bot SDK的[GitHub](https://github.com/line/line-bot-sdk-python)， FlexSendMessahe 的介紹不多，就是直接2個範例:
  ![](https://i.imgur.com/2vh3wuX.png)
- 結論就是這2個範例都可以通，都是`linebot.models.FlexSendMessage` 模組，採用 `from linebot.models import FlexSendMessage` 的引入方式使用 `FlexSendMessage`函數，呈現一樣的結果，有差異的地方說明如下:
    - 第一個範例若您只照上方 `from linebot.models import FlexSendMessage` 的引入方式會報錯，那是因為截圖的4個橘色函數您尚未完整引入。您程式需要改寫為:
        ```python
        from linebot.models import FlexSendMessage
        from linebot.models.flex_message import (
            BubbleContainer, ImageComponent
        )
        from linebot.models.actions import URIAction

        flex_message = FlexSendMessage(
            alt_text='hello',
            contents=FlexSendMessage.BubbleContainer(
                direction='ltr',
                hero=FlexSendMessage.ImageComponent(
                    url='https://example.com/cafe.jpg',
                    size='full',
                    aspect_ratio='20:13',
                    aspect_mode='cover',
                    action=actions.URIAction(uri='http://example.com', label='label')
                )
            )
        )
        #reply_message的組裝方式與先前範例相同，要token跟message
        line_bot_api.reply_message(event.reply_token, flex_message)
        ```
    - 第二個範例意思是說，ㄟ你就用字典 dict 來包給我就好，我全都要，引入的函數只需 `linebot.models.FlexSendMessage` 相對單純，搞通了就會選擇此種方案較省心:
        ```python
        from linebot.models import FlexSendMessage
        
        flex_message = FlexSendMessage(
            alt_text='hello',
            contents={ #就把JSON貼過來吧
                'type': 'bubble',
                'direction': 'ltr',
                'hero': {
                    'type': 'image',
                    'url': 'https://example.com/cafe.jpg',
                    'size': 'full',
                    'aspectRatio': '20:13',
                    'aspectMode': 'cover',
                    'action': { 'type': 'uri', 'uri': 'http://example.com', 'label': 'label' }
                }
            }
        )
        line_bot_api.reply_message(event.reply_token, flex_message)
        ```
    - 最後官方範例說您可以用 LINE 提供的 [Flex Message Simulator](https://developers.line.biz/console/fx/) 來設計 JSON 的內容喔。
- 這階段我們先以先前 [Day 28](https://ithelp.ithome.com.tw/articles/10242519) 的K線實作範例改為FlexMessage ，在 `handle_message()` 函數裡，將先前關鍵字為`@k <台股代碼>`的功能改寫，新增以 `#k <台股代碼>` 作功能新增測試，而貼入 content 變數的 dict 只改寫了範例的 `url` 及 `alt_text` 兩個值，其中 `alt_text` 是指您預覽時出現的提示字:
    ```python
    from linebot.models import FlexSendMessage

    @handler.add(MessageEvent, message=TextMessage)
    def handle_message(event):
        if event.message.text[:2].upper() == "#K":
            input_word = event.message.text.replace(" ","") #合併字串取消空白
            stock_name = input_word[2:6] #0050
            start_date = input_word[6:] #2020-01-01
            content = plot_stcok_k_chart(IMGUR_CLIENT_ID,stock_name,start_date)

            flex_message = FlexSendMessage(
                alt_text=stock_name, #alt_text
                contents={
                    'type': 'bubble',
                    'direction': 'ltr',
                    'hero': {
                        'type': 'image',
                        'url': content,
                        'size': 'full',
                        'aspectRatio': '20:13',
                        'aspectMode': 'cover',
                        'action': { 'type': 'uri', 'uri': content, 'label': 'label' }
                    }
                }
            )
            line_bot_api.reply_message(event.reply_token, flex_message)    
    ```
- 觀察顯示結果
  ![](https://i.imgur.com/1izYQNZ.png)
    - FlexSendMessage 跟圖片訊息目前看來有外框原角的差異，兩者比較，圖片訊息點擊就是"圖片放大"，Flex Message 點擊就是前往超連結，但連線至 Imgur 圖床網頁版沒啥好處，開起來很慢，您可以自行導引連結至比較有用的服務網頁。

### 使用 [Flex Message Simulator](https://developers.line.biz/console/fx/) 設計成果
- 在我們已經認識官方範例及實作之後，進一步客製化我們的訊息成果，在登入您 LINE 帳號進入  [Flex Message Simulator](https://developers.line.biz/console/fx/) 網頁後，動手自己刻一個吧!
- 映入眼簾的是一個官方範例:
  ![](https://i.imgur.com/jRt8aXt.png)
- 按右上方 "Showcase" 選一個符合需求的來改
  ![](https://i.imgur.com/ifmntqU.png)
- 左欄為即時預覽、中間為圖層視圖導覽、右側為參數設定，一個捏娃娃的節奏。
  ![](https://i.imgur.com/t5wulcb.png)
- 參數細節不再贅述，按下 "View on JSON" 可以把捏出的結果轉成 JSON 檔複製即可。
  ![](https://i.imgur.com/y6Xk82W.png)
- 複製後將所有的 JSON 貼給 `contents` 變數。
    ```python
    flex_message = FlexSendMessage(
                alt_text=stock_name,
                contents={...} #貼進來
            )
            line_bot_api.reply_message(event.reply_token, flex_message)
    ```
- 修正 JSON 內容:
    - 修正變數，諸如`URL`、`stock_name`、 `start_date` 等變數應修正至對應至文字、圖片或連結欄位。
    - 修正至符合 Python 的字典 dict 規則， `true / false` 要改成大寫開頭 `True / False` 不然會報錯。
- 最後測試結果:
  ![](https://i.imgur.com/bhCz1HN.png)

### 補充LINE Flex 輔助開發工具
- 因為LINE 的 Flex 模擬器畢竟不是實際手機畫面，測試時頻繁的佈署 Heroku 伺服器都是時間成本，好在已經有LINE API Expert 戴均民大神製作了[輔助開發 LINE Flex 訊息的工具](https://taichunmin.idv.tw/blog/2020-04-06-line-devbot.html)，巧妙的貼上 JSON 讓 LINE 在使用者端即時回饋設計結果，相當方便。

### 小結
LINE 除了本系列介紹的文字、圖片訊息，在互動介面提到的 Flex Message ， 還有 Rich Menu 、 QuickReply 、 LIFE 等豐富介面供使用者與聊天服務互動，不再一一介紹，但相信您在閱讀本系列文時已經有一定思路可以查閱相關資源，這也是自學開發的寶貴歷程，我們下篇見。
