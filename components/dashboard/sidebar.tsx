"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Home, User, FileText, BookOpen, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "اللوحة الرئيسية", href: "/dashboard" },
  { icon: User, label: "معلومات الطالب", href: "/dashboard/student-info" },
  {
    icon: FileText,
    label: "حالة الطلب",
    href: "/dashboard/application-status",
  },
  { icon: BookOpen, label: "النتائج الأكاديمية", href: "/dashboard/results" },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-40 p-2 bg-primary text-white rounded-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 right-0 h-full w-64 bg-primary text-white transform transition-transform duration-300
        md:static md:translate-x-0
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        z-30
      `}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold">س</span>
            </div>
            <span className="font-bold text-lg">سراج</span>
          </div>

          <nav className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                    ${
                      isActive
                        ? "bg-white/20 border-l-4 border-accent"
                        : "hover:bg-white/10"
                    }
                  `}
                >
                  <Icon size={20} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-6 right-6 left-6">
          <Link href="/logout">
            <Button className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30 flex items-center justify-center gap-2">
              <LogOut size={20} />
              تسجيل الخروج
            </Button>
          </Link>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
        />
      )}
    </>
  );
}
