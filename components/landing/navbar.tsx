// React & Next
import Link from "next/link";

// components
import { Button } from "@/components/ui/button";
import LocaleSwitcher from "@/components/utilities/language-switcher";

// auth
import { auth } from "@/auth";

// primsa types
import { UserRole } from "@prisma/client";

export async function Navbar() {
  // session
  const session = await auth();

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo and University Branding */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">س</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-bold text-sm text-primary">سراج</span>
            <span className="text-xs text-slate-500">جامعة قناة السويس</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="#about"
            className="text-slate-600 hover:text-primary transition-colors text-sm"
          >
            عن الجامعة
          </Link>
          <Link
            href="#features"
            className="text-slate-600 hover:text-primary transition-colors text-sm"
          >
            المميزات
          </Link>
          <Link
            href="#programs"
            className="text-slate-600 hover:text-primary transition-colors text-sm"
          >
            البرامج
          </Link>
          <Link
            href="#stats"
            className="text-slate-600 hover:text-primary transition-colors text-sm"
          >
            الإحصائيات
          </Link>
          <Link
            href="#contact"
            className="text-slate-600 hover:text-primary transition-colors text-sm"
          >
            تواصل معنا
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2">
          {/* locale switcher */}
          <LocaleSwitcher />
          {/* navigations */}
          {session?.user ? (
            <Link
              href={
                session?.user.role === UserRole.supervisor
                  ? "/supervisor"
                  : "/dashboard"
              }
            >
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-slate-50 hover:text-slate-400 text-sm"
              >
                لوحة التحكم
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/register" className="hidden sm:block">
                <Button className="bg-primary hover:bg-primary/90 text-white text-sm">
                  قدّم الآن
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-slate-50 text-sm"
                >
                  دخول
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
