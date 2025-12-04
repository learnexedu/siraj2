'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Clock, AlertCircle, BookOpen } from 'lucide-react'

export function DashboardHome() {
  const studentData = {
    name: 'أحمد محمد علي',
    studentId: 'GS-2025-001',
    specialization: 'الهندسة البرمجية',
    status: 'قيد المراجعة',
  }

  const recentUpdates = [
    {
      title: 'تم استقبال طلبك',
      description: 'تم استقبال طلب التقديم الخاص بك بنجاح',
      date: '2025-01-15',
      icon: CheckCircle2,
      color: 'text-green-600'
    },
    {
      title: 'قيد المراجعة',
      description: 'يتم حاليًا مراجعة ملفك من قبل لجنة القبول',
      date: '2025-01-10',
      icon: Clock,
      color: 'text-blue-600'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Student Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-6 border-slate-200">
          <p className="text-sm text-slate-600 mb-2">الاسم</p>
          <p className="text-lg font-bold text-primary">{studentData.name}</p>
        </Card>
        <Card className="p-6 border-slate-200">
          <p className="text-sm text-slate-600 mb-2">رقم الطالب</p>
          <p className="text-lg font-bold text-primary">{studentData.studentId}</p>
        </Card>
        <Card className="p-6 border-slate-200">
          <p className="text-sm text-slate-600 mb-2">التخصص</p>
          <p className="text-lg font-bold text-primary">{studentData.specialization}</p>
        </Card>
        <Card className="p-6 border-slate-200">
          <p className="text-sm text-slate-600 mb-2">حالة الطلب</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <p className="font-bold text-primary">{studentData.status}</p>
          </div>
        </Card>
      </div>

      {/* Recent Updates */}
      <Card className="p-6 border-slate-200">
        <h2 className="text-xl font-bold text-primary mb-6">آخر المستجدات</h2>
        <div className="space-y-4">
          {recentUpdates.map((update, index) => {
            const Icon = update.icon
            return (
              <div key={index} className="flex gap-4 pb-4 border-b border-slate-200 last:border-b-0">
                <div className={`w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 ${update.color}`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-primary mb-1">{update.title}</h3>
                  <p className="text-sm text-slate-600">{update.description}</p>
                  <p className="text-xs text-slate-500 mt-2">{update.date}</p>
                </div>
              </div>
            )
          })}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/dashboard/student-info">
          <Card className="p-6 border-slate-200 hover:shadow-lg transition-all cursor-pointer h-full">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">تحديث البيانات</h3>
                <p className="text-sm text-slate-600">قم بتحديث معلوماتك الشخصية</p>
              </div>
              <User size={24} className="text-accent" />
            </div>
          </Card>
        </Link>
        <Link href="/dashboard/application-status">
          <Card className="p-6 border-slate-200 hover:shadow-lg transition-all cursor-pointer h-full">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-primary mb-2">حالة التقديم</h3>
                <p className="text-sm text-slate-600">تابع حالة طلبك بشكل مفصل</p>
              </div>
              <FileText size={24} className="text-accent" />
            </div>
          </Card>
        </Link>
      </div>
    </div>
  )
}

import { User, FileText } from 'lucide-react'
