## 擷取股價資訊繪製 K 線圖
> ### NOTE: (責任更新2022/4/15) 
> `pandas_datareader`的yahoo_finace API遇到尚未修復的問題，參考該github的[issue#916](https://github.com/pydata/pandas-datareader/issues/916)，改採`yfinance`模組即可(已修正以下程式)
- 熟悉的 [Colab支援 ![](https://i.imgur.com/pQnQ4tG.png)](https://colab.research.google.com/drive/1nE2ZfZDDJqQqn27PRiTWqrA-H-hcYk_q)。
- 股市是個買賣交易搓合的處所，每日股市交易的交易量、股價變化會是觀察的重要指標，在這股海動盪的大航海時代，大致可將股市分為基本面、技術面與籌碼面等三大面向，本次集中在股市的技術面，也就是每日股價的開、高、收、低組成的K線；以平均收盤價計算的5MA、20MA；並結合交易量進行判讀。
- 較精確的作法是至 [TWSE 臺灣證券交易所](https://www.twse.com.tw/)設法取得相關交易資訊，另外一種做法是至第三方股市資訊平台透過 [Python 資料擷取術](https://ithelp.ithome.com.tw/articles/10238573/draft) 低調的取得所需資訊，取得後透過 `Pandas` 模組清理為可處理的格式，最後再以 `matplotlib` 模組繪圖完成資料視覺化。這樣的過程您應該可以在其他系列文或文章學習，礙於本系列文主軸及篇幅不再贅述，有興趣認識 `Pandas` 操作方式可以參閱我自行翻譯官方的 [10 分鐘 Pandas](https://hackmd.io/@wiimax/10-minutes-to-pandas) 繁體中文文章，最好你10分鐘看得完，根本另外個30天系列文。!
![](https://i.imgur.com/rCRbJvA.png)
- 本篇將透過 `pandas-datareader` 、 `mplfinance` 此 2 個模組完成 K 線圖，您會發現怎麼這麼輕鬆。(2022/4/15更新: `pandas-datareader` 改採 `yfinace` 模組亦可)。



### 實作

- 認識 `pandas-datareader` (2022/4/15更新: 目前該模組yahoo finance API錯誤尚未修復)
    - 官方網址: https://pydata.github.io/pandas-datareader/
    - `pandas-datareader` 作為 `Pandas` 取得真實世界資料集的 API 介面，以股市交易資訊為主，可以取得的資源包含股價、ETF資訊、歐盟統計、NSDQ 交易資訊、莫斯科交易所(MOEX)歷史資訊、韓國交易所KOSDAQ歷史數據等。
      ![](https://i.imgur.com/GJPJOmh.png)
- 操作 `pandas-datareader`
    - 安裝指令為熟悉的 `pip install pandas_datareader` ，如果為筆記本環境記得在開頭加入 `!` 魔術指令。
        ```python
        pip install pandas_datareader
        ```
    - 取得股價資料，本次以台灣股市代碼 `0050` 的 "元大寶來台灣卓越50證券投資信託基金" 的資料，台灣的股市資訊需要在代碼後方加上 `.tw` ；資料來源為 "Yahoo! Finance" ，並顯示近5筆交易資料。
        ```python
        import pandas_datareader.data as web

        #讀取yahoo財經
        df = web.DataReader('0050.tw', 'yahoo', '2020-07-01')
        
        #顯示最新10筆盤後交易資料
        df.tail(5)
        ```
        ![](https://i.imgur.com/h2cp0ME.png)
    - 觀察資料集，由於假日沒有開盤故無資料，資料的索引為日期(感恩)，資料欄位依據為高、低、開、收、量及Adj Close ，Adj Close (Adjusted Close)是經過調整的收盤價，是遇到股票分割或發放股利時的調整值，可將除權後的數值進行計算，還原其值。
    - 您可以查閱該`pandas_datareader.data.DataReader()` 函數的參數設定，還記得嗎? 滑鼠在 Colab 的參數輸入`(`前方停留一下，跳出的提示點選`查看原始碼 Source Code` ，參數設定及使用範例資訊可供閱覽。
      ![](https://i.imgur.com/0j9WweU.png)

- 認識 `yfinance`
    - 官方Github: https://github.com/ranaroussi/yfinance
    - 目前支援非常豐富，包含加密貨幣bit等，請參閱github了解更多。
        ```
        # 改以yfinance讀取股價
        import yfinance as yf
        start = "2022-1-1"
        end = '2022-4-14'
        df = yf.download('0050.tw',start,end)
        ```

- 認識 `mplfinance`
    - 官方GitHub: https://github.com/matplotlib/mplfinance
    - `mplfinance` 是個基於 `matplotlib` 針對財金資訊圖表特別設計的模組，更為方便易用，相關範例請參閱上方 GitHub 介紹。
- 操作 `mplfinance`
    - 繪製K線圖，我們用 `mplfinance.plot()` 函數進行繪圖，參數包含資料來源 `df` ， 圖形 `candle` 也就是我們常講的K線(蠟燭圖)， 平均移動線 `mav`繪製5、20日MA， 包含交易量、標題、並儲存圖片至本機，以上設定一次完成。
        ```python
        import mplfinance as mpf

        #繪製K線圖
        mpf.plot(df, type='candle', mav=(5,20), volume=True, title='0050.TW', savefig='test_plot.png')
        ```
    - 顯示 K 線圖，您可以在 Colab 左側資料夾選單下載已經產生好的 `test_plot.png` 檔案，或用筆記本顯示圖片的模組與指令查閱。
        ```python
        from IPython.display import Image
        from IPython.core.display import HTML 

        #顯示本機圖片
        Image("test_plot.png")
        ```
        ![](https://i.imgur.com/CjtzOfY.png)
        - `mplfinance.plot()` 函數的說明比較凌亂，但透過程式觀察幾乎仍保留 `matplotlib` 對於X軸 `xlabel`、Y軸 `ylabel`、標題 `title` 等圖片客制屬性，也可以用 `addplot` 屬性，以串列 list 配合`mpf.make_addplot()`函數增加一系列所需線圖或標示，您可以在官方 [GitHub](https://github.com/matplotlib/mplfinance) 找到各種範例，像這張擷取範例的圖片，感覺就很厲害。
            ![](https://i.imgur.com/REJ5vJc.png)


### 結合圖床取得股市 K 線圖片連結

- 我們將`pandas-datareader`(2022/4/15改用`yfinance`) 、 `mplfinance` 、 `pyimgur`等3個模組組合包成函數，方便取得K線圖片連結。
- 函數-1，第3個參數為自訂資料起始日期(預設2020-01-01起):
    ```python
    #包成函數-1
    import mplfinance as mpf
    # import pandas_datareader.data as web
    import yfinance as yf
    import pyimgur
    CLIENT_ID = "你的Imgur Client ID"

    def plot_stcok_k_chart(CLIENT_ID, stock="0050" , date_from='2020-01-01' ):
      """
      進行個股K線繪製，回傳至於雲端圖床的連結。將顯示包含5MA、20MA及量價關係，預設為'2020-01-01'迄今收盤價。
      :stock :個股代碼(字串)，預設0050。
      :date_from :起始日(字串)，格式為%Y-%m-%d，預設自2020-01-01起。
      """
      stock = str(stock)+".tw"
      # df = web.DataReader(stock, 'yahoo', date_from) # 已知有未修復的錯誤
      df = yf.download(stock, date_from)
      mpf.plot(df,type='candle',mav=(5,20),volume=True,title=stock.upper() ,savefig='testsave.png')
      PATH = "testsave.png"
      im = pyimgur.Imgur(CLIENT_ID)
      uploaded_image = im.upload_image(PATH, title=stock+" candlestick chart")
      return uploaded_image.link
    ```
    - 輸出結果範例:
        ```python
        result = plot_stcok_k_chart(CLIENT_ID, "0050", "2020-09-01")
        print(result)

        from IPython.display import Image
        from IPython.core.display import HTML 
        Image(result) 
        ```
        ![](https://i.imgur.com/AXXEajL.png)


    
- 函數-2，第3個參數為交易筆數(預設為50日)，並用 `datetime` 計算回推起始日::
    ```python
    #包成函數-2
    import mplfinance as mpf
    import pandas_datareader.data as web
    import datetime
    CLIENT_ID = "471baf81eb0e7f9"

    def plot_stcok_k_chart(IMGUR_CLIENT_ID, stock="0050" , during_days=50):
      """
      進行個股K線繪製，回傳至於雲端圖床的連結。將顯示包含5MA、20MA及量價關係。
      :stock :個股代碼(字串)，預設0050。
      :during_days :蒐集幾日前的資料，預設50日前(包含假日)，但呈現的K線會扣掉。
      """
      stock = str(stock)+".tw"
      start_date = (datetime.datetime.now() - datetime.timedelta(int(during_days))).strftime("%Y-%m-%d") #計算蒐集起始日
      # df = web.DataReader(stock, 'yahoo', start_date) # 已知有未修復的錯誤
      df = yf.download(stock, start_date)
      mpf.plot(df.tail(int(during_days)),type='candle',mav=(5,20),volume=True, ylabel=stock.upper()+' Price' ,savefig='testsave.png')
      PATH = "testsave.png"
      im = pyimgur.Imgur(IMGUR_CLIENT_ID)
      uploaded_image = im.upload_image(PATH, title=stock+" candlestick chart")
      return uploaded_image.link
    ```
    - 輸出結果範例:
        ```python
        result = plot_stcok_k_chart(CLIENT_ID,"0050",60)
        print(result)

        from IPython.display import Image
        from IPython.core.display import HTML 
        Image(result) 
        ```
        ![](https://i.imgur.com/rkyT1ma.png)

- 下一篇加入 LINE 聊天機器人功能時將採用第 1 種，原因後述。


## 小結
在 Python 要熟悉資料操作勢必離不開 `Pandas` 模組，要產生數據圖形也勢必需要認識理解如何運用 `matplotlib` 繪圖，好在有巨人的肩膀可以任我們攀爬延伸，運用 `pandas-datareader`(2022/4/15更新採`yfinance`) 、 `mplfinance` 、 `pyimgur`等 3 個模組迅速解決擷取股市資料、視覺化K線圖表並上傳雲端圖床，下篇我們會佈署為 LINE 聊天機器人功能，我們下篇見。
