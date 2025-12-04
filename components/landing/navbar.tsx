// React & Next
import Link from "next/link";

// intl
import { getTranslations } from "next-intl/server";

// components
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
} from "@/components/ui/zsheet";
import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import NavLink from "@/components/landing/navlinks";
import SignoutBtn from "@/components/shared/navigation/signout-btn";
import LocaleSwitcher from "@/components/shared/utilities/language-switcher";

// lib
import { authUser } from "@/lib/auth";

// icons
import { Menu } from "lucide-react";

const Navbar = async () => {
  // auth
  const user = await authUser();

  // next intel
  const t = await getTranslations("navbar");

  // layout
  const layout = await getTranslations("layout");

  // data
  const navItems = [
    { label: t("home"), href: "/" },
    { label: t("programs"), href: "/programs" },
    { label: t("contact"), href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-xs">
      <div className="container mx-auto px-4">
        <div className="flex flex-row-reverse items-center justify-between h-20">
          {/* logo */}
          <Logo />

          {/* desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Locale switcher */}
            <LocaleSwitcher />
            {/* links */}
            <Button className="bg-linear-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-bold">
              <Link href={user ? "/dashboard" : "/login"}>
                {user ? t("dashboard") : t("apply")}
              </Link>
            </Button>
          </div>

          {/* mobile */}
          <div className="md:hidden flex flex-row-reverse items-center gap-2">
            {/* locale switcher in mobile */}
            <LocaleSwitcher />

            {/* mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>

              <SheetContent
                className="w-10/12 max-w-sm"
                side={layout("dir") === "rtl" ? "right" : "left"}
              >
                <SheetHeader>
                  <SheetTitle />
                  {/* logo */}
                  <Logo />
                </SheetHeader>

                {/* sheet body */}
                <div className="flex flex-col gap-5 mx-4">
                  {navItems.map((item) => (
                    <NavLink key={item.href} href={item.href}>
                      {item.label}
                    </NavLink>
                  ))}

                  <Button className="bg-linear-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-bold w-full">
                    <Link href={user ? "/dashboard" : "/login"}>
                      {user ? t("dashboard") : t("apply")}
                    </Link>
                  </Button>
                </div>

                <SheetFooter>
                  {/* sign out */}
                  <SignoutBtn />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
