"use client";
// React & Next
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// components
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// auth
import { signOut } from "next-auth/react";

// icons
import { LogOut, ArrowRight } from "lucide-react";

export function SignOutForm() {
  // router
  const router = useRouter();

  // state
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSignOut = async () => {
    // load state
    setIsLoading(true);
    // logout process
    await signOut({
      callbackUrl: "/",
    });
  };

  const handleReturnHome = () => {
    // redirect to home
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 shadow-lg border-slate-200 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <LogOut className="w-8 h-8 text-blue-600" />
        </div>

        <h1 className="text-3xl font-bold text-primary mb-2">تسجيل الخروج</h1>
        <p className="text-slate-600 mb-8">
          هل أنت متأكد من رغبتك في تسجيل الخروج من حسابك؟
        </p>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleSignOut}
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 text-white"
          >
            {isLoading ? "جاري تسجيل الخروج..." : "تسجيل الخروج"}
          </Button>

          <Button
            onClick={handleReturnHome}
            variant="outline"
            disabled={isLoading}
            className="w-full border-slate-300 text-primary hover:bg-slate-50"
          >
            العودة إلى الرئيسية
          </Button>
        </div>

        {/* Back Link */}
        <div className="mt-6 pt-6 border-t border-slate-200">
          <Link
            href="/dashboard"
            className="text-accent hover:underline text-sm flex items-center justify-center gap-2"
          >
            <ArrowRight size={16} />
            العودة إلى لوحة التحكم
          </Link>
        </div>
      </Card>
    </div>
  );
}
