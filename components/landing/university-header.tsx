'use client'

export function UniversityHeader() {
  return (
    <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white">
      <div className="container mx-auto text-center">
        <div className="mb-6 animate-fade-in">
          <h2 className="text-sm font-semibold text-accent mb-2 tracking-widest">نظام إدارة التقديمات</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            جامعة قناة السويس - كلية الهندسة
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto text-balance">
            نظام سراج - منصة متكاملة لإدارة تقديمات الدراسات العليا والبكالوريوس
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-white/70 text-sm mt-8">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            <span>كلية الهندسة</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            <span>برامج متقدمة</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
            <span>معايير عالمية</span>
          </div>
        </div>
      </div>
    </section>
  )
}
