'use client'

import { Bell, Settings, User } from 'lucide-react'

export function SupervisorHeader() {
  return (
    <header className="bg-dashboard-card border-b border-dashboard-border px-6 py-4 flex items-center justify-between md:mr-64">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-white hidden md:block">لوحة التحكم</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-dashboard-bg rounded-lg transition-colors">
          <Bell size={20} className="text-dashboard-text" />
        </button>
        <button className="p-2 hover:bg-dashboard-bg rounded-lg transition-colors">
          <Settings size={20} className="text-dashboard-text" />
        </button>
        <div className="flex items-center gap-3 pr-4 border-r border-dashboard-border">
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
            <User size={20} className="text-accent" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">د. محمد الأحمد</p>
            <p className="text-xs text-dashboard-text">مشرف البرنامج</p>
          </div>
        </div>
      </div>
    </header>
  )
}
