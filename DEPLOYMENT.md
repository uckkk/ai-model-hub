# 部署指南 / Deployment Guide

## 快速部署到 Vercel

### 1. 安装 Vercel CLI
```bash
npm i -g vercel
```

### 2. 登录 Vercel
```bash
vercel login
```

### 3. 部署项目
```bash
cd /Users/stonem2/Documents/AiCode/AIEYE/ai-model-hub
vercel
```

按提示操作：
- Set up and deploy? **Y**
- Which scope? 选择你的账号
- Link to existing project? **N**
- Project name? 使用默认或自定义
- Directory? `./`
- Override settings? **N**

### 4. 配置环境变量（可选）

在 Vercel Dashboard 添加：
- `QWEN_API_KEY`
- `WENXIN_API_KEY`
- `DEEPSEEK_API_KEY`

### 5. 生产部署
```bash
vercel --prod
```

## 自动部署

推送到 GitHub 后，Vercel 会自动部署：
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

在 Vercel Dashboard 连接 GitHub 仓库即可实现自动部署。

## 域名配置

在 Vercel Dashboard > Settings > Domains 添加自定义域名。

## 监控

- Vercel Analytics: 自动启用
- 查看日志: `vercel logs`
- 查看部署: `vercel ls`
