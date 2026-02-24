'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlusCircle, BarChart3, MoreVertical, Search } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { MOCK_PROJECTS } from '@/lib/mock-data';

export function DashboardPage() {
  const { setPage, setCurrentProject } = useAppStore();

  const handleProjectClick = (project: any) => {
    setCurrentProject(project);
    if (project.status === 'completed') {
      setPage('competitors');
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">项目工作台</h1>
          <p className="text-gray-500 mt-1">管理您的 Listing 差异化分析项目</p>
        </div>
        <Button 
          onClick={() => setPage('competitors')}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <PlusCircle className="mr-2" size={18} />
          新建项目
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_PROJECTS.map((project) => (
          <Card 
            key={project.id}
            className="p-6 hover:border-blue-400 transition-all cursor-pointer group"
            onClick={() => handleProjectClick(project)}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="bg-gray-100 p-3 rounded-lg text-gray-600">
                <BarChart3 size={24} />
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={18} />
              </button>
            </div>
            
            <h3 className="font-semibold text-gray-900 text-lg mb-2">
              {project.name}
            </h3>
            
            <p className="text-sm text-gray-500 mb-4 flex items-center gap-2">
              <Search size={14} />
              {project.keyword}
            </p>
            
            <div className="flex items-center justify-between">
              <Badge 
                variant={
                  project.status === 'completed' ? 'default' : 
                  project.status === 'analyzing' ? 'secondary' : 
                  'outline'
                }
                className={
                  project.status === 'completed' ? 'bg-green-100 text-green-700 hover:bg-green-100' :
                  project.status === 'analyzing' ? 'bg-blue-100 text-blue-700 hover:bg-blue-100' :
                  'bg-gray-100 text-gray-600'
                }
              >
                {project.status === 'completed' ? '分析完成' : 
                 project.status === 'analyzing' ? '正在分析' : 
                 '等待队列'}
              </Badge>
              <span className="text-xs text-gray-400">{project.createdAt}</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
