# Day 07 : 讓彌豆子妹妹每日喚醒你 ( LINE Notify with GAS )

[![hackmd-github-sync-badge](https://hackmd.io/GM9wqvUPTtyTP9IpKc4uFQ/badge)](https://hackmd.io/GM9wqvUPTtyTP9IpKc4uFQ)


在 [Day 6](https://ithelp.ithome.com.tw/articles/10233841) 我們以複製/貼上神技喚醒了妹妹彌豆子，本篇延續 Google Apps Script(GAS) 服務設定定時觸發，讓彌豆子妹妹先養成規律生活，別像雷姆又要躺一季!!系列文後續會移駕至 Python 及入住 Heroku 別墅，本篇接著設定GAS的定時傳送通知吧!

## 設定定時傳送通知
延續Day 6的程式碼，在GAS完成後續設定:
- 程式碼:
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
- 選擇發布-佈署為網頁應用程式
  ![](https://i.imgur.com/ZHwVQKD.png)
- 每次修正時重新發布的3個選項
    - 新增
    - Me
    - 任何人，甚至匿名者
    ![](https://i.imgur.com/UcGDSVT.png)
- 點選編輯-現有專案啟動程序，將另開視窗
  ![](https://i.imgur.com/qwlXJDc.png)
- 點選右下方新增觸發條件
  ![](https://i.imgur.com/ZvHopUy.png)


- 設定屬於自己的觸發條件，這邊自己是設定每日一次
  ![](https://i.imgur.com/pK4U9G4.png)

- 設定完成，本來彌豆子需要你主動喚醒，現在換妹妹來喚醒你了!

## 小結
我們的程式碼包含了驗證用的權杖、訊息、貼圖，其格式都規定好在[官方文件](https://notify-bot.line.me/zh_TW/)，在後續系列文章將回歸以Python做介紹跟添加功能，我們下篇見!