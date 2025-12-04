// components
import { Button } from "@/components/ui/button";

// intl
import { getTranslations } from "next-intl/server";

// icons
import { ArrowLeft } from "lucide-react";

const CTA = async () => {
  // intl
  const t = await getTranslations("cta");

  return (
    <section
      id="contact"
      className="py-24 bg-linear-to-br from-primary to-primary/90 text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* heading */}
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            {t("title")}
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="text-lg px-10 py-7 rounded-xl font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
            >
              {t("applyNow")}
              <ArrowLeft className="mr-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 rounded-xl font-bold border-2 border-primary-foreground hover:bg-primary-foreground text-gray-800 transition-all duration-300"
            >
              {t("contactUs")}
            </Button>
          </div>

          {/* stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">
                {t("stats.support.value")}
              </div>
              <div className="text-primary-foreground/80">
                {t("stats.support.label")}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">
                {t("stats.security.value")}
              </div>
              <div className="text-primary-foreground/80">
                {t("stats.security.label")}
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-accent">
                {t("stats.speed.value")}
              </div>
              <div className="text-primary-foreground/80">
                {t("stats.speed.label")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
