'use client'

export function Footer() {
  return (
    <footer className="bg-primary text-white py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                <span className="text-white font-bold">س</span>
              </div>
              <h3 className="font-bold text-lg">نظام سراج</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              منصة متكاملة لإدارة تقديمات الدراسات العليا والبكالوريوس في كلية الهندسة بجامعة قناة السويس
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">المميزات</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">البرامج</a></li>
              <li><a href="#stats" className="hover:text-white transition-colors">الإحصائيات</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">تواصل معنا</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">الدعم</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">الدليل الإرشادي</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">التواصل</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">قانوني</h4>
            <ul className="space-y-2 text-white/80 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">شروط الخدمة</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-white transition-colors">سياسة البيانات</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <p className="text-white/80 text-sm">
              <span className="font-semibold">جامعة قناة السويس - كلية الهندسة</span>
            </p>
            <p className="text-white/80 text-sm text-center md:text-right">
              جميع الحقوق محفوظة © 2025 نظام سراج
            </p>
          </div>
          <p className="text-white/70 text-xs text-center">
            تم التطوير بأحدث التقنيات | نظام آمن وموثوق للتقديمات الأكاديمية
          </p>
        </div>
      </div>
    </footer>
  )
}
