'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react'

const statusSteps = [
  { label: 'تم الاستقبال', status: 'completed', date: '2025-01-15' },
  { label: 'قيد المراجعة', status: 'in-progress', date: '2025-01-10' },
  { label: 'المقابلة الشخصية', status: 'pending', date: null },
  { label: 'النتيجة النهائية', status: 'pending', date: null },
]

export function ApplicationStatus() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">حالة الطلب</h1>

      {/* Status Timeline */}
      <Card className="p-8 border-slate-200">
        <h2 className="text-xl font-bold text-primary mb-8">مراحل المعالجة</h2>
        
        <div className="space-y-6">
          {statusSteps.map((step, index) => (
            <div key={index} className="flex gap-4">
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  step.status === 'completed' ? 'bg-green-100' :
                  step.status === 'in-progress' ? 'bg-blue-100' :
                  'bg-slate-100'
                }`}>
                  {step.status === 'completed' ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : step.status === 'in-progress' ? (
                    <Clock className="w-6 h-6 text-blue-600" />
                  ) : (
                    <AlertCircle className="w-6 h-6 text-slate-400" />
                  )}
                </div>
                {index < statusSteps.length - 1 && (
                  <div className={`w-1 h-12 mt-2 ${
                    step.status === 'completed' ? 'bg-green-200' : 'bg-slate-200'
                  }`}></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-6">
                <h3 className="font-bold text-primary text-lg mb-1">{step.label}</h3>
                {step.date && (
                  <p className="text-sm text-slate-600">{step.date}</p>
                )}
                {step.status === 'in-progress' && (
                  <p className="text-sm text-blue-600 mt-2">جاري المعالجة...</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Status Details */}
      <Card className="p-8 border-slate-200 bg-blue-50 border-blue-200">
        <div className="flex gap-4">
          <Clock className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 mb-1">الحالة الحالية</h3>
            <p className="text-sm text-blue-800">
              يتم حاليًا مراجعة ملفك الأكاديمي والوثائق المرفقة من قبل لجنة القبول.
              سيتم إخطارك بموعد المقابلة الشخصية قريبًا.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
