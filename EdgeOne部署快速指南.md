# 🚀 EdgeOne 部署快速指南

## 当前状态
- ✅ 代码已构建完成
- ✅ 静态文件已生成（`listing-ai-demo/out/`）
- ✅ 部署包已准备好（`listing-ai-demo/edgeone-deploy.zip`，439KB）
- ✅ 代码已推送到 GitHub
- ⚠️ EdgeOne 部署遇到 404 错误

## 404 问题原因
**index.html 文件不在站点根目录**

EdgeOne 访问你的域名时，会在根目录查找 `index.html`。如果文件在子文件夹里（如 `out/index.html` 或 `listing-ai-demo/out/index.html`），就会返回 404。

## 🎯 立即解决方案

### 第 1 步：获取部署包
部署包位置：`listing-ai-demo/edgeone-deploy.zip`（439KB）

这个 zip 文件已经正确打包，解压后 `index.html` 会在根目录。

### 第 2 步：上传到 EdgeOne

#### 选项 A：控制台上传（推荐）
1. 登录腾讯云 EdgeOne 控制台
2. 进入你的站点
3. 找到"文件管理"或"静态资源托管"
4. **删除所有现有文件**（重要！避免混乱）
5. 上传 `edgeone-deploy.zip`
6. **解压到根目录**（不要创建文件夹）

#### 选项 B：手动上传
1. 在本地解压 `edgeone-deploy.zip`
2. 选择解压后的**所有文件**（不是文件夹）
3. 上传到 EdgeOne 根目录

### 第 3 步：验证
访问你的域名，应该看到登录页面。

## 📁 正确的文件结构

EdgeOne 站点根目录应该是这样：
```
/
├── index.html          ← 必须在这里！
├── _next/
│   └── static/
│       └── ...
├── favicon.ico
├── 404.html
├── file.svg
├── globe.svg
├── next.svg
├── vercel.svg
└── window.svg
```

**不应该是这样：**
```
/
└── out/                ← ❌ 错误！
    └── index.html
```

## 🔍 检查清单

部署后检查：
- [ ] EdgeOne 文件列表中，`index.html` 在根目录
- [ ] EdgeOne 文件列表中，`_next/` 文件夹在根目录
- [ ] 访问域名能看到登录页面
- [ ] 浏览器 F12 Console 没有 404 错误
- [ ] 可以正常登录和使用

## 🛠️ 如果还是 404

### 1. 清除缓存
- EdgeOne 控制台：清除全部缓存
- 浏览器：Ctrl+Shift+R 强制刷新

### 2. 添加路由规则
在 EdgeOne 配置：
```
类型：重写
匹配：/*
目标：/index.html
```

### 3. 检查域名
- 确认域名已绑定
- DNS 解析正确
- 等待 DNS 生效（5-10 分钟）

## 📝 重新生成部署包（如果需要）

```bash
cd listing-ai-demo
npm run build
cd out
zip -r ../edgeone-deploy.zip .
cd ..
```

新的 `edgeone-deploy.zip` 会在 `listing-ai-demo/` 目录。

## 🎉 部署成功标志

能做到这些就说明成功了：
1. 访问域名看到登录页
2. 登录后进入首页
3. 看到"新建竞品分析"和"新建 Listing"按钮
4. 可以访问竞品、Listing、资源、设置页面
5. 页面样式正常，没有错误

## 📚 详细文档

- 完整部署指南：`9.部署指南.md`
- EdgeOne 专项说明：`listing-ai-demo/EDGEONE-部署说明.md`
- 404 问题详解：`listing-ai-demo/EdgeOne-404问题解决.md`

## 🆘 需要帮助

如果问题仍未解决，请提供：
1. EdgeOne 文件列表截图
2. 浏览器 F12 Console 错误信息
3. 访问的完整 URL

这样可以更快定位问题！
