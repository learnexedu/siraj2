import { GraduationCap } from "lucide-react";
import { getTranslations } from "next-intl/server";

const Footer = async () => {
  // intl
  const t = await getTranslations("footer");

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* logo and description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-bold">{t("logo")}</h3>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              {t("description")}
            </p>
          </div>

          {/* quick links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">{t("quickLinks.title")}</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              {Array.from({ length: 4 }, (_, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-accent transition-colors">
                    {t(`quickLinks.items.item${index + 1}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold">{t("contact.title")}</h4>
            <div className="space-y-2 text-primary-foreground/80">
              {Array.from({ length: 3 }, (_, index) => (
                <p key={index}>{t(`contact.items.item${index + 1}`)}</p>
              ))}
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
