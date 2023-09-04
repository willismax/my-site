![](https://i.imgur.com/TObAcnW.png)
- 由於 Heroku 給我們這種蹭飯的免費仔 500 mb的免費空間，說真的如果儲存圖片/影音服務太奢侈了，這時運用第三方圖床就很方便，Imgur API 免費用於非商業用途。如果您不打算用它賺錢，或者它是開源的，則您的應用程序可能是免費的。
- 當使用者傳圖片到聊天機器人時，如果我們能把圖片傳到免空圖床，可大量減少伺服器的儲存空間，加上 LINE 本身可以顯示連結圖片內容，創造能提供許多服務的可能性。知名的台灣之光 [HackMD](https://hackmd.io/) 具有貼上圖片就回傳圖床網址+即時預覽的功能，圖床就是 Imgur ，也是幫助鐵人賽邊寫文章的好幫手，本篇就動手試試。
- 一樣貼心的 [Colab 範例支援 ![](https://i.imgur.com/pQnQ4tG.png)](https://colab.research.google.com/drive/1yac6Q4PdSgxii3SqtMarcBnVxu6aZoPl?usp=sharing)


## 1. 申請 Imgur API

### 建立帳戶取得所需Client ID及Client secret
1. 建立 imgur 帳戶，就是一般申請帳號的節奏。
    ![](https://i.imgur.com/IUVJlIp.png)
    
2. 前往[API文件](https://apidocs.imgur.com/?version=latest)閱讀官方資訊是開發者的好習慣!如果英文啃不下去善用翻譯。
    ![](https://i.imgur.com/i5bkQUQ.png)
3. 在 API 文件裡找到[Register your application](https://api.imgur.com/oauth2/addclient)的連結，大膽點下去準備申請 `Client ID` 及 `Client secret` 。
    ![](https://i.imgur.com/tknbdz3.png)
4. 申請 API，本次採用 OAuth2驗證，完成後會取得專屬的 `Client ID` 及 `Client secret`。
    ![](https://i.imgur.com/r4RxYlb.png)
    ![](https://i.imgur.com/Mg6zBsN.png)
5. 日後至 https://imgur.com/account/settings/apps 取用，但 `Client Secret` 如果沒記起來的話，按下 generate new secret 將重新產生 `Client secret`。
    ![](https://i.imgur.com/0pR8xeX.png)

## 2. 使用官方模組 ImgurPython 連線上傳圖片
1. 在官方[API文件](https://apidocs.imgur.com/?version=latest)有[Official Python library](https://github.com/Imgur/imgurpython)的連結，連至 GitHub 可見到包含說明、範例介紹及開源的程式碼。
    ![](https://i.imgur.com/gGnMrGY.png)
    > 官方已表示此 Python 模組 `imgurpython` 不再維護。不過實測仍可使用，後續也會再介紹另外模組。

9. 測試是否可以順利連線，第一組範例只要只要複製程式碼、換上 `Client ID` 及 `Client secret` 即可完成，輸出為近期上傳至 Imgur 圖床的超連結。
    
    ```python
    from imgurpython import ImgurClient

    client_id = 'YOUR CLIENT ID'
    client_secret = 'YOUR CLIENT SECRET'

    client = ImgurClient(client_id, client_secret)

    # Example request
    items = client.gallery()
    for item in items:
        print(item.link)
    ```
    ![](https://i.imgur.com/7zK1YOm.png)
7. 取得 `[Access token]` 以減少輸入 `pin` 碼進行程式操作，[imgurpython](https://github.com/Imgur/imgurpython) 有介紹如何取得，過程全放在文章開頭的 [Colab 範例支援 ![](https://i.imgur.com/pQnQ4tG.png)](https://colab.research.google.com/drive/1yac6Q4PdSgxii3SqtMarcBnVxu6aZoPl?usp=sharing) 您可以自行測試。
    ![](https://i.imgur.com/5OY15vA.png)

9. 上傳圖片測試，這段需要建立一個相簿並取得相簿代碼，請至官網操作:
    - 我們先在網路上任意下載一張圖片，假設就是這張`https://i.imgur.com/qs1mqDf.png` 。
      ![](https://i.imgur.com/qs1mqDf.png)
    - 以`wget`指令並指定檔案名稱，筆記本環境在指令前增加 `!` 魔術指令，您的指令為`!wget -O <檔案名稱> <下載連結>`，範例如下:
      ```python
      !wget -O test.jpg https://i.imgur.com/qs1mqDf.png
      ```

    - 接著至 Imgur 網站的您右上方名子下拉選 "imges"。
      ![](https://i.imgur.com/g05YYsE.png)
    - 選擇相簿或新建相簿:
      ![](https://i.imgur.com/B5HlYoV.png)
    - 在 Edit this album 下拉選單選擇 "Embed Album":
      ![](https://i.imgur.com/kngtt03.png)
    - 看到一串 Embed Code ，其中相簿ID藏在 `data-id = "a/<相簿id>"` 裡，把ID複製下來。 
4. 
      ![](https://i.imgur.com/HsVbhxs.png)
    - 以此程式碼上傳圖片，程式修改自官方的 Example:
        ```python
        #上傳圖片，修改自官方Example
        from imgurpython import ImgurClient
        from datetime import datetime


        def upload(client_data, album , name = 'test-name!' ,title = 'test-title' ):
            config = {
                'album':  album,
                'name': name,
                'title': title,
                'description': f'test-{datetime.now()}'
            }

            print("Uploading image... ")
            image = client_data.upload_from_path('test.jpg', config=config, anon=False)
            print("Done")

            return image


        if __name__ == "__main__":
            client_id ='YOUR CLIENT ID'
            client_secret = 'YOUR CLIENT SECRET'
            access_token = "YOUR ACCESS TOKEN"
            refresh_token = "YOUR REFRESH TOKEN"
            album = "YOUR ALBUM ID"
            local_img_file = "test.jpg"
            
            client = ImgurClient(client_id, client_secret, access_token, refresh_token)
            image = upload(client, local_img_file, album)
            print(f"圖片網址: {image['link']}")
        ```
        ![](https://i.imgur.com/EvlHgSG.png)
    - 整個 image 的資訊為 JSON檔案，可以 `print()` 輸出確認。
    - 確認上傳結果。
      ![](https://i.imgur.com/AkTdX5M.png)


 
      


9. 由於後續找到較單純且符合需求的 `PyImgur` 模組，官方模組 ImgurPython 介紹到此，您可以依自己需求選用。

## 3. 使用 PyImgur 連線上傳圖片

- PyImgur 也是個可以操作 Imgur 的模組，參閱[模組介紹](https://pyimgur.readthedocs.io/en/latest/)，此模組好處是只需要您的`CLIENT_ID`，就可以讓您上傳圖片、取得圖床連結，比起官方建議的 `imgurpython` 簡化許多，符合我們後續只管上傳資料使用，缺點是傳送的結果不會出現在您 Imgur 的 Images 裡面，也不會出現在相簿裡，如果您要做比較具有隱私性的服務建議改回官方模組。
- 安裝 `PyImgur` 模組為熟悉的 `pip install pyimgur` 指令，筆記本環境則在指令前加上 `!` 魔術指令。
    ```python
    $ pip install pyimgur
    ```
- 測試能否讀取圖床圖片，需使用到您的`CLIENT_ID` ，指令參考如下:
    ```python
    #顯示在imgur的圖片
    import pyimgur

    CLIENT_ID = "Your_applications_client_id"
    im = pyimgur.Imgur(CLIENT_ID)
    image = im.get_image('f1WHMuW')

    print(image.title) 
    print(image.link)
    ```
    ![](https://i.imgur.com/6NVAcVk.png)
- 上傳圖片，這裡的圖片採用先前 `!wget` 下載的圖片， Colab 指令為 `!wget -O test.jpg https://i.imgur.com/qs1mqDf.png` ，下載的 `test.jpg` 路徑無須變更，修改模組範例如下:
    ```python
    import pyimgur

    CLIENT_ID = "Your_applications_client_id"
    PATH = "test.jpg" #A Filepath to an image on your computer"
    title = "Uploaded with PyImgur"

    im = pyimgur.Imgur(CLIENT_ID)
    uploaded_image = im.upload_image(PATH, title=title)
    print(uploaded_image.title)
    print(uploaded_image.link)
    print(uploaded_image.type)
    ```
    ![](https://i.imgur.com/haVhnIx.png)
- 就這樣，沒幾行程式碼就上傳完成且取得連結囉，神奇夠用。

## 小結
本篇介紹如何申請 Imgur 權限，用 Python 的 `imgurpython` 及 `PyImgur` 兩個模組將圖片上傳至 imgur 圖床，下篇將結合股市線圖、雲端圖床做成 LINE 聊天機器人功能，作為串接資料視覺化的簡單卻強大的範例，我們下篇見。
