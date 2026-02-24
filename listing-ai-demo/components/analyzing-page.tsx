'use client';

import { Progress } from '@/components/ui/progress';
import { Search } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export function AnalyzingPage() {
  const analysisProgress = useAppStore((state) => state.analysisProgress);

  const getCurrentTask = () => {
    if (analysisProgress < 30) return '抓取评论数据...';
    if (analysisProgress < 70) return 'AI 卖点提取中...';
    return '生成错位竞争策略...';
  };

  return (
    <div className="min-h-[600px] flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-50 text-blue-600 rounded-full animate-pulse">
          <Search size={48} />
        </div>

        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">AI 正在深度分析中</h2>
          <p className="text-gray-500 max-w-sm mx-auto">
            正在抓取评论、提取卖点并进行卡诺模型判定，这可能需要约 1 分钟时间...
          </p>
        </div>

        <div className="space-y-3">
          <Progress value={analysisProgress} className="h-3" />
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">{analysisProgress}%</span>
            <span className="text-blue-600 font-medium">{getCurrentTask()}</span>
          </div>
        </div>

        <div className="pt-4">
          <div className="inline-flex items-center gap-2 text-xs text-gray-400">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
            正在处理 420 条用户评论
          </div>
        </div>
      </div>
    </div>
  );
}
