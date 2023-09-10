本篇文章將 LINE 官方範例逐步拆解，實作 echo 聊天機器人，完成時您已結合 Python、Flask、LINE Message API 及網路訊息傳遞等基本概念開發個基本多媒體系統雛形，算是不錯開局首抽教學文，以下進行介紹。
![](https://i.imgur.com/iXYIhW2.png)

## 相關知識點
本篇進度為架構聊天機器人學會 echo 你說話的基本程式，這邊相關的知識點:
- **HTTPS**。 LINE Message API 只容許[超文本傳輸協定https](https://zh.wikipedia.org/zh-tw/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%AE%89%E5%85%A8%E5%8D%8F%E8%AE%AE)作為溝通的方式， https 需要有經過認證安全的網域才行，可採行的作法如下:
    - 建立一個雲端伺服器，申請網域及 https 憑證。
    - 由本機透過 ngrok 等程式建立具 https 憑證的臨時通道。
- **API**。 LINE、Google、Facebook 等服務為了管理開發者如何存取該服務/伺服器的內容，建立應用程式介面(Application Programming Interface,API)來進行資料交換，現今多半以JSON檔案進行傳輸，有些API需要申請後取得授權token，並且**查閱API文件使用符合規範的呼叫方式**，不然會呼叫失敗。
- **webhook URL**。 每個 LINE Bot Channels只能綁定一個webhook URL作為Line bot與你的程式傳遞資訊的橋樑，自學者常遇到 webhook 連結失敗的問題，請試著動手做喔! 參閱官方文件[設定webhook URL](https://developers.line.biz/zh-hant/docs/messaging-api/building-bot/#setting-webhook-url)。
## 實作 LINE Messaging API
- 建立[Python](https://www.python.org/)環境，請安裝[安裝Python 3.X版本](https://www.python.org/downloads/)(Python 2.X版本已於2020年停止維護)，編譯器採用微軟的[VS CODE](https://code.visualstudio.com/)或採用JetBrains的[PyCharm](https://www.jetbrains.com/pycharm/)，創建本機與外網安全連線通道用的[ngrok](https://ngrok.com/)。
- [官方文件](https://developers.line.biz/zh-hant/docs/messaging-api/)有一步步的Messaging API教學可運用。
  ![](https://i.imgur.com/98VsY0b.png)
- 瀏覽概要，鎖定用 Messaging API。下圖左方是你架構的程式伺服器、右方是LINE用戶，中間就是LINE提供的中介大平台。
    ![](https://i.imgur.com/oV23anR.png)
    
### 1. 建立Channel
- 至[ LINE Developers console](https://developers.line.biz/console/)建立Channel，以下依官網教學。
    - 所謂的Channel想像是在LINE建立一個電視頻道，就像西森幼幼、串天新聞，透過頻道提供服務。
      ![](https://i.imgur.com/73FmaxB.png)
    - 請先登入 [LINE Developers Console](https://developers.line.biz/console/register/messaging-api/provider/)
      ![](https://i.imgur.com/jRG1wPY.png)
    - 註冊/登入開發者帳號
      ![](https://i.imgur.com/wz67SIs.png)
    - 你的開發者帳號可以設定多個提供者，像是公司跟你個人名稱。
      ![](https://i.imgur.com/RfdCHGq.png)
    - 建立你的 Channel，別包含LINE關鍵字怕使用者誤會，此名稱也是將來傳送訊息時顯示的名稱(之後可以修改)。
      ![](https://i.imgur.com/uiJ8YMU.png)
    - 確認 Channel 建立結果，下圖右邊為Providers，中間是Provider所屬各 Channels。
      ![](https://i.imgur.com/YC62Mpm.png)
    - 到 Channel取得 `[你的CHANNEL_ACCESS_TOKEN]` 及 `[你的CHANNEL_SECRET]`，如遺忘或新產生按右方`Issue` / `Reissue` ，另外 `[CHANNEL_SECRET]` 可以設定存續時間，預設為永久( long-lived )，算是與安全與便捷的妥協，並讓開發者依需求設定。
      ![](https://i.imgur.com/S1n0pcY.png)
    - 此 channel 對應的 LINE 官方帳號，可在 [LINE Official Account Manager](https://manager.line.biz/) 查閱，也可於此頁開始進行官方帳號設定。
          ![](https://i.imgur.com/rblffPi.png)
        - 我們至 [LINE Official Account Manager](https://manager.line.biz/) 的"回應設定"。
          ![](https://i.imgur.com/F6uLKmc.png)
            - "加入好友歡迎訊息"依您需求選擇停用/啟用，這邊設停用。
            - "自動回應訊息"建議設定停用，不然罐頭訊息太多。
            - "Webhook"必須為啟用。

## 小結
本篇依照 [LINE Messaging API 官方文件](https://developers.line.biz/zh-hant/docs/messaging-api/)把Channel設定好，下篇會拆解程式範例，我們下篇見!


## 參考
- [LINE Messaging API 官方文件](https://developers.line.biz/zh-hant/docs/messaging-api/)
