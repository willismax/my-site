# Day 09 : 從 LINE Notify 學習查看API文件

[![hackmd-github-sync-badge](https://hackmd.io/dRUiUno2RP-XexQ0TTnCig/badge)](https://hackmd.io/dRUiUno2RP-XexQ0TTnCig)


- 上篇 [Day 8](https://ithelp.ithome.com.tw/articles/10234115) 內容已經可以成功運行 LINE Notify 範例，如果再包含文字、貼圖，加上LINE內建網址預覽圖片，很快就可以建構好自己的服務。因為自學者常靠谷哥搜尋教學文即實作，要掌握使用功能**還是得回頭研讀官方文件**，而文件通常不像文章好啃!
- 好在已經累積 LINE Notify 初步使用經驗與概念，接著我們來拆解研讀API文件，將看文件的習慣作為後續開發與自主學習的基石。
- 附上今日程式碼的實作成果，另外 LINE Notify 的權杖申請方式可參考系列文 [Day 6 : 歐逆醬早安，建立LINE Notify推播通知](https://ithelp.ithome.com.tw/articles/10233841)。
  ![](https://i.imgur.com/v5KOVVH.png)
  ~~好啦我們進來吧。~~
## LINE Notify API文件有什麼?
1. 點選 [LINE Notify API Documen](https://notify-bot.line.me/doc/en/)，目前只有英文版本。
2. 馬上看到更新頻繁不富奸的更新日誌:
   ![](https://i.imgur.com/gBQ7O8T.png)
3. 接著文件介紹這個API可以做什麼，摘要如下:
    - 這個LINE API由OAuth2身分驗證機制與LINE Notify通知組成。
   ![](https://i.imgur.com/mqdp8RQ.png)
   - 驗證機制流程如下圖，簡單的說取得了權杖(token)之後，傳遞訊息時認access_token即可(圖片源自[官方文件](https://notify-bot.line.me/doc/en/))。
     ![](https://i.imgur.com/f6m8i8z.png)
    - 文件接著說明有關取得endpoint URI的方法，由於我們只是發行權杖，文件的`GET https: //notify-bot.line.me/oauth/authorize`、`POST https://notify-bot.line.me/oauth/token`請自行參閱。
4. Notification 章節應該有我們傳遞訊息的格式資訊:
    - 文件有提到必須要有 bearer <access_token> and accesses 。
      ![](https://i.imgur.com/0c8kVqp.png)
    - 接著看到用`POST`方法，需要的Header內容要求，以Python程式碼實現對照如下:
      ![](https://i.imgur.com/udGrwbt.png)   
        ```python
        headers = {
            "Authorization": "Bearer " + token, 
            "Content-Type" : "application/x-www-form-urlencoded"
            }
        ```
    - 訊息內容的格式寫在Request parameters，以表格方式介紹參數名稱、必須/選用、資料型態、參數介紹‵。
      ![](https://i.imgur.com/6lVg7c8.png)
      - 參數`message`是必須的，格式為文字，最多1000個字元。即是先前的[Python程式碼](https://is.gd/DxYF2P)裡面所用的`payload = {'message': msg }`，是必要內容。
      - 參數`imageThumbnail`、`imageFullsize`是選用的，有最大尺寸限制。
      - 參數`imageFile`圖片路徑為選用，支援`.png`、`.jpg`，權限比`imageThumbnail`、`imageFullsize`優先。
      - 參數`stickerPackageId`、`stickerId`為選用，能用的貼圖官方整理於[Sticker List](https://devdocs.line.me/files/sticker_list.pdf)，在使用貼圖時這兩個參數都要填，不然會報錯。
      - 參數`notificationDisabled`是否關閉用戶通知，預設false。

- 有了上述文件閱讀基礎，後續 [LINE Notify API Documen](https://notify-bot.line.me/doc/en/) 就可以自行閱讀實作與測試。回頭看先前Python的範例程式碼，是不是更能理解了?
- 另外稍微將範例加點料，做了個會傳文字/貼圖/圖片的範例，可點選此連結開啟 [Colab](https://is.gd/DxYF2P) [![](https://i.imgur.com/pQnQ4tG.png)](https://is.gd/DxYF2P)玩看看喔!
    ```python
    #分享鐵人幫的文+貼圖+縮圖程式
    import requests
    from bs4 import BeautifulSoup as bs 

    def lineNotifyMessage(token, msg, img):

        headers = {
            "Authorization": "Bearer " + token, 
            "Content-Type" : "application/x-www-form-urlencoded"
        }

        payload = {
            'message': msg,
            'imageThumbnail' : img, #imageThumbnail、imageFullsize為成對的圖片，各有尺寸大小
            'imageFullsize' : img,
            'stickerPackageId' : 2, #stickerPackageId、stickerId為貼圖成對的編號，參閱Line Sticker List
            'stickerId' : 520
        }
        r = requests.post("https://notify-api.line.me/api/notify", headers = headers, params = payload)
        return r.status_code

    if __name__ == "__main__":
      token = '你的權杖內容'
      message = '大賢者【告】今日網友梗圖Top1'
      url = 'https://memes.tw/wtf' # 爬取https://memes.tw/wtf中網友創作的第一張梗圖
      img = bs(requests.get(url).text ,"lxml").find_all("", {'class': 'img-fluid'})[0]['data-src']

      lineNotifyMessage(token, message, img)
    ```
    

## 小結
- 官方文件是程式開發時的救命繩，LINE的官方文件配合範例程式是可以理解並實作的，做中學、學中做就越來越有程式開發的樣子啦。
- 另外LINE Notify可以接收來自其他服務的通知並通知用戶，這有些偏離後續LINE Message API開發的主軸，有興趣者參閱官方文件喔，我們下篇見!

