![](https://i.imgur.com/apqJrks.png)
- 所謂的聊天機器人的使用情境，多半不是用來"聊天"而是有特定的目的，如果只是閒聊總會變得有些文不對題有些乾，通常使用者不會純聊天，而是有自己的想法而詢問、命令機器人幫忙處裡事情。而自然語言處裡 NLP 是個很大的項目，也是持續在克服的議題，近期 Google 的 GTP-3 相當強大卻也較難落實在我們聊天機器人裡，好在 Google 提供了 DialogFlow 服務，可以透過掌握/理解人類意圖而回饋/處理正確資訊，也讓實現多輪對話及串接服務相當容易，本篇先介紹其概 念以利實踐。
## DialogFlow 介紹
- DialogFlow 是 Google 所提供的自然語言理解平台，透過 DialogFlow 可以輕鬆設計對話介面到許多應答服務之中，也可以在各種設備、智慧音箱、手機等系統，給使用者自然的對話體驗(詳見[官方介紹](https://cloud.google.com/dialogflow/docs/))。
- 在官方 [DialogFlow 基本介紹](https://cloud.google.com/dialogflow/docs/basics)中(建議所有開發者皆閱讀)， DialogFlow 有幾個關鍵概念需要說明:
    - "代理" (Agents) 做為您所訓練出來的聊天機器人，相當於您的客服人員。
    - "意圖" (Intents) 做為您每輪對話使用者想要傳達的主要內容，像是您可以設計詢問天氣的意圖、訂餐的意圖、問候的意圖等，讓代理來接受詢問執行。以意圖為單位去理解自然語言 (NLP) ，可以跳脫制式的條件式判斷，人類說話常常在傳達資訊時，人、事、時、地、物的順序不一或有資訊缺乏，而意圖較有辦法掌握表達內容。
        - 官方網站以圖示表達代理接受到詢問後，判別意圖及蒐集所需資訊(時間、地點)的過程。
          ![](https://i.imgur.com/LHBhQUX.png)
        - 意圖的內容包含:
            - "訓練短語 (Training phrases) "，您所設想使用者表達其意圖時會說的話，譬如問候的意圖，使用者會表達:安安、你好、哈囉...等，並讓 DialogFlow 學習/訓練。
            - "行動 (Actions)"，接受使用者問題， DialogFlow 判斷為何種意圖之後所採取的對應行動，您可以為各種動作命名。 
            - "參數 (Parameters)"，結構化的數據，每個參數都有其類型稱為實體類型 (entity type)，譬如: 日期、地點個別為一種類型，分別可以設計為`@sys.date`、`@sys.location`，當使用者說到日期、地點等關鍵字， DialogFlow 幫忙歸類存入。
            - "回應 (Responses)"，代理回應使用者的文字、圖片或影音，您可以設計為當使用者講完此輪意圖後所提供的解答、處理回饋結果。
        - 官網亦將使用者多句話所組成的意圖，透過"訓練短語"判斷使用者意圖並採取"行動"，將表達的內容儲存為結構畫的"參數"，將最終處理結果"回應"給使用者。
          ![](https://i.imgur.com/oy79ewu.png)
    - "實體 (Entities)"，既然使用者的表達可以作為"參數"結構化分門別類，DialogFlow 將此結構作為類似物件 (Object) 的歸納設計方式，除了有已經定義好的 `@sys` 實體，您也可以自行定義如:自行定義 "黃金烏龍"、"半糖"、"去冰"、"大奶微微"(?)等實體。
    - "上下文 (Contexts)"，使用者表達意圖時，甚至兩三種意圖同時表達、思考跳躍，這就要靠 DialogFlow 能判別上下文以正確歸納參數及回應。
        - 官方的圖試圖說明如何引導應答完成一個銀行代理功能。
          ![](https://i.imgur.com/4eBhzEa.png)
    - " 履行 (Fulfillment for integrations)"，在 DialogFlow ，每個意圖都可以啟用 fulfillment，當啟用時 Dialogflow 會向您的 Webhook 服務發送請求，其中包含有關匹配的意圖的內容。讓您的系統可以執行任何所需操作，並對 Dialogflow 作出回應，提供有關如何進行後續操作的信息。
        - 官方圖示展示了fulfillment 的處理流程，左邊為使用者的輸入及取得回應，中間透過 DialogFlow 作為中介平台，透過fulfillment 以 Webhook 向您自己設計的後端服務提出請求/接收回應。
          ![](https://i.imgur.com/THSB2Er.png)

## 小結
接下來會以預設就有的"歡迎"意圖進行實作，並且串接您的 LINE 成為聊天機器人，建議請先另開一個新的 LINE Message API 的 Channel ，取得 `Channel ID`、 `Channel Secret` 、 `Channel Access Token` 後進行實作，我們下篇見。
