'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle2, BarChart3, Users, Shield, Clock, Zap } from 'lucide-react'

const features = [
  {
    icon: CheckCircle2,
    title: 'تقديم سهل',
    description: 'واجهة بديهية تجعل عملية التقديم سريعة وخالية من التعقيدات'
  },
  {
    icon: BarChart3,
    title: 'تتبع فوري',
    description: 'تابع حالة طلبك مرحلة بمرحلة مع تحديثات حقيقية فورية'
  },
  {
    icon: Users,
    title: 'تواصل مباشر',
    description: 'التواصل المباشر مع المشرفين والحصول على الدعم السريع'
  },
  {
    icon: Shield,
    title: 'أمان عالي',
    description: 'بيانات محمية بأعلى معايير الأمان والتشفير الحديث'
  },
  {
    icon: Clock,
    title: 'توفير الوقت',
    description: 'قدّم طلبك في أي وقت ومن أي مكان بكل سهولة'
  },
  {
    icon: Zap,
    title: 'إجراءات سريعة',
    description: 'معالجة الطلبات بسرعة عالية مع الحفاظ على الجودة'
  }
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">مميزات نظام سراج</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            نظام متقدم يوفر لك كل ما تحتاجه لإدارة تقديمك بكفاءة واحترافية عالية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up border-slate-200 group hover:border-primary"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="w-12 h-12 bg-accent/20 group-hover:bg-accent/30 rounded-lg flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
