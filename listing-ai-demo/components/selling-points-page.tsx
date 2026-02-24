'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ArrowRight, BarChart3, Info, Star } from 'lucide-react';
import { useAppStore } from '@/lib/store';
import { MOCK_SELLING_POINTS } from '@/lib/mock-data';

export function SellingPointsPage() {
  const { setPage, setProjectDetailTab } = useAppStore();
  const [selectedPoint, setSelectedPoint] = useState<any>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleRowClick = (point: any) => {
    setSelectedPoint(point);
    setIsSheetOpen(true);
  };

  const handleGenerateListing = () => {
    setProjectDetailTab('listing');
  };

  const getKanoColor = (type: string) => {
    switch (type) {
      case 'must-be':
        return 'bg-red-50 text-red-600 border-red-100';
      case 'one-dimensional':
        return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'attractive':
        return 'bg-amber-50 text-amber-600 border-amber-100';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-100';
    }
  };

  const getKanoLabel = (type: string) => {
    switch (type) {
      case 'must-be':
        return '基本型';
      case 'one-dimensional':
        return '期望型';
      case 'attractive':
        return '魅力型';
      default:
        return '无差异';
    }
  };

  const getWeightColor = (weight: string) => {
    switch (weight) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* 卖点矩阵表格 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="overflow-hidden">
            <div className="p-4 border-b bg-gray-50/50 flex justify-between items-center">
              <h2 className="font-bold text-gray-800 flex items-center gap-2">
                <BarChart3 size={18} className="text-blue-600" />
                卖点体系与卡诺分类
              </h2>
              <div className="flex gap-3 text-xs">
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  基本型
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-blue-400" />
                  期望型
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  魅力型
                </span>
              </div>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>卖点名称</TableHead>
                  <TableHead>卡诺分类</TableHead>
                  <TableHead>权重</TableHead>
                  <TableHead>提及次数</TableHead>
                  <TableHead>策略建议</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {MOCK_SELLING_POINTS.map((point) => (
                  <TableRow
                    key={point.id}
                    className="cursor-pointer hover:bg-blue-50/30"
                    onClick={() => handleRowClick(point)}
                  >
                    <TableCell className="font-semibold">{point.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={`${getKanoColor(point.kanoType)} border`}
                      >
                        {getKanoLabel(point.kanoType)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={getWeightColor(point.weight)}>
                        {point.weight === 'high' ? '高' : point.weight === 'medium' ? '中' : '低'}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-gray-600">{point.frequency}</TableCell>
                    <TableCell className="text-xs">
                      {point.kanoType === 'attractive' ? (
                        <span className="text-blue-600 font-medium">🔥 设为核心卖点</span>
                      ) : point.sentiment < 0 ? (
                        <span className="text-orange-600 font-medium">⚠️ 需要改进</span>
                      ) : (
                        <span className="text-gray-500">保持水准</span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* 右侧提示卡片 */}
        <div>
          <Card className="p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info size={18} className="text-blue-600" />
              使用提示
            </h3>
            <div className="space-y-4 text-sm text-gray-600">
              <div>
                <p className="font-medium text-gray-900 mb-1">📊 查看证据</p>
                <p>点击任意卖点行，查看用户评论原文证据</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">🎯 卡诺分类</p>
                <p>
                  <span className="text-red-600">基本型</span>：必须达标
                  <br />
                  <span className="text-blue-600">期望型</span>：越好越满意
                  <br />
                  <span className="text-amber-600">魅力型</span>：超预期惊喜
                </p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">💡 策略建议</p>
                <p>魅力型卖点应作为核心差异化突破点</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 证据侧边栏 */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="w-[500px] sm:max-w-[500px]">
          <SheetHeader>
            <SheetTitle className="flex items-center gap-2">
              <Info size={20} className="text-blue-600" />
              评论证据：{selectedPoint?.name}
            </SheetTitle>
          </SheetHeader>

          <ScrollArea className="h-[calc(100vh-120px)] mt-6">
            <div className="space-y-4">
              {selectedPoint?.evidences.map((evidence: any) => (
                <Card key={evidence.id} className="p-4 bg-gray-50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < evidence.rating
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }
                        />
                      ))}
                    </div>
                    {evidence.verified && (
                      <Badge variant="outline" className="text-xs">
                        Verified Purchase
                      </Badge>
                    )}
                  </div>

                  <p className="text-sm text-gray-700 italic leading-relaxed mb-3">
                    "{evidence.reviewText}"
                  </p>

                  <div className="flex items-center justify-between text-xs">
                    <span className="text-blue-600 font-medium">
                      关键短语: "{evidence.highlightedPhrase}"
                    </span>
                    <span className="text-gray-400">ASIN: {evidence.asin}</span>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </div>
  );
}
