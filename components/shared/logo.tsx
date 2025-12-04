// icons
import { useAr } from "@/hooks/use-locale";
import { GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

const Logo = () => {
  // locale
  const t = useTranslations("layout");

  return (
    <a
      href="#home"
      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
    >
      <div className="flex items-center gap-2">
        <GraduationCap className="w-8 h-8 text-accent" />
        <span className="text-2xl font-bold text-transparent bg-linear-to-r from-primary to-accent bg-clip-text">
          {t("logo")}
        </span>
      </div>
    </a>
  );
};

export default Logo;
