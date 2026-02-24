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
  Edit,
  Trash2,
  Copy,
  Check,
  X,
  Sparkles
} from 'lucide-react';
import { MOCK_PROMPTS } from '@/lib/mock-data';

export function PromptsPage() {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('competitor');

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleSave = () => {
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const renderPromptCard = (prompt: any) => {
    const isEditing = editingId === prompt.id;

    return (
      <Card key={prompt.id} className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            {isEditing ? (
              <Input
                defaultValue={prompt.name}
                className="font-bold text-lg mb-2"
              />
            ) : (
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-gray-900 text-lg">{prompt.name}</h3>
                {prompt.isDefault && (
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                    默认
                  </Badge>
                )}
              </div>
            )}
          </div>
          
          {!isEditing && (
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" onClick={() => handleEdit(prompt.id)}>
                <Edit size={16} />
              </Button>
              <Button variant="ghost" size="icon">
                <Copy size={16} />
              </Button>
              {!prompt.isDefault && (
                <Button variant="ghost" size="icon" className="text-red-600 hover:text-red-700">
                  <Trash2 size={16} />
                </Button>
              )}
            </div>
          )}
        </div>

        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              提示词内容
            </label>
            {isEditing ? (
              <Textarea
                defaultValue={prompt.content}
                rows={8}
                className="font-mono text-sm"
              />
            ) : (
              <div className="p-4 bg-gray-50 rounded-lg">
                <pre className="text-sm text-gray-900 whitespace-pre-wrap font-mono">
                  {prompt.content}
                </pre>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-4">
              <span>创建时间: {prompt.createdAt}</span>
              <span>·</span>
              <span>最后修改: {prompt.updatedAt}</span>
            </div>
            {!isEditing && (
              <Badge variant="outline">
                使用次数: {prompt.usageCount}
              </Badge>
            )}
          </div>

          {isEditing && (
            <div className="flex gap-2 pt-2">
              <Button onClick={handleSave} className="flex-1">
                <Check size={16} className="mr-2" />
                保存
              </Button>
              <Button variant="outline" onClick={handleCancel} className="flex-1">
                <X size={16} className="mr-2" />
                取消
              </Button>
            </div>
          )}
        </div>
      </Card>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">提示词管理</h1>
          <p className="text-gray-600 mt-1">管理竞品分析和Listing生成的AI提示词</p>
        </div>
        <Button>
          <Plus size={20} className="mr-2" />
          新建提示词
        </Button>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 max-w-md">
          <TabsTrigger value="competitor">竞品分析提示词</TabsTrigger>
          <TabsTrigger value="listing">Listing 提示词</TabsTrigger>
        </TabsList>

        {/* Competitor Analysis Prompts */}
        <TabsContent value="competitor" className="space-y-4 mt-6">
          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
            <Sparkles size={20} className="text-blue-600" />
            <p className="text-sm text-blue-900">
              竞品分析提示词用于指导AI如何分析竞品的卖点分类、表达方式、关系和评论内容
            </p>
          </div>
          
          {MOCK_PROMPTS.competitor.map(renderPromptCard)}
        </TabsContent>

        {/* Listing Prompts */}
        <TabsContent value="listing" className="space-y-4 mt-6">
          <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-lg">
            <Sparkles size={20} className="text-purple-600" />
            <p className="text-sm text-purple-900">
              Listing提示词用于指导AI如何生成标题、五点描述、品牌故事和图片需求
            </p>
          </div>
          
          {MOCK_PROMPTS.listing.map(renderPromptCard)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
