'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Download, Copy } from 'lucide-react';
import { MOCK_IMAGE_BRIEFS } from '@/lib/mock-data';

export function ImageBriefsPage() {
  const getPositionLabel = (position: string) => {
    const labels: Record<string, string> = {
      main: '主图',
      sub1: '副图 #1',
      sub2: '副图 #2',
      sub3: '副图 #3',
      sub4: '副图 #4',
      sub5: '副图 #5',
      sub6: '副图 #6',
      aplus: 'A+ 模块',
    };
    return labels[position] || position;
  };

  return (
    <div className="space-y-6">
      {/* 页面头部 */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">图需生成</h1>
          <p className="text-gray-500 mt-1">可直接交付设计师的图片需求说明</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="mr-2" size={16} />
            导出 PDF
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Copy className="mr-2" size={16} />
            全部复制
          </Button>
        </div>
      </div>

      {/* 图需卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MOCK_IMAGE_BRIEFS.map((brief, index) => (
          <Card
            key={brief.id}
            className={`p-6 ${
              index === 0 ? 'border-blue-200 bg-blue-50/20' : ''
            }`}
          >
            {/* 图位标识 */}
            <div className="flex items-center justify-between mb-4">
              <Badge
                className={
                  index === 0
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700'
                }
              >
                {getPositionLabel(brief.position)}
              </Badge>
              <Button variant="ghost" size="sm">
                <Copy size={14} />
              </Button>
            </div>

            {/* 目标说明 */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-700 mb-2">🎯 目标</h3>
              <p className="text-sm text-gray-600">{brief.objective}</p>
            </div>

            {/* 核心文案 */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-700 mb-2">💬 核心文案</h3>
              <div className="space-y-1">
                <p className="text-sm text-gray-900 font-medium">
                  🇨🇳 {brief.copyText.zh}
                </p>
                <p className="text-sm text-gray-600 italic">
                  🇺🇸 {brief.copyText.en}
                </p>
              </div>
            </div>

            {/* 构图建议 */}
            <div className="mb-4">
              <h3 className="text-sm font-bold text-gray-700 mb-2">🎨 构图建议</h3>
              <ul className="space-y-1">
                {brief.composition.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 证据来源 */}
            <div className="pt-4 border-t">
              <p className="text-xs text-gray-400">
                📊 {brief.evidenceSource}
              </p>
            </div>
          </Card>
        ))}
      </div>

      {/* 底部说明 */}
      <Card className="p-6 bg-amber-50 border-amber-200">
        <div className="flex items-start gap-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="font-bold text-gray-900 mb-2">设计师使用指南</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• 每张图需包含：图位、目标、文案、构图建议</li>
              <li>• 核心文案需要在图片中清晰展示</li>
              <li>• 构图建议可根据实际情况调整，但需保持核心目标</li>
              <li>• 证据来源用于理解用户真实需求，不需要在图片中体现</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
