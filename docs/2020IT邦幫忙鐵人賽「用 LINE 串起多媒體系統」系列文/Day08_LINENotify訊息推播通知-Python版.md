# Day 08 : LINE Notify 訊息推播通知 (Python版)

[![hackmd-github-sync-badge](https://hackmd.io/nLvaZZZuTGemdau3s1OdmA/badge)](https://hackmd.io/nLvaZZZuTGemdau3s1OdmA)


- 有了用 Google Apps Script(GAS) 創建 LINE Notify 訊息推播通知的寶貴經驗，本篇直接提供 Python 程式碼，直接替換您的權杖即可。但也提供兩中方式，一是用 Google Colab ，如果測試成功可以加到瀏覽器我的最愛吧! 另一種是使用VS CODE在本機執行。如果有疑問， LINE Notify 的權杖申請方式可參考系列文 [Day 6 : 歐逆醬早安，建立LINE Notify推播通知](https://ithelp.ithome.com.tw/users/20121130/articles) 、安裝Python可參考系列文 [Day 3 : Python開發環境及工具介紹](https://ithelp.ithome.com.tw/articles/10233530)，如無疑問我們接著進行。
- Python 版的 LINE Notify 訊息推播流程與 Google Apps Script(GAS) 的LINE Notify 權杖可以共用，意思是即使您用不同程式開發， LINE Notify API 收到正確格式就會傳送推播訊息囉。

## 方法1. 使用Colab執行
[![](https://i.imgur.com/pQnQ4tG.png)](https://is.gd/DxYF2P)
- 延續第6天已經設定好的 LINE Notify ， Python 程式碼以 Colab 執行，請[點此連結](https://is.gd/DxYF2P)或上方圖示開啟已經為您設定好的 Colab。
    - Colab 為 Google 服務，一般為免費，需登入您的 Google 帳號。
    - 記得下方更換為您自己的權杖`token= '你的權杖內容'` 。
    - 按 Play 鈕或 Shift + Enter 即可執行程式碼。
    - 這份 Colab 可另存至您的雲端硬碟，或在畫面左上方選擇以 Playground 模式體驗，體驗後此虛擬環境Google 將不記憶自動回收。您也可以加入瀏覽器我的最愛。
      ![](https://i.imgur.com/7vblaCz.png)
      
  
## 方法2. 使用Visual Studio Code本機執行
- 你可以在本機電腦創建一個`.py`檔案複製下方程式碼執行，當然您至少去[安裝個Python](https://www.python.org/downloads/)。
- 以下為Python code 
    ```python
    #基本功能測試
    import requests

    def lineNotifyMessage(token, msg):

        headers = {
            "Authorization": "Bearer " + token, 
            "Content-Type" : "application/x-www-form-urlencoded"
        }

        payload = {'message': msg }
        r = requests.post("https://notify-api.line.me/api/notify", headers = headers, params = payload)
        return r.status_code


    if __name__ == "__main__":
      token = '你的權杖內容'
      message = '基本功能測試'
      lineNotifyMessage(token, message)

    ```
- 用VS CODE的話:
    - 右上方按下執行，下方會跳出 terminal 終端機的執行結果。
    - 記得更換你自己權杖(可以跟前幾篇 GAS 版同個權杖，沒問題)。
    ![](https://i.imgur.com/LfUm10X.png)
    你收到的訊息會跟 GAS 版一致!(可自行修改`message`內容)
    ![](https://i.imgur.com/67YUZ7k.png)
    - 對了，如果終端機訊息顯示尚未安裝 requests ，請在 terminal 終端機輸入以下指令`pip install requests`，在Windows系統搜尋CMD(命令提示字元)輸入以下指令，再次執行你的`.py`主程式就沒問題了。
        ```
        $ pip install requests
        ```
        以下是裝過後的執行畫面，訊息會說相依套件 already satisfied ，若未安裝則會執行安裝。
        ![](https://i.imgur.com/5P0JfAu.png)

## 小結
- 實作傳送一個 LINE Notify 推播訊息相當有成就感，如果對您有幫助不妨按個 Like 或留言讓我知道，後續將再對 LINE Notify 訊息格式及運用說明，我們下篇見!