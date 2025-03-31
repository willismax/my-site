---
title: 在 Zeabur 使用 n8n 開發 LINE Bot：新手與開發者的真實體驗
slug: 在 Zeabur 使用 n8n 開發 LINE Bot：新手與開發者的真實體驗
date: 2025-03-31T20:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [AI,n8n,LINE]
---

在 Zeabur 使用 n8n 開發 LINE Bot：新手與開發者的真實體驗
---------------------------------------
![image](https://hackmd.io/_uploads/HkPIUGuTJe.png)


這篇部落格將分享我在 [Zeabur](https://zeabur.com/) 使用 [n8n](https://n8n.io/) 打造 LINE 聊天機器人的經驗，作為台中 AI 小聚假日場的第一位分享者，很榮幸能拋磚引玉與大家討論 Low Code 工具的實戰心得。

### 為什麼選擇 Zeabur 與 n8n？

[Zeabur](https://zeabur.com/) 作為一個部署平台，擁有低門檻且豐富的樣板資源，整個部署流程可以用「絲滑」來形容，非常適合新手快速上手。但當實際開始串接 [n8n](https://n8n.io/) 後，我發現情況可能稍有不同。
![image](https://hackmd.io/_uploads/ByqK8Mup1l.png)

[Zeabur](https://zeabur.com/) 對於初學者來說非常友善，不論是部署速度還是樣板的多樣性，都能顯著降低技術門檻，讓沒有基礎的使用者也能快速啟動專案。
![image](https://hackmd.io/_uploads/Hk43wfOa1l.png)

### n8n 的真實體驗

[n8n](https://n8n.io/) 作為 Low Code 工具，雖然降低了不少開發門檻，但若你原本就習慣程式設計，反而可能需要額外時間熟悉各種節點操作與邏輯，這點可能會有些挫折。不過，對於有 API 串接經驗的人來說，n8n 仍然是個相對容易上手的強大工具。
> Low Code 工具可以透過圖形控制拖拉等方式串接工作流程，使用者無須複雜的程式碼即可像積木般串接各個節點，達到方便彈性的優勢。

尤其推薦 [5x 紅寶石 n8n 範本](https://zeabur.com/templates/JP88UN)（搜尋 5x 即可找到），內建的登入介面能省下不少初始設置時間。這種內建登入系統能讓新手更快地跳過繁瑣的設定步驟，專注於功能實現。
![image](https://hackmd.io/_uploads/S1KedMOp1l.png)

### 用 n8n 打造彈性的 LINE Bot

在實際串接 LINE Bot 的過程中，我一開始直接使用 Webhook 節點回傳 Flex Message，但很快遇到了卡片數量彈性不足的問題。後來透過 AI 模型產生結構化 JSON，再透過 Function 節點處理，成功解決了動態調整訊息卡片數量的限制。
![](https://cdn.gamma.app/5amqtd05ubl30wu/31378b60e1814944a242a4433ed059f9/original/image.png)
[GitHub - willismax/n8n-templates: 自己設定可以分享的n8n模板](https://github.com/willismax/n8n-templates)


透過這種結構化的方式，Flex Message 不再受限於固定格式，訊息卡片可以依據需求自由增減，更能滿足用戶互動多元化的需求。
![](https://cdn.gamma.app/5amqtd05ubl30wu/722ce43995914352ac9f6b3fcae967d2/original/Wei-Ming-Ming-She-Ji.gif)

### RAG 增強生成檢索與 Supabase 搭配
為了進一步增強 AI 的效能，我也嘗試在 n8n 中建構了增強生成檢索（RAG）系統，並使用 [Supabase](https://zeabur.com/templates/SUPABS) 儲存文字與向量混合資料。
![](https://cdn.gamma.app/5amqtd05ubl30wu/20ff7e0b291e41c999e9d0432b5ad0ed/original/image.png)


[Supabase 的預設資料庫結構](https://supabase.com/docs/guides/ai/langchain?database-method=sql)十分便捷，不過成本稍高，特別要注意 Kong 元件預設記憶體高達 700MB，[經過優化可以降到 100MB 左右](https://www.threads.net/@yuaanlin/post/DHleMbHS0t-)。

此外，Supabase 雖然功能強大，但成本效益需要特別留意，尤其在專案初期若資源有限，更需謹慎評估使用方式與頻率。
![](https://cdn.gamma.app/5amqtd05ubl30wu/2751da2a0ffc43e0be3eed6faade917c/original/image.png)


**提醒大家一點：** 建議不要將 Supabase 與 n8n 部署於同一個 Zeabur 專案內，因為底層都是 PostgreSQL 資料庫，可能會發生意想不到的衝突，創辦人戲稱為「薛丁格的資料庫」。

### 實際應用建議與經驗總結

1.  對於沒有程式基礎的使用者，建議先熟悉基本 API 串接技巧，有助於加速 n8n 的使用與應用。
    
2.  透過 AI 模型輔助設計動態訊息結構，能有效解決 n8n 節點固定格式的問題。
    
3.  持續監控與優化資源使用狀況，特別是 Supabase 等耗資源服務，才能更有效地控制專案成本。
    

以自己的經驗而言，Zeabur 與 n8n 的結合確實能為自動化流程提供便捷快速的解決方案，但實務操作中還是需要特別留意技術細節及資源管理，才能避免不必要的問題。最終，親自動手實踐才是掌握這些工具最好的方式。

希望今天的分享能給大家帶來一些啟發，也感謝 AI 小聚能給予我這個破圈的機會，期待未來更多的交流與學習！
