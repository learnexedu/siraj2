"use client";
// React & Next
import React from "react";
import Link from "next/link";

// components
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// packages
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// handlers
import { login } from "@/handlers/auth/signIn";

// schema
import { LogInSchema } from "@/schemas";

// icons
import { Eye, EyeOff, Loader2 } from "lucide-react";

type LoginSchema = z.infer<typeof LogInSchema>;

export function StudentLoginForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  // loading state
  const [loading, setLoading] = React.useState(false);

  // form
  const form = useForm<LoginSchema>({
    resolver: zodResolver(LogInSchema),
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginSchema) => {
    // loading state
    setLoading(true);

    // login
    const response = await login(data.email, data.password, false);

    // error
    if (response?.state === false) {
      // toast
      toast.error(response.message);

      // NEW: stop loading
      setLoading(false);
      return null;
    }

    // toast
    toast.success("تم تسجيل الدخول بنجاح!");

    // NEW: stop loading
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg border-slate-200">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">دخول الطالب</h1>
          <p className="text-slate-600 text-sm">سجل دخول إلى حسابك</p>
        </div>

        {/* Form */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-primary mb-2">
              البريد الإلكتروني
            </label>

            <Input
              type="email"
              placeholder="your@email.com"
              {...form.register("email")}
              className="border-slate-200"
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
                href="/forget-password"
                className="text-xs text-accent hover:underline"
              >
                هل نسيت كلمة المرور؟
              </Link>
            </div>

            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...form.register("password")}
                className="border-slate-200"
              />

              {/* show/hide password */}
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

          {/* remember Me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="w-4 h-4 accent-accent cursor-pointer"
            />
            <label htmlFor="rememberMe" className="text-sm text-slate-600">
              تذكرني
            </label>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-primary/90 text-white mt-6"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="animate-spin" size={18} />
                جاري تسجيل الدخول...
              </div>
            ) : (
              "دخول"
            )}
          </Button>
        </form>

        {/* Register */}
        <div className="text-center mt-6">
          <p className="text-slate-600 text-sm">
            لا تملك حساب؟{" "}
            <Link
              href="/register"
              className="text-accent hover:underline font-medium"
            >
              إنشاء حساب
            </Link>
          </p>
        </div>

        {/* Supervisor */}
        <div className="border-t border-slate-200 pt-6 mt-6">
          <p className="text-slate-600 text-xs text-center mb-3">
            هل أنت مشرف؟
          </p>
          <Link href="/auth/supervisor">
            <Button
              variant="outline"
              className="w-full border-slate-300 text-primary hover:bg-slate-50"
            >
              دخول المشرفين
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
