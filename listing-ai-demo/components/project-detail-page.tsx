'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Edit, Trash2, Copy, Calendar, MapPin, Tag, BarChart3 } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { SellingPointsPage } from './selling-points-page';
import { ListingPage } from './listing-page';
import { ImageBriefsPage } from './image-briefs-page';
import { CompetitorsPage } from './competitors-page';

export function ProjectDetailPage() {
  const { currentProject, setPage, projectDetailTab, setProjectDetailTab } = useAppStore();

  if (!currentProject) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-500">未找到项目信息</p>
        <Button onClick={() => setPage('dashboard')} className="mt-4">
          返回工作台
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* 页面头部 */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setPage('dashboard')}
        >
          <ArrowLeft size={20} />
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-gray-900">
              {currentProject.name}
            </h1>
            <Badge
              className={
                currentProject.status === 'completed'
                  ? 'bg-green-100 text-green-700'
                  : currentProject.status === 'analyzing'
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-600'
              }
            >
              {currentProject.status === 'completed'
                ? '分析完成'
                : currentProject.status === 'analyzing'
                ? '正在分析'
                : '草稿'}
            </Badge>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <Tag size={14} />
              {currentProject.keyword}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={14} />
              {currentProject.marketplace}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              创建于 {currentProject.createdAt}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Edit size={16} className="mr-2" />
            编辑
          </Button>
          <Button variant="outline" size="sm">
            <Copy size={16} className="mr-2" />
            复制
          </Button>
          <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
            <Trash2 size={16} className="mr-2" />
            删除
          </Button>
        </div>
      </div>

      {/* Tab导航 */}
      <Tabs value={projectDetailTab} onValueChange={(v) => setProjectDetailTab(v as any)}>
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="info">基本信息</TabsTrigger>
          <TabsTrigger value="competitors">竞品管理</TabsTrigger>
          <TabsTrigger value="selling-points">卖点矩阵</TabsTrigger>
          <TabsTrigger value="listing">Listing</TabsTrigger>
          <TabsTrigger value="image-briefs">图需</TabsTrigger>
          <TabsTrigger value="report">分析报告</TabsTrigger>
        </TabsList>

        <TabsContent value="info" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">产品信息</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">项目名称：</span>
                  <span className="font-medium">{currentProject.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">主关键词：</span>
                  <span className="font-medium">{currentProject.keyword}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">目标站点：</span>
                  <span className="font-medium">{currentProject.marketplace}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">类目：</span>
                  <span className="font-medium">{currentProject.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">创建时间：</span>
                  <span className="font-medium">{currentProject.createdAt}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">更新时间：</span>
                  <span className="font-medium">{currentProject.updatedAt}</span>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-gray-900 mb-4">分析统计</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">竞品数量：</span>
                  <span className="font-medium">3 个</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">评论数量：</span>
                  <span className="font-medium">420 条</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">卖点数量：</span>
                  <span className="font-medium">5 个</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Listing版本：</span>
                  <span className="font-medium">1 个</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">图需数量：</span>
                  <span className="font-medium">4 张</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">合规评分：</span>
                  <span className="font-medium text-green-600">95%</span>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="competitors" className="mt-6">
          <CompetitorsPage />
        </TabsContent>

        <TabsContent value="selling-points" className="mt-6">
          <SellingPointsPage />
        </TabsContent>

        <TabsContent value="listing" className="mt-6">
          <ListingPage />
        </TabsContent>

        <TabsContent value="image-briefs" className="mt-6">
          <ImageBriefsPage />
        </TabsContent>

        <TabsContent value="report" className="mt-6">
          <Card className="p-8 text-center">
            <div className="text-gray-400 mb-4">
              <BarChart3 size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">分析报告</h3>
            <p className="text-gray-500 mb-4">
              完整的分析报告功能即将上线
            </p>
            <Button variant="outline">敬请期待</Button>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
