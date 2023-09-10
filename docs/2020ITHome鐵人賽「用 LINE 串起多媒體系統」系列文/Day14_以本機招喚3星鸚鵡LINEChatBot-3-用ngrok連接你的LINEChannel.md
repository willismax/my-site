本篇延續系列文 [Day 13](https://ithelp.ithome.com.tw/articles/10234916) 搭建好 Python 的 Flask 服務，此時你的 LINE Channel 需要設定 Webhook 才能連動。在我們將程式佈署在雲端伺服器 Heroku 之前，先透過 ngrok 索取一個臨時連結來測試服務吧!

## 使用 ngrok 建立具有 https 的本機外部連線
4. 安裝及執行 [ngrok](https://ngrok.com/)
    - ngrok 可將本機的 port 建立一個通道讓外部可以連線，免費有較短的時限及次數限制但夠測試用。
      ![](https://i.imgur.com/YdSHl6u.png)
    - 下載建議版本後點選執行。
      ![](https://i.imgur.com/eaMKdBC.png)
    - 執行輸入以下指令 `ngrok http 5000` 即可開啟服務。
      ```shell
      $ ngrok http 5000
      ```
      ![](https://i.imgur.com/eDJWFXH.png)
      ![](https://i.imgur.com/T0SaHLs.png)
    - 複製 Forwarding https 的網址，如 `https://{一串亂碼}.ap.ngrok.io` ，等等用來建立 webhook 用。

5. 建立 Webhook
    - 在 LINE developer 你的LINE Bot Channel中編輯 webhook URL ，貼上 ngrok 產生的`網址`+`\callback`，像是`https://{一串亂碼}.ap.ngrok.io/callback`這樣按upload。
     > `\callback` 是對應您的 Python 程式 `@app.route("/callback", methods=['POST'])`這段描述，讓兩者相同作為互動通道。
      ![](https://i.imgur.com/rcpzZpB.png)
    - 此時按 verify 應該會回傳錯誤訊息，總之先按一次，讓我們建立的 Flask 伺服器有收到來自 LINE 的請求。
    - 由於我們以 `app.run('debug=True')` 開啟了除錯模式，可以看的到來自 LINE 傳來的請求內容，是個以大括號`{}`包起來的JSON物件(Object)，接著我們就在請求內找到對應的 `user_id` ，發現在 `event` 的 `suorce` 的 `usrID` 裡，這串字就是我們要找的!
  ![](https://i.imgur.com/ZUiumE6.png)
- 改寫 `handle_message()` ，增加一段如果 `event.source.user_id == {前面收到在 LINE 按 verify 時回傳的 user_id}` ，兩者相同時回傳 OK。
    ```python
    @handler.add(MessageEvent, message=TextMessage)
    def handle_message(event):
        if event.source.user_id =='Udeadbeefdeadbeefdeadbeefdeadbeef': #填入line在verify時回傳的user_id
            return 'OK'
        line_bot_api.reply_message(
            event.reply_token,
            TextSendMessage(text=event.message.text))
    ```
- 如果顯示 OK 表示 webhook 建立成功!
  ![](https://i.imgur.com/qspD7zs.png)
- 接著請好好的認識你妹妹吧~
  ![](https://i.imgur.com/ScFg8vX.png)
  
### 問題排除:
- 回覆說「非200的狀態」，表示 LINE 可能沒收到我方 ID 回傳 OK 的訊息。
    - 記得要改寫 `handle_message()`。
    - 確認 `app.py` 是在執行狀態( Flask 伺服器開啟中)，終端機顯示 http://127.0.0.1:5000/ 字樣，尚未按 `Ctrl + C`中斷。
    - ngrok 預設伺服器曾有發生過連線問題，試著重啟 ngrok 服務時指令在`ngrok http 5000`後方增列`--region=ap`，即以 ngrok 的亞洲伺服器啟用此服務。
      ```shell
      $ ngrok http 5000 --region=ap
      ```
## 小結
- 本系列文花了些時間終於在本機透過 ngrok 串接了鸚鵡聊天機器人，先恭喜你這並非易事，只是常用會更熟練。接下來準備佈署在 Heroku 伺服器讓程式可以雲端運作，我們下篇見。
