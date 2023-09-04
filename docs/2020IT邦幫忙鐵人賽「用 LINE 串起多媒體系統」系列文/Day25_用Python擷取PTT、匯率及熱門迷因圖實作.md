![](https://i.imgur.com/FM8GLDW.png)
- [Colab 支援 ![](https://i.imgur.com/pQnQ4tG.png)](https://colab.research.google.com/drive/1-gh9aZEm9f965UvQM1J9W3oi8tUezJAP?usp=sharing)

## 網頁擷取實例

### 以 PTT 為例
  
#### 1. 觀察網頁
- 這邊開始要示範使用Chrome開發者工具進行搜尋，先觀察目標網頁，我們以PTT 的 JOKE 版為例，網址 https://www.ptt.cc/bbs/joke/index.html 。
- 使用 Chrome 瀏覽器，以滑鼠右鍵選擇「檢查」，快捷鍵在 windows 環境為`ctrl + Shift + I` 或`F12` :
- 檢閱器的左上方有個按鈕，點此可以用滑鼠選取觀察元素。
- 文章列表可以觀察到推文數、文章標題、作者、日期及文章連結。
- 我們先觀察他的樹狀結構，對應的標籤與屬性。
    ![](https://i.imgur.com/KptJVKP.png)




#### 2. 擷取網頁

- 目標網址 https://www.ptt.cc/bbs/joke/index.html ，有輸出前500字表示擷取成功。
    ```python
    import requests
    from bs4 import BeautifulSoup

    res = requests.get('https://www.ptt.cc/bbs/joke/index.html')
    soup = BeautifulSoup(res.text ,"lxml")
    print(res.text[:500])
    ```
- 接下來如果簡單針對該頁面的連結、標題觀察，發現`div` 標籤的 `class='r-ent'` 有可疑的味道:
   
   ![](https://i.imgur.com/aRKnCY7.png)

- 用 `soup.select("div.r-ent")`把一個個貼文都抓下來，結果會是個 Python 的串列 list，以逗號區隔，還充斥著網頁標籤的味道:
    ```python
    results = soup.select("div.title")
    print(results)
    ```
  ![](https://i.imgur.com/mGsOwyB.png)





- 試圖擷取超連結，繼續以 `soup.select()` 定位所需資訊:
    ```python
    article_href = soup.select("div.title a")
    print(article_href)
    ```
    ![](https://i.imgur.com/kl2fnXj.png)

- 逐一取出標題、合併超連結:
    ```python
    for a in article_href:
      print('title:', a.text)
      print('href:','https://www.ptt.cc'+a['href'])
    ```
    ![](https://i.imgur.com/l2veATA.png)
- PPT 部分版會詢問是否滿18歲，那就觀察網頁模仿點選滿18歲的送出內容，原來是 `requests.get` 要加`cookies = {'over18': '1'}` 參數，整理為會說已滿18的程式如下，如您未滿18歲請據實回答喔:
    ![](https://i.imgur.com/R9Cxt4d.png)

    ```python
    #需滿18歲要加cookies = {'over18': '1'}
    import requests

    def PTT_check_over_18(url):
        """
        如果被詢問需要大於18歲時，自動點符合
        :url 要解析的網址
        """
        response = requests.get(url)
        response = requests.get(url, cookies={'over18': '1'})  # 一直向 server 回答滿 18 歲了 !
        return response

    url = 'https://www.ptt.cc/bbs/Gossiping/index.html'
    resp = PTT_check_over_18(url)  
    print(resp.text[:500]) 
    ```
    
### 以全球即時匯率 API 為例:
- 網路上許多資料其實都有整理為 JSON 格式方便取用，接下來以全球即時匯率做為示範，而且已經有示範程式了，還不把他加到機器人功能裡!
    - 匯率資料來源:https://tw.rter.info/howto_currencyapi.php#
    - 網頁說明:
      ![](https://i.imgur.com/R6Zr7KS.png)
    - 程式碼:
        ```python
        import requests
        r=requests.get('https://tw.rter.info/capi.php')
        currency=r.json()
        ```
        - `requests.get()` 取得的網頁資訊，如果是 JSON 形式如圖:
          ![](https://i.imgur.com/tto41WX.png)
        - 則可以用 `requests.get().json()` 轉為 Python 的字典 dict 資料型態。
          ![](https://i.imgur.com/JdePOle.png)
    - Python 的字典 dict 操作相當方便，譬如我要台幣匯率，循字典的樹狀結構的鍵值 keys查詢即可。
      ![](https://i.imgur.com/RyDUCQm.png)

        ```python
        usd_to_twd = currency['USDTWD']['Exrate']
        usd_to_twd
        ```
    - 同理要顯示時間也只需要 `currency['USDTWD']['UTC']` 即可。
- 整理台幣匯率的程式碼作為 `usd_to_twd()` 函數方便日後使用:
    ```python
    import requests

    def usd_to_twd():
        """
        台幣目前匯率
        """
        r=requests.get('https://tw.rter.info/capi.php')
        currency=r.json()
        usd_to_twd = currency['USDTWD']['Exrate']
        currency_time = currency['USDTWD']['UTC']
        return f'台幣匯率: {usd_to_twd},更新時間: {currency_time}'
    ```
### 在看我們 Day 8在梗圖網站做了甚麼
- [Day 8 : LINE Notify 訊息推播通知 (Python版)](https://ithelp.ithome.com.tw/articles/10234115)的 [Colab示範](https://is.gd/DxYF2P)裡有塞的一段網頁擷取的程式，還原當時使用的程式碼如下:
    ```python
    import requests
    from bs4 import BeautifulSoup as bs

    url = 'https://memes.tw/wtf' # 爬取https://memes.tw/wtf中網友創作的第一張梗圖
    img = bs(requests.get(url).text ,"lxml").find_all("", {'class': 'img-fluid'})[0]['data-src']
    ```
- 當時我們只擷取了第一張網友創作梗圖，因為您可能尚未具備爬蟲觀念及 Python 程式操作概念，故尚未解釋。現在的您應該可以注意到，如果我們將 `.find_all("", {'class': 'img-fluid'})[0]['data-src']` 中間的 `[0]` 改以 `for`迴圈依序處裡，該頁面有幾張圖都可以取出來，觀察網站發現最多顯示為 20 張圖。
- 於是花了點時間做成了 `memes_hot_imgs()` 函數，方便日後取用。
    ```python
    import requests
    from bs4 import BeautifulSoup as bs

    def memes_hot_imgs(how_many = 1):
        """
        可回傳'https://memes.tw/wtf'網友創作熱門迷因圖，
        :how_many 參數接受整數1~20，預設=1，即至多回傳20張圖。
        """
        url = 'https://memes.tw/wtf'
        imgs = bs(requests.get(url).text ,"lxml")
        imgs_list = []
        if how_many > 20: #每頁至多20張限制
            how_many = 20
        for img in range(how_many):
            _ = imgs.find_all("", {'class': 'img-fluid'})[img]['data-src']
            imgs_list.append(_)
        return imgs_list
    ```
- 另外也試著以列表推倒式改寫成了 `memes_hot_imgs2()` 函數，兩者功能相同，您喜歡哪種口味呢?
    ```python
    import requests
    from bs4 import BeautifulSoup as bs

    def memes_hot_imgs2(how_many = 1):
        """
        可回傳'https://memes.tw/wtf'網友創作熱門迷因圖，
        :how_many 參數接受整數1~20，預設=1，即至多回傳20張圖。
        """
        url = 'https://memes.tw/wtf'
        imgs = bs(requests.get(url).text ,"lxml")
        imgs_list = []
        if how_many > 20: #每頁至多20張限制
            how_many = 20
        imgs_list = [ imgs.find_all("", {'class': 'img-fluid'})[img]['data-src'] for img in range(how_many)]
        return imgs_list
    ```
    - 呼叫函式 `memes_hot_imgs2()` 也可以運作。
    ![](https://i.imgur.com/gTIUeB5.png)
## 小結
- 本篇以 3 個實際案例來展示如何擷取資料，包含從 PTT 網頁版本、 接收匯率 API 傳輸的 JSON 檔案，以及補充先前實作在 LINE Notify 的熱門梗圖改進版。我們也將在後續文章將包裝好的函數功能實作到您的LINE ChatBOT裡，我們下篇見。
