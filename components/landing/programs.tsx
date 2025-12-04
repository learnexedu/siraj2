// React & Next
import Link from "next/link";

// components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// intl
import { getLocale, getTranslations } from "next-intl/server";

// motion
import * as motion from "motion/react-client";

// prisma data
import { Degree } from "@prisma/client";
import { getProgramsForHome } from "@/data/programs";

// utils
import { findDegree } from "@/utils";

// constants
import { departments } from "@/constants/admin";

// icons
import { BookOpen, Clock, Users } from "lucide-react";

const Programs = async () => {
  // programs
  const programs = await getProgramsForHome();

  // intl
  const t = await getTranslations("programs");

  // locale
  const locale = await getLocale();
  // is en
  const isEn = locale === "en";

  return (
    <section id="programs" className="py-24 bg-secondary/30 space-y-10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("title")}
          </h2>
          <p className="text-lg text-muted-foreground">{t("p1")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {programs?.map(
            (program, index) =>
              program && (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/programs/${program.id}`}>
                    <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/50 hover:-translate-y-2">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                          <BookOpen className="w-10 h-10 text-accent" />
                          <Badge variant="secondary" className="text-sm">
                            {"سنتين"}
                          </Badge>
                        </div>

                        <h3 className="text-xl font-bold text-foreground leading-tight">
                          {(program?.name as Record<string, string>)[locale]}
                        </h3>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{t("duration")}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">
                              {/* الأماكن المتاحة: {program.seats} */}
                              {t("availableSeats")}:{" "}
                              {Number(program.departmentId) * 10}
                            </span>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-border">
                          <p className="text-sm font-semibold text-foreground mb-2">
                            {t("specialisation")}:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-xs">
                              {isEn
                                ? program.degree.toLowerCase()
                                : findDegree(program.degree as Degree)?.label}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {isEn
                                ? String(
                                    departments[
                                      Number(program.departmentId) - 1
                                    ].type
                                  ).toLowerCase()
                                : departments[Number(program.departmentId) - 1]
                                    .label}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              )
          )}
        </div>
      </div>
      <div className="w-fit mx-auto">
        <Link href="/programs">
          <Button size="lg" className="bg-accent text-slate-800 font-semibold">
            {t("button")}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default Programs;
