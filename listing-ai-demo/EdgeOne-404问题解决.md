# 🔧 EdgeOne 404 问题完全解决指南

## 问题现象
访问你的 EdgeOne 站点显示：
```
NOT_FOUND (Code: NOT_FOUND)
The page does not exist
```

## 根本原因
**index.html 文件不在站点根目录！**

## 📁 文件结构对比

### ❌ 错误的结构（导致 404）
```
EdgeOne 站点根目录/
├── listing-ai-demo/          ← 多了这层
│   └── out/                  ← 又多了这层
│       ├── index.html        ← index.html 在这里找不到！
│       └── _next/
```

或者：

```
EdgeOne 站点根目录/
└── out/                      ← 多了这层
    ├── index.html            ← index.html 在这里找不到！
    └── _next/
```

### ✅ 正确的结构（能正常访问）
```
EdgeOne 站点根目录/
├── index.html                ← 必须直接在根目录！
├── _next/                    ← 静态资源也在根目录
│   └── static/
├── favicon.ico
├── 404.html
└── ...其他文件
```

## 🎯 解决方案

### 方案 1：使用已准备好的部署包（推荐）

项目中已经生成了正确的部署包：`listing-ai-demo/edgeone-deploy.zip`

**这个 zip 文件的内容结构是正确的**，解压后文件直接在根目录。

#### 操作步骤：
1. 下载 `listing-ai-demo/edgeone-deploy.zip` 到本地
2. 登录腾讯云 EdgeOne 控制台
3. 进入你的站点管理
4. **删除站点上所有现有文件**（重要！）
5. 上传 `edgeone-deploy.zip`
6. **解压到根目录**
   - 不要创建新文件夹
   - 不要保留 zip 文件名作为文件夹
   - 确保解压后 `index.html` 直接在根目录

### 方案 2：手动上传文件

如果 EdgeOne 不支持 zip 上传或解压：

1. 在本地解压 `edgeone-deploy.zip`
2. 你会看到这些文件：
   ```
   解压后的文件夹/
   ├── index.html
   ├── _next/
   ├── favicon.ico
   └── ...
   ```
3. 选择**所有这些文件**（不是文件夹本身）
4. 上传到 EdgeOne 站点根目录

### 方案 3：使用 FTP/SFTP

如果 EdgeOne 提供 FTP 访问：

1. 连接到 EdgeOne FTP
2. 进入站点根目录
3. 上传 `listing-ai-demo/out/` 目录下的所有内容
4. 确保 `index.html` 在根目录

## 🔍 验证部署是否正确

### 在 EdgeOne 控制台检查
查看文件列表，应该看到：
```
✅ /index.html              ← 在根目录
✅ /_next/                  ← 在根目录
✅ /favicon.ico             ← 在根目录
✅ /404.html                ← 在根目录

❌ /out/index.html          ← 如果看到这个，说明错了
❌ /listing-ai-demo/...     ← 如果看到这个，说明错了
```

### 访问测试
1. 打开浏览器访问你的域名
2. 应该看到登录页面（不是 404）
3. 按 F12 打开开发者工具
4. 查看 Console 和 Network 标签
5. 不应该有 404 错误

## 🛠️ 如果还是 404

### 步骤 1：清除缓存
```bash
# EdgeOne 控制台
1. 找到"缓存管理"或"刷新缓存"
2. 清除全部缓存

# 浏览器
按 Ctrl+Shift+R (Windows) 或 Cmd+Shift+R (Mac) 强制刷新
```

### 步骤 2：检查域名配置
1. 确认域名已正确绑定到站点
2. DNS 解析正确指向 EdgeOne
3. 等待 DNS 生效（可能需要几分钟）

### 步骤 3：检查 EdgeOne 配置
在 EdgeOne 添加路由规则：
```
类型：重写
匹配：/*
目标：/index.html
```

这样可以支持单页应用的路由。

## 📊 部署包信息

当前部署包详情：
- 文件名：`edgeone-deploy.zip`
- 大小：439KB
- 位置：`listing-ai-demo/edgeone-deploy.zip`
- 包含文件：
  - index.html（主页）
  - _next/（Next.js 静态资源）
  - 图标和 SVG 文件
  - 404 页面

## 🎬 完整部署流程

```bash
# 1. 确认部署包存在
ls -lh listing-ai-demo/edgeone-deploy.zip

# 2. 如果需要重新生成
cd listing-ai-demo
npm run build
cd out
zip -r ../edgeone-deploy.zip .
cd ..

# 3. 上传到 EdgeOne（通过控制台）
# 4. 解压到根目录
# 5. 访问域名验证
```

## ✅ 成功标志

部署成功后你应该能：
1. 访问域名看到登录页面
2. 输入任意邮箱密码登录
3. 看到首页的快捷操作
4. 点击"新建竞品分析"打开新建页面
5. 点击"新建 Listing"打开新建页面
6. 访问竞品、资源、设置等页面

## 🆘 需要帮助？

如果按照以上步骤还是不行，请检查：
1. EdgeOne 控制台的文件列表截图
2. 浏览器 F12 Console 的错误信息
3. 访问的完整 URL

这样可以更准确地定位问题！
