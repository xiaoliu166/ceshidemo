'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Plus,
  FileText,
  Image as ImageIcon,
  Sparkles,
  ArrowLeft,
  CheckCircle2,
  Clock,
  Download
} from 'lucide-react';
import { MOCK_LISTING, MOCK_IMAGE_BRIEFS } from '@/lib/mock-data';

export function ListingPage() {
  const [view, setView] = useState<'list' | 'new' | 'result'>('list');
  const [selectedAnalysis, setSelectedAnalysis] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [creationMode, setCreationMode] = useState<'based' | 'independent'>('based');

  const analysisOptions = [
    { id: '1', name: '咖啡研磨机', keyword: 'Coffee Grinder', date: '2024-02-20', status: 'completed' },
    { id: '2', name: '吸尘器', keyword: 'Cordless Vacuum', date: '2024-02-21', status: 'completed' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setView('result');
    }, 2000);
  };

  // Listing 列表视图
  if (view === 'list') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Listing</h1>
            <p className="text-gray-600 text-lg">管理和生成产品 Listing 文案</p>
          </div>
          <Button size="lg" onClick={() => setView('new')} className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600">
            <Plus size={20} className="mr-2" />
            新建 Listing
          </Button>
        </div>

        {/* Listing 历史 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 1, name: '咖啡研磨机 Listing', keyword: 'Coffee Grinder', date: '2024-02-20', status: 'completed' },
            { id: 2, name: '吸尘器 Listing', keyword: 'Cordless Vacuum', date: '2024-02-21', status: 'completed' },
            { id: 3, name: '充电宝 Listing', keyword: 'Power Bank', date: '2024-02-23', status: 'draft' },
          ].map((item) => (
            <Card 
              key={item.id}
              className="p-6 hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer group border-2 hover:border-purple-300"
              onClick={() => item.status === 'completed' && setView('result')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
                  <FileText size={24} />
                </div>
                <Badge className={item.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}>
                  {item.status === 'completed' ? '已完成' : '草稿'}
                </Badge>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-purple-600 transition-colors">
                {item.name}
              </h3>
              <div className="text-sm text-gray-600 mb-4">{item.keyword}</div>
              <div className="text-xs text-gray-400">{item.date}</div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  // 新建 Listing 视图
  if (view === 'new') {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setView('list')}>
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">新建 Listing</h1>
            <p className="text-gray-600 mt-1">选择创建方式，快速生成优化的 Listing 文案</p>
          </div>
        </div>

        {/* 创建模式选择 */}
        <Card className="p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">选择创建方式</h2>
          <div className="grid grid-cols-2 gap-4">
            <div
              className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                creationMode === 'based'
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setCreationMode('based')}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  creationMode === 'based'
                    ? 'border-purple-600 bg-purple-600'
                    : 'border-gray-300'
                }`}>
                  {creationMode === 'based' && (
                    <CheckCircle2 size={14} className="text-white" />
                  )}
                </div>
                <Sparkles size={20} className={creationMode === 'based' ? 'text-purple-600' : 'text-gray-400'} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">基于竞品分析</h3>
              <p className="text-sm text-gray-600">
                选择已完成的竞品分析报告，AI 将基于分析结果生成更精准的 Listing
              </p>
            </div>

            <div
              className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                creationMode === 'independent'
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setCreationMode('independent')}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                  creationMode === 'independent'
                    ? 'border-purple-600 bg-purple-600'
                    : 'border-gray-300'
                }`}>
                  {creationMode === 'independent' && (
                    <CheckCircle2 size={14} className="text-white" />
                  )}
                </div>
                <FileText size={20} className={creationMode === 'independent' ? 'text-purple-600' : 'text-gray-400'} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">独立创建</h3>
              <p className="text-sm text-gray-600">
                直接输入产品信息，AI 将快速生成 Listing 文案，无需竞品分析
              </p>
            </div>
          </div>
        </Card>

        {/* 基于竞品分析 */}
        {creationMode === 'based' && (
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">选择竞品分析任务</h2>
            <div className="space-y-3">
              {analysisOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedAnalysis === option.id
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setSelectedAnalysis(option.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        selectedAnalysis === option.id
                          ? 'border-purple-600 bg-purple-600'
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
        )}

        {/* 独立创建 */}
        {creationMode === 'independent' && (
          <Card className="p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">输入产品信息</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  产品名称 <span className="text-red-500">*</span>
                </label>
                <Input placeholder="例如: 手动咖啡研磨机" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    目标市场
                  </label>
                  <Input placeholder="例如: US" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    产品类目
                  </label>
                  <Input placeholder="例如: Home & Kitchen" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  产品描述
                </label>
                <Textarea 
                  placeholder="简要描述产品的核心特点、功能和优势"
                  rows={4}
                />
              </div>
            </div>
          </Card>
        )}

        {(selectedAnalysis || creationMode === 'independent') && (
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
                    className="p-4 border-2 border-purple-200 bg-purple-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={20} className="text-purple-600" />
                      <Icon size={20} className="text-gray-600" />
                      <span className="font-medium text-gray-900">{item.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        )}

        <Button
          className="w-full"
          size="lg"
          disabled={(creationMode === 'based' && !selectedAnalysis) || isGenerating}
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

  // Listing 生成结果视图
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setView('list')}>
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Listing 生成结果</h1>
            <p className="text-gray-600 mt-1">基于竞品分析：咖啡研磨机</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download size={16} className="mr-2" />
            导出
          </Button>
          <Button onClick={() => setView('list')}>完成</Button>
        </div>
      </div>

      {/* 主图 */}
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

      {/* 标题 */}
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

      {/* 五点描述 */}
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
                <div className="flex items-center justify-center w-6 h-6 bg-purple-600 text-white rounded-full text-sm font-bold flex-shrink-0">
                  {idx + 1}
                </div>
                <p className="text-gray-900 flex-1">{bullet}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* 品牌故事 */}
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

      {/* 图片需求 */}
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
