"use client";
// React & Next
import React, { useTransition } from "react";
import Link from "next/link";

// components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// utils
import { findDegree } from "@/utils";

// prisma
import { Degree, Program } from "@prisma/client";

// constant
import { departments } from "@/constants/admin";

// icons
import { BookOpen, Clock, Users, ArrowLeft } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

// props
interface Props {
  programs: Program[];
}

const Programs = ({ programs }: Props) => {
  // intl
  const t = useTranslations("programs");

  // states
  const [selectedType, setSelectedType] = React.useState<0 | 2 | 3 | 4>(0);

  // locale
  const locale = useLocale();

  // is en
  const isEn = locale === "en";

  // degree filter
  const degreeFilter = {
    0: null,
    2: Degree.DIPLOMA,
    3: Degree.MASTER,
    4: Degree.DOCTORATE,
  } as const;

  // filter
  const filteredPrograms =
    degreeFilter[selectedType] === null
      ? programs
      : programs.filter((p) => p.degree === degreeFilter[selectedType]);

  // buttons
  const filterButtons = [
    { id: 0, label: isEn ? "All" : "الكل" },
    { id: 2, label: isEn ? "Diploma" : "دبلومة" },
    { id: 3, label: isEn ? "Master" : "ماجستير" },
    { id: 4, label: isEn ? "Doctorate" : "دكتوراه" },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            {t("title")}
          </h1>
          <p className="text-lg text-muted-foreground">{t("p2")}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filterButtons.map((btn) => (
            <Button
              key={btn.id}
              onClick={() => setSelectedType(btn.id as 0 | 2 | 3 | 4)}
              variant={selectedType === btn.id ? "default" : "outline"}
              className="min-w-[120px]"
            >
              {btn.label}
            </Button>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredPrograms.map((program) => (
            <Card
              key={program.id}
              className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent/50 hover:-translate-y-2"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <BookOpen className="w-10 h-10 text-accent" />
                  <div className="flex flex-col gap-2 items-end">
                    <Badge variant="secondary" className="text-sm">
                      {/* {program.duration} */}
                      {t("years")}
                    </Badge>
                    <Badge
                      variant={false ? "default" : "destructive"}
                      className="text-xs"
                    >
                      {false ? t("available") : t("full")}
                    </Badge>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground leading-tight">
                  {(program.name as Record<string, string>)[locale]}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2">
                  {(program.overview as Record<string, string>)[locale]}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{t("duration")}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">
                      {t("availableSeats")}: {Number(program.departmentId) * 10}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    {t("specialisation")}:
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {isEn
                        ? program.degree.toLowerCase()
                        : findDegree(program.degree as Degree)?.label}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {isEn
                        ? String(
                            departments[Number(program.departmentId) - 1].type
                          ).toLowerCase()
                        : departments[Number(program.departmentId) - 1].label}
                    </Badge>
                  </div>

                  <Link href={`/programs/${program.id}`}>
                    <Button className="w-full" variant="outline">
                      {t("details")} <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              لا توجد برامج متاحة في هذا التصنيف
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programs;
