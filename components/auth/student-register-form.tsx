"use client";
// React & Next
import React from "react";
import Link from "next/link";

// shadcn/ui
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// packages
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// components
import { toast } from "sonner";

// prisma types
import { UserRole } from "@prisma/client";

// handlers
import { register } from "@/handlers/auth/register";

// schema
import { RegisterSchema } from "@/schemas";

// icons
import { Eye, EyeOff } from "lucide-react";

export function StudentRegisterForm() {
  // state
  const [loading, setLoading] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  // form
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    // loading state
    setLoading(true);

    // register
    const data = await register(
      values.name,
      values.email,
      values.password,
      UserRole.postgraduate
    );

    if (data.state === false) {
      // error
      toast.error(data.message || "حدث خطأ ما الرجاء المحاولة لاحقاً");
      // loading state
      setLoading(false);
      // return
      return null;
    }

    // success
    toast.success("تم إنشاء الحساب بنجاح 🎉");
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg border-slate-200">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">إنشاء حساب</h1>
          <p className="text-slate-600 text-sm">سجل الآن للدراسات العليا</p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الاسم الكامل</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="أدخل اسمك الكامل"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>البريد الإلكتروني</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      disabled={loading}
                      placeholder="your@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>كلمة المرور</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        disabled={loading}
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 left-2 flex items-center text-slate-500"
                      >
                        {showPassword ? (
                          <EyeOff size={18} />
                        ) : (
                          <Eye size={18} />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تأكيد كلمة المرور</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showConfirm ? "text" : "password"}
                        placeholder="••••••••"
                        disabled={loading}
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm(!showConfirm)}
                        className="absolute inset-y-0 left-2 flex items-center text-slate-500"
                      >
                        {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit */}
            <Button
              type="submit"
              className="w-full bg-primary"
              disabled={loading}
            >
              {loading ? "جاري الإنشاء..." : "إنشاء الحساب"}
            </Button>
          </form>
        </Form>

        <div className="text-center mt-4">
          <Link href="/login" className="text-sm border-b">
            لديك حساب بالفعل؟
          </Link>
        </div>
      </Card>
    </div>
  );
}
