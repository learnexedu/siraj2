"use client";
// React & Next
import React from "react";
import Link from "next/link";

// packages
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// components
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// handlers
import { login } from "@/handlers/auth/signIn";

// schema
import { LogInSchema } from "@/schemas";

// icons
import { Eye, EyeOff, Loader2, Shield } from "lucide-react";
import { Input } from "../ui/input";

type LoginType = z.infer<typeof LogInSchema>;

export function SupervisorLoginForm() {
  const [loading, setLoading] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  // form
  const form = useForm<LoginType>({
    resolver: zodResolver(LogInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginType) => {
    // loading state
    setLoading(true);

    // login
    const response = await login(data.email, data.password, true);

    if (response?.state === false) {
      // error
      toast.error(response.message);
      // loading state
      setLoading(false);
      // return
      return;
    }

    // toast
    toast.success("تم تسجيل دخول المشرف بنجاح!");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-primary via-primary/95 to-primary/90 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <Card className="w-full max-w-md p-8 shadow-2xl border-0 relative z-10">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">
            دخول المشرفين
          </h1>
          <p className="text-slate-600 text-sm">
            أدخل بيانات المشرف للوصول إلى لوحة التحكم
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              البريد الإلكتروني المؤسسي
            </label>
            <Input
              type="email"
              placeholder="your@email.com"
              {...form.register("email")}
              className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
            {form.formState.errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-primary">
                كلمة المرور
              </label>
              <Link
                href="/supervisor/forget-password"
                className="text-xs text-primary hover:underline"
              >
                هل نسيت كلمة المرور؟
              </Link>
            </div>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...form.register("password")}
                className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {form.formState.errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              className="w-4 h-4 accent-primary cursor-pointer"
            />
            <label htmlFor="rememberMe" className="text-sm text-slate-600">
              تذكرني على هذا الجهاز
            </label>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white mt-6 font-bold"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin" size={18} />
                جاري تسجيل الدخول...
              </div>
            ) : (
              "دخول إلى لوحة التحكم"
            )}
          </Button>
        </form>

        {/* Support Info */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-xs text-slate-600 text-center mb-3">
            هل تواجه مشاكل في الدخول؟
          </p>
          <Button
            variant="outline"
            className="w-full border-slate-300 text-primary hover:bg-slate-50"
          >
            التواصل مع الدعم التقني
          </Button>
        </div>

        {/* Back to Student */}
        <div className="text-center mt-6">
          <p className="text-slate-600 text-sm">
            هل أنت طالب؟{" "}
            <Link
              href="/login"
              className="text-primary hover:underline font-medium"
            >
              دخول الطلاب
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
}
