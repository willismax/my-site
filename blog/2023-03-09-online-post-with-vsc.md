---
slug: 使用 GitHub Actions 自動部署 Docusaurus 網誌並優化 SEO
title: 使用 GitHub Actions 自動部署 Docusaurus 網誌並優化 SEO
date: 2023-03-09T23:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [GitHub Actions, Docusaurus, Tech]
---



使用 GitHub Actions 自動部署 Docusaurus 網誌並優化 SEO
===========================================


[![hackmd-github-sync-badge](https://hackmd.io/pMZX7mLQRN-hD-MG3ASReA/badge)](https://hackmd.io/pMZX7mLQRN-hD-MG3ASReA)

![](https://hackmd.io/_uploads/ryzvXkw12.png)

如果你是一個 Docusaurus 使用者，你可能已經知道如何使用 Github Pages 部署你的網誌。但是，手動更新並部署你的網誌非常耗時，而且容易出錯。為了解決這個問題，你可以使用 GitHub Actions 來自動生成和部署你的網誌，這樣你就可以專注於撰寫新的文章了。

什麼是 GitHub Actions？
-------------------

GitHub Actions 是一個自動化工具，可以幫助你自動執行各種任務，例如建立和測試你的應用程序，將你的應用程序部署到不同的環境中，或者自動發佈你的網誌文章。你可以使用 GitHub Actions 的預設工作流程，或者創建自己的自訂工作流程。

如何使用 GitHub Actions 自動部署 Docusaurus 網誌？
---------------------------------------

下面是一個簡單的步驟，可以幫助你在 GitHub Actions 中自動生成和部署你的 Docusaurus 網誌。

1.  在你的 Docusaurus 存儲庫中，創建一個名為 `.github/workflows/deploy.yml` 的文件。
    
2.  在 `deploy.yml` 文件中添加以下內容：
    
    ```yaml
    name: Deploy website
    on:
    push:
        branches:
        - main
    jobs:
    deploy:
        runs-on: ubuntu-latest
        steps:
        - uses: actions/checkout@v2
        - name: Install Node.js
        uses: actions/setup-node@v1
        with:
            node-version: '14.x'
        - name: Build and deploy
        uses: JamesIves/github-pages-deploy-action@4.1.3
        with:
            branch: gh-pages
            folder: build
            clean: true
    ```

    這個工作流程會在主分支上進行 push 時運行。它會在最新的 Ubuntu 環境中運行，安裝 Node.js，構建你的 Docusaurus 網誌，然後將它部署到 `gh-pages` 分支。

3.  在你的 Docusaurus 存儲庫中，建立一個名為 `build` 的文件夾。
    
4.  執行以下命令，生成你的 Docusaurus 網誌：
    
    ```yaml
    npm run build` 
    ```

  這將在 `build` 文件夾中生成編譯後的靜態網頁。

5.  執行以下命令，將你的更改提交到存儲庫中：

    ```yaml
    git add .
    git commit -m "Update website"
    git push
    ``` 

  這會觸發 GitHub Actions，自動生成和部署你的 Docusaurus 網誌。你可以在 GitHub Actions 的頁面上查看進度和結果。如果一切順利，你的網誌應該已經部署到 `gh-pages` 分支中。

6.  現在你可以在瀏覽器中訪問你的網誌，例如 `https://yourusername.github.io/yourblog/`。如果一切正常，你應該能夠看到你的網誌文章。

如何優化你的 Docusaurus 網誌的 SEO？
--------------------------

  現在你已經成功地使用 GitHub Actions 自動部署了你的 Docusaurus 網誌，接下來你可能想要優化你的網誌的 SEO，以便更好地吸引流量和讀者。以下是一些簡單的技巧，可以幫助你優化你的網誌的 SEO。

### 1. 使用關鍵字進行標題和內容的優化

  在你的網誌文章的標題和內容中使用關鍵字，以便搜索引擎能夠更好地理解你的內容，並將其排名更高。但是，不要過度使用關鍵字，否則你的內容可能會被搜索引擎視為垃圾郵件。關鍵字優化的訣竅是參考Google搜尋結果的相關搜尋，將相關搜尋的文章進一步整理為合適的內容，讓讀者能在這一篇文章就可以滿足需求。

### 2. 創建有價值的內容

  創建有價值的內容是吸引讀者和排名更高的關鍵。寫出具有深度和價值的內容，以便讀者和搜索引擎都能夠看到你的專業知識和價值，自己的洞見非常重要，讀者不會想只看到類似 ChatGPT 生成的大量文章。

### 3. 使用適當的標記和元數據

  使用適當的標記和元數據，例如標題標記、描述標記和關鍵字標記，以幫助搜索引擎更好地理解你的內容。同時，使用適當的元數據，例如 Open Graph 協議和 Twitter 卡片，以使你的內容在社交媒體上分享時更有吸引力。

### 4. 使用友好的 URL

  使用友好的 URL，以便讀者和搜索引擎更好地理解你的內容。使用有意義的字詞和短條目，避免使用難以理解的符號和數字。同時，使用靜態 URL，以便搜索引擎可以更輕鬆地索引你的網站。

### 5. 關注網站的速度和性能

  優化你的網站的速度和性能，以便更好地吸引流量和提高排名。使用快速的網站主機和優化的圖像，避免使用過多的 JavaScript 和 CSS，以減少網站的加載時間。同時，使用快取和網站緩存，以便減少服務器負載並提高網站的速度。

### 6. 建立高質量的內部和外部連結

  建立高質量的內部和外部連結，以幫助搜索引擎更好地理解你的內容並提高你的排名。使用有意義的錨文本和鏈接到相關的內容，同時建立高質量的外部鏈接，以提高你的網站的權威性和排名。

### 7. 監測和分析你的流量和排名

  監測和分析你的網站的流量和排名，以了解你的目標讀者是誰，以及他們如何找到你的內容。使用 Google Analytics 或其他分析工具來跟踪你的流量和排名，並根據這些數據調整你的 SEO 策略。

結論
--

使用 GitHub Actions 自動部署你的 Docusaurus 網誌是一個簡單而有效的方式，可以幫助你更輕鬆地管理和更新你的網誌。同時，優化你的網誌的 SEO 是一個重要的步驟，可以幫助你吸引更多的流量和讀者，並提高你的排名。遵循上述的技巧和策略，你可以建立一個成功的網誌，吸引更多的讀者和流量，並在搜索引擎上排名更高。
