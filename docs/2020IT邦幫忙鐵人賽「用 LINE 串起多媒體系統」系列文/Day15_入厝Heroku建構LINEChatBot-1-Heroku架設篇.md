![](https://i.imgur.com/hZyltyk.png)

為了在本機建立逐步建立您的 LINE Chat Bot ， 並且透過 ngrok 讓您的 Flask 得以運作，本系列文在 [Day 12](https://ithelp.ithome.com.tw/articles/10234877) 、 [Day13](https://ithelp.ithome.com.tw/articles/10234916)、 [Day 14](https://ithelp.ithome.com.tw/articles/10235031) 分3篇介紹，但透過 ngrok 要時常修改 Webhook 做測試時尚可，對於追求穩定的佈署環境並非適當，如果可以將程式放在雲端執行多好，接下來我們要佈署的伺服器為免費就夠用的 Heroku ，不只五星級而且有省錢。 Heroku 是個雲端伺服器，因為他的專案( Heroku 稱為 dyno) 可以產生具安全驗證的 https 網域， Python 等程式皆可運行，缺點是 30 分鐘不動他會休眠，每月至多醒 550 小時(有綁定信用卡可免費至多 1000 小時， dyno 合併計算），每次休眠喚醒需要約 30 秒時間，對 LINE 聊天機器人使用者而言稍嫌體驗不佳，後續會說明如何長期喚醒。當然如果你要換 AWS 或 GCP 也很不錯。

## 佈署 echo 機器人至 Heroku 雲端伺服器

### 1. 建立 Git 版本控制環境
- 如何建立已經提前寫在 [Day 4 : Git、Github 與他們快樂好夥伴們](https://ithelp.ithome.com.tw/articles/10233546)，重述安裝過程有改動的設定:
     - 預設編輯器改為 VS CODE。
     - Git Bash 改為用 windows console。
     - 在終端機輸入`git --version`確認版本，如有顯示表示安裝完成。
       ![](https://i.imgur.com/rJGKLIe.png)
     - 輸入 `git config --global user.name "你的名字"` 及 `git config --global user.email "和你的信箱"` 初始化你的 Git 環境。
        ![](https://i.imgur.com/RaEdpBy.png)
      - 先告一段落。
      
### 2. 建立Heroku伺服器環境
- 到 Heroku服務官方網址 https://www.heroku.com/ 註冊帳號。
- 依您的作業系統安裝[Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)，我們持續以 Windows 進行解說。
  ![](https://i.imgur.com/NwxL2B0.png)
    - 有提示電腦要先安裝好 Git 唷，下載安裝檔後就是一直 Next 啦。
    - 最後在終端機確認版本即可確認是否安裝成功。
      ```
      $ heroku -v
      ```
      ![](https://i.imgur.com/z8ggMko.png)

### 3. 在 Heroku 佈署聊天機器人
走到這一步你的聊天機器人可以真正走上雲端了!
1. 在 Heroku 點選建立新的 app 。
   ![](https://i.imgur.com/yT4t1O8.png)
2. 賞個名子讓他獲得加護(大賢者:【告】，沒有這回事)。
   ![](https://i.imgur.com/1H7uPgN.png)
3. 檢視 Deply 各種指令，指令幾乎針對你的 dyno 所寫，只要依照需求執行即可，跟妹妹一樣貼心。
   ![](https://i.imgur.com/1ERqPxr.png)
4. 在 Heroku 的 setting 裡，在 "Add Buildpack" 選項中選擇 Python。
    ![](https://i.imgur.com/r6C1vYU.png)
6. 回到電腦本機，創一個準備跟heroku同步的資料夾。
7. 在 CMD 輸入 `heroku login` ，依指引完成登入。
    ![](https://i.imgur.com/cP1AbIb.png)
6. 至本機資料夾完成 Git 版本控制初始化動作。本機資料夾在 Windows作業系統的話以`cd 資料夾位址`切換，在資料夾內輸入`git init`完成初始化。
    ![](https://i.imgur.com/3LnlpjS.png)
6. 增加3個必需的檔案， `Procfile`、 `rutime.txt` 及 `requirements.txt`:
    1. 在資料夾增加 `Procfile` 檔案(無須副檔名)，告訴 Heroku 我們的應用程式是 web 類型的應用程式，以及需要執行的是 app 這個檔案，`Procfile` 的內容只需要一行 `web: gunicorn app_core:app –preload`。
        ```
        web: gunicorn app_core:app –preloa
        ```
        ![](https://i.imgur.com/gWlSxLl.png)

    2. 增加 `rutime.txt` 檔案，好讓 Heroku 知道你要用什麼程式執行。
        ```
        python-3.8.2
        ```
        ![](https://i.imgur.com/rz4eL5t.png)

    4. 增加 `requirements.txt` 檔案，好讓heroku這純白的伺服器也知道要外部加載什麼模組。版本號碼不知道可以在終端機以 `pip list` 指令查詢。
        ```
        Flask==1.1.2
        line-bot-sdk==1.16.0
        gunicorn==20.0.4
        ```
        ![](https://i.imgur.com/TzaCuPh.png)
    - 你的資料夾目前應該有4個檔案。
      ![](https://i.imgur.com/5FbCD9v.png)

9. 最後，在資料夾下執行以下3個指令:
    ```
    $ git add .
    $ git commit -am "make it better"
    $ git push heroku master
    ```
    
    - `git add .`表示在此資料夾所有的異動，準備加入git版控。
    - `git commit -am "make it better"`表示留下對此版本的註解，方便日後溝通查閱。
    - `git push heroku master`表示要push變更內容到heroku伺服器的master主幹。如果出現`remote: Verifying deploy... done.`就是成功啦，有紅字代表錯誤再試著排除喔。

10. 至 Heroku 檢查是否成功。
    - 至 Overview 或 Activity 可以看到更新動態。
        ![](https://i.imgur.com/BkyRYQw.png)
    - 在 Settings 裡的 Domains 有你剛建立 dyno 的專屬 URL，會是 `https://{你的dyno名稱}.herokuapp.com/`。

### 4. 回頭修改 webhook URL
1. 將你的 dyno 專屬 URL 貼到你 LINE bot channel 的 Webhook 欄位，記得修改為 `https://{你的dyno名稱}.herokuapp.com/callback` 。
      ```
      https://{你的dyno名稱}.herokuapp.com/callback
      ```
      ![](https://i.imgur.com/JEsAxMR.png)
3. 按下 `Verify` 要等 Heroku 回傳訊息，因 Heroku 會睡覺要大概 30 秒喚醒，加上第一次建立連線，再多嘗試幾次。
    - 嘗試學著看 Heroku 的 logs ，任何錯誤碼都會顯示並試著排除，舉例如遇到 `H14`碼，至 [Heroku 錯誤代碼](https://devcenter.heroku.com/articles/error-codes#h14-no-web-dynos-running)查詢意義為何。
    ![](https://i.imgur.com/ZR0stGc.png)
    
## 小結
本篇開始將本機的程式佈署至雲端，讓您的聊天機器人如同線上的多媒體系統，可以在雲端無時無刻的提供服務。因 Heroku 免費且提供的服務網址具有 Https 憑證，不需要額外申請即可使用，讓串接需要 Https 的 LINE Message API 可以順利接獲訊息。之後我們會再完成讓 Heroku 更完整的設定，我們下篇見。
