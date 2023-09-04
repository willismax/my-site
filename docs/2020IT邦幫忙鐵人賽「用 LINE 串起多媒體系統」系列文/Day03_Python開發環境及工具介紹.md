# Day 03 : Python 開發環境及工具介紹

![](https://i.imgur.com/hiSd5U5.png)  
本系列文以 Python 程式開發運用為主，在正式 coding 之前，先整理目前較主要的開環境與工具。

Python開發環境與工具
-------------

-   下載 Python 原生環境就可以執行 Python 啦，也可以選擇自己合適的 IDE (整合開發環境)或編譯器，甚至還有一種方便溝通的 Notebook(筆記本)。
-   各種選項

| 名稱 | 簡介 | 網址 |
| --- | --- | --- |
| IDLE | 下載Python就會的內建的編譯器 | [https://www.python.org/](https://www.python.org/) |
| ANACONDA![](https://i.imgur.com/9GYGYc2.png) | 知名且方便的Python一大包套件包 | [https://www.anaconda.com/](https://www.anaconda.com/) |
| Pycharm![](https://i.imgur.com/5pNnQme.png) | 知名好用的IDE，有分已經很夠用的社群版本、超級好用的付費版，且教育信箱可以申請免費使用! | [https://www.jetbrains.com/pycharm/](https://www.jetbrains.com/pycharm/) |
| Jupyter notebook![](https://i.imgur.com/AnDHr77.png) | ipython演化而來的筆記本，由網頁瀏覽器當作介面，可以條列式直譯程式並穿插文字，文圖程式並茂就像看文章般的直觀。 | [https://jupyter.org/](https://jupyter.org/) |
| Jupyter Lab![](https://i.imgur.com/AnDHr77.png) | 可以當作Jupyter Notebook進化版，特色是多了檔案總管，直接看檔案樹狀目錄並具備分頁功能了 | [https://jupyter.org/](https://jupyter.org/) |
| Colab![](https://i.imgur.com/k7iAKJG.png) | google的佛心雲端筆記本，每個筆記本都是一個linux虛擬機，還可以結合雲端硬碟IO，更可以切換為GPU免費用，有免費/付費方案，除非要跑深度學習訓練模型，不然免費就夠用了。 | [https://colab.research.google.com/notebooks/welcome.ipynb](https://colab.research.google.com/notebooks/welcome.ipynb) |
| Visual Studio Code![](https://i.imgur.com/qC6VbBv.png) | VS Code為微軟開源的編譯器，豐富的插件已經澎湃到幾乎可以開發任何程式語言，實用工具也很多，簡直不輸一線IDE(又免費) | [https://code.visualstudio.com/](https://code.visualstudio.com/) |
| Sublime Text![](https://i.imgur.com/S6nAPBa.png) | 一樣是開源的編譯器，由開源社群共同維護，較常見於開發網頁程式，現在Python也可以用，優點是開啟很快。 | [https://www.sublimetext.com/](https://www.sublimetext.com/) |

-   ANACONDA下載完啟動時所有應用如下:  
    ![](https://i.imgur.com/6SGNLkZ.png)  
    其中Jupyter Notebook、Jupyter Lab、VS CODE跟上述相同，而Spyder也因為可以在側邊觀察目前變數內容(類似R語言的RStudio)故在數據處理情境有其特色。

小結
--

**總之我全都要!**

-   很多初學者會問VS CODE、Pycharm、Jupyter Lab/notebook、Colab到底要用哪一個?
    -   本系列文因為考量跨平台使用及電腦環境，會選擇VS Code + Colab混用。
    -   如果是自己的筆電，請嘗試使用PyCharm + Anaconda，可以學到更多。
    -   未來很可能會各種OS(Windows/MacOS/Linux)多棲，早點習慣不被環境綁住。
-   另外Line也有推出[Line BOT Designer](https://developers.line.biz/en/services/bot-designer/)及 [Flex Message Simulator](https://developers.line.biz/flex-simulator/)，可以方便建立Template message、Flex Message等漂亮的應用介面，在後續文章也會提及，我們下篇見!
