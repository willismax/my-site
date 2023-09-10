- 系列文走到此時，您對 Python 及 LINE 聊天機器人開發有些認識，在入門開發的過程中，一方面也肯定自己實作的成果，也許您心中也有更多的疑惑在於實踐。本篇介紹如何擷取您所需的網頁資訊，為後續開發功能鋪路。
- [Colab 支援 ![](https://i.imgur.com/pQnQ4tG.png)](https://colab.research.google.com/drive/1fucDkZ-qe8RCtimp-GDiI4h9qwMCP0Zf?usp=sharing)

## Python 資料擷取術


### 什麼是網頁

- 網頁的基本組成: HTML + CSS + JavaScritp
    - HTML: 主要為定義網頁的內容、結構。
    - CSS: 主要為設定顯示的風格Style
    - JS: 行為...
- HTML是階層式文件結構，由許多元素(Elements)組成
    - 一個元素包含開始標籤、結束標籤、屬性及內容，例如: `<Tag 屬性>內容</Tag>` 。
    - 常用標籤
        |標籤名稱|用途|
        -|-
        `<h1> ~<h6> `| 標題
        `<p>`|段落
        `<a href="https://www.123.com">`|超連結
        `<table>`|表格
        `<tr>`|表格內的row
        `<td>`|表格內的cell
        `<br/>`|換行(無結束標籤)
    - 常用屬性(Attributes)
        |屬性名稱|用途|
        -|-
        `class`|標籤的類別(可重複)
        `id`|標籤的id(不可重複)
        `title`|標籤的顯示資訊
        `style`|標籤的樣式
        `data-*`|自行定義的屬性

### 擷取網頁必要知識
- 在HTTP協定中，定義了多種不同的method做為服務的請求方法，近年來由於行動裝置的普及化，越來越多的產品及網站都提供了WebAPI服務，既然我們要擷取網頁內容，就必須知道對HTTP請求方式。
- 在HTTP 1.1的版本中定義了八種 Method (方法)，如下所示：
    - OPTIONS
    - **GET**
    - HEAD
    - **POST**
    - PUT
    - DELETE
    - TRACE
    - CONNECT
- 常見的method為以下5種:
    method|意義|
    -|- |
    GET|取得(想要的服務)的資料或是狀態。|
    POST|如同填表般的行為，以新增一項資料。
    PUT|利用更新的方式於"指定位置"新增一項資料。
    PATCH|在現有的資料欄位中，增加或部分更新一筆新的資料。
    DELETE|刪除指定資料。
- 更進一步了解請參閱W3C制定規範[RFC 5789](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5)。另外在網頁與"資料庫"的操作過程中，也會經常聽到CRUD這個詞，CRUD是指新增(Create)、讀取(Read)、更新(Update)、刪除(Delete)的主要4個操作資料庫(如MySQL等)常用的功能。

### 淺談Restful API
- REST 全名 Resource Representational State Transfer，可譯為具象狀態傳輸，其核心精神在於借用 HTTP 協定做為基礎，讓API規格簡單一致:
    - Resource：資源。
    - Representational：表現形式，如JSON，XML．．．
    - State Transfer：狀態變化。即上述講到的可利用HTTP動詞們來做呼叫。
- 舉例運用RESTful API 開發的WebAPI的interface：
    - 獲取商品資料 `/GET/items/9527`
    - 新增商品資料 `/POST/items`
    - 更新商品資料 `/PATCH/items/9527`
    - 刪除商品資料 `/DELETE/items/9527`

### 什麼是網路爬蟲(Web Crawler)
- 網路爬蟲像是機器人，自動化的幫你擷取目標資訊，您熟知的 Google 服務也是基於網頁擷取/搜尋而產生的服務。
- 爬蟲應用相當多元，可以用來蒐集熱門景點評論、輿論分析系統、銷售分析、旅遊訂票等...
- 在寫爬蟲之前，要注意的:
    - 有沒有人寫過? 有的話可以減少重工。
    - 該網站是否已經有 API 供人取用?
    - 要有禮貌(大量、頻繁的請求會造成伺服器負荷)。

### 如何做一個有禮貌的爬蟲
 - 爬取網站資料時，請勿過於頻繁的索取資料，善用 `time.sleep()` 增加間隔，如:
     - 固定3秒執行:
        ```python
        import time

        print('----start----')
        time.sleep(3)
        print('----done----')
        ```
    - 隨機範圍時機執行:
        ```python
        import time
        import random

        random_s = 1 + random.randint(0,2) #加入隨機秒數
        print('----start----')
        time.sleep( random_s)
        print('----done----')
        ```
- 經過 SEO 的網站可能有允許/禁止爬取的頁面規範，可至該網站網域`/robots.txt`查看，如`https://www.facebook.com/robots.txt`及`https://twitter.com/robots.txt` 。都有寫明禁止爬取之處。
  ![](https://i.imgur.com/wqrFq3X.png)
- `robots.txt` 只是表明不要到網站這些地方，許多 Web Scraping 自動化工具及服務會遵循（也可以關掉預設值）。
- 另外也請注意智慧財產權( Intellectual Property, IP )，像是商標、著作權、專利，如果有未獲同意、實際傷害及故意，則有觸法之虞。

### 被 Ban 怎麼辦?
- 為了避免頻繁請求被目標伺服器阻擋，測試爬蟲時可採用你的手機( 4G / 5G)網路，如果被 ben，手機改飛航模式一陣子再開 4G 網路，即會在自動分配(取得)新的 IP Address ，或依您所請求的伺服器設定過陣子試試看解鎖沒。

## 開始動手做GET網頁
- 以 example 網頁為例
    - 先觀察目標網頁: http://www.example.com/
      ![](https://i.imgur.com/jpG80n6.png)
    - 以 `requests.get()` 抓取網頁原始碼，如您尚未安裝 `requests` 模組，請先在終端機執行 `pip install requests` ，記得結尾有 `s` 唷。
    - 程式碼執行及輸出結果如下:
        ```python
        import requests

        res = requests.get('http://www.example.com/')
        print(res.text[:500])
        ```
        ![](https://i.imgur.com/DQkuvWy.png)
- `Requests` 常用函數
    - `response.status_code`
      - 200 OK
      - 403 Forbidden （禁止）
      - 404 Not Found
    - `response.encoding`
      - 如果是中文網站要特別注意編碼的問題。
      - 常用編碼 UTF-8 ，windows可能會遇到 CP950 、 Big5 等編碼問題。
    - `response.text`
      - 目標網頁的HTML文字，即被 Tag 包起來的內文(目標資訊）。
        ```
        res.encoding
        #輸出 UTF-8
        ```
### 以 Beautiful Soup 讀取並解析 HTML
- 參閱[Beautiful Soup 文件](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)(此時最新版本為 4.9.0 )。
- Beautiful Soup 是強大的 HTML 解析器，可創建一個 `BeautifulSoup` 物件，將網頁讀入。此時`soup`的 datatype 為 `bs4.BeautifulSoup` 物件，此物件中包含了整個 HTML 文件的結構樹，有了這個結構樹之後，就可以輕鬆找出任何有興趣的資料了。如尚未安裝請執行 `pip install beautifulsoup4` 安裝模組，如為筆記本環境請加魔術指令 `!` 。
  ```python
  from bs4 import BeautifulSoup 

  soup = BeautifulSoup(res.text, "lxml")
  type(soup)
  #輸出 bs4.BeautifulSoup
  ```

- 下表列出了主要的超文本解析器，以及它們的優缺點：
    解析器|使用方法|優勢|	劣勢|
    -|-|-|-
    Python 標準庫|	`BeautifulSoup(markup,"html.parser")` `	|Python的內建標準庫、執行速度適中、文檔容錯能力強|Python 2.7.3及3.2.2之前的版本中文檔容錯能力差
    lxml HTML 解析器|	`BeautifulSoup(markup, "lxml")`	|速度快、文檔容錯能力強(通常用這個)|需要安装C語言庫
    xml XML 解析器|`BeautifulSoup(markup , "xml")`|速度快、唯一支持XML的解析器|需要安装C語言庫
    html5lib	|`BeautifulSoup(markup, "html5lib")`	|最好的容錯性、以瀏覽器的方式解析文檔、生成HTML5格式的文檔|速度較慢、不依賴外部模組
- 輸出排版後的 HTML 程式碼
    ```python
    print(soup.prettify())
    ```
    ![](https://i.imgur.com/JLov7zo.png)

#### BeautifulSoup的常用函數
- `soup.find()` 
    - 找一個標籤 tag，將回傳第一個被 tag 包圍的區塊，例如`soup.find('p')`。
      ![](https://i.imgur.com/VZoE1LS.png)

    - 傳入的參數第一個通常是 tag 名稱，第二個引數若未指明屬性就代表 class 名稱，也可以直接使用 id 等屬性去定位區塊。定位到區塊後，可以取出其屬性與包含的字串值，接受的參數為`soup.find(name=None, attrs={}, recursive=True, text=None, **kwargs)`。
      
    - 以下程式顯示`a`標籤內容、`a`標籤的`href`屬性內容，以及`a`標籤的文字內容: 
        ```python
        import requests
        from bs4 import BeautifulSoup 

        res = requests.get('http://www.example.com/')
        soup = BeautifulSoup(res.text, "lxml")
        a = soup.find("a")

        print(a) #<a href="https://www.iana.org/domains/example">More information...</a>
        print(a["href"]) #https://www.iana.org/domains/example
        print(a.text) #More information...
        ```
    - 以下程式將 `title` 標籤抓出來，用 `title.string` 抓出其內容
        ![](https://i.imgur.com/vUSPRME.png)
        ```python
        title_tag = soup.title
        print(title_tag) #<title>Example Domain</title>
        print(title_tag.string) #Example Domain
        ```
    - 取出節點屬性
      - 若要取出 HTML 節點的各種屬性，可以使用 `get`，如果不用`get`也可以擷取屬性，但不存在時會出現錯誤，有礙後續爬蟲執行。使用`get`如無此屬性，回傳結果為none。其他詳細用法可參考 [BeautifulSoup的官方文件](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)
          - 會報錯停止執行的例子
            ![](https://i.imgur.com/VkKkXrL.png)
          - 如使用`get()``，未搜尋到的結果回傳為`None`，不會報錯終止。
            ![](https://i.imgur.com/DXaV1El.png)

- `soup.find_all()`，我全都要!
    - 回傳全被tag包圍的區塊，回傳為串列 list。
        ```python
        import requests
        from bs4 import BeautifulSoup 

        res = requests.get('http://www.example.com/')
        soup = BeautifulSoup(res.text, "lxml")
        p_tags = soup.find_all("p")

        print(p_tags)
        ```
      ![](https://i.imgur.com/WOan1qw.png)
    - 搜尋節點並從 list 取出內容，就需要 `for` 迴圈囉:
       ```python
       p_tags = soup.find_all("p")

       for tag in p_tags:
          print(tag.string)
       ```
    - 以 list 同時搜尋多種標籤，搜尋結果也是 list: `soup.find_all(["h1","p","a"])` :
      ![](https://i.imgur.com/xWUtRTU.png)
    - 以 `limit` 參數限制搜尋數量，如: `soup.find_all("p", limit=2)` ，只有1個就可以改為 `find()` 就好。
      ![](https://i.imgur.com/hYaZCk4.png)
    - 不指定標籤，但找出所有屬性 class = "zzz" 的標籤，建議爾後搜尋屬性都遵循此用大括號`{k:v}`的樣式，如 `soup.find_all("", {"class":"zzz"})`。
    - 找出所有內容等於 Example Domain 的文字 `soup.find_all(text="Example Domain")`:
       ![](https://i.imgur.com/L7TBaD8.png)
- `soup.select()`
    - `soup.slect()` 的選取方式跟 jQuery 十分相似，是基於 CSS 的搜尋，如果您有 jQuery 基礎會學得相當親切亦用。
    - 如果要搜尋 `class` 就用 `.` ；搜尋 `id` 就用 `#` 。
    - 如果是非 `class` 或 `id` 的屬性，用中括號 `[]` 填入要搜尋的`[屬性名稱]`、或`[屬性名稱及其內容]`。
        ```python
        import requests
        from bs4 import BeautifulSoup 

        res = requests.get('http://www.example.com/')
        soup = BeautifulSoup(res.text, "lxml")

        select_a = soup.select("a")
        select_href1 = soup.select('[href]')
        select_href2 = soup.select('[href="https://www.iana.org/domains/example"]')
        
        #以下輸出結果一致，皆為[<a href="https://www.iana.org/domains/example">More information...</a>]
        print(select_a)
        print(select_href1)
        print(select_href2)
        ```
    - 如果要取出屬性內容，皆以 Python 的 list 操作方式，舉例如`select_a[0]["href"]`
      ![](https://i.imgur.com/fN2PBc2.png)




### 結合正規表達式 Regular expression 進行搜尋

- 正規表達式對於精準抓取網頁的各種標籤及內文非常有幫助，解決了許多Xpath與CSS selector無法精確擷取的問題，有必要好好理解。
- 擷取的文句段落可以使用[regex101](https://regex101.com/)嘗試，該網站亦可搜尋別人寫好的正規表達式。
    意義|表示|範例|
    -|-|-|
    Start|`^`|123ABC `/^1/`
    End|`$`|123ABC `/5$/`
    Range|`[<Start>-End>]`|123ABC `/^[0-2]/`
    Number|`\d`|123ABC `/^\d/`
    Character|`\w`|123ABC `/\w$/`
    Invisible Character|`\s`|`Tab, Space, Escape, …`
    Zero or One|`+`|
    Zero or More|`*`|123ABC `/\w+$/`
    One or More|`?`|123ABC `/[0-2]/`
    Named Group|`(?P<name>expression)`|
    Named Group|`(?<name>expression)`|

- Python 的正規表達是可使用內建的 `re` 模組:
    - 推薦使用 `re.findall()` 函數。
    - 常用參考寫法:
        ```python
        import re

        pattern = "我寫好的 regular expression" 
        string = "我想要找的字串" 
        re.findall(pattern, string)
        ```
        ![](https://i.imgur.com/nalc8MP.png)
    - 尋找超連結的範例:
        ```python
        import requests
        import re

        res = requests.get('http://www.example.com/')

        #找出html裡的超連結 
        pattern = r'href=\"(.*)\"|href=\'(.*)\'' #參閱https://regex101.com/r/uw6MLH/1
        string = res.text
        re.findall(pattern, string)[0][0]
        ```
## 小結
這篇文章主要介紹網頁資料擷取常用的 `requests` 及 的 `soup.find()` 、 `soup.find_all()` 、 `soup.select()` 用法、正規表達式的 `re.findall()` 模組，已經可以實踐抓取許多網頁，但網路資料擷取/爬蟲基本上都要針對不同網站下功夫處理，時常伺服器為了反爬蟲也在更動屬性/標籤，下篇會包含實作，我們下篇見!
