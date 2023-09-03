---
title: Selenium升級4.x版修正筆記
slug: Selenium升級4.x版修正筆記
date: 2023-09-03T10:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [Selenium, Python]
---

# Selenium升級4.x版修正筆記
- Selenium 是一個自動化測試框架，專門用於測試 Web 應用程式。作為一位經常需要隨著套件更新來調整教學內容的講師。將針對最近升級至 4.x 版本的 Selenium 進行比較，以及如何解決版本更新的程式碼問題。

## 預期 Selenium 版本更新會遇到的狀況
在過去，我預期會遇到以下幾種情況：
- 需要更新至新版的 webdriver。
- 程式參數更新，需要查看 log 以解決問題。

然而，升級至 Selenium 4.x 後，我發現了一些令人驚喜的改變。
## 1. webdriver管理更聰明了
### 舊版流程
在 Selenium 4.x 版本之前，安裝 Selenium 是一件相對繁瑣的事情。你需要：
1. 用 `pip install` 安裝 Selenium 主要套件。
    ```
    pip install selenium
    ```
2. 然後，你還需要手動[下載](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/)與你的 Chrome 版本相對應的 WebDriver。
3. 解壓縮 WebDriver，然後將其放入指定目錄。

### 過渡版本- 需額外的 webdriver_manager
- 在2023年之前的一段時間簡化了上述流程，透過`pip install webdriver_manager`直接安裝好對應的測試瀏覽器，不用找對應的瀏覽器與版本，但需要引入webdriver_manager套件。
    ```
    pip install webdriver_manager
    ```
- 然後，使用webdriver_manager的範例如下:
    ```python
    from selenium import webdriver
    from webdriver_manager.chrome import ChromeDriverManager

    options = webdriver.ChromeOptions()
    # options.add_argument('--headless')

    wd = webdriver.Chrome(ChromeDriverManager().install(), options=options)
    wd.get("https://www.google.com")
    wd.save_screenshot("google_homepage.png")
    wd.quit()

    ```

### 新版流程
- 現在，在 Selenium 4.x 版本，你只需執行一個指令即可：

    ```
    pip install selenium
    ```
- 這個改變意味著，你不再需要手動去管理 WebDriver，Selenium 會為你處理一切。


## 2. selenium.webdriver.Chrome()`參數簡化
### 舊版用法
- 在舊版中，初始化 Chrome WebDriver 的代碼通常會看起來像這樣：

    ```python
    from selenium import webdriver

    options = webdriver.ChromeOptions()
    options.add_argument('--headless')

    wd = webdriver.Chrome('path/to/chromedriver', chrome_options=options)
    ```

### 新版用法
- 在新版中，由於 WebDriver 已經被整合，你可以簡單地這樣做：

    ```python
    from selenium import webdriver

    options = webdriver.ChromeOptions()
    options.add_argument('--headless')

    wd = webdriver.Chrome(options=options)
    ```

##  Selenium 搜尋 PTT 指定列表範例
如你所見，新版省去了指定 chromedriver 路徑的需求，使得代碼更為簡潔，最後分享一個這學期調整的selenium範例:

```python
from selenium import webdriver
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup


def make_webdriver() -> Chrome:
  options = create_options()
  driver = Chrome(options=options) #簡化參數
  return driver


def create_options() -> Options:
  options = Options()
  options.add_argument("--headless")
  options.add_argument('--no-sandbox')
  options.add_argument('--disable-dev-shm-usage')
  options.add_argument("--start-maximized")
  return options


def get_ptt_board_list(board) -> list:
  url = f"https://www.ptt.cc/bbs/{board}/index.html"
  wd = make_webdriver()
  wd.get(url=url)
  soup = BeautifulSoup(wd.page_source,"html.parser")
  links = soup.select('div.title > a')
  res = [{
      'title': link.get_text(),
      'href': f'https://www.ptt.cc{link.get("href")}'
  } for link in links if '公告' not in link.get_text() ]
  wd.quit()
  return res

if __name__ == '__main__':
  res = get_ptt_board_list('movie')
  print(res)

```


## 小結
Selenium 4.x 版本帶來了許多便利性的提升，尤其是在 WebDriver 管理和參數簡化方面。這對於減少教學備課的負擔以及提高自動化測試的效率都有很大的幫助。

我個人非常推薦升級至這個版本，以便能夠利用這些新的特性和優化。
