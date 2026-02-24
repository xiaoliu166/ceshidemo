'use client';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home,
  Search,
  FileText,
  Database,
  BookOpen,
  Settings as SettingsIcon,
  LogOut,
  Sparkles
} from 'lucide-react';
import { useAppStore } from '@/lib/store';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const { currentPage, setPage } = useAppStore();

  if (currentPage === 'login') {
    return <>{children}</>;
  }

  const navItems = [
    { id: 'dashboard', label: '首页', icon: Home },
    { id: 'competitors', label: '竞品', icon: Search },
    { id: 'listing', label: 'Listing', icon: FileText },
    { id: 'resources', label: '资源', icon: BookOpen },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* 侧边栏 - Snowflake 风格 */}
      <aside className="w-64 bg-[#1a1f36] text-white flex flex-col fixed h-full z-10">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <Sparkles size={18} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-lg">AI Listing</div>
              <div className="text-xs text-gray-400">智能分析系统</div>
            </div>
          </div>
        </div>

        {/* 导航菜单 */}
        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id as any)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                      : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
                  }`}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* 设置按钮 */}
        <div className="p-3 border-t border-gray-700/50">
          <button
            onClick={() => setPage('settings')}
            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
              currentPage === 'settings'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
            }`}
          >
            <SettingsIcon size={18} />
            设置
          </button>
        </div>

        {/* 用户信息 */}
        <div className="p-4 border-t border-gray-700/50">
          <div className="flex items-center gap-3 px-3 py-2.5 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors">
            <Avatar className="w-9 h-9">
              <AvatarFallback className="bg-gradient-to-br from-blue-400 to-cyan-400 text-white font-bold text-sm">
                M
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium truncate">Mongo 老师</p>
              <div className="flex items-center gap-2">
                <Badge className="text-xs bg-blue-500/20 text-blue-300 border-blue-400/30">
                  专业版
                </Badge>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setPage('login')}
              className="text-gray-400 hover:text-red-400 hover:bg-red-500/10 h-8 w-8"
            >
              <LogOut size={16} />
            </Button>
          </div>
        </div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 ml-64 p-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
        {children}
      </main>
    </div>
  );
}
