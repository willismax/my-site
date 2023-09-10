本篇介紹如何讓您的 Heroku 服務能定時執行排程服務，並設定好正確的時區。

## 建立計時器(鬧鐘)
因為我們使用的是Heroku的免費方案，使用上會有限制:
- 超過30分鐘閒置會睡覺，喚醒需要約20秒(參閱[dyno types](https://devcenter.heroku.com/articles/dyno-types))。
  ![](https://i.imgur.com/gdQBFuF.png)我就愛睏我就讚。
  ![](https://i.imgur.com/nYnKcgj.png)
- 無綁定信用卡每月可醒550小時、綁定信用卡每月可再+450小時(即醒1000小時)，如果時間爆了，就要等過了這個月才會甦醒喔(又一個雷姆?)。
  ![](https://i.imgur.com/9meztMp.png)

- 可以用`heroku ps -a <app name>`查閱目前使用資訊，或直接看 Heroku (參閱 [Free Dyno Hours](https://devcenter.heroku.com/articles/free-dyno-hours#dyno-sleeping))。
  ![](https://i.imgur.com/iCq8Sug.png)
  ![](https://i.imgur.com/MTQntpv.png)

- 設定一個可以定時喚醒的鬧鐘可減少喚醒等待時間。[官方推薦使用Python的APScheduler模組](https://devcenter.heroku.com/articles/clock-processes-python)當鬧鐘，鬧鐘只負責排程不負責其他任務，如同官方[Scheduled Jobs and Custom Clock Processes](https://devcenter.heroku.com/articles/scheduled-jobs-custom-clock-processes#overview)的說明， 鬧鐘( job scheduler ) 與APP的關係如下:
    ![](https://i.imgur.com/bj1LClC.png)

- 摘述 [APScheduler](https://apscheduler.readthedocs.io/en/3.0/) 模組可以做到的事情:
    - `cron` 式排程（具有可選的開始/結束時間）。
    - 基於間隔的執行（以偶數間隔運行作業，並具有可選的開始/結束時間）。
    - 一次性延遲執行（在設定的日期/時間運行一次作業）。
- 接著我們用官網範例將鬧鐘加入到Heroku APP囉。

    1. 先參閱[官方推薦的APScheduler介紹](https://devcenter.heroku.com/articles/clock-processes-python)，我們需要安裝 APScheduler ，指令為`pip install apscheduler`。
        ```
        $ pip install apscheduler
        ```
    3. 如是指在 Heroku 佈署，則是在 `requirements.txt`檔案添加一行`apscheduler==3.6.3` (截至撰文時的版本)。
        ![](https://i.imgur.com/UjKFuEL.png)

    5. 增加1個名為 `clock.py` 的檔案，意思是每週一至五的下午5點會 `print()` ，您也可以參考 [cron 規則](https://en.wikipedia.org/wiki/Cron)設定，檔案內容如下:
        ```python
        from apscheduler.schedulers.blocking import BlockingScheduler

        sched = BlockingScheduler()

        @sched.scheduled_job('cron', day_of_week='mon-fri', hour=17)
        def scheduled_job():
            print('This job is run every weekday at 5pm.')

        sched.start()
        ```
    4. 將 `Procfile` 檔案新增一行 `clock: python clock.py` 。
       ```
       clock: python clock.py
       ```
    5. 將修改跟新增好的 `requirements.txt`， `Procfile` 以及 `clock.py` commit 至 Heroku ，熟悉的 git 指令來了。
        ```
        $ git add .
        $ git commit -am "make it better"
        $ git push heroku master
        ```
    6. 最後一步是擴大時鐘過程，在您的終端機輸入 `heroku ps:scale clock=1`。
        ```
        heroku ps:scale clock=1
        ```
    7. 至Heroku 的 dashboard 瀏覽結果
       ![](https://i.imgur.com/0egkHL0.png)
       
    8. 另外因為您的Heroku 伺服器主機在美國，要修改時區為台灣，在"Settings"選"Reveal Config Vars"，KEY 輸入 `TZ`，VALUE 輸入 `Asia/Taipei`。
       ![](https://i.imgur.com/nCcN9Iu.png)
       ![](https://i.imgur.com/tjvhq8K.png)
    9. 之後觀察您的log檔案就會是正確時區了
       ![](https://i.imgur.com/2xJjSTr.png)
   10. 提醒一下，如果dyno也睡著時，鬧鐘不會自動執行(文西太陽能手電筒的概念)，要讓此`clock.py`能夠不停執行，那就請想辦法每25分鐘規律的執行`https://{你的 dyno }.herokuapp.com/`，但也僅記你沒信用卡綁定的話一個月只能醒550小時，綁定後醒1000小時的限制喔。
      ![](https://i.imgur.com/v1Hu2zn.png)
      不要那麼兇啦。


## 小結
本篇介紹了 Heroku 免費的 dyno 會愛睏的個性，並簡易修改官方設定排程，進一步客製化請搜尋 `APScheduler` 的相關設定，另外也修正時區顯示為台灣的時間。這篇文章也是希望能把 Heroku 設定更完整，當然您也可以依據自身需求晚點再設定，Heroku 設定告一段落，接下來開始加入好玩的功能到您的 LINE Chat BOT 囉，我們下篇見。
