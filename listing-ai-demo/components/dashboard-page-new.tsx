'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  FileText, 
  TrendingUp, 
  Clock, 
  ArrowRight,
  Sparkles,
  BarChart3,
  Zap,
  Plus
} from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { MOCK_PROJECTS } from '@/lib/mock-data';

export function DashboardPageNew() {
  const { setPage, setCurrentProject, setStep } = useAppStore();

  const handleNewCompetitorAnalysis = () => {
    // 直接跳转到竞品页面的新建视图
    setPage('competitors');
    // 可以通过 store 传递一个标记，让竞品页面知道要打开新建视图
  };

  const handleNewListing = () => {
    // 直接跳转到 Listing 页面的新建视图
    setPage('listing');
  };

  const handleProjectClick = (project: any) => {
    setCurrentProject(project);
    // 已完成的项目跳转到竞品页面查看报告
    if (project.status === 'completed') {
      setPage('competitors');
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">首页</h1>
        <p className="text-gray-600 text-lg">欢迎回来，开始您的智能分析之旅</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card 
          className="p-8 bg-gradient-to-br from-blue-600 to-cyan-500 text-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group border-0"
          onClick={handleNewCompetitorAnalysis}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <Search size={32} />
            </div>
            <Plus size={24} className="opacity-70" />
          </div>
          <h3 className="text-2xl font-bold mb-3">新建竞品分析</h3>
          <p className="text-blue-50 mb-6 leading-relaxed">
            输入关键词，AI 自动分析竞品卖点、表达方式和用户评论
          </p>
          <div className="flex items-center text-sm font-semibold group-hover:gap-2 transition-all">
            开始分析 <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Card>

        <Card 
          className="p-8 bg-gradient-to-br from-purple-600 to-pink-500 text-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group border-0"
          onClick={handleNewListing}
        >
          <div className="flex items-start justify-between mb-6">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <FileText size={32} />
            </div>
            <Plus size={24} className="opacity-70" />
          </div>
          <h3 className="text-2xl font-bold mb-3">新建 Listing</h3>
          <p className="text-purple-50 mb-6 leading-relaxed">
            基于竞品分析，快速生成优化的标题、五点和品牌故事
          </p>
          <div className="flex items-center text-sm font-semibold group-hover:gap-2 transition-all">
            开始创建 <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </Card>
      </div>

      {/* Workflow */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">工作流程</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            {
              step: '1',
              title: '输入关键词',
              desc: '提供产品信息',
              icon: Search,
              color: 'from-blue-500 to-cyan-500',
            },
            {
              step: '2',
              title: 'AI 分析',
              desc: '智能分析竞品',
              icon: Sparkles,
              color: 'from-purple-500 to-pink-500',
            },
            {
              step: '3',
              title: '生成报告',
              desc: '卖点分类与关系',
              icon: BarChart3,
              color: 'from-green-500 to-emerald-500',
            },
            {
              step: '4',
              title: '输出 Listing',
              desc: '一键生成文案',
              icon: Zap,
              color: 'from-orange-500 to-red-500',
            },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all group relative overflow-hidden border-2 hover:border-gray-300">
                <div className="absolute top-0 right-0 text-7xl font-bold text-gray-100 -mr-4 -mt-2 select-none">
                  {item.step}
                </div>
                <div className="relative">
                  <div className={`inline-flex p-3 bg-gradient-to-br ${item.color} text-white rounded-xl mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Projects */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">最近项目</h2>
          <Button variant="ghost" className="text-blue-600 hover:gap-2 transition-all">
            查看全部 <ArrowRight size={18} className="ml-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MOCK_PROJECTS.map((project) => (
            <Card 
              key={project.id}
              className="p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group border-2 hover:border-blue-300"
              onClick={() => handleProjectClick(project)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl ${
                  project.status === 'completed' ? 'bg-green-50 text-green-600' :
                  project.status === 'analyzing' ? 'bg-blue-50 text-blue-600' :
                  'bg-gray-50 text-gray-600'
                }`}>
                  <BarChart3 size={24} />
                </div>
                <Badge 
                  className={
                    project.status === 'completed' ? 'bg-green-100 text-green-700 border-green-200' :
                    project.status === 'analyzing' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                    'bg-gray-100 text-gray-600 border-gray-200'
                  }
                >
                  {project.status === 'completed' ? '已完成' : 
                   project.status === 'analyzing' ? '分析中' : 
                   '草稿'}
                </Badge>
              </div>

              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {project.name}
              </h3>
              
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Search size={14} />
                <span>{project.keyword}</span>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t">
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  <span>{project.createdAt}</span>
                </div>
                <div className="flex items-center gap-1 text-blue-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  查看详情 <ArrowRight size={12} />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
