'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Search, Eye, Download, Trash2 } from 'lucide-react'

interface Application {
  id: string
  studentName: string
  studentId: string
  email: string
  phone: string
  major: string
  status: 'pending' | 'under-review' | 'accepted' | 'rejected' | 'hold'
  submittedDate: string
}

const mockApplications: Application[] = [
  {
    id: 'APP-001',
    studentName: 'أحمد محمد علي',
    studentId: 'GS-2025-001',
    email: 'ahmed@email.com',
    phone: '0551234567',
    major: 'الهندسة البرمجية',
    status: 'under-review',
    submittedDate: '2025-01-15'
  },
  {
    id: 'APP-002',
    studentName: 'فاطمة خالد محمود',
    studentId: 'GS-2025-002',
    email: 'fatima@email.com',
    phone: '0552234567',
    major: 'إدارة الأعمال',
    status: 'pending',
    submittedDate: '2025-01-14'
  },
  {
    id: 'APP-003',
    studentName: 'محمد عبدالله سالم',
    studentId: 'GS-2025-003',
    email: 'mohammed@email.com',
    phone: '0553234567',
    major: 'الهندسة البرمجية',
    status: 'accepted',
    submittedDate: '2025-01-10'
  },
  {
    id: 'APP-004',
    studentName: 'سارة يوسف أحمد',
    studentId: 'GS-2025-004',
    email: 'sarah@email.com',
    phone: '0554234567',
    major: 'تقنية المعلومات',
    status: 'hold',
    submittedDate: '2025-01-12'
  },
  {
    id: 'APP-005',
    studentName: 'علي حسن محمد',
    studentId: 'GS-2025-005',
    email: 'ali@email.com',
    phone: '0555234567',
    major: 'الهندسة البرمجية',
    status: 'rejected',
    submittedDate: '2025-01-08'
  },
]

const statusConfig = {
  pending: { label: 'قيد الانتظار', color: 'bg-yellow-200 text-yellow-800' },
  'under-review': { label: 'قيد المراجعة', color: 'bg-blue-200 text-blue-800' },
  accepted: { label: 'مقبول', color: 'bg-green-200 text-green-800' },
  hold: { label: 'معلق', color: 'bg-yellow-200 text-yellow-800' },
  rejected: { label: 'مرفوض', color: 'bg-red-200 text-red-800' },
}

export function ApplicationsTable() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<string>('all')

  const filteredApplications = mockApplications.filter(app => {
    const matchesSearch = app.studentName.includes(searchTerm) || 
                         app.studentId.includes(searchTerm) ||
                         app.email.includes(searchTerm)
    const matchesStatus = filterStatus === 'all' || app.status === filterStatus
    return matchesSearch && matchesStatus
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold text-white">الطلبات</h1>
        <Button className="bg-accent hover:bg-accent/90 text-primary font-bold">
          تصدير التقرير
        </Button>
      </div>

      {/* Search and Filter */}
      <Card className="p-6 border-dashboard-border bg-dashboard-card">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-dashboard-text w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث بالاسم أو البريد أو رقم الطالب..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pr-10 bg-dashboard-bg border border-dashboard-border rounded-lg text-white placeholder:text-dashboard-text focus:outline-hidden focus:border-accent"
            />
          </div>
          <div className="flex gap-2">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-2 bg-dashboard-bg border border-dashboard-border rounded-lg text-white focus:outline-hidden focus:border-accent"
            >
              <option value="all">جميع الحالات</option>
              <option value="pending">قيد الانتظار</option>
              <option value="under-review">قيد المراجعة</option>
              <option value="accepted">مقبول</option>
              <option value="rejected">مرفوض</option>
              <option value="hold">معلق</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Applications Table */}
      <Card className="border-dashboard-border bg-dashboard-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-dashboard-border">
                <th className="text-right py-4 px-6 font-bold text-white">رقم الطلب</th>
                <th className="text-right py-4 px-6 font-bold text-white">اسم الطالب</th>
                <th className="text-right py-4 px-6 font-bold text-white">رقم الطالب</th>
                <th className="text-right py-4 px-6 font-bold text-white">التخصص</th>
                <th className="text-right py-4 px-6 font-bold text-white">الحالة</th>
                <th className="text-right py-4 px-6 font-bold text-white">تاريخ التقديم</th>
                <th className="text-right py-4 px-6 font-bold text-white">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {filteredApplications.map((app) => {
                const statusConfig_ = statusConfig[app.status as keyof typeof statusConfig]
                return (
                  <tr key={app.id} className="border-b border-dashboard-border hover:bg-dashboard-bg transition-colors">
                    <td className="py-4 px-6 text-white font-medium">{app.id}</td>
                    <td className="py-4 px-6 text-dashboard-text">{app.studentName}</td>
                    <td className="py-4 px-6 text-dashboard-text">{app.studentId}</td>
                    <td className="py-4 px-6 text-dashboard-text">{app.major}</td>
                    <td className="py-4 px-6">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${statusConfig_.color}`}>
                        {statusConfig_.label}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-dashboard-text">{app.submittedDate}</td>
                    <td className="py-4 px-6">
                      <div className="flex gap-2">
                        <Link href={`/supervisor/applications/${app.id}`}>
                          <button className="p-2 hover:bg-dashboard-border rounded-lg transition-colors text-accent">
                            <Eye size={18} />
                          </button>
                        </Link>
                        <button className="p-2 hover:bg-dashboard-border rounded-lg transition-colors text-dashboard-text">
                          <Download size={18} />
                        </button>
                        <button className="p-2 hover:bg-red-600/20 rounded-lg transition-colors text-red-400">
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredApplications.length === 0 && (
          <div className="p-12 text-center">
            <p className="text-dashboard-text text-lg">لم يتم العثور على طلبات</p>
          </div>
        )}
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" className="border-dashboard-border text-dashboard-text">السابق</Button>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? 'default' : 'outline'}
              className={page === 1 ? 'bg-accent text-primary' : 'border-dashboard-border text-dashboard-text'}
            >
              {page}
            </Button>
          ))}
        </div>
        <Button variant="outline" className="border-dashboard-border text-dashboard-text">التالي</Button>
      </div>
    </div>
  )
}
