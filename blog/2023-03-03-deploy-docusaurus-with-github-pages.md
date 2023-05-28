---
title: 使用GitHub Pages 部署 Docusaurus 教學
slug: 使用GitHub Pages 部署 Docusaurus 教學
date: 2023-03-03T10:00
authors:
  name: Willis Chen
  title: Tech Instructor
  url: https://willismax.github.io/my-site/
GA: G-CH7FZ71WRC
tags: [GitHub, GitHub Actions, Docusaurus]
---

# 使用GitHub Pages 部署 Docusaurus 教學
![](https://hackmd.io/_uploads/ryKZyWv1h.png)

如何使用 GitHub Pages 部署 Docusaurus，可以透過以下步驟，輕鬆地建立自己的網誌。

- 步驟1. 事前準備一個 [GitHub](https://github.com/) 帳號，並且安裝 [Git 工具](https://git-scm.com/downloads) 及 [Node.js](https://nodejs.org/)。
- 步驟2. 創建新的 Repository，作為 GitHub Pages 靜態網頁存放用。
- 步驟3. 下載 Docusaurus 範本
- 步驟4. 安裝和測試 Docusaurus



步驟一：事前準備
----

在開始之前，我們需要先確保以下條件都已經滿足：

-   一個 GitHub 帳號，可以在 [GitHub](https://github.com/) 上免費註冊。
-   安裝 Git 工具，可以從 [Git 官網](https://git-scm.com/downloads) 下載安裝包進行安裝。
-   安裝 Node.js 和 npm，可以在 [Node.js 官網](https://nodejs.org/) 下載安裝包進行安裝。

步驟二：創建新的 Repository
-------------------

首先，在 GitHub 上創建一個新的 Repository，用來存放網誌的代碼和部署文件。以下是創建 Repository 的步驟：

1.  登錄 GitHub，進入主頁面。
    
2.  點擊右上角的 “+” 按鈕，然後選擇 “New repository”。
    
3.  在創建 Repository 的頁面中，填寫 Repository 名稱、描述和設置等信息，然後點擊 “Create repository” 按鈕創建 Repository。
    

步驟三：下載 Docusaurus 範本
--------------------

接下來，我們需要下載 Docusaurus 的範本代碼，作為網誌的基礎。以下是下載 Docusaurus 範本的步驟：

1.  打開命令行工具，進入要存放 Docusaurus 範本的文件夾。
2.  輸入以下命令，下載最新版本的 Docusaurus 範本：
    ```
    npx @docusaurus/init@latest init my-blog classic
    ``` 
3.  執行命令後，Docusaurus 範本會被下載到當前目錄下的 my-blog 文件夾中。

步驟四：安裝和測試 Docusaurus
--------------------

在下載 Docusaurus 範本之後，我們需要進行安裝和測試，以確保網誌可以正常運行。以下是安裝和測試 Docusaurus 的步驟：

1.  進入 my-blog 文件夾，打開命令行工具。
    
2.  輸入以下命令，安裝 Docusaurus 和相關的依賴：
    ```
    npm install
    ```
3.  安裝完成後，輸入以下命令，啟動 Docusaurus 的本地測試服務：
    ```
    npm start
    ```
4.  在 Github 上建立新的 repository
    
    在 Github 上建立一個新的 repository，命名為 `{username}.github.io`，其中 `username` 是你的 Github 使用者名稱。例如，我的 Github 使用者名稱是 `chatgpt`，因此我會命名我的 repository 為 `chatgpt.github.io`。

5.  將 Docusaurus 專案上傳至 Github

    在你的電腦上開啟終端機（Terminal）或命令提示字元（Command Prompt），進入到 Docusaurus 專案的根目錄下，並執行以下指令：
    ```
    git init
    git remote add origin git@github.com:{username}/{username}.github.io.git
    npm run build
    npm run deploy
    ``` 

    其中，`username` 是你的 Github 使用者名稱，請注意要改成你自己的。這些指令的作用如下：

    -   `git init`：初始化 Git 儲存庫。
    -   `git remote add origin git@github.com:{username}/{username}.github.io.git`：設定 Git 儲存庫的遠端位置。
    -   `npm run build`：建立 Docusaurus 專案的靜態網頁檔案。
    -   `npm run deploy`：將靜態網頁檔案上傳至 Github。

    在執行 `npm run deploy` 的時候，會需要你輸入 Github 的使用者名稱和密碼（或是 Personal Access Token）。請輸入正確的資訊後，等待上傳完成。

8.  檢查網站是否正常運作

    完成上傳後，打開瀏覽器，輸入 `https://{username}.github.io`，其中 `username` 是你的 Github 使用者名稱，就可以看到你的 Docusaurus 網站了！如果你看到了你的網站，那就代表部署成功了。

9.  編輯 Docusaurus 網站

    現在，你可以開始編輯你的 Docusaurus 網站了。編輯完成後，只需要執行以下指令：
    ```
    git add .
    git commit -m "Update website"
    git push origin main
    ``` 

    其中，`Update website` 是你的提交訊息，你可以自己替換成任何訊息。執行這些指令後，你的修改就會自動更新到你的 Github Pages 上了。

## 結語

以上使用 Github Pages 部署 Docusaurus 教學，希望能幫助到您。

