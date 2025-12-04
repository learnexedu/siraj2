'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Mail, ArrowLeft } from 'lucide-react'

export function ForgetPasswordForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg border-slate-200">
        {!submitted ? (
          <>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-3xl font-bold text-primary mb-2">إعادة تعيين كلمة المرور</h1>
              <p className="text-slate-600 text-sm">أدخل بريدك الإلكتروني لإرسال رابط التحقق</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:border-accent transition-colors"
                />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                إرسال رابط التحقق
              </Button>
            </form>

            <div className="text-center mt-6">
              <Link href="/login" className="text-accent hover:underline text-sm flex items-center justify-center gap-2">
                <ArrowLeft size={16} />
                العودة للدخول
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-primary mb-2">تحقق من بريدك الإلكتروني</h1>
              <p className="text-slate-600">
                أرسلنا لك رابط تعيين كلمة مرور جديدة على
              </p>
              <p className="font-medium text-primary mt-2">{email}</p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-900">
                قد يستغرق الوصول إلى البريد بعض الدقائق. تحقق من مجلد الرسائل غير المرغوب إذا لم تجد الرسالة.
              </p>
            </div>

            <Link href="/login">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                العودة للدخول
              </Button>
            </Link>
          </>
        )}
      </Card>
    </div>
  )
}
