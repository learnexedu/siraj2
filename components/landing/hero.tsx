"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-0 pb-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
          {/* Left Side - Content */}
          <div className="animate-fade-in">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-semibold text-accent">
                تجربة تقديم سلسة وآمنة
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 text-balance leading-tight">
              ابدأ رحلتك الأكاديمية معنا
            </h2>
            <p className="text-xl text-slate-600 mb-4 leading-relaxed">
              نظام سراج يوفر لك منصة متكاملة لتقديم طلبك بكل سهولة وأمان، مع
              تتبع مستمر لحالة التقديم والتواصل المباشر مع فريق العمل
            </p>
            <p className="text-slate-500 mb-8 leading-relaxed">
              اختر من بيننا برامج دراسية متميزة تجمع بين التعليم النظري والعملي،
              يشرف عليها أساتذة متخصصون وذوو خبرة عالية في مجالاتهم
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register" className="flex-1 sm:flex-none">
                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white rounded-lg"
                >
                  ابدأ التقديم الآن
                  <ArrowLeft className="mr-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#features" className="flex-1 sm:flex-none">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-slate-50 rounded-lg"
                >
                  استكشف المميزات
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12">
              <div>
                <p className="text-3xl font-bold text-primary">+500</p>
                <p className="text-sm text-slate-600">خريج متميز</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">98%</p>
                <p className="text-sm text-slate-600">نسبة التوظيف</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">10+</p>
                <p className="text-sm text-slate-600">برامج متقدمة</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-4">
                <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                <div className="h-4 bg-primary/10 rounded w-full"></div>
                <div className="h-4 bg-primary/10 rounded w-5/6"></div>
                <div className="pt-6 border-t border-slate-200 mt-6">
                  <div className="flex gap-2 mb-4">
                    <div className="w-3 h-3 bg-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                    <div className="w-3 h-3 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
