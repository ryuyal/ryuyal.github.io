---
title: 网站构建说明
---

# 网站构建说明

本网站使用 [Material for MkDocs](https://github.com/squidfunk/mkdocs-material) 将 `Markdown文件` 渲染为 `HTML网页` 并使用 `GitHub Pages` 进行发布

## MkDocs

 <details><summary>MkDocs 简介</summary>

[MkDocs](https://www.mkdocs.org/) 是一个基于 Python 的静态网站生成器，用于创建漂亮的文档网站。它使用 `Markdown` 语法编写文档，并提供了一些主题和插件来帮助用户创建具有吸引力和易于导航的文档网站。MkDocs 支持多种主题和插件，可以为文档网站添加各种功能，如搜索、导航、代码高亮等。MkDocs 还提供了一个开发服务器，可以在本地预览文档网站，并将其构建为静态 HTML 文件以供部署到 Web 服务器上。

</details>

### 安装MkDocs

- 安装 [Python](https://www.python.org/downloads/)
- 使用 pip 工具来安装 MkDocs。打开命令提示符窗口（按下 Win+R 键，输入 "cmd"，然后按下 Enter 键），并输入以下命令：
    ```
    pip install mkdocs
    ```
- 验证 MkDocs 是否安装成功：
    ```
    mkdocs --version
    ```
- 创建文档网站。切换到想要创建文档网站的目录，输入：
    ```
    mkdocs new ryuyal.github.io
    ```
将在当前目录下创建名为 ryuyal.github.io 的新目录，其中包含默认的 MkDocs 配置文件 mkdocs.yml 和样例文档 docs/index.md
- 可以选择用 VSCode 打开 mkdocs-site
- 在 terminal 中切换到 mkdocs-site 目录下，执行：
```
mkdocs serve
```
将启动开发服务器并在默认端口 8000 上启动 MkDocs 站点。在浏览器中打开 [http://127.0.0.1:8000](http://127.0.0.1:8000)，即可以看到 MkDocs 站点的主页。

## Material for MkDocs

<details> <summary>Material for MkDocs 简介</summary>

[Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) 是 MkDocs 的一种主题，它基于 [Google Material Design Guidelines](https://m2.material.io/design/guidelines-overview)，提供了一个现代、响应式和直观的用户界面，可以帮助用户创建漂亮的文档网站。Material for MkDocs 风格适用于各种类型的文档，如技术文档、API 文档、用户手册等。它提供了许多功能，如搜索框、侧边栏导航、可折叠的文本块、代码高亮等，可以使用户更轻松地浏览和理解文档。此外，Material for MkDocs 风格还具有响应式设计，可以自适应不同的设备和屏幕大小，从而提供最佳的用户体验。

</details>

### 安装 Material for MkDocs 主题：

- 安装 Material for MkDocs 主题：
```
pip install mkdocs-material
```
- 配置主题，在MkDocs站点目录中，打开 mkdocs.yml 配置文件中，设置：
```
theme:
    name: material
```
- 预览主题，保存以上配置更改并重新启动开发服务器。在命令提示符窗口，输入：
```
mkdocs serve
```
在浏览器中打开 [http://127.0.0.1:8000](http://127.0.0.1:8000)，将看到 MkDocs 站点使用 Material for MkDocs 主题呈现的主页。
具体的相关配置可以查看[官方文档](https://squidfunk.github.io/mkdocs-material/setup/)。

### 本网站的配置

**提供配置参考**：
<details> <summary>mkdocs.yml</summary>

```
# [Info]
site_name: RyuYal's Learning Journey # 左上角标题
site_url: https://ryuyal.github.io
site_author: RyuYal
site_description: RyuYal's Learning Journey

# [Navigtion]
nav:
  - CS学习记录: #横向导航栏
    - CS/index.md 
    - Linux:
      - Linux讲座: CS/Linux/linux.md
      - 命令行入门精简版: CS/Linux/commands-concise.md
    
  - 英语:
    - ENGLISH/index.md
  
  - 西班牙语:
    - SPANISH/index.md

  - 兴趣爱好:
    - HOBBY/index.md
    - 网球: 
      - 网球规则: HOBBY/Tennis/tennis-rules.md
      - WTA:
        - HOBBY/Tennis/wta.md
        - 莱巴金娜: HOBBY/Tennis/wta/rybakina.md
      - ATP:
        - HOBBY/Tennis/atp.md
        - 三巨头: HOBBY/Tennis/atp/bigthree.md
      - 趣味小知识: HOBBY/Tennis/funny.md
    - 足球:
      - 足球规则: HOBBY/Soccer/soccer-rules.md

  - 关于我:
    - ME/index.md
    - 个人履历: ME/cv-full.md
    # - 支持作者: ME/support.md

  - 网站:
    - WEBSITE/index.md # 访客打开网站第一个看到的是 docs/index.md（会报错 The following pages exist in the docs directory, but are not included in the "nav" configuration: index.md 不要紧）  如果访客之后想要重新看到这个界面  可以在 docs/WEBSITE/index.md 找到
    - 网站构建: WEBSITE/build.md
    # - 文章编写帮助: WEBSITE/help.md
    # - 测试文档: WEBSITE/test.md

# [UI]
## [top]
theme:
  name: material
  palette:
    - scheme: default # 日间模式
      primary: indigo # 上方的
      accent: orange # 链接等可交互元件的高亮色
      toggle:
        icon: material/weather-night # 图标
        name: 切换至夜间模式 # 鼠标悬浮提示
    - scheme: slate # 夜间模式
      primary: indigo
      accent: orange
      toggle:
        icon: material/weather-sunny
        name: 切换至日间模式
  features:
    - navigation.tabs # 使用Tab来进行分类（导航栏）
    - navigation.tabs.sticky # 使用Tab来进行分类，并且导航栏固定
    - navigation.top # 返回顶部的按钮 在上滑时出现
    - navigation.indexes # Tab会有一个index.md 而不是在打开Tab时打开第一篇文章
    - navigation.expand # 打开Tab时左侧目录全部展开
    - search.suggest # 搜索输入一些字母时推荐补全整个单词
    - search.highlight # 搜索出的文章关键词加入高亮
    - content.code.copy # 可以通过按钮复制代码
    - content.action.edit # 点击按钮跳转到编辑页面  需要结合 edit_uri 一起使用
  language: zh # 一些提示性的文字会变成中文
  icon:
    repo: fontawesome/brands/github
edit_uri: edit/main/docs # 编辑按钮跳转的链接
## [top-right corner]
repo_url: https://github.com/ryuyal/ryuyal.github.io # 右上角点击跳转的链接
repo_name: ryuyal.github.io # 右上角的名字
## [bottom-left corner]
copyright: RyuYal CC-BY-4.0 # 左下角的版权声明
## [bottom-right corner]
extra:
  social: # icons
    - icon: fontawesome/brands/github
      link: https://github.com/ryuyal
      name: GitHub | RyuYal

# [Extensions]
plugins:
  - search: # 现在还不支持中文搜索 支持之后可以设置语言
    # insider已经支持中文的分词搜索了 https://squidfunk.github.io/mkdocs-material/blog/2022/chinese-search-support/
      lang:
        - en
        - ja
  - tags # 给单篇文章添加标签 https://squidfunk.github.io/mkdocs-material/setup/setting-up-tags/?h=tags
markdown_extensions:
  - pymdownx.arithmatex: # latex支持
      generic: true
  - attr_list # 给图片后面添加{width="300"}设置大小
  - toc:
      permalink: true # 固定标题位置为当前位置
  - pymdownx.highlight: # 代码块高亮
      # linenums: true # 显示行号
      # auto_title: true # 显示编程语言名称
  - pymdownx.superfences # 代码块高亮插件
  - meta # 支持Markdown文件上方自定义标题标签等
  - admonition # https://squidfunk.github.io/mkdocs-material/reference/admonitions/#inline-blocks
  - pymdownx.details # admonition需要

extra_javascript:
  # latex支持
  # check https://squidfunk.github.io/mkdocs-material/reference/mathjax/?h=math for more information
  # notice `curl https://polyfill.io/v3/polyfill.min.js?features=es6 > docs/mkdocs/javascripts/polyfill.min.js && curl https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js > docs/mkdocs/javascripts/tex-mml-chtml.js` not works... because there are other resources that need to load
  - mkdocs/javascripts/mathjax.js
  - https://polyfill.io/v3/polyfill.min.js?features=es6
  - https://unpkg.com/mathjax@3/es5/tex-mml-chtml.js # https://cdn.bytedance.com/?query=mathjax&version=3.2.0
extra_css:
  - mkdocs/css/no-footer.css # 不使用底部的翻页
  - mkdocs/css/unordered-list-symbols.css # multiplt unordered list symbols
```

</details>

## 部署到 GitHub Pages

### 添加 GitHub Workflow

在本地 MkDocs 站点目录下：
```
mkdir .github
cd .github
mkdir workflows
cd workflows
vim PublishMySite.yml
```
PublishMySite.yml 中的内容可以参考：
<details> <summary>PublishMySite.yml</summary>
```
name: publish site
on: # 在什么时候触发工作流
  push: # 在从本地main分支被push到GitHub仓库时
    branches:
      - main
  pull_request: # 在main分支合并别人提的pr时
    branches:
      - main
jobs: # 工作流的具体内容
  deploy:
    runs-on: ubuntu-latest # 创建一个新的云端虚拟机 使用最新Ubuntu系统
    steps:
      - uses: actions/checkout@v2 # 先checkout到main分支
      - uses: actions/setup-python@v2 # 再安装Python3和相关环境
        with:
          python-version: 3.x
      - run: pip install mkdocs-material # 使用pip包管理工具安装mkdocs-material
      - run: mkdocs gh-deploy --force # 使用mkdocs-material部署gh-pages分支
```
</details>

### Git 和 GitHub

#### git init

```
git init
git add .
git commit -m "init"
```

#### GitHub 创建新仓库

- 创建名为 `<username>.github.io` 的仓库，例如 `ryuyal.github.io`
- GitHub -> Repository -> Settings -> Actions -> General 设置：
    - Actions permissions: Allow all actions and reusable workflows
    - Workflow permissions: Read and write permissions
    - Save


#### 推送到远端仓库
```
git remote add origin git@github.com:ryuyal/ryuyal.github.io.git 
git branch -M main
git push -u origin main
注意，这里如果出现错误：  ! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'github.com:ryuyal/ryuyal.github.io.git'
这是远程库与本地库不一致造成的，先把远程库同步到本地库：
git pull --rebase origin main
然后再执行：
git push -u origin main
```

**GitHub Repository -> Settings -> Pages -> Branch -> gh-pages -> /(root) -> Save**

