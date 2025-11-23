"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">تواصل معنا</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            هل لديك أي استفسارات أو احتجت لمساعدة؟ فريقنا جاهز لمساعدتك
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center border-slate-200 hover:shadow-lg hover:border-primary transition-all animate-fade-in-up">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">
              البريد الإلكتروني
            </h3>
            <p className="text-slate-600 text-sm mb-2">
              admissions@suez-eng.edu.eg
            </p>
            <p className="text-slate-500 text-xs">للتقديم والاستفسارات</p>
          </Card>

          <Card
            className="p-6 text-center border-slate-200 hover:shadow-lg hover:border-primary transition-all animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">الهاتف</h3>
            <p className="text-slate-600 text-sm mb-2">+20 69 3620180</p>
            <p className="text-slate-500 text-xs">
              من السبت للخميس 8 صباحًا - 4 مساءً
            </p>
          </Card>

          <Card
            className="p-6 text-center border-slate-200 hover:shadow-lg hover:border-primary transition-all animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">العنوان</h3>
            <p className="text-slate-600 text-sm mb-2">
              كلية الهندسة - جامعة قناة السويس
            </p>
            <p className="text-slate-500 text-xs">الإسماعيلية، مصر</p>
          </Card>
        </div>

        {/* Contact Form */}
        <Card
          className="p-8 max-w-2xl mx-auto border-slate-200 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                الاسم الكامل
              </label>
              <input
                type="text"
                placeholder="أدخل اسمك الكامل"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                الموضوع
              </label>
              <select className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all">
                <option>اختر الموضوع</option>
                <option>استفسار عن التقديم</option>
                <option>معلومات عن البرامج</option>
                <option>شكوى أو اقتراح</option>
                <option>أخرى</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                الرسالة
              </label>
              <textarea
                placeholder="أدخل رسالتك"
                rows={4}
                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
              ></textarea>
            </div>
            <Button
              className="w-full bg-primary hover:bg-primary/90 text-white"
              type="button"
            >
              <a href="http://wa.me/201222166530" target="_blank">
                إرسال الرسالة
              </a>
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
