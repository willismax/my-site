---
sidebar_position: 3
---

# 如何使用 GitHub Action 服務將 Docusaurus 自動部屬在 Github Pages
- 如果用官網的 GitHub Actions 部署，會出錯
- 在[此網誌](https://ouch1978.github.io/docs/docusaurus/configuration/deploy-to-github-with-github-action)查到解決方法，仍需要修改。
## 狀況排除
- 遇到了Action權限的問題，查詢[issue](https://github.com/ad-m/github-push-action/issues/96)發現跟該Repo的 `設定>Action` 最下方的權限設定有關，更改為第一項即可。
![](https://hackmd.io/_uploads/SyrVG0xJh.png) 
![](https://hackmd.io/_uploads/BkabGReyn.png)


- 修改成果:
  路徑: `.github/workflows/deploy.yml`
    ```yaml
    name: Deploy to GitHub Pages

    on:
    push:
        branches:
        - main
        # Review gh actions docs if you want to further define triggers, paths, etc
        # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

    jobs:
    deploy:
        name: Deploy to GitHub Pages
        runs-on: ubuntu-latest
        steps:
        - uses: actions/checkout@v2
        - uses: actions/setup-node@v3
            with:
            node-version: 18.x
            cache: yarn
            cache-dependency-path: package-lock.json

        - name: Install dependencies
            run: yarn install --frozen-lockfile
        - name: Build website
            run: yarn build

        # Popular action to deploy to GitHub Pages:
        # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
        - name: Deploy to GitHub Pages
            uses: peaceiris/actions-gh-pages@v3
            with:
            github_token: ${{ secrets.GITHUB_TOKEN }}
            # Build output to publish to the `gh-pages` branch:
            publish_dir: ./build
            # The following lines assign commit authorship to the official
            # GH-Actions bot for deploys to `gh-pages` branch:
            # https://github.com/actions/checkout/issues/13#issuecomment-724415212
            # The GH actions bot is used by default if you didn't specify the two fields.
            # You can swap them out with your own user credentials.
            user_name: github-actions[bot]
            user_email: 41898282+github-actions[bot]@users.noreply.github.com
    ```