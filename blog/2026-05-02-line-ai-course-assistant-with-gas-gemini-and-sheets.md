---
title: 用 GAS 打造專屬 LINE AI 課程助教，整合 Gemini、上下文記憶與 Google 試算表 QA 知識庫
slug: 用 GAS 打造專屬 LINE AI 課程助教，整合 Gemini、上下文記憶與 Google 試算表 QA 知識庫
date: 2026-05-02T20:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [LINE, GAS, Gemini, Google試算表, AI]
---

用 GAS 打造專屬 LINE AI 課程助教，整合 Gemini、上下文記憶與 Google 試算表 QA 知識庫
![image](https://hackmd.io/_uploads/Bk5OpaGA-l.png)

---

在「職場 AI 加速術」的課程裡，我們已經學會怎麼用 Google 表單收資料、用 Google 試算表整理數據，也知道如何把教材丟進 NotebookLM 建立知識庫。但如果學員半夜傳訊息來問問題，難道真的要靠老師 24 小時守在螢幕前一題一題回嗎？

這篇文章要帶你用 Google Apps Script（GAS）結合 LINE Messaging API、Google Gemini，以及 Google 試算表，做出一個真正能上線的 LINE 課程 AI 助教。它不只會回答問題，還能保留短期上下文、讀取 QA 知識庫、解析學員上傳的錯誤截圖，並把對話紀錄自動寫回試算表，讓你後續能回頭分析學員最常卡住的地方。

更重要的是，這個助教不是只有「會講話」而已，而是被設計成盡量不要亂講話。你可以把課程常見問答、報名網址、課綱資訊都放進 Google 試算表，讓助教每次回答前先參考你的標準答案，再透過 LINE Flex Message 以更專業的方式呈現給學員。

![image](https://hackmd.io/_uploads/rkSpRpfAWx.png)

如果你是第一次碰 LINE Bot，建議先看我之前寫的[用 HackMD API 打造個人專屬 LINE BOT 助手](https://willismax.github.io/my-site/blog/%E7%94%A8HackMD%20API%E6%89%93%E9%80%A0%E5%80%8B%E4%BA%BA%E5%B0%88%E5%B1%ACLINE%20BOT%E5%8A%A9%E6%89%8B)，那篇比較偏 LINE Developers、Channel、Webhook 與 Token 的入門流程。若你關心的是「AI 助教要怎麼設計角色與教學互動」，也可以搭配[客製化你的 AI 教學助手：蘇格拉底引導教學法](https://willismax.github.io/my-site/blog/Customize%20Your%20AI%20Teaching%20Assistant%20-%20A%20Socratic%20Approach)一起看。

![LINE AI 課程助教系統架構](/img/blog/line-ai-course-assistant/architecture-overview.svg)

_圖：學員從 LINE 提問後，GAS 負責串接 Gemini、Google 試算表與 Flex Message 回覆。_

## 這個 AI 助教能做到什麼？

![image](https://hackmd.io/_uploads/SJvam0GA-l.png)

這次的版本不只是單純的聊天機器人，而是加入了幾個在教學現場很實用的能力：

- 上下文記憶：透過 GAS 的 CacheService，記住同一位學員最近 5 輪對話，回答不再像金魚腦。
- 圖片報錯解析：學員可以直接把公式錯誤、程式報錯或畫面截圖傳給 LINE Bot，交給 Gemini 判讀。
- 自動寫入聊天紀錄：每次提問與回答都會同步存到 Google 試算表，方便後續分析常見痛點。
- QA 知識庫整合：你可以在試算表維護標準問答，讓助教優先參考你的內容，降低 AI 幻覺。
- Flex Message 輪播卡片：第一張卡片放解答與 CTA 按鈕，後面卡片放進階心法與補充技巧，視覺與資訊層次都更完整。

如果你想做的是「課程助教型」機器人，而不是一個什麼都會答、但很容易亂掰的聊天機器人，這個架構會很適合你。

![image](https://hackmd.io/_uploads/HkEY2afRZl.png)

## 課前準備：先備好 4 把鑰匙
![image](https://hackmd.io/_uploads/rkPkXCzAbl.png)

在開始貼程式碼之前，先準備以下資源：

1. Google 帳號：用來建立 Google 試算表與撰寫 Google Apps Script。
2. LINE Developer 帳號：前往 LINE Developers 建立 Provider 與 Messaging API Channel，取得長效的 Channel Access Token。如果你還不熟悉 Provider、Channel 與 Webhook 的關係，可以先參考[這篇 LINE Bot 基礎教學](https://willismax.github.io/my-site/blog/%E7%94%A8HackMD%20API%E6%89%93%E9%80%A0%E5%80%8B%E4%BA%BA%E5%B0%88%E5%B1%ACLINE%20BOT%E5%8A%A9%E6%89%8B)。
3. Gemini API Key：前往 Google AI Studio 點選 Get API key，免費申請一把 API Key。
4. Google 試算表：建立一份空白試算表，作為 QA 知識庫與聊天紀錄資料庫。

## 資安小提醒：不要把鑰匙貼在程式碼裡

這個專案會碰到三種敏感資訊：LINE Channel Access Token、Gemini API Key，以及 Google 試算表 ID。尤其前兩者一旦外洩，別人就可能拿你的額度呼叫 API，甚至冒用你的 LINE Bot 回覆訊息。

所以實作時請記住幾個原則：

- 不要把 API Key、Access Token 寫死在程式碼中，也不要截圖貼到社群或教學投影片。
- 不要把包含密鑰的 GAS 程式碼公開到 GitHub。
- Google 試算表不要開成「知道連結的任何人可編輯」，只授權給需要維護 QA 的人。
- 聊天紀錄工作表可能含有學員提問、錯誤截圖內容或個資，課程結束後要定期清理或匯出後脫敏保存。
- 如果懷疑密鑰外洩，請立刻到 LINE Developers 或 Google AI Studio 重新產生新的 Key，舊的直接撤銷。

在 GAS 裡比較實用的做法，是把密鑰放到「指令碼屬性（Script Properties）」裡，再由程式讀取。這樣至少不會讓密鑰直接出現在程式碼畫面中，也比較不容易在複製教學範例時一起外流。

![GAS 指令碼屬性保存 API Key](/img/blog/line-ai-course-assistant/secret-properties.svg)

_圖：真正的 API Key 放在 Script Properties，程式碼只負責讀取，不把鑰匙寫死在範例中。_

## 實作步驟：5 步驟把課程助教上線

### 步驟一：建立 Google 試算表資料庫

先新建一份 Google 試算表，接著觀察網址列，複製 `/d/` 到 `/edit` 中間那段英數字，這就是你的 Spreadsheet ID，等等會用到。

接著在這份試算表底下建立兩個工作表：

- 聊天紀錄：可先建立表頭 `時間`、`學員LINE ID`、`學員提問`、`AI解答`
- QA知識庫：建立表頭 `常見問題`、`標準解答`

為了讓助教一上線就具備課程背景，你可以先把以下 61 筆 QA 直接貼進 QA知識庫 工作表。這份資料同時涵蓋 NotebookLM、課程架構與常見實作疑問，能讓回覆更穩定。

```tsv
常見問題	標準解答
1. 什麼是 NotebookLM？	Google 開發的 AI 驅動筆記工具，核心應用是協助使用者整理、分析各種資料，並從中「蒸餾」知識。
2. NotebookLM 跟一般聊天 AI（如 ChatGPT）差在哪裡？	NotebookLM 是基於 RAG 技術，會根據你上傳的專屬資料來回答，並附上原文引用出處，大幅減少 AI 亂編造的幻覺。
3. NotebookLM 的核心模型是什麼？	採用先進的 Gemini 1.5 Pro 大型語言模型，擁有 2M 超大上下文視窗。
4. 把機密資料上傳到 NotebookLM 安全嗎？	上傳到個人 NotebookLM 的資料不會被用來訓練 Google 的通用模型。但若含信用卡、未公開個資等極高機密，仍建議先脫敏或避免上傳雲端。
5. NotebookLM 適合用來取代 Notion 嗎？	不適合。NotebookLM 不是專業的傳統筆記排版軟體，不該把時間花在美化筆記上，而是用來快速萃取大量資料的重點。
6. 一個筆記本最多可以上傳多少份來源文件？	每個筆記本最多可包含 50 個來源文件（Source）。
7. 單一來源文件的容量限制是多少？	每份來源最多可包含 50 萬字元，或檔案大小上限 200MB。
8. 上傳來源文件後可以修改內容嗎？	來源加入之後無法直接編輯，只能刪除後重新加入修改好的檔案。
9. 每個筆記本可以建立多少份記事（Notes）？	最多可包含 1,000 份記事，每份最多包含 99,993 字。
10. NotebookLM 支援上傳哪些檔案格式？	支援 pdf、txt、md、Google 文件、Google 簡報、網頁網址、YouTube 網址，以及多種音訊檔（mp3、wav、m4a 等）。
11. 可以直接上傳 Excel 或 Word 檔嗎？	目前不支援 .xlsx 格式。遇到試算表資料，請先貼成純文字、轉為 Google 文件或 PDF 格式後再匯入。
12. YouTube 影片都能直接匯入嗎？	僅支援有字幕的公開影片。新上傳影片需等待 72 小時後才能匯入，且不支援無語音影片。
13. 如果 YouTube 影片無法匯入怎麼辦？	建議使用第三方字幕下載工具（如 DownSub）將字幕下載成文字檔，再上傳到 NotebookLM。
14. NotebookLM 可以閱讀圖片嗎？	目前對僅含圖片的 PDF 解析能力有限。建議先透過 OCR 軟體（如 PDF-XChange）將圖片掃描轉成文字後再匯入。
15. 遇到 SPA 動態網頁無法匯入怎麼辦？	可利用 Jina Reader API 或 MarkDownload 等擴充功能，先將網頁內容轉為 Markdown 格式再匯入。
16. 怎麼把實體書本匯入 NotebookLM？	需要先裁書並掃描成 PDF，接著用光學字元辨識（OCR）技術把圖片轉為可複製的文字，最後再匯入。
17. 電子書（EPUB）格式可以匯入嗎？	建議先透過工具將 EPUB 轉成 Word，再轉為 Google Docs 格式匯入，這樣能保留完整的文字結構上下文。
18. 怎麼把會議錄音轉化為知識庫？	錄音檔可直接匯入 NotebookLM，系統會自動處理語音。若要更準確，建議同時匯入會議的相關文件作為上下文補充。
19. LINE 或群組的聊天紀錄可以分析嗎？	可以。將 LINE 聊天紀錄匯出為文字檔（.txt）上傳，就能請 AI 分析事件來龍去脈、決策過程或進行人物側寫。
20. 要怎麼讓 NotebookLM 分析 GitHub 程式碼專案？	善用 repo2txt 或 Repomix 等工具，將整個 Repo 打包成一個 AI 友好的單一純文字檔後再上傳。
21. 當上傳的 PDF 超過 50 萬字限制時怎麼辦？	請將 PDF 檔拆分成上集、下集等多份檔案，再分別作為獨立來源匯入同一個筆記本。
22. 什麼是「筆記本導覽（Notebook Guide）」？	系統自動生成的資料總覽面板，包含摘要、常見問題、學習指南、目錄、時間軸、簡介文件與音訊總覽。
23. 音訊總覽（Audio Overview / Podcast）的功能是什麼？	能將上傳的枯燥資料自動轉換成一男一女 AI 主持人的對話廣播，讓你可以用聽的方式掌握重點。
24. 音訊總覽支援中文語音嗎？	目前音訊總覽的主持人對談僅支援英文發音。即使上傳中文資料，產出的仍會是英文 Podcast。
25. 音訊總覽的內容可以控制嗎？	可以。點擊「自訂（Customize）」後，可以下提示詞要求主持人聚焦特定主題，或指定特定受眾。
26. 如果 AI 回答得很棒，怎麼保存下來？	點擊回答區塊右上角的「釘選到筆記（Pin to note）」按鈕，就能將這段精華永久保存在右側的記事面板中。
27. 如何消除 NotebookLM 的短暫記憶混亂？	因為對話具有記憶性，若發現 AI 混淆了先前提問，可以透過重新整理網頁來清除短期對話記憶。
28. 為什麼要在對話前進行「事實依賴性」評估？	因為這能確認任務是否需要 100% 依賴指定規章回答，不容許 AI 加入個人臆測；這類任務最適合交給 NotebookLM。
29. 為什麼 NotebookLM 會出現幻覺亂講話？	可能是上傳資料太少、品質太差，或只是把它當成單純的資料檢索工具來用，導致輸出品質不穩。
30. 怎麼下指令防堵 AI 產生幻覺？	可在提示詞結尾加上防護栓：「請僅根據上傳的來源回答。若找不到答案，請直接回答『資料中未提供相關資訊』，絕對不可自行推論。」
31. 什麼是「摘要型」提問？	測試 AI 抓取資料大意的問法，例如：「這批客戶意見整體在說什麼？」或「請幫我整理三個最重要的發現」。
32. 什麼是「查找型」提問？	測試文件是否包含特定細節的問法，例如：「文件裡有沒有提到某個規定、數字或結論？」
33. 什麼是「判讀型 / 決策型」提問？	賦予 AI 角色進入工作場景的問法，例如：「如果我是承辦人，先看這份資料的哪三點最有幫助？」
34. 給高階主管的報告（Executive Summary）該怎麼下提示詞？	可要求 AI 撰寫 300 字內摘要，必須包含最大亮點、隱藏風險、優先解決事項，並使用客觀商務口吻。
35. 如何處理上百則客訴回饋文字？	指示 AI 進行標籤化與分類，整理出 3 到 5 個主要類別標籤，並用表格呈現核心原因與具體引述客戶原話。
36. 什麼是行動方案發想（Actionable Insights）提示詞？	要求 AI 根據資料痛點，提出 3 個不需要花大錢、且一個月內可立即落實的 Quick Wins。
37. 如何用語氣轉換指令應對公關危機？	可採兩階段指令：先找出結論，再要求改寫為「安撫客戶的溫暖內部信」與「官網的精簡 FAQ 清單」兩種版本。
38. 讓 NotebookLM 出選擇題考卷的技巧是什麼？	提示詞可要求「20 題單選，從來源出題並附解答」，並明確規定排版結構，避免使用 Markdown 標籤，方便後續複製。
39. 如何把 AI 出的考卷快速變回 Google 表單？	要求 AI 以特定逗號分隔格式輸出，例如 Question、Type、Points、Correct Answer 等，再透過 Form Builder 外掛匯入。
40. 把試算表資料丟給 NotebookLM 分析前要先做什麼？	必須先清理髒資料，留下有意義的文字回饋，並砍掉無關欄位，讓資料乾淨聚焦後再轉成文件匯入。
41. 什麼是跨文件檢索（Cross-Document Retrieval）？	將多份相關文件同時匯入一個筆記本，詢問問題時 AI 會自動跨文件融合，找出完整解答。
42. 在履歷篩選上使用 NotebookLM 要注意什麼風險？	AI 容易過度美化求職者。為避免公平性問題，建議一次只分析一位求職者的履歷。
43. 選取來源特定段落提問有什麼好處？	這種方式不是靠 RAG 分段檢索，而是直接在超大上下文中理解該段落，因此回答品質通常更高、更精準。
44. 發現文件裡出現簡體字或中國用語怎麼辦？	可在提示詞中加入規則，例如「確保輸出為繁體中文（台灣），禁止使用流行語」，以規範輸出語言風格。
45. 為什麼用 NotebookLM 看表格會出錯？	NotebookLM 對 PDF 中複雜表格的理解能力有限。遇到重要報表，建議先把表格截圖 OCR 轉成文字，或用純文字重新排版。
46. 什麼是端到端除錯金字塔的底層問題？	發生在 Google 表單端，例如沒有設定必填或輸入驗證，導致後續收到亂碼或空白資料，造成自動化流程失敗。
47. 什麼是端到端除錯金字塔的中層問題？	發生在試算表與 GAS 之間，例如表單題目改名後，造成 GAS 程式中的欄位名稱對不上而報錯。
48. 什麼是端到端除錯金字塔的頂層問題？	發生在 NotebookLM 分析端，例如資料格式不支援、AI 產生幻覺，或提問太發散而導致回答無實質意義。
49. 遇到 GAS 自動化寄信失敗，第一步該查什麼？	進入 Apps Script 的「執行項目（Executions）」畫面查看紅色失敗紀錄，它會指出哪一行發生錯誤。
50. 為什麼要學這一整套 AI 雲端資料工作流？	不只是學單一工具，而是學會問對問題、把髒資料變可用，並把「收資料 → 整理 → 分析 → 通知」串起來，真正提升工作效率。
51. 「職場 AI 加速術」課程的核心目標是什麼？	幫助學員建立一套從「收資料 → 整理分析 → 產出報告 → 自動通知」的完整雲端自動化工作流，並結合 AI 工具提升決策與行政效率。
52. 課程第一週（W01）的主要學習內容是什麼？	建立 AI 雲端資料工作流程的整體概觀，了解一般聊天型 AI 與 NotebookLM 在事實依賴性上的差異，並完成知識庫首次匯入與提問實作。
53. 課程第二週（W02）的主要學習內容是什麼？	學習問卷與資料收集設計，操作 Google 表單的各種題型與邏輯跳題，並正確連動至 Google 試算表。
54. 課程第三週（W03）的主要學習內容是什麼？	學習 Google 試算表的資料清洗與圖表展示，包含常用函數、樞紐分析表與基礎視覺化圖表。
55. 課程第四週（W04）的主要學習內容是什麼？	學習 AI 輔助分析與報告撰寫，將試算表中的文字意見整理後匯入 NotebookLM，再透過 Prompt 產出摘要與主管報告。
56. 課程第五週（W05）的主要學習內容是什麼？	學習自動化通知與定期摘要，使用 GAS 寫出表單送出後自動寄信，以及定時寄送週報的流程。
57. 課程第六週（W06）的主要學習內容是什麼？	進行綜合專案實戰，將表單、試算表、NotebookLM 與 GAS 串起來，打造完整的自動化應用。
58. 為什麼課程一直強調「先整理資料，再交給 AI 分析」？	因為要避免垃圾進、垃圾出。如果資料本身髒亂或欄位不一致，AI 就容易誤判，只有乾淨聚焦的資料才能產生高價值洞察。
59. 課程中提到的端到端除錯金字塔，底層和中層分別代表什麼？	底層代表 Google 表單端，重點在必填與輸入驗證等防呆；中層代表試算表與 GAS 端，重點在欄位名稱同步與觸發器權限。
60. 學習這套 AI 雲端資料工作流，最終能為職涯帶來什麼價值？	單一工具隨時可能被淘汰，但學會問對問題、看懂數據，以及知道何處該自動化、何處該保留人工把關的方法論，不會過時。
61. 這門「職場 AI 加速術」課程的詳細資訊與報名網址在哪裡？	歡迎隨時查看最新開課資訊與課綱，請點擊下方按鈕前往查看：https://www.nutc.edu.tw/
```

### 步驟二：開啟 Google Apps Script

在剛剛那份 Google 試算表上方選單，點選「擴充功能」→「Apps Script」，將專案命名為「LINE 課程 AI 助教」。

接著先設定密鑰，不要急著貼程式碼。進入 Apps Script 左側的「專案設定」，找到「指令碼屬性」，新增以下 4 個屬性：

| 屬性名稱 | 內容 |
| --- | --- |
| `LINE_CHANNEL_ACCESS_TOKEN` | LINE Developers 裡產生的長效 Channel Access Token |
| `GEMINI_API_KEY` | Google AI Studio 產生的 Gemini API Key |
| `SPREADSHEET_ID` | Google 試算表網址 `/d/` 到 `/edit` 中間那段 ID |
| `WEBHOOK_SECRET` | 自己設定一段難猜的字串，例如 32 字以上隨機英數字 |

![image](https://hackmd.io/_uploads/r18mhnzCbg.png)

`WEBHOOK_SECRET` 不是取代 LINE 官方簽章驗證的完整做法，但在純 GAS Web App 很實用：稍後把它加在 Webhook URL 的 query string 裡，可以擋掉一部分亂掃公開網址的請求。
![image](https://hackmd.io/_uploads/HJq_E0GCZl.png)


### 步驟三：貼上完整程式碼

把原本編輯器內的程式碼清空後，直接貼上以下版本。這份程式除了支援文字與圖片問答，也能從 AI 回覆中抓出網址，自動轉成漂亮的 CTA 按鈕。

這版程式會從 Script Properties 讀取 `LINE_CHANNEL_ACCESS_TOKEN`、`GEMINI_API_KEY`、`SPREADSHEET_ID` 與 `WEBHOOK_SECRET`，所以不要再把真正的 API Key 貼進程式碼。

這裡的實作重點和我在[Zeabur 使用 n8n 開發 LINE Bot](https://willismax.github.io/my-site/blog/%E5%9C%A8%20Zeabur%20%E4%BD%BF%E7%94%A8%20n8n%20%E9%96%8B%E7%99%BC%20LINE%20Bot%EF%BC%9A%E6%96%B0%E6%89%8B%E8%88%87%E9%96%8B%E7%99%BC%E8%80%85%E7%9A%84%E7%9C%9F%E5%AF%A6%E9%AB%94%E9%A9%97)那篇文章提到的概念很像：先讓 AI 回傳結構化 JSON，再由程式把內容轉成 Flex Message。差別在於這次不靠 n8n 節點，而是直接用 GAS 完成整個流程。


```javascript
/**
 * 職場 AI 加速術：課程專屬 LINE BOT 助教
 * 功能：文字/圖片問答、5 則上下文記憶、Flex Message 輪播卡片回覆、聯外按鈕動態生成、進階心法建議
 */

//  =========================================================================
// 1. 基本設定
// =========================================================================
const SCRIPT_PROPERTIES = PropertiesService.getScriptProperties();
const LINE_CHANNEL_ACCESS_TOKEN = SCRIPT_PROPERTIES.getProperty('LINE_CHANNEL_ACCESS_TOKEN');
const GEMINI_API_KEY = SCRIPT_PROPERTIES.getProperty('GEMINI_API_KEY');
const SPREADSHEET_ID = SCRIPT_PROPERTIES.getProperty('SPREADSHEET_ID');
const WEBHOOK_SECRET = SCRIPT_PROPERTIES.getProperty('WEBHOOK_SECRET');

const SHEET_NAME_HISTORY = '聊天紀錄';
const SHEET_NAME_QA = 'QA知識庫';
const GEMINI_MODEL = 'gemini-3.1-flash-lite-preview';

function assertRequiredConfig() {
  const missingKeys = [];

  if (!LINE_CHANNEL_ACCESS_TOKEN) missingKeys.push('LINE_CHANNEL_ACCESS_TOKEN');
  if (!GEMINI_API_KEY) missingKeys.push('GEMINI_API_KEY');
  if (!SPREADSHEET_ID) missingKeys.push('SPREADSHEET_ID');

  if (missingKeys.length > 0) {
    throw new Error(`缺少必要的指令碼屬性：${missingKeys.join(', ')}`);
  }
}

function isValidWebhookRequest(e) {
  if (!WEBHOOK_SECRET) {
    return true;
  }

  return e && e.parameter && e.parameter.key === WEBHOOK_SECRET;
}

// =========================================================================
// 2. 主程式入口：接收 LINE 的 Webhook 事件
// =========================================================================
function doPost(e) {
  try {
    assertRequiredConfig();

    if (!isValidWebhookRequest(e)) {
      console.warn('Webhook secret 驗證失敗');
      return ContentService.createTextOutput('Forbidden');
    }

    const eventData = JSON.parse(e.postData.contents);
    const events = eventData.events;

    if (!events || events.length === 0) {
      return ContentService.createTextOutput('OK');
    }

    for (let i = 0; i < events.length; i++) {
      const event = events[i];
      const replyToken = event.replyToken;
      const userId = event.source.userId;

      if (event.type !== 'message') {
        continue;
      }

      let userMessage = '';
      let base64Image = null;

      if (event.message.type === 'text') {
        userMessage = event.message.text;
      } else if (event.message.type === 'image') {
        base64Image = getLineImageContent(event.message.id);
        userMessage = '請分析這張圖片，並解答我的問題或提供課程相關建議。';
      } else {
        continue;
      }

      const history = getHistory(userId);
      const aiResponse = callGeminiAPI(userMessage, base64Image, history);

      history.push({ role: 'user', parts: [{ text: userMessage }] });
      history.push({ role: 'model', parts: [{ text: JSON.stringify(aiResponse) }] });
      saveHistory(userId, history);
      saveLogToSheet(userId, userMessage, aiResponse);
      replyWithFlexMessage(replyToken, aiResponse);
    }

    return ContentService.createTextOutput('OK');
  } catch (error) {
    console.error(error);
    return ContentService.createTextOutput('Error');
  }
}

// =========================================================================
// 3. LINE API 溝通相關函式
// =========================================================================

function getLineImageContent(messageId) {
  const url = `https://api-data.line.me/v2/bot/message/${messageId}/content`;
  const options = {
    method: 'get',
    headers: {
      Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
    },
  };

  const response = UrlFetchApp.fetch(url, options);
  const blob = response.getBlob();
  return Utilities.base64Encode(blob.getBytes());
}

function replyWithFlexMessage(replyToken, aiData) {
  const url = 'https://api.line.me/v2/bot/message/reply';
  const bubbles = [];

  const answerBubble = {
    type: 'bubble',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '👨‍🏫 助教解答',
          weight: 'bold',
          size: 'xl',
          color: '#ffffff',
        },
      ],
      backgroundColor: '#2980b9',
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: aiData.answer,
          wrap: true,
          size: 'md',
        },
      ],
    },
  };

  if (aiData.action_url && aiData.action_url.startsWith('http')) {
    answerBubble.footer = {
      type: 'box',
      layout: 'vertical',
      spacing: 'sm',
      contents: [
        {
          type: 'button',
          style: 'primary',
          color: '#2980b9',
          height: 'sm',
          action: {
            type: 'uri',
            label: aiData.action_label || '🔗 點擊前往',
            uri: aiData.action_url,
          },
        },
      ],
      flex: 0,
    };
  }

  bubbles.push(answerBubble);

  if (aiData.tips && aiData.tips.length > 0) {
    aiData.tips.forEach(function (tip, index) {
      bubbles.push({
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: `💡 優化心法 ${index + 1}`,
              weight: 'bold',
              size: 'lg',
              color: '#ffffff',
            },
          ],
          backgroundColor: '#e67e22',
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: tip.title,
              weight: 'bold',
              size: 'md',
              color: '#d35400',
              wrap: true,
            },
            {
              type: 'separator',
              margin: 'md',
            },
            {
              type: 'text',
              text: tip.desc,
              wrap: true,
              size: 'sm',
              margin: 'md',
            },
          ],
        },
      });
    });
  }

  const payload = {
    replyToken: replyToken,
    messages: [
      {
        type: 'flex',
        altText: '助教回覆了您的問題！',
        contents: {
          type: 'carousel',
          contents: bubbles,
        },
      },
    ],
  };

  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LINE_CHANNEL_ACCESS_TOKEN}`,
    },
    payload: JSON.stringify(payload),
  };

  UrlFetchApp.fetch(url, options);
}

// =========================================================================
// 4. Gemini AI 溝通相關函式
// =========================================================================

function callGeminiAPI(userMessage, base64Image, history) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;
  const qaContext = getQAKnowledge();

  const systemInstruction = `
你是「職場 AI 加速術：NotebookLM 與雲端工具應用」課程的專屬 AI 助教。
你的任務是解決學員關於 Google 表單、Google 試算表（公式、樞紐分析、圖表）、NotebookLM 與 GAS 自動化的問題。
如果使用者上傳了圖片（例如報錯截圖或資料截圖），請仔細觀察圖片內容找出錯誤或給予建議。

${qaContext}

【回覆格式嚴格限制】
你必須直接回傳一個純 JSON 格式的物件，不能包含 markdown 的 json 區塊標籤，格式如下：
{
  "answer": "直接且親切地回答使用者的問題或報錯原因...",
  "action_label": "按鈕文字（若解答中需要提供網址，請給簡短行動呼籲；若無網址請留空）",
  "action_url": "若解答中需要提供網址連結請填入此處（需為 http 或 https 開頭；若無網址請留空）",
  "tips": [
    {
      "title": "進階心法標題",
      "desc": "如何做得更好的具體建議或觀念說明..."
    }
  ]
}
`;

  const currentMessageParts = [];

  if (base64Image) {
    currentMessageParts.push({
      inlineData: {
        mimeType: 'image/jpeg',
        data: base64Image,
      },
    });
  }

  currentMessageParts.push({ text: userMessage });

  const contents = history.concat([
    {
      role: 'user',
      parts: currentMessageParts,
    },
  ]);

  const payload = {
    systemInstruction: {
      parts: [{ text: systemInstruction }],
    },
    contents: contents,
    generationConfig: {
      responseMimeType: 'application/json',
    },
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    muteHttpExceptions: true,
  };

  const response = UrlFetchApp.fetch(url, options);
  const json = JSON.parse(response.getContentText());

  try {
    const responseText = json.candidates[0].content.parts[0].text;
    return JSON.parse(responseText);
  } catch (e) {
    return {
      answer: '抱歉，助教剛剛有點當機，請再試一次或換個說法詢問喔！',
      action_label: '',
      action_url: '',
      tips: [],
    };
  }
}

// =========================================================================
// 5. 對話紀錄（上下文）快取管理
// =========================================================================

function getHistory(userId) {
  const cache = CacheService.getScriptCache();
  const historyStr = cache.get(`history_${userId}`);

  if (historyStr) {
    return JSON.parse(historyStr);
  }

  return [];
}

function saveHistory(userId, newHistory) {
  const cache = CacheService.getScriptCache();

  if (newHistory.length > 10) {
    newHistory = newHistory.slice(newHistory.length - 10);
  }

  cache.put(`history_${userId}`, JSON.stringify(newHistory), 1800);
}

// =========================================================================
// 6. Google 試算表整合函式
// =========================================================================

function getQAKnowledge() {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME_QA);

    if (!sheet) {
      return '';
    }

    const data = sheet.getDataRange().getValues();

    if (data.length <= 1) {
      return '';
    }

    let qaString = '【以下為課程專屬 QA 知識庫，若學員詢問相關問題，請優先參考以下內容並整合進回覆：】\n';

    for (let i = 1; i < data.length; i++) {
      const question = data[i][0];
      const answer = data[i][1];

      if (question && answer) {
        qaString += `Q: ${question}\nA: ${answer}\n\n`;
      }
    }

    return qaString;
  } catch (e) {
    console.error('讀取 QA 知識庫失敗:', e);
    return '';
  }
}

function saveLogToSheet(userId, userMessage, aiResponse) {
  try {
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME_HISTORY);

    if (!sheet) {
      return;
    }

    const timestamp = new Date();
    const aiAnswerText = aiResponse.answer || '無文字回應';
    sheet.appendRow([timestamp, userId, userMessage, aiAnswerText]);
  } catch (e) {
    console.error('儲存紀錄至試算表失敗:', e);
  }
}
```

### 步驟四：部署為網頁應用程式，取得 Webhook URL

點擊 GAS 編輯器右上角的「部署」→「新增部署作業」。

1. 類型選「網頁應用程式」
2. 說明可填「版本 1」
3. 存取權限務必選擇「所有人」

第一次部署時，Google 會要求你授權 Apps Script 存取相關服務。由於這支程式會用到 `SpreadsheetApp`，系統會另外提示試算表權限，照流程授權即可。

完成後你會拿到一組以 `https://script.google.com/macros/s/.../exec` 開頭的網址。為了搭配剛剛設定的 `WEBHOOK_SECRET`，請在網址後面加上 `?key=你的_WEBHOOK_SECRET`，最後會像這樣：

```text
https://script.google.com/macros/s/你的部署ID/exec?key=你的_WEBHOOK_SECRET
```
![image](https://hackmd.io/_uploads/rJyq-TG0-x.png)

這就是等一下要貼回 LINE Developers 的 Webhook URL。這個做法的目標不是做到銀行等級的驗證，而是避免任何人只要猜到 GAS Web App 網址就能直接送假資料進來。若你要做更嚴謹的正式服務，建議改用 Cloud Run、Cloudflare Workers 或其他能讀取 HTTP Header 的後端，並驗證 LINE 的 `X-Line-Signature`。

如果你想比較不同部署方式，我之前也寫過[在 Render 上快速部署 HackMD 與 LINE 的聊天機器人](https://willismax.github.io/my-site/blog/%E5%9C%A8%20Render%20%E4%B8%8A%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2%20HackMD%20%E8%88%87%20LINE%20%E7%9A%84%E8%81%8A%E5%A4%A9%E6%A9%9F%E5%99%A8%E4%BA%BA)，以及[用 GitHub Codespace 建立並部署 LINE Bot](https://willismax.github.io/my-site/blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20GitHub%20Codespace%20%E5%BB%BA%E7%AB%8B%E4%B8%A6%E9%83%A8%E7%BD%B2%20LINE%20Bot)。這篇採用 GAS，是因為課程場景已經使用 Google 試算表，資料庫、程式與部署都放在同一個 Google 生態系裡，維護成本會更低。

### 步驟五：回到 LINE Developers 綁定 Webhook
![image](https://hackmd.io/_uploads/r110E0zC-g.png)

進入你的 Messaging API 設定頁面後：

1. 找到 Webhook URL 欄位
2. 貼上剛剛部署得到、並且已加上 `?key=...` 的 Apps Script 網址
3. 儲存後打開 Use webhook
4. 記得關掉 LINE 預設的 Auto-reply messages，避免和你自己的 Bot 打架

## 再補一層：聊天紀錄也要有資料保護意識

這支範例程式會把學員的提問與 AI 回覆寫進 Google 試算表，這對教學分析很有幫助，但也代表你正在保存對話資料。實務上建議這樣處理：

![Webhook 部署與聊天紀錄資料保護](/img/blog/line-ai-course-assistant/deploy-and-data-protection.svg)

_圖：Webhook URL 加上 shared secret 只是第一層門禁；真正上線後，聊天紀錄的權限與保存期限也要一起管理。_

- 試算表只開給課程管理者，不要設定成公開連結可讀或可編輯。
- 事先告知學員：這個助教會保存對話紀錄，目的是改善課程與追蹤常見問題。
- 不要要求學員在 LINE 裡輸入身分證字號、信用卡、住址、病歷等高敏感資料。
- 如果只需要分析問題類型，可以定期把 `學員LINE ID` 改成匿名代號，或刪除舊資料。
- 課程結束後設定資料保存期限，例如保留 30 到 90 天，之後刪除或脫敏。

如果你的場景真的會處理個資或企業內部資料，就不要把這篇範例直接當正式系統上線；至少要再補上權限控管、資料保存政策、錯誤告警與 API 使用量監控。
![image](https://hackmd.io/_uploads/rJ6DH0fCbl.png)

## 完成後怎麼測？
![image](https://hackmd.io/_uploads/HJq7SCfCbl.png)

你可以先從最簡單的問題開始測，例如直接傳：

```text
請問課程的報名網址在哪裡？
```

如果設定正確，助教會回你一組 Flex Message 輪播卡片。第一張卡片會顯示主要解答，並自動產生「點擊前往」的網址按鈕；後面的卡片則會顯示進階心法或補充技巧。這樣的呈現方式不只資訊更清楚，對學員來說也更像一個真的有被設計過的服務。

接著你也可以試幾種更貼近實際教學現場的情境：

- 傳送一張 Google 試算表公式錯誤截圖，測試 Gemini 的看圖能力
- 連續追問同一個主題，觀察上下文記憶是否有生效
- 到聊天紀錄工作表查看是否有自動寫入問題與回覆
- 修改 QA知識庫 裡的標準答案，測試助教是否會跟著調整回覆方向

## 這個架構為什麼實用？

這套做法的關鍵，不只是把 LINE 和 AI 串起來，而是把「知識庫、上下文、結構化輸出、商務流程」四件事一起做好。

以前很多人做 LINE Bot，做到最後會卡在兩個問題：第一是 AI 很會講，但講錯也很敢講；第二是訊息送出去之後，完全沒有留下可分析的資料。這篇文章的做法，剛好就是針對這兩個問題下手。

你把課程資訊、FAQ、標準說法寫在 Google 試算表裡，AI 每次回覆前都先參考它，等於先幫助教建立了「說話邊界」。這個方向延續了我在[客製化 AI 教學助手](https://willismax.github.io/my-site/blog/Customize%20Your%20AI%20Teaching%20Assistant%20-%20A%20Socratic%20Approach)裡談過的角色設定概念，只是這次再往前多做了知識庫、圖片理解與對話紀錄。再配合 CacheService 的短期上下文記憶，以及 Flex Message 的結構化輸出，就能把原本散亂的問答體驗，變成更像真人助教的服務流程。

![image](https://hackmd.io/_uploads/HyAbxCMCbx.png)


## 延伸閱讀：如果你想繼續改造這個 LINE AI 助教

- [用 HackMD API 打造個人專屬 LINE BOT 助手](https://willismax.github.io/my-site/blog/%E7%94%A8HackMD%20API%E6%89%93%E9%80%A0%E5%80%8B%E4%BA%BA%E5%B0%88%E5%B1%ACLINE%20BOT%E5%8A%A9%E6%89%8B)：適合補 LINE Developers、Webhook、Token 與基本 Bot 流程。
- [客製化你的 AI 教學助手：蘇格拉底引導教學法](https://willismax.github.io/my-site/blog/Customize%20Your%20AI%20Teaching%20Assistant%20-%20A%20Socratic%20Approach)：適合思考 AI 助教的人設、互動語氣與教學定位。
- [在 Zeabur 使用 n8n 開發 LINE Bot：新手與開發者的真實體驗](https://willismax.github.io/my-site/blog/%E5%9C%A8%20Zeabur%20%E4%BD%BF%E7%94%A8%20n8n%20%E9%96%8B%E7%99%BC%20LINE%20Bot%EF%BC%9A%E6%96%B0%E6%89%8B%E8%88%87%E9%96%8B%E7%99%BC%E8%80%85%E7%9A%84%E7%9C%9F%E5%AF%A6%E9%AB%94%E9%A9%97)：適合比較 Low Code、Flex Message、RAG 與節點式自動化流程。
- [在 Render 上快速部署 HackMD 與 LINE 的聊天機器人](https://willismax.github.io/my-site/blog/%E5%9C%A8%20Render%20%E4%B8%8A%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2%20HackMD%20%E8%88%87%20LINE%20%E7%9A%84%E8%81%8A%E5%A4%A9%E6%A9%9F%E5%99%A8%E4%BA%BA)：適合想把 Bot 部署到一般雲端服務的讀者。
- [如何使用 GitHub Codespace 建立並部署 LINE Bot](https://willismax.github.io/my-site/blog/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%20GitHub%20Codespace%20%E5%BB%BA%E7%AB%8B%E4%B8%A6%E9%83%A8%E7%BD%B2%20LINE%20Bot)：適合想用雲端開發環境完成 LINE Bot 實作的人。

## 小結
![image](https://hackmd.io/_uploads/H1ENeRGA-g.png)

這次的升級，示範的是一種很務實的 AI 應用方式：不是追求讓模型什麼都會，而是把它放進一個你能控制、能維護、能分析的流程裡。

透過 GAS、Gemini、LINE Messaging API 與 Google 試算表，你可以用相對低門檻的方式做出一個專屬課程助教，還能持續擴充知識庫、優化回覆品質，甚至回頭分析學員真正卡住的問題。

如果你也想做一個「不只會回話，還能真正幫忙教學」的 LINE AI 助教，這套架構很值得你直接實作一次。
