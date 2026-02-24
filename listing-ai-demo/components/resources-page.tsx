'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Lightbulb, TrendingUp, Star, Eye, Download, Sparkles, Edit, Trash2, Plus } from 'lucide-react';
import { MOCK_TEMPLATES, MOCK_EXPRESSION_LIBRARY, MOCK_CASE_STUDIES } from '@/lib/mock-data-extended';
import { MOCK_PROMPTS } from '@/lib/mock-data';
import { useAppStore } from '@/lib/store';
import { useState } from 'react';

export function ResourcesPage() {
  const { setPage } = useAppStore();
  const [activeTab, setActiveTab] = useState('templates');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">资源</h1>
        <p className="text-gray-600 text-lg">模板、表达库、提示词和成功案例</p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 h-auto p-1">
          <TabsTrigger value="templates" className="py-3">
            <FileText size={16} className="mr-2" />
            文案模板
          </TabsTrigger>
          <TabsTrigger value="expressions" className="py-3">
            <Lightbulb size={16} className="mr-2" />
            表达库
          </TabsTrigger>
          <TabsTrigger value="prompts" className="py-3">
            <Sparkles size={16} className="mr-2" />
            提示词
          </TabsTrigger>
          <TabsTrigger value="cases" className="py-3">
            <TrendingUp size={16} className="mr-2" />
            案例库
          </TabsTrigger>
        </TabsList>

        {/* 文案模板 */}
        <TabsContent value="templates" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_TEMPLATES.map((template) => (
              <Card key={template.id} className="p-6 hover:border-blue-400 transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-50 p-3 rounded-lg text-blue-600">
                    <FileText size={24} />
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{template.rating}</span>
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 mb-2">{template.name}</h3>
                <Badge variant="outline" className="mb-3 text-xs">
                  {template.category}
                </Badge>
                <p className="text-sm text-gray-600 mb-4">{template.description}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <Eye size={12} />
                    使用 {template.usageCount} 次
                  </span>
                  <Button size="sm" variant="outline">
                    使用模板
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 表达库 */}
        <TabsContent value="expressions" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_EXPRESSION_LIBRARY.map((expression) => (
              <Card key={expression.id} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-50 p-3 rounded-lg text-amber-600">
                    <Lightbulb size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-2">{expression.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{expression.description}</p>
                    
                    <div className="bg-gray-50 p-3 rounded-lg mb-3">
                      <p className="text-xs text-gray-500 mb-1">示例：</p>
                      <p className="text-sm font-medium text-gray-900">{expression.example}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-3">
                      {expression.applicablePoints.map((point, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {point}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        使用 {expression.usageCount} 次
                      </span>
                      <Button size="sm" variant="outline">
                        查看详情
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* 提示词 */}
        <TabsContent value="prompts" className="mt-6 space-y-6">
          {/* 竞品分析提示词 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">竞品分析提示词</h2>
              <Button size="sm">
                <Plus size={16} className="mr-2" />
                新建
              </Button>
            </div>
            <div className="space-y-4">
              {MOCK_PROMPTS.competitor.map((prompt) => (
                <Card key={prompt.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">{prompt.name}</h3>
                        {prompt.isDefault && (
                          <Badge className="bg-blue-100 text-blue-700">默认</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>使用次数: {prompt.usageCount}</span>
                        <span>·</span>
                        <span>最后修改: {prompt.updatedAt}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit size={16} />
                      </Button>
                      {!prompt.isDefault && (
                        <Button variant="ghost" size="icon" className="text-red-600">
                          <Trash2 size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <pre className="text-sm text-gray-900 whitespace-pre-wrap font-mono line-clamp-3">
                      {prompt.content}
                    </pre>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3">
                    查看完整内容
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Listing 提示词 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Listing 提示词</h2>
              <Button size="sm">
                <Plus size={16} className="mr-2" />
                新建
              </Button>
            </div>
            <div className="space-y-4">
              {MOCK_PROMPTS.listing.map((prompt) => (
                <Card key={prompt.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-gray-900 text-lg">{prompt.name}</h3>
                        {prompt.isDefault && (
                          <Badge className="bg-purple-100 text-purple-700">默认</Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span>使用次数: {prompt.usageCount}</span>
                        <span>·</span>
                        <span>最后修改: {prompt.updatedAt}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit size={16} />
                      </Button>
                      {!prompt.isDefault && (
                        <Button variant="ghost" size="icon" className="text-red-600">
                          <Trash2 size={16} />
                        </Button>
                      )}
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <pre className="text-sm text-gray-900 whitespace-pre-wrap font-mono line-clamp-3">
                      {prompt.content}
                    </pre>
                  </div>
                  <Button variant="outline" size="sm" className="mt-3">
                    查看完整内容
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* 案例库 */}
        <TabsContent value="cases" className="mt-6">
          <div className="space-y-6">
            {MOCK_CASE_STUDIES.map((caseStudy) => (
              <Card key={caseStudy.id} className="p-6">
                <div className="flex items-start gap-6">
                  <div className="bg-green-50 p-4 rounded-lg text-green-600">
                    <TrendingUp size={32} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg mb-1">
                          {caseStudy.title}
                        </h3>
                        <Badge variant="outline">{caseStudy.category}</Badge>
                      </div>
                      <span className="text-xs text-gray-400">{caseStudy.date}</span>
                    </div>

                    <p className="text-sm text-gray-600 mb-4">{caseStudy.description}</p>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">优化前 CTR</p>
                        <p className="text-lg font-bold text-gray-900">{caseStudy.beforeCTR}%</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">优化后 CTR</p>
                        <p className="text-lg font-bold text-gray-900">{caseStudy.afterCTR}%</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">提升幅度</p>
                        <p className="text-lg font-bold text-green-600">{caseStudy.improvement}</p>
                      </div>
                    </div>

                    <Button variant="outline" size="sm">
                      <Download size={14} className="mr-2" />
                      下载完整案例
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
