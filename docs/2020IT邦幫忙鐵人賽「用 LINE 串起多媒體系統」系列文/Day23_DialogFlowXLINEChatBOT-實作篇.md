![](https://i.imgur.com/XWJJanc.png)
在 Day 20 介紹神奇的 DialogFlow ，是個可以用簡易的方式使開發者專心在設計對話內容，而不會生硬的卡在條件判斷的服務。跟著本篇實作後您即可快速的結合 DialogFlow 建立 LINE 聊天機器人，本篇只有介面操作沒有任何程式碼，就讓我們開始吧!

## DialogFlow X LINE Chat BOT 實作流程
- 進入 https://developers.google.com/assistant
- 在Actions Console頁面右上方點選"Go to Actions Console"。
    ![](https://i.imgur.com/5I0f1n5.png)
- New Project
    ![](https://i.imgur.com/k2MzjOP.png)

- 有台灣選台灣
    ![](https://i.imgur.com/MEuyLnW.png)

- 創專案選Custom
    ![](https://i.imgur.com/WwxmxW5.png)
- 接著下拉到最下方Build using DialogFlow
    ![](https://i.imgur.com/rhXUAbA.png)
    ![](https://i.imgur.com/OPWfhtE.png)
    ![](https://i.imgur.com/lIQGrlM.png)
    點選BUILD會跳至DialogFlow的畫面。

- 選擇對應語系(繁中)，並按下右上方"CREATE"
    ![](https://i.imgur.com/i4Gx5t7.png)
- 示範新增歡迎詞，加了個"阿囉哈"，當按下`SAVE`即開始訓練，速度頗快，右側可以測試結果。
    ![](https://i.imgur.com/VGMw2I1.png)
    ![](https://i.imgur.com/2O8aV8W.png)
- 先告一段落

- 在左邊側邊欄 "Integrations" 選擇LINE並開啟
    ![](https://i.imgur.com/oAwO2FU.png)
- 在燈箱訊息內輸入必要資訊，包含 `Channel ID`、
 `Channel Secret` 、 `Channel Access Token`，並可記錄 DialogFlow 給的 Webhook。
     ![](https://i.imgur.com/04znj3U.png)
 - 回到 LINE Developer 的預訂連結 Channel，在"Messase API" 分頁貼入在 DialogFlow 複製的 Webhook 。按下 Update 之後記得要打開使用Webhook的功能。
    ![](https://i.imgur.com/JC0BxWM.png)
 - 完成連接
 - 如要調整應答內容，可在 "意圖 (Intents) " 頁面訓練輸入關鍵字及回應，右方可直接測試成果。
   ![](https://i.imgur.com/vThJjam.png)
 - 輕鬆修改幾個提問及回應，彌豆子又起床陪你了!
   ![](https://i.imgur.com/978h7AP.png)

## 小結
本篇實作 DialogFlow 結合 LINE 聊天機器人，幾乎沒寫到一行程式碼就完成可以貼近人類對話的機器人，相當神奇。至於如何再透過自己的伺服器(如 Flask 、 Node.js 等)，可藉由每個意圖的 Fulfillment 啟用後以 Webhook 邦定您的伺服器，做出更多客製化的資訊蒐集/處理及回應，如有興趣再自行挖掘喔。我們下篇見。
