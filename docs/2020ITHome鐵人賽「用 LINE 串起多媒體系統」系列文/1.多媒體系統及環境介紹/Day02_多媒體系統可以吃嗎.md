# Day 02 : 什麼是多媒體系統

[![hackmd-github-sync-badge](https://hackmd.io/MiyStAQsTOSPbBXF1OKyIg/badge)](https://hackmd.io/MiyStAQsTOSPbBXF1OKyIg)

-   多媒體系統Multimedia System是指在電腦應用系統中，組合兩種或兩種以上媒體的一種人機互動式資訊交流和傳播媒體，本篇將在[系列文第一天](https://ithelp.ithome.com.tw/articles/10233234)提到的4個主軸簡要說明:
    -   資料的類型。
    -   資料輸入/輸出，以及中間過程的處理程序與方式(實踐IPO流程)。
    -   處理過程資料ETL。
    -   資料探索EDA。

資料的類型
-----

-   結構化資料
    -   如整理好的資料庫、excel試算表等數據資料，因為有一定格式脈絡，也是最方便進行數據分析的呈現方式，相關格式包含Excel可開啟的`.xsl`、以逗點區隔的`.csv`等；資料庫又可分為關聯式資料庫SQL、非關聯式資料庫NoSQL。
-   半結構化資料
    -   **XML**:可延伸標記式語言（Extensible Markup Language，簡稱：XML），可以彈性自訂義標籤作為資料傳輸運用，參閱[wiki](https://zh.wikipedia.org/wiki/XML)。
    -   **JSON**:JavaScript物件表示法（JavaScript Object Notation)，同樣用於資料交換，其精簡的結構符合現代網路資訊傳遞媒介的需求，參閱[wiki](https://zh.wikipedia.org/wiki/JSON)。
-   非結構化資料
    -   文字: 相關格式如`.txt`、`.doc`等。
    -   圖片: 相關格式如`.jpg`、`.bmp`、`.png`、`.gif`、`.gif`等。
    -   聲音: 相關格式如`.wav`、`.mp3`、`.m4a`等。
    -   影像: 相關格式如`.mp4`等。
-   資料的5V特性:**大**、**快**、**雜**、**疑**與**價值**
    -   大數據或巨量資料的名詞紅極一時，就像現在無處不AI，但大數據的定義真的只是指資料量大嗎?整理到最後約可歸納為5V特性，可以做為系統設計時參考:
        -   Volume-大量，表示巨量資料規模量大，傳統的資料庫系統已無法負荷。
        -   Velocity-快速，表示處理的時效，針對資料使用情境的即時性處理需求。
        -   Variety-多樣，指的是資料的形態多樣，包含資料庫、XML 文件、文字、影音、串流、…等等結構性、半結構性、非結構性的資料。
        -   Veracity-真實性，指的是這些資料是否可靠、品質是否足夠、或是結構是否完整，亦即可信度是否充足。
        -   Value-價值，是巨量資料處理流程開始與結束都會牽涉到的特性，透過巨量資料處理產生更多有價值的資料。
    -   上述5V配合時代演進、計算能力、傳輸能力及分析能力的變化，可預見在2020年起的5G時代，所謂的大、快、雜、疑與價值又有一番新思維。

資料輸入/輸出，以及中間過程的處理程序與方式(實踐IPO流程)。
--------------------------------

-   資料會有輸入(input)、輸出(output)，中間要有處理(Process)的過程，就是IPO啦，這樣的資訊處裡流程在各種知識領域作法不同，畫出來的圖形也各有巧思，萬變不離其宗。
-   以聊天機器人而言，使用者輸入(input)文字/語音，經過後台處理(Process)，再將結果輸出(output)為文字/圖片/影音/地圖等，一個系統就完成啦。可以把精神留在如何符合客戶需求及使用情境，設計能提供使用者價值的服務。

資料ETL。
------

-   資料ETL，是指資料從來源端經過萃取（extract）、轉置（transform）、載入（load）至目的端的過程(參閱[wiki](https://zh.wikipedia.org/wiki/ETL))。如何以多種格式從多個來源收集資料，並將其移至一或多個資料存放區，這樣的資訊流是需要設計的，可參閱[微軟的介紹](https://docs.microsoft.com/zh-tw/azure/architecture/data-guide/relational-data/etl)有較詳盡的說明，並引用下圖做參考。![](https://docs.microsoft.com/zh-tw/azure/architecture/data-guide/images/etl.png)
-   本系列文章會略為觸及相關知識，在實作時依照需求設計即可。

資料探索EDA
-------

-   探索式資料分析(Exploratory Data Analysis)是當面對資料時，不用馬上把頭洗下去，而是先藉由基本統計、視覺化的觀察理解手上資訊的輪廓，也是資料驅動(data drivin)思維的一種行動方式，或許可以從資料中挖掘問題或發現有趣的可能性。常用的觀察方式包含眾數、四分位數、標準差、散佈圖、趨勢圖、盒鬚圖等，透過上述做發檢測與觀察異常值、缺失值、變量間的關係、建立基本假設等。
-   本系列文章的後續會提及作法，並結合聊天機器人輸出圖片。

小結
--

-   經過對多媒體系統的各種資料類型、處理流程IPO、資料ETL及資料探索EDA初步認識，也是對建立系統觀念的簡易梳理，下篇我們將進入程式的世界，我們明天見。
