'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Plus,
  Search,
  Sparkles,
  ArrowLeft,
  Target,
  MessageSquare,
  TrendingUp,
  ChevronDown,
  ChevronRight,
  Star,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { MOCK_COMPETITOR_ANALYSIS } from '@/lib/mock-data';
import { useAppStore } from '@/lib/store';

export function CompetitorsPage() {
  const [view, setView] = useState<'list' | 'new' | 'report'>('list');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const { setPage } = useAppStore();

  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setView('report');
    }, 2000);
  };

  const handleGenerateListing = () => {
    // 跳转到 Listing 页面，并自动选择当前竞品分析
    setPage('listing');
  };

  // 竞品列表视图
  if (view === 'list') {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">竞品</h1>
            <p className="text-gray-600 text-lg">管理竞品数据，进行深度分析</p>
          </div>
          <Button size="lg" onClick={() => setView('new')} className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600">
            <Plus size={20} className="mr-2" />
            新建竞品分析
          </Button>
        </div>

        {/* 竞品分析历史 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { id: 1, name: '咖啡研磨机', keyword: 'Coffee Grinder', date: '2024-02-20', status: 'completed' },
            { id: 2, name: '吸尘器', keyword: 'Cordless Vacuum', date: '2024-02-21', status: 'completed' },
            { id: 3, name: '充电宝', keyword: 'Power Bank', date: '2024-02-23', status: 'draft' },
          ].map((item) => (
            <Card 
              key={item.id}
              className="p-6 hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer group border-2 hover:border-blue-300"
              onClick={() => item.status === 'completed' && setView('report')}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                  <Search size={24} />
                </div>
                <Badge className={item.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}>
                  {item.status === 'completed' ? '已完成' : '草稿'}
                </Badge>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
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

  // 新建竞品分析视图
  if (view === 'new') {
    return (
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setView('list')}>
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">新建竞品分析</h1>
            <p className="text-gray-600 mt-1">输入产品信息，AI 将自动分析竞品卖点和策略</p>
          </div>
        </div>

        <Card className="p-8">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                产品关键词 <span className="text-red-500">*</span>
              </label>
              <Input 
                placeholder="例如: Coffee Grinder, Wireless Earbuds, Yoga Mat" 
                defaultValue="Coffee Grinder"
                className="text-base"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  目标市场 <span className="text-red-500">*</span>
                </label>
                <Input placeholder="例如: US, UK, DE" defaultValue="US" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  产品类目
                </label>
                <Input placeholder="例如: Home & Kitchen" defaultValue="Home & Kitchen" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                补充信息
              </label>
              <Textarea 
                placeholder="可以补充产品特点、目标人群、价格区间等信息"
                rows={4}
                defaultValue="手动咖啡研磨机，便携式设计，适合露营和旅行使用，价格区间 $20-$50"
              />
            </div>

            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
              <AlertCircle size={20} className="text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-900">
                <div className="font-medium mb-1">分析将包括：</div>
                <ul className="list-disc list-inside space-y-1">
                  <li>卖点分类（产品属性、需求层次、KANO模型）</li>
                  <li>卖点表达（FABE法则 + SUCCESs模型）</li>
                  <li>卖点关系（顺序、主次、强弱、图文配合）</li>
                  <li>评论内容（出入点、情绪点、反差点、跳跃点）</li>
                </ul>
              </div>
            </div>

            <Button 
              className="w-full" 
              size="lg"
              onClick={handleAnalyze}
              disabled={isAnalyzing}
            >
              {isAnalyzing ? (
                <>
                  <Sparkles size={20} className="mr-2 animate-spin" />
                  AI 分析中...
                </>
              ) : (
                <>
                  <Search size={20} className="mr-2" />
                  开始分析
                </>
              )}
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  // 竞品分析报告视图
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => setView('list')}>
            <ArrowLeft size={20} />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">竞品分析报告</h1>
            <p className="text-gray-600 mt-1">Coffee Grinder · 美国站 · Home & Kitchen</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={handleGenerateListing}
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
          >
            <Sparkles size={16} className="mr-2" />
            生成 Listing
          </Button>
          <Button variant="outline">导出报告</Button>
        </div>
      </div>

      <Tabs defaultValue="classification" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 h-auto p-1">
          <TabsTrigger value="classification" className="py-3">
            <Target size={16} className="mr-2" />
            卖点分类
          </TabsTrigger>
          <TabsTrigger value="expression" className="py-3">
            <Sparkles size={16} className="mr-2" />
            卖点表达
          </TabsTrigger>
          <TabsTrigger value="relationship" className="py-3">
            <TrendingUp size={16} className="mr-2" />
            卖点关系
          </TabsTrigger>
          <TabsTrigger value="reviews" className="py-3">
            <MessageSquare size={16} className="mr-2" />
            评论内容
          </TabsTrigger>
        </TabsList>

        {/* 卖点分类 */}
        <TabsContent value="classification" className="space-y-6">
          {MOCK_COMPETITOR_ANALYSIS.classification.map((dimension, idx) => (
            <Card key={idx} className="p-6">
              <div 
                className="flex items-center justify-between cursor-pointer mb-4"
                onClick={() => toggleSection(`class-${idx}`)}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Target size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{dimension.dimension}</h3>
                    <p className="text-sm text-gray-600">{dimension.categories.length} 个分类</p>
                  </div>
                </div>
                {expandedSections[`class-${idx}`] ? <ChevronDown /> : <ChevronRight />}
              </div>

              {expandedSections[`class-${idx}`] && (
                <div className="space-y-4 mt-4">
                  {dimension.categories.map((cat, catIdx) => (
                    <div key={catIdx} className="border-l-4 border-blue-200 pl-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">{cat.name}</h4>
                          <p className="text-sm text-gray-600 mt-1">{cat.description}</p>
                        </div>
                        <Badge variant="secondary">{cat.sellingPoints.length} 个卖点</Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {cat.sellingPoints.map((sp, spIdx) => (
                          <Badge key={spIdx} variant="outline" className="text-sm">
                            {sp}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </TabsContent>

        {/* 卖点表达 */}
        <TabsContent value="expression" className="space-y-6">
          {MOCK_COMPETITOR_ANALYSIS.expression.map((point, idx) => (
            <Card key={idx} className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-purple-50 text-purple-600 rounded-lg">
                  <Sparkles size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{point.sellingPoint}</h3>
                  
                  {/* FABE */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-blue-100 text-blue-700">Feature</Badge>
                        <span className="text-sm text-gray-600">产品属性</span>
                      </div>
                      <p className="text-sm">{point.fabe.feature}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-100 text-green-700">Advantage</Badge>
                        <span className="text-sm text-gray-600">比别人强</span>
                      </div>
                      <p className="text-sm">{point.fabe.advantage}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-orange-100 text-orange-700">Benefit</Badge>
                        <span className="text-sm text-gray-600">用户好处</span>
                      </div>
                      <p className="text-sm">{point.fabe.benefit}</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-purple-100 text-purple-700">Evidence</Badge>
                        <span className="text-sm text-gray-600">证据背书</span>
                      </div>
                      <p className="text-sm">{point.fabe.evidence}</p>
                    </div>
                  </div>

                  {/* SUCCESs */}
                  <div className="border-t pt-4">
                    <h4 className="font-bold text-gray-900 mb-3">表达亮点 (SUCCESs)</h4>
                    <div className="flex flex-wrap gap-2">
                      {point.success.map((item, i) => (
                        <Badge key={i} variant="outline" className="text-sm">
                          <CheckCircle2 size={14} className="mr-1" />
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* 卖点关系 */}
        <TabsContent value="relationship" className="space-y-6">
          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">先后顺序</h3>
            <div className="space-y-3">
              {MOCK_COMPETITOR_ANALYSIS.relationship.order.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-bold">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{item.position}</div>
                    <div className="text-sm text-gray-600">{item.sellingPoint}</div>
                  </div>
                  <Badge variant="secondary">{item.reason}</Badge>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">主次布局</h3>
            <div className="grid grid-cols-2 gap-4">
              {MOCK_COMPETITOR_ANALYSIS.relationship.priority.map((item, idx) => (
                <div key={idx} className="p-4 border-2 rounded-lg" style={{ borderColor: item.level === 'primary' ? '#3b82f6' : '#94a3b8' }}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={item.level === 'primary' ? 'default' : 'secondary'}>
                      {item.level === 'primary' ? '主要卖点' : '次要卖点'}
                    </Badge>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} size={14} className={i < item.emphasis ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'} />
                      ))}
                    </div>
                  </div>
                  <div className="font-medium text-gray-900">{item.sellingPoint}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.signals.join(', ')}</div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">表达强弱</h3>
            <div className="space-y-3">
              {MOCK_COMPETITOR_ANALYSIS.relationship.strength.map((item, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-medium text-gray-900">{item.sellingPoint}</div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-red-600">痛点 {item.painScore}</Badge>
                      <Badge variant="outline" className="text-green-600">实现 {item.solutionScore}</Badge>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{item.analysis}</p>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* 评论内容 */}
        <TabsContent value="reviews" className="space-y-6">
          {Object.entries(MOCK_COMPETITOR_ANALYSIS.reviews).map(([key, items]) => (
            <Card key={key} className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {key === 'entry' ? '出入点' : key === 'emotion' ? '情绪点' : key === 'contrast' ? '反差点' : '跳跃点'}
              </h3>
              <div className="space-y-3">
                {items.map((item: any, idx: number) => (
                  <div key={idx} className="p-4 border rounded-lg">
                    <div className="flex items-start gap-3">
                      <MessageSquare size={20} className="text-gray-400 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{item.type}</Badge>
                          <span className="text-sm text-gray-600">{item.source}</span>
                        </div>
                        <p className="text-gray-900 mb-2">{item.content}</p>
                        <p className="text-sm text-blue-600">{item.insight}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
