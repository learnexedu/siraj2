'use client'

import { Card } from '@/components/ui/card'
import { Users, FileText, CheckCircle2, Clock } from 'lucide-react'

export default function SupervisorPage() {
  const stats = [
    { icon: FileText, label: 'إجمالي الطلبات', value: '127', color: 'text-blue-400' },
    { icon: Clock, label: 'قيد المراجعة', value: '34', color: 'text-yellow-400' },
    { icon: CheckCircle2, label: 'مقبول', value: '56', color: 'text-green-400' },
    { icon: Users, label: 'مرفوض', value: '15', color: 'text-red-400' },
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">لوحة التحكم</h1>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="p-6 border-dashboard-border bg-dashboard-card">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-dashboard-text text-sm mb-2">{stat.label}</p>
                  <p className="text-3xl font-bold text-white">{stat.value}</p>
                </div>
                <Icon className={`w-8 h-8 ${stat.color}`} />
              </div>
            </Card>
          )
        })}
      </div>

      {/* Recent Applications */}
      <Card className="p-8 border-dashboard-border bg-dashboard-card">
        <h2 className="text-xl font-bold text-white mb-6">آخر الطلبات</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-dashboard-bg rounded-lg">
            <div>
              <p className="font-bold text-white">أحمد محمد علي</p>
              <p className="text-sm text-dashboard-text">GS-2025-001</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-bold bg-blue-200 text-blue-800">قيد المراجعة</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-dashboard-bg rounded-lg">
            <div>
              <p className="font-bold text-white">فاطمة خالد محمود</p>
              <p className="text-sm text-dashboard-text">GS-2025-002</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-bold bg-yellow-200 text-yellow-800">قيد الانتظار</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-dashboard-bg rounded-lg">
            <div>
              <p className="font-bold text-white">محمد عبدالله سالم</p>
              <p className="text-sm text-dashboard-text">GS-2025-003</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-bold bg-green-200 text-green-800">مقبول</span>
          </div>
        </div>
      </Card>
    </div>
  )
}
