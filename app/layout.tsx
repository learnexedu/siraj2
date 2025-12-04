// React & Next
import type { Metadata } from "next";
import { Baloo_Bhaijaan_2 } from "next/font/google";

// next intel
import { NextIntlClientProvider, useLocale } from "next-intl";

// components
import { Toaster } from "@/components/ui/sonner";

// css
import "@/app/globals.css";

// fonts
const baloo = Baloo_Bhaijaan_2({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "نظام سراج - إدارة الدراسات العليا والبكالوريوس",
  description:
    "منصة متكاملة لإدارة التقديمات والتطبيقات للدراسات العليا والبكالوريوس",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // locale
  const locale = useLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={baloo.className}>
        {/* next intl */}
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
        {/* toast */}
        <Toaster richColors />
      </body>
    </html>
  );
}
