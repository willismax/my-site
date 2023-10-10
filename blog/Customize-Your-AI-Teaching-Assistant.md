---
title: 🤖 客製化你的AI教學助手-蘇格拉底引導教學法
slug: Customize Your AI Teaching Assistant - A Socratic Approach
date: 2023-10-10T10:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [python, ChatGPT, LINEBOT]
---

# 客製化你的AI教學助手🤖-蘇格拉底引導教學法
![](https://hackmd.io/_uploads/SyD7wOz-p.png)

老師們現在不僅對教學充滿熱情，也愈來愈善於運用科技工具，如LINE官方帳號，來與學生和家長保持緊密的溝通。這些努力無疑是朝著以下兩大目標邁進：

1.  **激發學生的好奇心**：鼓勵學生主動提問，並引導他們思考解決問題的方法。
2.  **個別化教學**：深入了解每位學生的學習進度和思維方式，以因材施教。

## 🤖 專案介紹

這個專案的核心目的是要讓老師們能在已有的LINE官方帳號上，快速加入一個AI助教—使用ChatGPT技術。這樣一來，AI助教能夠第一時間回應學生的問題，如果遇到AI不能解決的問題，它還會建議學生直接聯繫老師。這讓老師有更多的時間和空間來專注於其他重要的教學任務。

## 🛠️ 如何開始？

這個專案極力降低相關的技術門檻。實際上，在**幾乎不需要寫任何程式碼**的情況下，老師就能設置起這個AI助教服務。你只需完成以下幾個簡單的步驟：

1.  註冊本服務
2.  在LINE官方帳號後台進行相應設定
3.  啟用ChatGPT作為你的AI助教

完成以上步驟後，你就能讓ChatGPT開始擔任你的AI助教，預先回答學生的問題。

👉 **歡迎各位老師運用，打造更智慧、更高效、教學相長的教學環境！**

## 📚 在開始之前，你需要了解的

在你開始使用這個專案之前，有一些基礎的技術和費用信息你需要知道。

### 技術環境

-   **涉及的技術和環境如下：**
    -   **程式語言**: Python
    -   **伺服器後端框架**: Flask
    -   **FaaS雲端服務**: Vercel
    -   **AI對話功能**: OpenAI API (ChatGPT-3.5-tubo)
    -   **聊天環境**: LINE (LINE Message API)

### 花費預估

-   **Vercel**
    
    -   Hobby方案允許你免費建立最多3個專案。
    -   注意：如果伺服器處理時間超過10秒，將會被判定為Time Out。
    -   [Vercel 費用詳情](https://vercel.com/pricing)
-   **OpenAI API**
    
    -   初次註冊有免費額度。
    -   本專案使用的是性價比最高的 **GPT-3.5 Turbo**。
    -   花費約為：輸入1萬字中文約台幣1元，輸出1萬字中文約台幣1.2元。
    -   [OpenAI 費用詳情](https://openai.com/pricing)
    -   ![OpenAI Cost](https://hackmd.io/_uploads/rJE3dzfWp.png)
-   **LINE 主動訊息**
    
    -   額度內免費，目前是200則訊息（2023/9月前為500則）。
    -   由使用者提問的回覆（Reply）免費。
    -   老師主動發送的訊息（Push）有200則限制。
    -   [LINE 費用詳情](https://tw.linebiz.com/column/LINEOA-2023-Price-Plan/)
    -   ![LINE Cost1](https://hackmd.io/_uploads/B1OZhGfbT.png)
    -   ![LINE Cost2](https://hackmd.io/_uploads/BkA86fGWa.png)

    > **提醒您**: 所有的費用和限制可能會隨著各個服務供應商的政策改變而變動，建議定期查看官方網站以獲取最新資訊。



## 如何建立自己的 LINE AI助教？

這份指南將引領您從[LINE 官方帳號](https://tw.linebiz.com/login/)開始，不同於開發者通常從 [LINE Developers](https://developers.line.biz/zh-hant/) 開始。不過，不管從哪裡出發，最終目標相同：建立一個集成 ChatGPT 的 LINE 官方帳號。

### 🌟 步驟1：初始化 LINE 官方帳號 🌟

首先，我們需要建立一個基本的、無AI功能的 LINE 官方帳號。學生們可以即刻加入這個帳號。這個帳號初期僅支持手動聊天，AI 功能將在後續逐步加入。

1.  **前往 [LINE 官方帳號管理頁面](https://tw.linebiz.com/login/)** ![](https://hackmd.io/_uploads/HJlzbqZ-a.png)
    
2.  **填寫必要資訊**：這些資訊也會是學生看到的名稱。 ![](https://hackmd.io/_uploads/r1ecWq-bT.png)
    
3.  **選擇「稍後認證官方帳號」**：這個認證過程不會影響本專案。 ![](https://hackmd.io/_uploads/B1Z1M9ZWT.png)
    
4.  **（選擇性）建立圖文選單**：利用圖文選單可提供班級公告、相片集等。
    
    -   主頁 > 圖文選單 \> 參考說明 ![](https://hackmd.io/_uploads/Skzdd9W-T.png)
5.  **啟用 Webhook** 🔗
    
    -   Webhook 是一個可用程式處理訊息的通道。
    -   通過 Webhook，我們將使用 Vercel 平台、Python Flask 框架和 OpenAI API。 ![](https://hackmd.io/_uploads/ByQOHc-W6.png)

### 🌟 步驟2：註冊必要的平台並獲取 API Token 

1.  **註冊必要平台**：包括 [GitHub](https://github.com/)、[Vercel](https://vercel.com/)、[OpenAI API](https://openai.com/blog/openai-api)、[LINE Developers](https://developers.line.biz/zh-hant/)。
2.  **獲取 OpenAI API Token**：保存好這個 Token，它是一次性的。 ![](https://hackmd.io/_uploads/SJFdUYbWT.png)

### 🌟 步驟3：設置 LINE Developer Channel 及獲取 Secret, Token 🌟

#### 3.1 獲取 `Channel Secret` 🔒

-   從 LINE 官方帳號或 LINE Developer Channel 都可獲取。 ![](https://hackmd.io/_uploads/ByaIpoWWT.png)

#### 3.2 獲取 `Channel Access Token` 🔑

-   在 LINE Developer Channel 下生成。 ![](https://hackmd.io/_uploads/S1NO13WZT.png)

### 🌟 步驟4：Fork GitHub 專案 🌟

-   Fork 這個專案至您自己的 GitHub 儲存庫。 ![](https://hackmd.io/_uploads/H18PEQfb6.png)

### 🌟 步驟5：部署至 Vercel 🌟

1.  **建立 Vercel 專案** ![](https://hackmd.io/_uploads/BJo573bZ6.png)
2.  **連接 GitHub 和選擇專案** ![](https://hackmd.io/_uploads/B1paQ2W-a.png)
3.  **設定環境變數並部署** ![](https://hackmd.io/_uploads/SyAIBh-bT.png)

### 🎉 完成！ 🎉

恭喜您，現在您已經成功建立了自己的 AI 助教！現在可以透過 LINE 官方帳號進行測試。

### 🔧 進階設定：打造個性化的AI助手

-   若要讓AI助手更符合你的需求和風格，OpenAI API提供了一個彈性的方式讓你自行設定AI的角色。具體來說，你只需要在對話設定中添加 `messages: [{ role: "system", content: "你的AI助手人設" }]` 即可。
-   進行這項設定只需前往`api/prompt.py`並在`AI_GUIDELINES`後修改提示文字即可。不過，因為Vercel的免費版有10秒的運行時限制，過長的提示可能會導致Time Out，因此建議不要設置過於複雜的指引。
-   本專案經過精心測試後，已經內建一組最佳實踐的`AI_GUIDELINES`，但你也可以隨心所欲地進行調整：
    ```
    AI_GUIDELINES = '你是一個AI助教，專門使用蘇格拉底教學法來回答學生的問題，如果有需要，會建議學生與老師進一步確認。'
    ``` 
    
-   修改方式也非常簡單，只需登入你的GitHub帳號，找到該專案的`api/prompt.py`文件，點擊右側的鋼筆圖示✏️即可進行線上編輯。 ![編輯](https://hackmd.io/_uploads/SynC3QMZT.png)
-   完成後，選擇“Commit Changes”並填入適當的描述。 ![提交更改](https://hackmd.io/_uploads/rkIFpXG-6.png) ![描述](https://hackmd.io/_uploads/rJQC6mMWT.png)

### 🚀 專案成果

-   **出色的問答回應**: 這個AI助手採用ChatGPT 3.5 Tubo，能在精確及速度獲得很好的平衡，即時地回應學生的問題。 ![出色回應](https://hackmd.io/_uploads/ryjveAW-T.png)
-   **問題過濾**: 對於需要更深層次討論的問題，AI助手會提供適當的處理建議，協助老師過濾和分類問題，同時也啟發老師改進教學。 ![問題過濾](https://hackmd.io/_uploads/SkaDCWzbp.png)
-   **引導學生思考**: 透過蘇格拉底教學法，AI助手不僅回答問題，還能引導學生學會如何提問和解決問題。 
    ```=!
    同學A 老師我想要問BMI的python程式怎麼寫
    ----
    AI助教  嗨！關於BMI的Python程式，我可以幫你一起思考。首先，你知道BMI是什麼嗎？
    ----
    同學A BMI=體重/身高平方
    ----
    AI助教  沒錯！BMI是體重除以身高的平方。那麼，你想要寫一個計算BMI的Python程式對吧？你已經有身高和體重的數值了嗎？
    ----
    同學A 70/(1.73**2)
    ----
    AI助教  沒錯！你可以使用這個公式來計算BMI。現在我們可以開始寫一個Python程式來計算BMI。你想要將身高和體重作為變數輸入嗎？
    ----
    同學A 想
    ----
    AI助教  好的！我們可以寫一個簡單的Python函數來計算BMI。以下是一個範例程式碼：

        ```python
        def calculate_bmi(weight, height):
        bmi = weight / (height ** 2)
        return bmi

        weight = float(input("請輸入您的體重（公斤）："))
        height = float(input("請輸入您的身高（公尺）："))

        bmi = calculate_bmi(weight, height)
        print("您的BMI為：", bmi)
        ```

    這個程式會要求使用者輸入體重和身高，然後使用`calculate_bmi`函數計算BMI並輸出結果。請注意，身高的單位應該是公尺，體重的單位應該是公斤。
    ----
    同學A 請幫我也寫出測試碼，之後會用pytest測試
    ----
    AI助教  當然！我們可以寫一些測試碼來驗證我們的BMI計算函數是否正確。以下是一個範例的測試碼：

        ```python
        import pytest

        def calculate_bmi(weight, height):
        bmi = weight / (height ** 2)
        return bmi

        def test_calculate_bmi():
        assert calculate_bmi(70, 1.73) == pytest.approx(23.39, 0.01)
        assert calculate_bmi(80, 1.65) == pytest.approx(29.38, 0.01)
        assert calculate_bmi(60, 1.80) == pytest.approx(18.52, 0.01)

        if __name__ == "__main__":
        pytest.main()
        ```

    這個測試碼使用了pytest套件來執行測試。我們定義了一個`test_calculate_bmi`函數，其中包含了幾個斷言語句，用來驗證`calculate_bmi`函數的輸出是否符合預期。每個斷言語句都使用了`pytest.approx`函數來比較浮點數的近似值，並指定了一個容忍誤差範圍。

    你可以將這個測試碼保存為一個.py檔案，然後使用pytest運行測試。如果所有的測試通過，則表示你的BMI計算函數正確無誤。
    ----
    同學A 謝謝老師，我的超人
    ----
    AI助教  不客氣！如果你有任何其他問題，隨時都可以問我。祝你一切順利！
    ```
    ![培養思考](https://hackmd.io/_uploads/ryjTiWfZT.png) ![成果展示](https://hackmd.io/_uploads/HkZ1nWzbp.png) ![更多示例](https://hackmd.io/_uploads/Byyf2bGWp.png)


## 專案成果

1.  **出色的回應學生問題**: 這個功能不僅可以即時解答學生的問題，還可以減輕老師的負擔。
2.  **過濾問題**: 能過濾並指導學生如何更有效地提問，是一個對教師非常有幫助的功能。
3.  **引導學生思考**: 這是最讓人印象深刻的部分，因為不僅解答了問題，還教會了學生如何解決問題。

這個專案不僅具有高度的實用性，也很有教育意義。它不只是一個問答工具，更是一個能夠協助教學和學習的平台。


## 參考資料

-   [GPT-3 API 官方文件](https://beta.openai.com/docs/)
-   [Vercel 官方文件](https://vercel.com/docs)
-   [GitHub 如何編輯文件](https://docs.github.com/en/github/managing-files-in-a-repository/editing-files-in-your-repository)
-   [本專案GitHub Repo](https://github.com/willismax/GPT-Linebot-python-flask-on-vercel)，Forked from [howarder3](https://github.com/howarder3/GPT-Linebot-python-flask-on-vercel)
