---
title: 在 Render 上快速部署 HackMD 與 LINE 的聊天機器人
slug: 在 Render 上快速部署 HackMD 與 LINE 的聊天機器人
date: 2023-09-10T12:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [LINE, Hackmd, python]
---

# 在 Render 上快速部署 HackMD 與 LINE 的聊天機器人

如果你對如何將 LINE 聊天機器人與 HackMD 結合有興趣，這篇文章正是你需要的。這次，我們將使用 Render 這個雲端平台來部署我們的應用。

## 前置作業：準備你的 GitHub 倉庫

1.  **Fork 專案**：首先，請到這個 [GitHub Repo](https://github.com/willismax/AI-LINE-2-HACKMD) 進行 fork，這樣你就有了一個屬於自己的副本。
    
    ![Fork Repo](https://hackmd.io/_uploads/Sk3T8G2P3.png)
    

## Render 設定

### 登入和選擇服務

1.  **登入 Render**：前往 [Render 的網站](https://dashboard.render.com/) 並用 GitHub 帳號登入。
    
    ![登入 Render](https://hackmd.io/_uploads/SyRlvMhP2.png)
    
2.  **選擇 Web 服務**：在 Render 的 dashboard，選擇 "Web Service"。
    
    ![選擇 Web Service](https://hackmd.io/_uploads/H1euBG3Dh.png)
    

### 設定部署參數

1.  **基本設定**：填入應用的名稱和其他基本資訊。在這裡，我們選擇免費的方案。如果你的主程式檔名不是 `app.py`，記得修改 gunicorn 的指令。
    
    ![基本設定](https://hackmd.io/_uploads/H1vOwG3P2.png) ![更多設定](https://hackmd.io/_uploads/HyK2vG3Ph.png)
    
2.  **設定環境變數**：在 `.env` 檔案中填入所有需要的環境變數。
    
    ![環境變數設定](https://hackmd.io/_uploads/rJsmy73v3.png)
    
3.  **等待部署完成**：設定完成後，Render 會自動進行部署。
    
    ![部署狀態](https://hackmd.io/_uploads/Sym_k72wh.png)
    

## 需要的 API 金鑰和資訊

### HackMD API

-   請參考 HackMD 的官方文件以獲得 API 金鑰。

### OpenAI API

1.  訪問 [OpenAI API 官網](https://openai.com/blog/openai-api)。
    
2.  生成一個一次性的 API 金鑰。注意：一旦關閉視窗，這個金鑰將不再顯示。
    
    ![OpenAI API](https://hackmd.io/_uploads/ByovFm3P2.png) ![API 金鑰](https://hackmd.io/_uploads/B1QTtXhD2.png)
    

### LINE Message API 和 Imgur API

-   請依照各自平台的文件申請 API 金鑰。

## 環境變數在 Python 中的使用

你可以使用以下程式碼來讀取環境變數。

```python
import os
api_key = os.environ.get('KEY')`
```

## 配置 LINE Webhook

最後，回到 LINE Channel 設定中加入 webhook。

![LINE Webhook](https://hackmd.io/_uploads/HJxHy93v3.png)


這樣你就完成了整個部署過程！如果你有任何問題或建議，歡迎在下方留言。祝學習愉快！
