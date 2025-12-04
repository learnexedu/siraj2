"use client";
// React & Link
import Link from "next/link";
import { usePathname } from "next/navigation";

// utils
import { cn } from "@/lib/utils";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  // path
  const pathname = usePathname();

  // active
  const isActive = href.startsWith("#") === false && pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-1 rounded-md transition-all font-semibold relative",
        "hover:text-accent hover:bg-accent/10",
        isActive && "bg-accent/15 text-accent-foreground shadow-sm"
      )}
    >
      {children}
    </Link>
  );
}
