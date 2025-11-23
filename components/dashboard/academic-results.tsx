'use client'

import { Card } from '@/components/ui/card'

const academicData = [
  {
    semester: 'الفصل الأول 2024-2025',
    courses: [
      { code: 'CS 501', name: 'خوارزميات متقدمة', grade: 'A+', score: 95 },
      { code: 'CS 502', name: 'أنظمة قواعد البيانات', grade: 'A', score: 92 },
      { code: 'CS 503', name: 'البرمجة الموزعة', grade: 'B+', score: 88 },
    ]
  }
]

export function AcademicResults() {
  const calculateGPA = (courses: any[]) => {
    const gradePoints: Record<string, number> = {
      'A+': 4.0, 'A': 4.0, 'A-': 3.7,
      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
      'D': 1.0, 'F': 0.0
    }
    const total = courses.reduce((sum, course) => sum + (gradePoints[course.grade] || 0), 0)
    return (total / courses.length).toFixed(2)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-primary">النتائج الأكاديمية</h1>

      {academicData.length > 0 ? (
        <div className="space-y-6">
          {academicData.map((term, index) => (
            <Card key={index} className="p-8 border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary">{term.semester}</h2>
                <div className="bg-accent/20 px-4 py-2 rounded-lg">
                  <p className="text-sm text-slate-600">المعدل الفصلي</p>
                  <p className="text-xl font-bold text-accent">{calculateGPA(term.courses)}</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-right py-3 px-4 font-bold text-primary">رمز المادة</th>
                      <th className="text-right py-3 px-4 font-bold text-primary">اسم المادة</th>
                      <th className="text-right py-3 px-4 font-bold text-primary">التقدير</th>
                      <th className="text-right py-3 px-4 font-bold text-primary">الدرجة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {term.courses.map((course, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                        <td className="py-3 px-4 text-primary font-medium">{course.code}</td>
                        <td className="py-3 px-4 text-slate-600">{course.name}</td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                            course.grade.startsWith('A') ? 'bg-green-100 text-green-700' :
                            course.grade.startsWith('B') ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {course.grade}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-primary font-bold">{course.score}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="p-12 text-center border-slate-200">
          <h3 className="text-xl font-bold text-slate-600 mb-2">لا توجد بيانات نتائج حتى الآن</h3>
          <p className="text-slate-500">
            سيتم عرض نتائجك الأكاديمية هنا عند توفرها من قبل لجنة القبول
          </p>
        </Card>
      )}
    </div>
  )
}
