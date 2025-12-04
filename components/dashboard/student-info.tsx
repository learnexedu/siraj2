'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function StudentInfo() {
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({
    fullName: 'أحمد محمد علي',
    nationalId: '1234567890',
    phone: '0551234567',
    email: 'ahmed@email.com',
    birthDate: '1998-05-15',
    age: '26',
    country: 'المملكة العربية السعودية',
    address: 'الرياض - حي العليا'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">معلومات الطالب</h1>
        <Button
          onClick={() => setEditMode(!editMode)}
          className={editMode ? 'bg-red-500 hover:bg-red-600' : 'bg-accent hover:bg-accent/90'}
        >
          {editMode ? 'إلغاء' : 'تعديل'}
        </Button>
      </div>

      <Card className="p-8 border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">الاسم الكامل</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:cursor-not-allowed focus:outline-hidden focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">رقم الهوية</label>
            <input
              type="text"
              name="nationalId"
              value={formData.nationalId}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:cursor-not-allowed focus:outline-hidden focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">رقم الهاتف</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:cursor-not-allowed focus:outline-hidden focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:cursor-not-allowed focus:outline-hidden focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">تاريخ الميلاد</label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:cursor-not-allowed focus:outline-hidden focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">العمر</label>
            <input
              type="text"
              name="age"
              value={formData.age}
              disabled
              className="w-full px-4 py-2 border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">الدولة</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:cursor-not-allowed focus:outline-hidden focus:border-accent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-primary mb-2">العنوان</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              disabled={!editMode}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg disabled:bg-slate-50 disabled:cursor-not-allowed focus:outline-hidden focus:border-accent"
            />
          </div>
        </div>

        {editMode && (
          <div className="mt-8 flex gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              حفظ التغييرات
            </Button>
            <Button variant="outline" onClick={() => setEditMode(false)}>
              إلغاء
            </Button>
          </div>
        )}
      </Card>
    </div>
  )
}
