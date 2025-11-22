# GitHub Pages 部署指南

## 方法一：通过GitHub网页界面上传（推荐初学者）

### 步骤1：创建新的GitHub仓库
1. 打开浏览器，访问 [GitHub官网](https://github.com) 并登录您的账号
2. 点击右上角的「+」图标，选择「New repository」
3. 在「Repository name」中输入一个名称（例如："zhiweini"）
4. 可以选择「Public」（公开）或「Private」（私有）
5. 点击「Create repository」按钮

### 步骤2：上传文件
1. 在新创建的仓库页面，您会看到一个「Quick setup」部分
2. 选择「Upload files」选项
3. 拖拽以下文件到上传区域：
   - index.html
   - style.css
   - script.js
   - .gitignore
   - README.md
   - DEPLOYMENT.md（当前文件）
4. 在页面底部的「Commit changes」部分，输入一个提交信息（例如："Add project files"）
5. 点击「Commit changes」按钮

### 步骤3：启用GitHub Pages
1. 在仓库页面，点击顶部的「Settings」选项卡
2. 向下滚动，找到「GitHub Pages」部分
3. 在「Source」下拉菜单中，选择「main」或「master」分支
4. 点击「Save」按钮
5. 稍等片刻，页面会刷新，在「GitHub Pages」部分会显示一个绿色的提示条，包含您的网站URL

## 方法二：使用Git命令行上传

### 步骤1：安装Git
如果您的电脑上没有安装Git，请先下载并安装：
- 访问 [Git官网](https://git-scm.com/downloads)
- 下载适合您操作系统的版本并安装

### 步骤2：配置Git
打开命令行工具（Windows上是PowerShell或命令提示符），执行以下命令：
```bash
git config --global user.name "您的GitHub用户名"
git config --global user.email "您的GitHub邮箱"
```

### 步骤3：初始化Git仓库
在命令行中，导航到您的项目文件夹：
```bash
cd i:/wan/zhiweini
```

初始化Git仓库：
```bash
git init
git add .
git commit -m "Initial commit"
```

### 步骤4：连接到GitHub仓库
在GitHub上创建新仓库后，复制仓库的SSH或HTTPS URL，然后执行：
```bash
git remote add origin https://github.com/您的用户名/仓库名称.git
git branch -M main
git push -u origin main
```

### 步骤5：启用GitHub Pages
按照「方法一」中的「步骤3」操作，启用GitHub Pages。

## 验证部署

1. 部署完成后，访问GitHub提供的URL（格式为：`https://您的用户名.github.io/仓库名称/`）
2. 您应该能看到您的网站正常运行
3. 如果页面未显示或显示不正确，请等待几分钟后刷新页面

## 后续更新

当您需要更新网站内容时，只需要修改相应的文件，然后：

### 通过GitHub网页界面更新
1. 在仓库页面，点击要修改的文件
2. 点击铅笔图标（Edit this file）
3. 修改文件内容
4. 滚动到底部，添加提交信息
5. 点击「Commit changes」

### 通过Git命令行更新
```bash
cd i:/wan/zhiweini
git add .
git commit -m "Update content"
git push origin main
```

更新后，GitHub Pages通常会在几分钟内自动重新部署您的网站。