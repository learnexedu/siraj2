"use client";
// React & Next
import React from "react";
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";

// icons
import { LogOut } from "lucide-react";

export function SignOutPage() {
  const [isLeaving, setIsLeaving] = React.useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div
        className={`text-center z-10 transition-all duration-1000 ${
          isLeaving ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        {/* Logout Icon */}
        <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent/50">
          <LogOut
            className="w-10 h-10 text-accent animate-spin"
            style={{ animationDuration: "3s" }}
          />
        </div>

        {/* Main Text */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          شكراً لاستخدامك سراج
        </h1>

        <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
          تم تسجيل خروجك بنجاح. يتم تحويلك إلى الصفحة الرئيسية...
        </p>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce"></div>
          <div
            className="w-3 h-3 bg-accent rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-3 h-3 bg-accent rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>

        {/* Manual Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-accent hover:bg-accent/90 text-primary px-8">
              العودة إلى الرئيسية
            </Button>
          </Link>
          <Link href="/login">
            <Button
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8"
            >
              تسجيل دخول جديد
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
