#!/bin/bash

echo "🚀 开始构建静态文件..."
npm run build

echo "📦 打包 out 目录..."
cd out
zip -r ../edgeone-deploy.zip .
cd ..

echo "✅ 部署包已生成: edgeone-deploy.zip"
echo ""
echo "📋 接下来的步骤："
echo "1. 登录腾讯云 EdgeOne 控制台"
echo "2. 上传 edgeone-deploy.zip"
echo "3. 解压到站点根目录"
echo "4. 确保 index.html 在根目录"
