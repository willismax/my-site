---
title: Python 虛擬環境管理 - pipenv 與 venv 比較
slug: Python 虛擬環境管理 - pipenv 與 venv 比較
date: 2023-09-23T10:00
authors: Willis
GA: G-CH7FZ71WRC
tags: [python]
---

# Python 虛擬環境管理: pipenv 與 venv 比較

🐍 Python 是一種非常流行和強大的程式語言，它有許多優秀的套件可以幫助我們完成各種任務，例如資料分析、機器學習、網頁開發等。然而，如果我們同時在不同的專案中使用 Python，我們可能會遇到一些問題，例如：

-   不同的專案可能需要不同的 Python 版本或套件版本，這可能會造成版本衝突和相依性問題。
-   如果我們在全域環境中安裝或移除套件，可能會影響其他專案的運作。
-   如果我們想要部署或分享我們的專案，我們需要記錄和安裝所有需要的套件和版本，這可能會很麻煩和耗時。

為了解決這些問題，我們可以使用虛擬環境管理工具來創建和管理不同的 Python 環境。虛擬環境是一個隔離的 Python 環境，它可以讓我們在不同的專案中使用不同的 Python 版本和套件，而不會互相干擾。這樣，我們就可以更方便和安全地開發和部署我們的 Python 專案。

目前，有許多虛擬環境管理工具可以選擇，例如 virtualenv, conda, pyenv 等。在這篇文章中，我將重點介紹 pipenv 和 venv 這兩種工具，並且比較它們的優缺點。

## pipenv
- pipenv 是目前 Python 官方推薦的套件管理工具，它集成了 `pip` 和 `virtualenv` 的功能，並且改進了它們的一些缺陷 。
- pip 使用 `Pipfile` 和 `Pipfile.lock` 來記錄套件的資訊，而不是使用 requirements.txt。
    - Pipfile.lock 包含了套件的Hash值，可以確保安裝的套件是一致和安全的 。
    - pipenv 可以自動產生和更新 `Pipfile` 和 `Pipfile.lock`，不需要手動維護 。
- 可以區分開發和生產環境的套件，只需要在安裝時加上 --dev 參數即可 。
- 可並行（parallel）同步安裝套件，提升安裝速度。
- pipenv 可以透過 `.env` 自動載入不同環境變數。
- pipenv 的指令比較簡單和直觀，例如 
    - `pipenv install` 如同 `pip install`
    - `pipenv uninstall`
    - `pipenv shell` 如同 `source venv/bin/activate`  進入虛擬環。
    - `pipenv run` 可以執行虛擬環境內容

## venv 
- venv 是 Python 3.3 之後內建的虛擬環境模組，它可以創建一個隔離的 Python 環境，但是不包含任何套件管理功能。
- venv 使用 `python -m venv {虛擬機命名}` 來創建虛擬環境，然後使用 `source venv/bin/activate` 來啟動虛擬環境(Windows 以 `venv/Scripts/activate` 進入)。
- venv 需要配合 `pip` 和 `requirements.txt` 來管理套件，因為venv跟pip是兩回事，這可能會造成版本衝突和相依性問題。

## 比較 pipenv 和 venv 差異
以下用表格比較 pipenv 和 venv 的差異，我用表格的方式來比較它們的特點：

| 特點 | pipenv | venv |
| --- | --- | --- |
| Python 官方推薦 | 是 | 曾經是 |
| 集成 pip 和 virtualenv | 是 | 否 |
| 使用 Pipfile 和 Pipfile.lock | 是 | 否 |
| 自動產生和更新 Pipfile 和 Pipfile.lock | 是 | 否 |
| 包含套件的哈希值 | 是 | 否 |
| 區分開發和生產環境的套件 | 是 | 否 |
| 使用並行同步安裝套件 | 是 | 否 |
| 自動載入不同環境變數 | 是 | 否 |
| 指令簡單和直觀 | 是 | 否 |

從表格中，我們可以看出 pipenv 是一個更先進和完善的虛擬環境管理工具，它可以讓我們更方便和安全地開發 Python 專案。如果你想了解更多關於 pipenv 的資訊，但在基礎Python教學時，我更傾向以venv為主，因為你看到的網路專案大多還是`venv` + `pip install -r requirements.txt` 來示範的。可以參考以下的連結：

-   [Pipenv 官方文件](https://pipenv.pypa.io/en/latest/)
-   [Pipenv 更簡單、更快速的 Python 套件管理工具](https://segmentfault.com/a/1190000015389565)
-   [Pipenv vs Virtualenv vs Conda environment](https://stackoverflow.com/questions/67065725/conda-env-vs-venv-pyenv-virtualenv-etc)

感謝你閱讀這篇文章，如果你有任何問題或建議，歡迎在下方留言。Enjoy Python。再見！
