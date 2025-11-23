'use client'

import { Bell, Settings, User } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function DashboardHeader() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between md:mr-64">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-primary hidden md:block">لوحة التحكم</h1>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <Bell size={20} className="text-slate-600" />
        </button>
        <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
          <Settings size={20} className="text-slate-600" />
        </button>
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
            <User size={20} className="text-accent" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-primary">أحمد محمد</p>
            <p className="text-xs text-slate-600">طالب - الدراسات العليا</p>
          </div>
        </div>
      </div>
    </header>
  )
}
