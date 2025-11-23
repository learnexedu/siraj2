"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, BookOpen, Trophy } from "lucide-react";

export function Programs() {
  return (
    <section id="programs" className="py-20 px-4 bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            برامجنا الأكاديمية
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            برامج متميزة مصممة لتلبية احتياجات سوق العمل والتطور الأكاديمي
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Graduate Programs */}
          <Card
            id="graduate"
            className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up border-slate-200"
          >
            <div className="h-40 bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent)]"></div>
              </div>
              <GraduationCap className="w-24 h-24 text-white opacity-90 relative z-10" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-accent" />
                <h3 className="text-2xl font-bold text-primary">
                  الدراسات العليا
                </h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                برامج ماجستير ودكتوراه متقدمة تجمع بين التعليم النظري المتطور
                والبحث العلمي الأصيل
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  برامج ماجستير متخصصة
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  إشراف من أساتذة ذوي خبرة دولية
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  مختبرات ومرافق بحثية متقدمة
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  فرص للنشر والتعاون البحثي
                </li>
              </ul>
              <Link href="/register" className="w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  قدّم الآن
                </Button>
              </Link>
            </div>
          </Card>

          {/* Undergraduate Programs */}
          <Card
            id="undergraduate"
            className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-fade-in-up border-slate-200"
            style={{ animationDelay: "100ms" }}
          >
            <div className="h-40 bg-gradient-to-br from-slate-600 to-slate-800 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,white,transparent)]"></div>
              </div>
              <BookOpen className="w-24 h-24 text-white opacity-90 relative z-10" />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <Trophy className="w-5 h-5 text-slate-600" />
                <h3 className="text-2xl font-bold text-slate-700">
                  برامج البكالوريوس
                </h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                برامج بكالوريوس شاملة تجمع بين المهارات الأساسية والتطبيق العملي
                المباشر
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                  برامج هندسية متنوعة
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                  هيئة تدريس من أفضل الجامعات
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                  تدريب عملي شامل في الصناعة
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-2 h-2 bg-slate-600 rounded-full"></span>
                  شهادات معترف بها دوليًا
                </li>
              </ul>
              <Button
                disabled
                className="w-full bg-slate-300 text-slate-600 cursor-not-allowed"
              >
                قريبًا
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
