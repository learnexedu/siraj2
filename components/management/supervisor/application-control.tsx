'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Toggle } from '@/components/ui/toggle'
import { Save, Calendar } from 'lucide-react'

export function ApplicationControl() {
  const [isOpen, setIsOpen] = useState(true)
  const [startDate, setStartDate] = useState('2025-01-01')
  const [endDate, setEndDate] = useState('2025-03-31')
  const [programName, setProgramName] = useState('برنامج الهندسة البرمجية - الماجستير')
  const [seats, setSeats] = useState('50')
  const [requirements, setRequirements] = useState('')

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-white">إدارة التقديمات</h1>

      {/* Submission Status */}
      <Card className="p-6 border-dashboard-border bg-dashboard-card">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg font-bold text-white mb-2">حالة التقديم</h2>
            <p className="text-dashboard-text">
              {isOpen ? 'التقديم مفتوح حاليًا للطلاب' : 'التقديم مغلق'}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-dashboard-text">
              {isOpen ? 'مفتوح' : 'مغلق'}
            </span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`w-14 h-8 rounded-full transition-all ${
                isOpen ? 'bg-green-600' : 'bg-red-600'
              }`}
            />
          </div>
        </div>
        <p className="text-sm text-dashboard-text">
          {isOpen 
            ? 'سيتمكن الطلاب من تقديم طلباتهم خلال الفترة المحددة أدناه'
            : 'لن يتمكن الطلاب من تقديم طلبات جديدة'}
        </p>
      </Card>

      {/* Submission Period */}
      <Card className="p-6 border-dashboard-border bg-dashboard-card">
        <h2 className="text-lg font-bold text-white mb-6">فترة التقديم</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">تاريخ البداية</label>
            <div className="relative">
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-dashboard-text w-5 h-5" />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-4 py-2 pr-10 bg-dashboard-bg border border-dashboard-border rounded-lg text-white focus:outline-hidden focus:border-accent"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">تاريخ النهاية</label>
            <div className="relative">
              <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-dashboard-text w-5 h-5" />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-4 py-2 pr-10 bg-dashboard-bg border border-dashboard-border rounded-lg text-white focus:outline-hidden focus:border-accent"
              />
            </div>
          </div>
        </div>
        <p className="text-sm text-dashboard-text mt-4">
          المدة: <span className="text-white font-medium">89 يوم</span>
        </p>
      </Card>

      {/* Program Settings */}
      <Card className="p-6 border-dashboard-border bg-dashboard-card">
        <h2 className="text-lg font-bold text-white mb-6">بيانات البرنامج</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">اسم البرنامج</label>
            <input
              type="text"
              value={programName}
              onChange={(e) => setProgramName(e.target.value)}
              className="w-full px-4 py-2 bg-dashboard-bg border border-dashboard-border rounded-lg text-white focus:outline-hidden focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">عدد المقاعد المتاحة</label>
            <input
              type="number"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="w-full px-4 py-2 bg-dashboard-bg border border-dashboard-border rounded-lg text-white focus:outline-hidden focus:border-accent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-white mb-2">شروط القبول</label>
            <textarea
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="ادرج شروط القبول والمتطلبات الأساسية..."
              rows={4}
              className="w-full px-4 py-2 bg-dashboard-bg border border-dashboard-border rounded-lg text-white placeholder:text-dashboard-text focus:outline-hidden focus:border-accent resize-none"
            />
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex gap-4">
        <Button className="flex-1 bg-accent hover:bg-accent/90 text-primary font-bold flex items-center justify-center gap-2">
          <Save size={18} />
          حفظ الإعدادات
        </Button>
        <Button variant="outline" className="border-dashboard-border text-dashboard-text">
          إعادة تعيين
        </Button>
      </div>
    </div>
  )
}
