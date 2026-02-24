'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { User, Users, Bell, CreditCard, Shield, Trash2 } from 'lucide-react';
import { MOCK_USER_SETTINGS, MOCK_TEAM_MEMBERS } from '@/lib/mock-data-extended';

export function SettingsPage() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">设置</h1>
        <p className="text-gray-500 mt-1">管理您的账户和偏好设置</p>
      </div>

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">
            <User size={16} className="mr-2" />
            账户信息
          </TabsTrigger>
          <TabsTrigger value="team">
            <Users size={16} className="mr-2" />
            团队管理
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell size={16} className="mr-2" />
            通知设置
          </TabsTrigger>
          <TabsTrigger value="billing">
            <CreditCard size={16} className="mr-2" />
            订阅与账单
          </TabsTrigger>
        </TabsList>

        {/* 账户信息 */}
        <TabsContent value="account" className="mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-gray-900 mb-4">个人信息</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-blue-100 text-blue-700 text-2xl font-bold">
                    {MOCK_USER_SETTINGS.name[0]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <Button variant="outline" size="sm">更换头像</Button>
                  <p className="text-xs text-gray-500 mt-1">支持 JPG、PNG，最大 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    姓名
                  </label>
                  <Input defaultValue={MOCK_USER_SETTINGS.name} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    邮箱
                  </label>
                  <Input defaultValue={MOCK_USER_SETTINGS.email} disabled />
                </div>
              </div>

              <Button>保存更改</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-gray-900 mb-4">偏好设置</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    默认站点
                  </label>
                  <Select defaultValue={MOCK_USER_SETTINGS.preferences.defaultMarketplace}>
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
                    界面语言
                  </label>
                  <Select defaultValue={MOCK_USER_SETTINGS.preferences.language}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="zh-CN">简体中文</SelectItem>
                      <SelectItem value="en-US">English</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button>保存更改</Button>
            </div>
          </Card>

          <Card className="p-6 border-red-200">
            <h3 className="font-bold text-red-600 mb-4 flex items-center gap-2">
              <Shield size={18} />
              危险区域
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              删除账户将永久删除所有数据，此操作不可恢复
            </p>
            <Button variant="destructive">
              <Trash2 size={16} className="mr-2" />
              删除账户
            </Button>
          </Card>
        </TabsContent>

        {/* 团队管理 */}
        <TabsContent value="team" className="mt-6 space-y-6">
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900">团队成员</h3>
              <Button size="sm">
                <Users size={16} className="mr-2" />
                邀请成员
              </Button>
            </div>

            <div className="space-y-3">
              {MOCK_TEAM_MEMBERS.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-blue-100 text-blue-700 font-bold">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium text-gray-900">{member.name}</p>
                      <p className="text-sm text-gray-500">{member.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={member.role === 'owner' ? 'default' : 'secondary'}>
                      {member.role === 'owner' ? '所有者' : '成员'}
                    </Badge>
                    {member.role !== 'owner' && (
                      <Button variant="ghost" size="sm" className="text-red-600">
                        移除
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* 通知设置 */}
        <TabsContent value="notifications" className="mt-6">
          <Card className="p-6">
            <h3 className="font-bold text-gray-900 mb-4">通知偏好</h3>
            <div className="space-y-4">
              {[
                { label: '分析完成通知', desc: '当项目分析完成时发送邮件通知' },
                { label: '每周报告', desc: '每周一发送项目统计报告' },
                { label: '额度提醒', desc: '当使用额度不足20%时提醒' },
                { label: '产品更新', desc: '接收新功能和产品更新通知' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{item.label}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked={i < 2}
                    className="w-5 h-5 text-blue-600 rounded"
                  />
                </div>
              ))}
            </div>
            <Button className="mt-4">保存更改</Button>
          </Card>
        </TabsContent>

        {/* 订阅与账单 */}
        <TabsContent value="billing" className="mt-6 space-y-6">
          <Card className="p-6">
            <h3 className="font-bold text-gray-900 mb-4">当前套餐</h3>
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">专业版</h4>
                  <p className="text-gray-600">¥299/月</p>
                </div>
                <Badge className="bg-blue-600">当前套餐</Badge>
              </div>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  ✓ 每月 10 个项目额度
                </p>
                <p className="flex items-center gap-2">
                  ✓ 无限 Listing 生成
                </p>
                <p className="flex items-center gap-2">
                  ✓ 完整功能访问
                </p>
                <p className="flex items-center gap-2">
                  ✓ 优先客服支持
                </p>
              </div>
            </div>

            <div className="mt-4 flex gap-3">
              <Button variant="outline">升级到团队版</Button>
              <Button variant="outline" className="text-red-600">取消订阅</Button>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-bold text-gray-900 mb-4">使用情况</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">项目额度</span>
                  <span className="font-medium">
                    {MOCK_USER_SETTINGS.quota.used} / {MOCK_USER_SETTINGS.quota.total}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600"
                    style={{
                      width: `${(MOCK_USER_SETTINGS.quota.used / MOCK_USER_SETTINGS.quota.total) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
