// React & Next
import { Card, CardContent } from "@/components/ui/card";

// intl
import { getTranslations } from "next-intl/server";

// icons
import { Target, Eye, Award } from "lucide-react";

// motion
import * as motion from "motion/react-client";

const About = async () => {
  // intl
  const t = await getTranslations("about");

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Animate header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                {t("sectionTitle")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("sectionDesc")}
              </p>
            </div>
          </motion.div>

          {/* Animate cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0, duration: 0.6 }}
            >
              <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-accent to-accent/70 flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {t("vision.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("vision.desc")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-primary to-primary/70 flex items-center justify-center mx-auto">
                    <Eye className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {t("mission.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("mission.desc")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Card className="border-2 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-linear-to-br from-accent to-accent/70 flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {t("goals.title")}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("goals.desc")}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Animate whyChoose section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-linear-to-br from-secondary to-secondary/50 rounded-3xl p-12 border-2 border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-foreground">
                    {t("whyChoose.title")}
                  </h3>
                  <ul className="space-y-4">
                    {Array.from({ length: 5 }, (_, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-lg text-foreground">
                          {t(`whyChoose.items.item${index + 1}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {t("stats.graduates")}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {t("stats.graduatesLabel")}
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                    <div className="text-5xl font-bold text-accent mb-2">
                      {t("stats.students")}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {t("stats.studentsLabel")}
                    </div>
                  </div>
                  <div className="bg-card p-6 rounded-2xl shadow-lg border border-border">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {t("stats.faculty")}
                    </div>
                    <div className="text-lg text-muted-foreground">
                      {t("stats.facultyLabel")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
