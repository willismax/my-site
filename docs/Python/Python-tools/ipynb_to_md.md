### `ipynb` 檔案轉 DarkDown 

```
%pip install jupytext --upgrade
```

- 一行指令:
```
!jupytext --to markdown Intro_Python-101.ipynb
```
轉檔完要順利部署在 Docusaurus，請記得第一個#endregion前方要空行，如下
```
<!-- #region id="view-in-github" colab_type="text" -->
<a href="https://colab.research.google.com/github/willismax/MediaSystem-Python-Course/blob/main/01.Intro-Python/PythonBasic_2.ipynb" target="_parent"><img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab"/></a>

<!-- #endregion -->
```
