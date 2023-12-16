---
title: 如何使用 GitHub Codespace 建立並部署 LINE Bot
slug: 如何使用 GitHub Codespace 建立並部署 LINE Bot
date: 2023-12-15T10:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [python]
---

# 如何使用 GitHub Codespace 建立並部署 LINE Bot
![image](https://hackmd.io/_uploads/H16c3RFLT.png)
### 介紹

在這篇文章中，我們將探討如何使用 [GitHub Codespace](https://github.com/features/codespaces) 快速有效地建立和部署 LINE Bot。GitHub Codespace 提供了一個雲端開發環境，使得開發人員可以在任何地方進行開發和部署。這種方式的好處是不需要本地環境配置，且環境變數的設置增加了項目的安全性。

### 步驟一：設置 GitHub Codespace

首先，你需要在 GitHub 上啟用 Codespace 並克隆你的專案。

1.  登入你的 GitHub 帳號。
2.  找到你的專案倉庫，點擊 "Code" 按鈕，選擇 "Open with Codespaces"。
3.  選擇 "New codespace" 來建立一個新的開發環境。
    ![image](https://hackmd.io/_uploads/SJnIn_cIT.png)


### 步驟二：設置環境變數

在 Codespace 中設置你的 LINE Bot 的環境變數：

1.  創建一個 `.env` 檔案。
    
2.  加入以下環境變數：

    ```
    LINE_CHANNEL_SECRET=你的channel_secret
    LINE_CHANNEL_ACCESS_TOKEN=你的access_token 
    ```
3. 在這個[示範專案](https://github.com/willismax/MediaSystem-Python-Course)，可以將`MediaSystem-Python-Course\06.Line-bot-fly-flask\`的`config-templete.py`另存為`config.py`，也就是環境變數儲存在`config.py`的檔案裡，這是一個簡易用法不建議正式使用，使用環境變數對機密資訊才有較佳的保護。

### 步驟三：安裝依賴

在 Codespace 的終端機運行以下命令安裝所需依賴：


```
pip install -r requirements.txt
```


### 步驟四：編輯程式碼

使用 GitHub Copilot 來協助編寫和優化程式碼。例如，以下是一個簡單的 Flask 應用來回應 LINE Bot 的訊息：

```python 
from flask import Flask, request, abort
from linebot import LineBotApi, WebhookHandler
from linebot.exceptions import InvalidSignatureError
from linebot.models import MessageEvent, TextMessage, TextSendMessage

app = Flask(__name__)

line_bot_api = LineBotApi('YOUR_CHANNEL_ACCESS_TOKEN')
handler = WebhookHandler('YOUR_CHANNEL_SECRET')

@app.route("/callback", methods=['POST'])
def callback():
    signature = request.headers['X-Line-Signature']
    body = request.get_data(as_text=True)
    try:
        handler.handle(body, signature)
    except InvalidSignatureError:
        abort(400)
    return 'OK'

@handler.add(MessageEvent, message=TextMessage)
def handle_message(event):
    line_bot_api.reply_message(
        event.reply_token, TextSendMessage(text=event.message.text))

if __name__ == "__main__":
    app.run()` 
```

### 步驟五：測試與部署

啟動你的 Flask 應用並進行測試。你不需要使用 ngrok 來建立 TLS 認證。

1.  在 Codespace 的終端機運行你的 Flask 應用。
2.  使用 LINE Bot 進行測試，確保一切運行正常。

### 結語

使用 GitHub Codespace 來建立和部署 LINE Bot 是一個高效且安全的方法。這種方式不僅節省了設置本地開發環境的時間，還提供了一個穩定和安全的開發平台。希望這篇文章能夠幫助你順利完成 LINE Bot 的開發和部署。
