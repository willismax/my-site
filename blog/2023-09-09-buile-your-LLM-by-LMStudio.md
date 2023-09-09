---
title: 使用 LM Studio 輕鬆在筆電上建立自己的聊天機器人
slug: 使用 LM Studio 輕鬆在筆電上建立自己的聊天機器人
date: 2023-09-09T21:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [LLM, AIGC]
---

# 使用 LM Studio 輕鬆在筆電上建立自己的聊天機器人

對於剛接觸人工智慧的學生來說，建立自己的聊天機器人可能聽起來有點遙不可及。不過，現在有越來越多的工具讓這個過程變得簡單。本篇文章會介紹如何使用 LM Studio 快速在筆電上實現大型語言模型（LLM）。

## 背景知識：大型語言模型與開源社群

在開始之前，讓我們先簡單了解一下什麼是大型語言模型。簡單來說，它是一種能夠理解和生成人類語言的人工智慧模型。目前有很多開源的大型語言模型，像是 Meta 的 LLaMa 系列和 Hugging Face（簡稱 HF）的各種模型。

## 步驟 1：安裝 LM Studio 應用程式

首先，請至 [LM Studio 官網](https://lmstudio.ai/) 下載適用於 Windows 或 Mac 的桌面應用程式。

![LM Studio 下載頁面](https://hackmd.io/_uploads/rkezQzgcR2.png)

## 步驟 2：選擇適合的模型

安裝完畢後，打開 LM Studio。在首頁，你會看到最新或最熱門的模型資訊。使用搜尋框可以找到你需要的模型。例如，我搜尋 "Taiwan"，找到了一個名為 `audreyt/Taiwan-LLaMa-v1.0-GGUF` 的模型。

![模型選擇](https://hackmd.io/_uploads/rkyqMecA2.png)

> **備註：** 模型資訊通常會包含在 HF 的模型卡（Model Card）和相關的論文連結。

## 步驟 3：下載模型到本地

選擇一個適合你硬體配置的模型進行下載。如果你的筆電不是高性能的，建議選擇小型的模型。

![模型下載](https://hackmd.io/_uploads/rJpHMx9Rh.png)

## 步驟 4：開始與聊天機器人對話

下載完成後，在左側選擇聊天頁籤。選擇你剛才下載的模型，等待模型加載完成後，就可以開始與聊天機器人對話了。

![聊天界面](https://hackmd.io/_uploads/S1LszecRh.png)

## 結論與後續步驟

建立自己的聊天機器人是一個不斷演進的過程。儘管 LM Studio 提供了一個相當方便的平台，但要達到商業應用水平，還需要進一步的微調和量化調教。如果你想要更進一步，可以考慮使用 OpenAI、Azure、Google 或 AWS 等平台的 API 進行模型的微調。

希望這篇文章能幫助你更輕鬆地入手聊天機器人的建立，祝你在人工智慧的旅程中一切順利！

如果有任何問題或需要進一步的說明，歡迎留言。
