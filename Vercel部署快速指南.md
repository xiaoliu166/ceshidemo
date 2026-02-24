# 🚀 Vercel 部署快速指南

## 当前状态
- ✅ 代码已推送到 GitHub: https://github.com/xiaoliu166/ceshidemo
- ✅ 静态文件已生成（`listing-ai-demo/out/`）
- ✅ Vercel 配置已更新
- ⚠️ Vercel 部署遇到 404 错误

## 404 问题原因
1. **Root Directory 未设置**：Vercel 默认从仓库根目录构建，但项目在 `listing-ai-demo/` 子目录
2. **Output Directory 配置错误**：之前配置的是 `.next`，但实际输出是 `out/`

## 🎯 立即解决方案

### 方案 1：通过 Vercel 控制台修改（推荐）

1. 登录 Vercel: https://vercel.com
2. 找到你的项目
3. 点击 "Settings"
4. 找到 "General" → "Root Directory"
5. **设置为：`listing-ai-demo`**
6. 点击 "Save"
7. 返回 "Deployments"
8. 点击右上角 "Redeploy"
9. 等待重新部署完成

### 方案 2：删除项目重新导入

如果方案 1 不行：

1. 在 Vercel 删除当前项目
2. 点击 "Add New" → "Project"
3. 选择 GitHub 仓库：`xiaoliu166/ceshidemo`
4. **重要配置**：
   - Framework Preset: Next.js
   - Root Directory: `listing-ai-demo` ← 必须设置！
   - Build Command: `npm run build`（自动）
   - Output Directory: `out`（自动）
   - Install Command: `npm install`（自动）
5. 点击 "Deploy"
6. 等待 2-3 分钟

## 📋 Vercel 项目配置

### 正确的配置
```
Root Directory: listing-ai-demo
Framework: Next.js
Build Command: npm run build
Output Directory: out
Install Command: npm install
Node.js Version: 18.x 或 20.x
```

### 环境变量
目前不需要任何环境变量。

## 🔍 验证部署

### 检查构建日志
在 Vercel 部署页面查看日志，应该看到：
```
✓ Collecting page data
✓ Generating static pages
✓ Finalizing page optimization
✓ Export successful
```

### 访问测试
1. 部署成功后会得到一个 URL：`https://你的项目名.vercel.app`
2. 访问应该看到登录页面
3. 按 F12 查看 Console，不应该有错误

## 🛠️ 如果还是 404

### 1. 检查 Root Directory
最常见的问题！确保设置为 `listing-ai-demo`。

### 2. 检查构建日志
查看是否有构建错误：
- 依赖安装失败
- TypeScript 编译错误
- 构建命令失败

### 3. 清除缓存重新部署
```
Vercel 控制台 → Deployments → 
点击最新部署 → 右上角三个点 → Redeploy
```

### 4. 检查 vercel.json
项目中有两个 vercel.json：
- 根目录：`vercel.json`（用于从根目录部署）
- 子目录：`listing-ai-demo/vercel.json`（用于从子目录部署）

如果设置了 Root Directory 为 `listing-ai-demo`，Vercel 会使用子目录的配置。

## 📁 项目结构

```
ceshidemo/                    ← GitHub 仓库根目录
├── vercel.json               ← 根目录配置
├── listing-ai-demo/          ← 实际项目目录（设置为 Root Directory）
│   ├── vercel.json           ← 项目配置
│   ├── package.json
│   ├── next.config.ts
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── out/                  ← 构建输出
│       └── index.html
└── 其他文档...
```

## 🎉 部署成功标志

1. Vercel 显示绿色的 "Ready"
2. 访问 URL 看到登录页面
3. 可以正常登录和使用
4. 没有 404 或其他错误

## 🔄 自动部署

配置完成后，每次推送代码到 GitHub，Vercel 会自动：
1. 检测到代码变更
2. 自动构建
3. 自动部署
4. 更新生产环境

## 🌐 自定义域名

部署成功后可以绑定自定义域名：

1. Vercel 项目 → Settings → Domains
2. 添加你的域名
3. 按提示配置 DNS：
   ```
   类型: CNAME
   名称: www
   值: cname.vercel-dns.com
   ```
4. 等待 DNS 生效（5-10 分钟）

## 📊 部署信息

- GitHub 仓库：https://github.com/xiaoliu166/ceshidemo
- 项目目录：listing-ai-demo
- 构建输出：listing-ai-demo/out
- 框架：Next.js 14 (Static Export)
- Node.js：18.x 或 20.x

## 🆘 常见错误

### Error: Cannot find module
**原因**：依赖未安装
**解决**：检查 package.json，确保所有依赖都列出

### Error: Build failed
**原因**：TypeScript 或构建错误
**解决**：本地运行 `npm run build` 检查错误

### 404 on all pages
**原因**：Root Directory 未设置
**解决**：设置 Root Directory 为 `listing-ai-demo`

### Blank page
**原因**：JavaScript 加载失败
**解决**：检查浏览器 Console 的错误信息

## 📚 相关文档

- Vercel 部署文档：https://vercel.com/docs
- Next.js 静态导出：https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- 完整部署指南：`9.部署指南.md`

## 🎯 快速命令

### 本地测试构建
```bash
cd listing-ai-demo
npm run build
```

### 本地预览构建结果
```bash
cd listing-ai-demo
npx serve out
```

访问 http://localhost:3000 查看效果。

## ✅ 部署检查清单

部署前：
- [ ] 代码已推送到 GitHub
- [ ] 本地 `npm run build` 成功
- [ ] `listing-ai-demo/out/` 目录存在
- [ ] `listing-ai-demo/out/index.html` 存在

Vercel 配置：
- [ ] Root Directory 设置为 `listing-ai-demo`
- [ ] Framework 选择 Next.js
- [ ] Build Command 是 `npm run build`
- [ ] Output Directory 是 `out`

部署后：
- [ ] 构建日志显示成功
- [ ] 访问 URL 看到登录页
- [ ] 可以正常登录
- [ ] 所有页面都能访问
- [ ] 浏览器 Console 无错误

全部打勾就说明部署成功了！🎉
