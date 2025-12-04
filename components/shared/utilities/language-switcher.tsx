"use client";
// next intel
import { useLocale } from "next-intl";
import { setUserLocale } from "@/i18n/services";

// components
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

// icons
import { Languages } from "lucide-react";

export default function LocaleSwitcher() {
  // locale
  const locale = useLocale();

  // change
  async function onChange(locale: "ar" | "en") {
    //set cookie
    await setUserLocale(locale);

    // refresh
    // window.location.reload();
  }

  return (
    <Select onValueChange={onChange} defaultValue={locale}>
      <SelectTrigger className="w-fit rounded-sm p-2 hover:bg-slate-200">
        <Languages className="h-5 w-5 text-slate-600" />
      </SelectTrigger>

      <SelectContent align="end" className="bg-white">
        <SelectItem value="en">English</SelectItem>
        <SelectItem value="ar">العربية</SelectItem>
      </SelectContent>
    </Select>
  );
}
