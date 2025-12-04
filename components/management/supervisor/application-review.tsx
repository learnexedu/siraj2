'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles, CheckCircle2, XCircle, Save } from 'lucide-react'

interface ApplicationReviewProps {
  applicationId: string
}

export function ApplicationReview({ applicationId }: ApplicationReviewProps) {
  const [notes, setNotes] = useState('')
  const [collegeRequirements, setCollegeRequirements] = useState('')
  const [decision, setDecision] = useState<'pending' | 'approved' | 'rejected' | 'hold'>('pending')

  const applicationData = {
    studentName: 'أحمد محمد علي',
    studentId: 'GS-2025-001',
    email: 'ahmed@email.com',
    phone: '0551234567',
    nationalId: '1234567890',
    major: 'الهندسة البرمجية',
    birthDate: '1998-05-15',
    submittedDate: '2025-01-15',
  }

  const aiReview = {
    score: 8.5,
    summary: 'الطلب يظهر مستوى أكاديمي قوي مع توافر جميع المتطلبات الأساسية. السيرة الذاتية تشير إلى خبرة عملية جيدة في المجال. التوصية الأولية: مقبول للمقابلة الشخصية.',
    highlights: [
      'معدل تراكمي ممتاز',
      'خبرة عملية ذات صلة',
      'رسائل توصية قوية',
      'اختبارات معيارية عالية'
    ],
    concerns: [
      'فجوة زمنية في السيرة الذاتية تحتاج توضيح'
    ]
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Link href="/supervisor/applications" className="flex items-center gap-2 text-accent hover:text-accent/80">
        <ArrowRight size={18} />
        العودة للطلبات
      </Link>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">{applicationData.studentName}</h1>
          <p className="text-dashboard-text">{applicationData.studentId}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="border-dashboard-border text-dashboard-text">
            تحميل الملف
          </Button>
          <Button className="bg-accent hover:bg-accent/90 text-primary font-bold">
            طباعة
          </Button>
        </div>
      </div>

      {/* Student Information */}
      <Card className="p-6 border-dashboard-border bg-dashboard-card">
        <h2 className="text-lg font-bold text-white mb-4">معلومات الطالب</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-dashboard-text text-sm mb-1">البريد الإلكتروني</p>
            <p className="text-white font-medium">{applicationData.email}</p>
          </div>
          <div>
            <p className="text-dashboard-text text-sm mb-1">رقم الهاتف</p>
            <p className="text-white font-medium">{applicationData.phone}</p>
          </div>
          <div>
            <p className="text-dashboard-text text-sm mb-1">رقم الهوية</p>
            <p className="text-white font-medium">{applicationData.nationalId}</p>
          </div>
          <div>
            <p className="text-dashboard-text text-sm mb-1">التخصص</p>
            <p className="text-white font-medium">{applicationData.major}</p>
          </div>
          <div>
            <p className="text-dashboard-text text-sm mb-1">تاريخ الميلاد</p>
            <p className="text-white font-medium">{applicationData.birthDate}</p>
          </div>
          <div>
            <p className="text-dashboard-text text-sm mb-1">تاريخ التقديم</p>
            <p className="text-white font-medium">{applicationData.submittedDate}</p>
          </div>
        </div>
      </Card>

      {/* AI Review Section */}
      <Card className="p-6 border-dashboard-border bg-linear-to-br from-dashboard-card to-dashboard-card/80 border-accent/30">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">مراجعة الذكاء الاصطناعي</h2>
            <p className="text-sm text-dashboard-text">تحليل آلي للطلب بناءً على معايير القبول</p>
          </div>
        </div>

        {/* Score */}
        <div className="mb-6 pb-6 border-b border-dashboard-border">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
              <span className="text-3xl font-bold text-accent">{aiReview.score}</span>
            </div>
            <div>
              <p className="text-dashboard-text text-sm mb-2">درجة الاستحقاق</p>
              <div className="w-40 h-2 bg-dashboard-bg rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent rounded-full transition-all"
                  style={{ width: `${(aiReview.score / 10) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-dashboard-text mt-2">درجة عالية - موصى به للقبول</p>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6 pb-6 border-b border-dashboard-border">
          <p className="text-white mb-2 font-medium">الملخص</p>
          <p className="text-dashboard-text leading-relaxed">{aiReview.summary}</p>
        </div>

        {/* Highlights */}
        <div className="mb-6 pb-6 border-b border-dashboard-border">
          <p className="text-white mb-3 font-medium flex items-center gap-2">
            <CheckCircle2 size={18} className="text-green-400" />
            نقاط القوة
          </p>
          <ul className="space-y-2">
            {aiReview.highlights.map((highlight, index) => (
              <li key={index} className="flex gap-2 text-dashboard-text">
                <span className="text-green-400 font-bold">+</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Concerns */}
        {aiReview.concerns.length > 0 && (
          <div>
            <p className="text-white mb-3 font-medium flex items-center gap-2">
              <XCircle size={18} className="text-yellow-400" />
              نقاط للمتابعة
            </p>
            <ul className="space-y-2">
              {aiReview.concerns.map((concern, index) => (
                <li key={index} className="flex gap-2 text-dashboard-text">
                  <span className="text-yellow-400 font-bold">!</span>
                  {concern}
                </li>
              ))}
            </ul>
          </div>
        )}
      </Card>

      {/* Reviewer Notes */}
      <Card className="p-6 border-dashboard-border bg-dashboard-card">
        <h2 className="text-lg font-bold text-white mb-4">ملاحظات المراجع</h2>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="أضف ملاحظاتك وتقييمك على الطلب..."
          rows={4}
          className="w-full px-4 py-3 bg-dashboard-bg border border-dashboard-border rounded-lg text-white placeholder:text-dashboard-text focus:outline-hidden focus:border-accent resize-none"
        />
      </Card>

      {/* College Requirements */}
      <Card className="p-6 border-dashboard-border bg-dashboard-card">
        <h2 className="text-lg font-bold text-white mb-4">لائحة الكلية</h2>
        <textarea
          value={collegeRequirements}
          onChange={(e) => setCollegeRequirements(e.target.value)}
          placeholder="اكتب متطلبات ولوائح الكلية ذات الصلة..."
          rows={4}
          className="w-full px-4 py-3 bg-dashboard-bg border border-dashboard-border rounded-lg text-white placeholder:text-dashboard-text focus:outline-hidden focus:border-accent resize-none"
        />
      </Card>

      {/* Decision and Actions */}
      <Card className="p-6 border-dashboard-border bg-dashboard-card">
        <h2 className="text-lg font-bold text-white mb-4">القرار النهائي</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          {[
            { value: 'pending', label: 'قيد الانتظار', color: 'border-yellow-400' },
            { value: 'approved', label: 'موافقة', color: 'border-green-400' },
            { value: 'rejected', label: 'رفض', color: 'border-red-400' },
            { value: 'hold', label: 'معلق', color: 'border-blue-400' },
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => setDecision(option.value as any)}
              className={`p-4 rounded-lg border-2 transition-all ${
                decision === option.value
                  ? `border-${option.color} bg-dashboard-bg`
                  : 'border-dashboard-border hover:border-dashboard-text'
              }`}
            >
              <p className={decision === option.value ? 'text-white font-bold' : 'text-dashboard-text'}>
                {option.label}
              </p>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button className="flex-1 bg-accent hover:bg-accent/90 text-primary font-bold flex items-center justify-center gap-2">
            <Save size={18} />
            حفظ التقييم
          </Button>
          <Button variant="outline" className="flex-1 border-dashboard-border text-dashboard-text">
            إلغاء
          </Button>
        </div>
      </Card>
    </div>
  )
}
