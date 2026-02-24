'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft,
  FileText,
  Image as ImageIcon,
  Sparkles,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { MOCK_LISTING, MOCK_IMAGE_BRIEFS } from '@/lib/mock-data';

export function NewListingPage() {
  const { setPage } = useAppStore();
  const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const analysisOptions = [
    {
      id: '1',
      name: '咖啡研磨机',
      keyword: 'Coffee Grinder',
      date: '2024-02-20',
      status: 'completed',
    },
    {
      id: '2',
      name: '吸尘器',
      keyword: 'Cordless Vacuum',
      date: '2024-02-21',
      status: 'completed',
    },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setShowResults(true);
    }, 2000);
  };

  if (showResults) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => setShowResults(false)}>
              <ArrowLeft size={20} />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Listing 生成结果</h1>
              <p className="text-gray-600 mt-1">基于竞品分析：咖啡研磨机</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">导出</Button>
            <Button onClick={() => setPage('dashboard')}>完成</Button>
          </div>
        </div>

        {/* Main Image */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
              <ImageIcon size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">主图</h2>
          </div>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <div className="max-w-md mx-auto">
              <div className="aspect-square bg-white rounded-lg shadow-lg mb-4 flex items-center justify-center">
                <ImageIcon size={64} className="text-gray-300" />
              </div>
              <p className="text-sm text-gray-600">
                展示产品整体外观，突出便携性和质感。45度角摆放，白色背景，展示折叠手柄状态。
              </p>
            </div>
          </div>
        </Card>

        {/* Title */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
              <FileText size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">标题</h2>
            <Badge className="bg-green-100 text-green-700">
              <CheckCircle2 size={14} className="mr-1" />
              合规评分: {(MOCK_LISTING.complianceScore * 100).toFixed(0)}%
            </Badge>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-900 font-medium">{MOCK_LISTING.title}</p>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <span>{MOCK_LISTING.title.length} 字符</span>
              <span>·</span>
              <span>包含 5 个核心卖点</span>
            </div>
          </div>
        </Card>

        {/* Bullet Points */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
              <FileText size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">五点描述</h2>
          </div>
          <div className="space-y-3">
            {MOCK_LISTING.bullets.map((bullet, idx) => (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-gray-900 flex-1">{bullet}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Brand Story */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
              <Sparkles size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">品牌故事</h2>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-900 leading-relaxed">
              我们的团队由咖啡爱好者和工程师组成，在测试了市面上20多款手动研磨机后，我们发现了一个共同的痛点：
              研磨不均匀导致的"大颗粒"问题。经过18个月的研发，我们采用CNC精密加工的420不锈钢磨芯，
              配合优化的齿轮比设计，终于解决了这个困扰用户多年的问题。每一台研磨机都经过严格的质检，
              确保为您带来完美的研磨体验。
            </p>
          </div>
        </Card>

        {/* Image Briefs */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
              <ImageIcon size={20} />
            </div>
            <h2 className="text-xl font-bold text-gray-900">详情页图片需求</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MOCK_IMAGE_BRIEFS.map((brief) => (
              <div key={brief.id} className="p-4 border-2 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline">{brief.position}</Badge>
                  <ImageIcon size={20} className="text-gray-400" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{brief.objective}</h3>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-gray-600">文案：</span>
                    <span className="text-gray-900">{brief.copyText.zh}</span>
                  </div>
                  <div className="text-gray-600">
                    构图要点：
                    <ul className="list-disc list-inside mt-1 space-y-1">
                      {brief.composition.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-xs text-blue-600 mt-2">
                    {brief.evidenceSource}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => setPage('dashboard')}>
          <ArrowLeft size={20} />
        </Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">新建 Listing</h1>
          <p className="text-gray-600 mt-1">选择已完成的竞品分析，快速生成优化的Listing文案</p>
        </div>
      </div>

      {/* Select Analysis */}
      <Card className="p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">选择竞品分析任务</h2>
        <div className="space-y-3">
          {analysisOptions.map((option) => (
            <div
              key={option.id}
              className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                selectedAnalysis === option.id
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedAnalysis(option.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedAnalysis === option.id
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnalysis === option.id && (
                      <CheckCircle2 size={14} className="text-white" />
                    )}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{option.name}</div>
                    <div className="text-sm text-gray-600">{option.keyword}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className="bg-green-100 text-green-700">已完成</Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>{option.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Generation Options */}
      {selectedAnalysis && (
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">生成内容</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: ImageIcon, label: '主图', enabled: true },
              { icon: FileText, label: '标题', enabled: true },
              { icon: FileText, label: '五点描述', enabled: true },
              { icon: Sparkles, label: '品牌故事', enabled: true },
              { icon: ImageIcon, label: '详情页', enabled: true },
              { icon: ImageIcon, label: '图片需求', enabled: true },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-4 border-2 rounded-lg ${
                    item.enabled
                      ? 'border-blue-200 bg-blue-50'
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    <Icon size={20} className="text-gray-600" />
                    <span className="font-medium text-gray-900">{item.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* Generate Button */}
      <Button
        className="w-full"
        size="lg"
        disabled={!selectedAnalysis || isGenerating}
        onClick={handleGenerate}
      >
        {isGenerating ? (
          <>
            <Sparkles size={20} className="mr-2 animate-spin" />
            AI 生成中...
          </>
        ) : (
          <>
            <Sparkles size={20} className="mr-2" />
            生成 Listing
          </>
        )}
      </Button>
    </div>
  );
}
