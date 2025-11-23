"use client";

import { Card } from "@/components/ui/card";

const stats = [
  { number: "1500+", label: "طالب قبول", sublabel: "خلال السنوات الماضية" },
  { number: "50+", label: "عضو هيئة تدريس", sublabel: "متخصصون وخبراء" },
  { number: "24/7", label: "الدعم الفني", sublabel: "للإجابة على استفساراتك" },
];

export function Stats() {
  return (
    <section id="stats" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            إحصائيات و إنجازات
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            نحن نفخر بإنجازاتنا وبثقة آلاف الطلاب بنا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center border-slate-200 hover:shadow-lg transition-all animate-fade-in-up"
              style={{ animationDelay: `${index * 75}ms` }}
            >
              <div className="text-accent text-4xl font-bold mb-2">
                {stat.number}
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">
                {stat.label}
              </h3>
              <p className="text-sm text-slate-600">{stat.sublabel}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
