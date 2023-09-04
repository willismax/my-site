# Day 06 : 歐逆醬早安，建立 LINE Notify 推播通知

[![hackmd-github-sync-badge](https://hackmd.io/NVFAsWnbQxmES6R3ieKgTw/badge)](https://hackmd.io/NVFAsWnbQxmES6R3ieKgTw)


LINE Notify 可以當成 LINE 官方幫你把伺服器做掉的通知服務，你不用自己建伺服器，寫好程式後就可以建立起推播(push)通知，雖然只能推播但免費，與LINE@每月500則主動通知免費額度比起來也不錯，以下文章先以 Google Apps Script(GAS)做一個具有定時傳訊功能的機器人。詳細可參閱官方文件 https://notify-bot.line.me/zh_TW/
  ![](https://i.imgur.com/IOMIW4F.png)
  
## 建立LINE Notify訊息推播通知(Google Apps Script版)
### 1. 申請 LINE Notify 權杖
- 以自己的Line帳號登入
  ![](https://i.imgur.com/alPUrxq.png)
- 選擇個人頁面:藏在右上方你的名子
  ![](https://i.imgur.com/oTbpjRy.png)
- 選擇發行權杖
  注意**若離開此頁面，將不會再顯示新發行的權杖。 離開頁面前，請先複製權杖。**
  ![](https://i.imgur.com/Tve48df.png)
- 我們先選擇1對1聊天接收通知
  ![](https://i.imgur.com/Kn6W8AR.png)
- 記下你的權杖
  ![](https://i.imgur.com/Daet7qY.png)
- 先告一段落

### 2.使用 Google Apps Script 傳送通知
- 在google雲端硬碟新增Google App Script
  ![](https://i.imgur.com/y3zn8vE.png)
- 先給個專案名稱
  ![](https://i.imgur.com/nUvPVjE.png)
- 貼上以下程式碼，權杖換成你的權杖
    ```javascript
    function doPost() {
      UrlFetchApp.fetch('https://notify-api.line.me/api/notify', {
        'headers': {
          'Authorization': 'Bearer ' + '你的權杖',
        },
        'method': 'post',
        'payload': {
          'message':'歐逆醬早安!!!',
          'stickerPackageId': '2',
          'stickerId': '523'
            }
        });
    }
    ```
- 存檔並點選執行專案
  ![](https://i.imgur.com/0FIgo41.png)
- 好了，你只要想要彌豆子起床時，按下執行即可。
## 小結
- 本章節建立一的LINE Notify推播通知以Google Apps Script完成，實際動手做其實相當便捷快速，下篇我們會用更自動化的方式串起服務，我們下篇見!



