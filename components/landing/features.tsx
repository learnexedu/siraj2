// React & Next
import { Card, CardContent } from "@/components/ui/card";

// intl
import { getTranslations } from "next-intl/server";

// icons
import {
  FileText,
  Calendar,
  Bell,
  Database,
  Shield,
  TrendingUp,
} from "lucide-react";

// motion
import * as motion from "motion/react-client";

// feature
const featureItems = [
  {
    icon: FileText,
    titleKey: "feature1.title",
    descKey: "feature1.description",
  },
  {
    icon: Calendar,
    titleKey: "feature2.title",
    descKey: "feature2.description",
  },
  {
    icon: Database,
    titleKey: "feature3.title",
    descKey: "feature3.description",
  },
  { icon: Bell, titleKey: "feature4.title", descKey: "feature4.description" },
  { icon: Shield, titleKey: "feature5.title", descKey: "feature5.description" },
  {
    icon: TrendingUp,
    titleKey: "feature6.title",
    descKey: "feature6.description",
  },
];

const Features = async () => {
  // intl
  const t = await getTranslations("features");

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("sectionDesc")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featureItems.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-accent/50 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-accent to-accent/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(feature.descKey)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
