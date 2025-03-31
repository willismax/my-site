---
title: 使用 n8n 串接 LINE BOT + AI：打造智慧回應機器人
slug: 使用 n8n 串接 LINE BOT + AI：打造智慧回應機器人
date: 2025-02-16T20:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [AI,n8n,LINE]
---


# 使用 n8n 串接 LINE BOT + AI：打造智慧回應機器人

在聊天機器人盛行的時代，許多人都想透過 **LINE BOT** 為用戶提供即時且智慧的回覆。本篇將示範如何在 **n8n** 這個無程式化自動化工具中，串接 **LINE Webhook** 與 **AI 模型**，打造一個可以自動回應的機器人。

## 目錄

1. [前置準備](#前置準備)  
2. [流程架構說明](#流程架構說明)  
3. [詳細步驟教學](#詳細步驟教學)  
   - [STEP 1. 建立 LINE BOT 與 Webhook](#step-1-建立-line-bot-與-webhook)  
   - [STEP 2. 在 n8n 新增 Workflow](#step-2-在-n8n-新增-workflow)  
   - [STEP 3. AI 回應邏輯設定](#step-3-ai-回應邏輯設定)  
   - [STEP 4. 合併資料並格式化輸出 (Code Node)](#step-4-合併資料並格式化輸出-code-node)  
   - [STEP 5. 呼叫 LINE Reply API 回覆訊息](#step-5-呼叫-line-reply-api-回覆訊息)  
4. [兩個常見痛點與解法](#兩個常見痛點與解法)  
5. [完整 Workflow JSON 參考](#完整-workflow-json-參考)  
6. [參考來源](#參考來源)

---

## 前置準備

1. **LINE Developers 帳號**：  
   - 前往 [LINE Developers](https://developers.line.biz/) 建立 **Messaging API** Channel，取得 **Channel Access Token** 與 **Channel Secret**。  
2. **n8n 環境**：  
   - 可以是自架 n8n 或使用雲端服務，版本建議至少 1.6.0 以上。  
3. **AI Key**：  
   - 若使用 OpenAI，需要在 n8n 中綁定你的 OpenAI API Key；若使用其他 AI (如 Google Gemini)，則需相對應的憑證設定。  


## 流程架構說明

以下為大致的流程圖：

```
(1) 使用者在 LINE 發送訊息
      ↓
(2) LINE 將訊息 + replyToken 發送到 n8n Webhook
      ↓
(3) n8n 取得訊息後，呼叫 AI 節點產生回應
      ↓
(4) 將 AI 回應與 replyToken 整合 (Code Node)
      ↓
(5) HTTP Request Node 回呼給 LINE (Reply API)
      ↓
(6) 使用者即時收到 AI 生成的回應
```


## 詳細步驟教學

### STEP 1. 建立 LINE BOT 與 Webhook

1. 登入 [LINE Developers Console](https://developers.line.biz/)，在 **Messaging API** 中建立一個 Channel。  
2. 取得 **Channel Access Token** (Long-lived) 並備註。  
3. 在該 Channel 的 **Webhook settings** 裡面，填入你的 n8n Webhook URL (例如 `https://<你的n8n網域>/webhook/linebot`)，並啟用 Webhook。

### STEP 2. 在 n8n 新增 Workflow

1. 建立一個新的 Workflow，新增 **Webhook Node**，HTTP Method 選 **POST**，Path 設為 `linebot` (或其他自訂)。  
2. 完成後，記得啟用這個 Workflow，使得該 Webhook 可對外接受請求。

### STEP 3. AI 回應邏輯設定

1. 新增一個 **AI 節點** (例如 `AI Agent` 或 `OpenAI Chat Model`)，將上一步 Webhook 輸入的文字 (`message.text`) 當作 Prompt 的一部分，生成自動回覆。  
2. 可在 Prompt 中告訴 AI 要使用繁體中文回應、若有來源請告知等。  
3. 測試一下該 AI 節點是否能產生正確文字輸出。

### STEP 4. 合併資料並格式化輸出 (Code Node)

1. 因為 **Webhook Node** 帶來 `replyToken`，而 **AI Node** 帶來 `AI 回應文字`，你需要一個 **Merge Node** 或透過 Code Node 同時取得這兩部分。  
2. 在 Code Node 中，先拿到 `replyToken`、再拿到 AI 回傳的文字，並**特別使用 `JSON.stringify()`**，以避免其中包含 `\t` 或其他特殊字元破壞 JSON 格式。

```js
// 取得必要資料
const replyToken = items[0].json.body.events[0].replyToken;
const aiResponse = JSON.stringify((items[1].json.output || "").trim());

// 如果沒有 replyToken 或 AI 回應，做基本錯誤處理
if (!replyToken) {
  throw new Error("Missing reply token");
}

if (!aiResponse) {
  return [{
    json: {
      replyToken,
      text: "抱歉，我現在無法正確處理您的請求。請稍後再試。"
    }
  }];
}

// 回傳格式化後的資料
return [{
  json: {
    replyToken,
    text: aiResponse
  }
}];
```

### STEP 5. 呼叫 LINE Reply API 回覆訊息

1. 新增 **HTTP Request Node**，Method 選 **POST**，URL 設為 `https://api.line.me/v2/bot/message/reply`。  
2. 在 Header 加上：
   - `Content-Type: application/json`  
   - `Authorization: Bearer <你的 Channel Access Token>`  
3. 在 **JSON Body** 填入：
   ```json
   {
     "replyToken": "{{ $json.replyToken }}",
     "messages": [
       {
         "type": "text",
         "text": {{ $json.text }}
       }
     ]
   }
   ```
   這裡 `{{ $json.text }}` 即 Code Node 傳來的 AI 回應字串（已經被 JSON.stringify 包裹）。

完成後，當使用者透過 LINE 傳訊息給你的 BOT，n8n 就會觸發流程並自動回應。


## 兩個常見痛點與解法

1. **先用測試參數進行除錯**  
   - 在製作這個流程時，常見的困擾是要同時取得 LINE 的 `replyToken` 與 AI 輸出。可以在沒有實際呼叫 LINE 的情況下，手動模擬 `replyToken` 與訊息文字作為測試資料，檢查整個 Workflow 邏輯是否正確。這樣可大幅縮短除錯時間。  

2. **確保傳遞的 JSON 合法，使用 `JSON.stringify()`**  
   - AI 產生的文字中，可能出現 `\t`、`\n`、`"` 等特殊字元，若直接放入 JSON 字串會造成解析錯誤。  
   - 建議在 Code Node 中，使用 `JSON.stringify(text)` 把回應包成一個合法的字串，再送到下一個節點，如此可避免因不合法字元導致的「JSON parameter needs to be valid JSON」錯誤。



## 完整 Workflow JSON 參考

可參考以下範例 (敏感資訊已移除)。  
[GitHub 範例連結 (Placeholder)](https://github.com/your-repo/n8n-line-ai-demo)

```jsonc
// （這裡省略示範，可參考實際上傳至 GitHub 的 JSON 檔） 
```

> 請在匯入後，重新設定你的 **OpenAI Key**、**LINE Channel Access Token**、**Webhook URL** 等資訊。

---

## 參考來源

- [n8n 官方文件](https://docs.n8n.io/)  
- [LINE Messaging API](https://developers.line.biz/en/reference/messaging-api/)  
- [OpenAI 官方文件](https://platform.openai.com/docs/introduction)  

透過以上步驟與注意事項，你就能在 **n8n** 上輕鬆打造結合 **LINE BOT** 與 **AI** 的智慧回應機器人，並成功避開在實務中最容易踩到的坑。祝你開發順利！