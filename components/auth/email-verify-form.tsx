"use client";
// React & Next
import React from "react";
import Link from "next/link";

// packages
import z from "zod";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// components
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "sonner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// handlers
import { verifyToken } from "@/handlers/auth/verify";

// lib
import { sendEmail } from "@/lib/mail";

// schemas
import { VerifySchema } from "@/schemas";

// icons
import { CheckCircle2, ArrowRight } from "lucide-react";

// schema type
type VerifyFormValues = z.infer<typeof VerifySchema>;

// props
interface Props {
  otp: string;
  name: string;
  email: string;
}

export function EmailVerifyForm({ email, name, otp }: Props) {
  // states
  const [loading, setLoading] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(60);
  const [resendActive, setResendActive] = React.useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<VerifyFormValues>({
    resolver: zodResolver(VerifySchema),
    defaultValues: { code: "" },
  });

  // countdown timer logic
  React.useEffect(() => {
    if (timeLeft <= 0) {
      setResendActive(true);
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // on sumbit
  const onSubmit = async (data: VerifyFormValues) => {
    // laoding state
    setLoading(true);

    // verify token
    const response = await verifyToken(email, data.code);

    if (response.state) {
      // toast
      toast.success("تم التحقق من البريد الإلكتروني بنجاح");
    } else {
      // laoding state
      setLoading(false);
      // toast
      toast.error("الرمز غير صحيح، حاول مرة أخرى");
    }
  };

  // resend otp
  const handleResend = async () => {
    // upadate states
    if (!resendActive) return;
    setResendActive(false);
    setTimeLeft(60);

    // resend
    try {
      await sendEmail(email, name, otp);
      toast.success("تم إعادة إرسال رمز التحقق بنجاح");
    } catch {
      toast.error("فشل إعادة إرسال الرمز، حاول لاحقاً");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg border-slate-200 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold text-black mb-2">
          تحقق من بريدك الإلكتروني
        </h1>
        <p className="text-slate-600 mb-2">لقد أرسلنا لك رمز التحقق على</p>
        <p className="text-black font-medium mb-8">{email}</p>

        <form onSubmit={handleSubmit(onSubmit)} dir="ltr" className="space-y-6">
          <Controller
            name="code"
            control={control}
            render={({ field }) => (
              <>
                <InputOTP
                  maxLength={5}
                  value={field.value}
                  onChange={field.onChange}
                >
                  <InputOTPGroup className="flex gap-x-3 w-fit mx-auto">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        id={`otp-${index}`}
                        className="w-12 h-12 text-center border-2 border-slate-300 rounded-lg font-bold text-xl focus:outline-hidden focus:border-accent transition-colors"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
                {errors.code && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.code.message}
                  </p>
                )}
              </>
            )}
          />

          <Button
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white"
            disabled={loading}
          >
            {loading ? "جارٍ التحقق..." : "تأكيد البريد الإلكتروني"}
          </Button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-slate-600 text-sm mb-4">لم تتلق الرمز؟</p>
          <button
            onClick={handleResend}
            disabled={!resendActive}
            className={`font-medium ${
              resendActive
                ? "text-black hover:underline"
                : "text-slate-400 cursor-not-allowed"
            }`}
          >
            {resendActive ? "إعادة الإرسال" : `إعادة الإرسال (${timeLeft}s)`}
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-200">
          <Link
            href="/register"
            className="text-black hover:underline text-sm flex items-center justify-center gap-2"
          >
            <ArrowRight size={16} />
            العودة للتسجيل
          </Link>
        </div>
      </Card>
    </div>
  );
}
