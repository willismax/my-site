# Day 04 : Git、Github與他們快樂好夥伴們



[![hackmd-github-sync-badge](https://hackmd.io/_MRGny89Rmi-DgjU820Yfw/badge)](https://hackmd.io/_MRGny89Rmi-DgjU820Yfw)
Git與Github可以說是資訊人/軟體工程必備技能，Git版控管理程式碼、Github查找/分享/參與開源程式碼都是相當常用但初學者需要熟悉的主題。在[第一天](https://ithelp.ithome.com.tw/articles/10233234)、[第二天](https://ithelp.ithome.com.tw/articles/10233252)定性什麼是多媒體系統、[第三天](https://ithelp.ithome.com.tw/articles/10233530)認識Python開發環境後，本日進入到git版本控制及repo資源庫，並結合後續的開發情境介紹。

## Git
![](https://i.imgur.com/jJZtXEJ.png)
- Git是版本控制以差異備份的方式記錄文件變化，並且有回溯前幾次版本的功能，特色是能紀錄每次更新異動，方便開分支修改功能協作，以及決定最終何種修正功能可以commit到主幹佈署。
    - 版本控制的視覺化
      ![](https://i.imgur.com/yanKW2S.png)
- 本系列文後續會配合Heroku有使用git上傳檔案的需求，但只需要幾個常用指令(佈署後heroku也會有提示，請放心)。
    ```
    $ git add.
    $ git commit -am "增/刪/改的功能描述"
    $ git push heroku master
    ```
- 以及查看狀態的
    ```
    $ git status
    ```

### 建立git版本控制環境
- 沒意外的話初學者電腦是windows系統， 就以windows示範，其餘系統官網也有教學。
![](https://i.imgur.com/jqxtEvN.png)
- 安裝過程有改動的設定:
 - 預設編輯器改為VS CODE
   ![](https://i.imgur.com/hADHbMG.png)
 - Git Bash改為用windows console
   ![](https://i.imgur.com/aRxjJmu.png)
 - 安裝完成
 - 執行CMD確認是否安裝完成
   ![](https://i.imgur.com/QTvk5dk.png)
 - 初始化你的git環境
    ```shell
    C:\Users\user>git config --global user.name "你的名字"
    C:\Users\user>git config --global user.email "和你的信箱"
    ```
  - 先告一段落，進一步了解git參閱[這篇介紹](https://gitbook.tw/chapters/introduction/what-is-git.html)。

## Github
![](https://i.imgur.com/QZisHEM.png)
- https://github.com/
    - ~~宅IT的FB~~
    - 從開源到微軟收購，難得尚未搞砸而且富爸爸還給更多免費資源!下圖是當初網友揶揄的圖，但現在每人都可以免費創建3個非公開repo，另2019年11月GitHub還以膠卷的形式將[開源程式碼儲存於北極地區的挪威冰山裡](https://www.bnext.com.tw/article/58552/github-arctic-code-vault)，或許也包含你的開源貢獻!![](https://i.imgur.com/Z3LvYWH.png)
    - 探索並查看各種開源的Repositories(程式集，簡稱repo)
    - Fork、Star、下載Repositories
    - 查看Repositories的Fork from、commit歷史紀錄
    - 你可以fork回來修改後PR回去，直接參與專案!
- 以Python的Line Bot Sdk為例
    - 網址: https://github.com/line/line-bot-sdk-python
    ![](https://i.imgur.com/U6AYnnf.png)
- git跟GitHub的差別
    - GitHub 的本體是一個 Git 伺服器，但這個網站上的應用程式讓大家可以透過 Web 介面來操作一些原本需要複雜的 Git 指令才能做到的事。雖然 GitHub 很好用，但別忘了 Git 才是本體喔。
https://gitbook.tw/chapters/introduction/what-is-git.html
- 查閱repo的介紹-README檔
  ![](https://i.imgur.com/ixaJw6V.png)
- 附加功能
    - 可以作為置放靜態網頁的GitHub Pages服務，甚至架個人部落格，有興趣可以參閱[HEXO](https://hexo.io/zh-tw/)。
      ![](https://i.imgur.com/9AUsUtY.png)
    - 可以作為程式碼跨平台顯示的GitHub Gist



## 小結
- 簡單整理今天分享的內容:
    - 想要站在巨人的肩膀上，開源的repo總可找到你可用的資源，github是你的好朋友。
    - 想要對自己/團隊的Code管理與負責，git是必須的。
- 謝謝觀看，我們下篇見!
