'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CheckCircle2, ChevronRight, ArrowRight, ExternalLink } from 'lucide-react';
import { useAppStore } from '@/lib/store';

export function NewProjectWizard() {
  const { currentStep, setStep, setPage, startAnalysis } = useAppStore();

  const handleNext = () => {
    if (currentStep < 3) {
      setStep(currentStep + 1);
    } else {
      startAnalysis();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setStep(currentStep - 1);
    } else {
      setPage('dashboard');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      {/* 步骤指示器 */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex flex-col items-center flex-1">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold mb-2 border-2 transition-colors ${
                  currentStep >= step
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'bg-white border-gray-200 text-gray-400'
                }`}
              >
                {currentStep > step ? <CheckCircle2 size={24} /> : step}
              </div>
              <span
                className={`text-sm font-medium ${
                  currentStep >= step ? 'text-gray-900' : 'text-gray-400'
                }`}
              >
                {step === 1 ? '基础信息' : step === 2 ? '竞品录入' : '确认启动'}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-4">
          <div className="absolute top-0 left-0 h-2 bg-gray-100 w-full rounded-full" />
          <div
            className="absolute top-0 left-0 h-2 bg-blue-600 transition-all duration-300 rounded-full"
            style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          />
        </div>
      </div>

      <Card className="p-8">
        {/* Step 1: 基础信息 */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">输入产品基础信息</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  主关键词 <span className="text-red-500">*</span>
                </label>
                <Input placeholder="例如: Coffee Grinder" defaultValue="Coffee Grinder" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    目标站点 <span className="text-red-500">*</span>
                  </label>
                  <Select defaultValue="US">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">美国站 (US)</SelectItem>
                      <SelectItem value="UK">英国站 (UK)</SelectItem>
                      <SelectItem value="DE">德国站 (DE)</SelectItem>
                      <SelectItem value="JP">日本站 (JP)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    类目 (可选)
                  </label>
                  <Input placeholder="Home & Kitchen" defaultValue="Home & Kitchen" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  产品核心参数 (用于差异化对比)
                </label>
                <Textarea
                  rows={4}
                  placeholder="例如: 不锈钢研磨芯, 40档调节, 重量0.8磅..."
                  defaultValue="不锈钢研磨芯, 40档调节, 重量0.8磅, 可折叠手柄"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: 竞品录入 */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">圈定核心竞品 (ASIN)</h2>
              <p className="text-sm text-gray-500 mt-2">
                输入 3-5 个销量领先或极具差异化的竞品 ASIN，AI 将抓取其评论进行分析
              </p>
            </div>

            <div className="space-y-3">
              {[
                'B08XYZ1234',
                'B07ABC5678',
                'B09DEF9012',
              ].map((asin, i) => (
                <div key={i} className="flex gap-2">
                  <Input
                    placeholder={`竞品 ${i + 1} ASIN (如: B08XXXXXXX)`}
                    defaultValue={asin}
                    className="flex-1"
                  />
                  <Button variant="outline" size="icon">
                    <ExternalLink size={18} />
                  </Button>
                </div>
              ))}
              <Button variant="link" className="text-blue-600">
                + 添加更多竞品
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: 确认启动 */}
        {currentStep === 3 && (
          <div className="space-y-6 text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 text-green-600 rounded-full">
              <CheckCircle2 size={40} />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">准备就绪</h2>
              <p className="text-gray-500 max-w-md mx-auto">
                所有数据已配置完成，准备启动差异化价值挖掘
              </p>
            </div>

            <Card className="bg-gray-50 p-6 text-left max-w-md mx-auto">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">产品关键词：</span>
                  <span className="font-medium">Coffee Grinder</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">目标站点：</span>
                  <span className="font-medium">美国站 (US)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">竞品数量：</span>
                  <span className="font-medium">3 个</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">分析策略：</span>
                  <span className="font-medium text-blue-600">极致差异化模式</span>
                </div>
              </div>
            </Card>

            <p className="text-xs text-gray-400">
              包含：评论证据提取、卡诺模型分类、Listing 生成
            </p>
          </div>
        )}

        {/* 操作按钮 */}
        <div className="flex justify-between mt-10">
          <Button variant="outline" onClick={handleBack}>
            返回
          </Button>

          {currentStep < 3 ? (
            <Button onClick={handleNext} className="bg-gray-900 hover:bg-gray-800">
              下一步
              <ChevronRight className="ml-2" size={18} />
            </Button>
          ) : (
            <Button onClick={handleNext} className="bg-blue-600 hover:bg-blue-700">
              启动深度分析
              <ArrowRight className="ml-2" size={18} />
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}
