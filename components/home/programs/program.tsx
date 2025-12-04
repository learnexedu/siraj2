// React & Next
import Link from "next/link";

// components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// prisma
import { Degree, Program } from "@prisma/client";

// utils
import { findDegree } from "@/utils";

// constants
import { departments } from "@/constants/admin";

// icons
import {
  ArrowRight,
  BookOpen,
  Clock,
  Users,
  CheckCircle,
  Building2,
  DollarSign,
  AlertCircle,
} from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";

// props
interface Props {
  program: Program;
}

const ProgramDetails = async ({ program }: Props) => {
  // intl
  const t = await getTranslations("programs");

  // locale
  const locale = await getLocale();

  // is en
  const isEn = locale === "en";

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link href="/programs">
          <Button variant="ghost" className="mb-8">
            <ArrowRight className="w-4 h-4 ml-2" />
            {t("return")}
          </Button>
        </Link>

        {/* Program Header */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen className="w-12 h-12 text-accent" />
                <h1 className="text-2xl md:text-3xl font-bold text-foreground">
                  {(program.name as Record<string, string>)[locale]}
                </h1>
              </div>
              <p className="text-base text-muted-foreground">
                {(program.objectives as Record<string, string>)[locale]}
              </p>
            </div>
            <Badge
              variant={false ? "default" : "destructive"}
              className="text-base px-4 py-2"
            >
              {false ? t("available") : t("full")}
            </Badge>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <Clock className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    {" "}
                    {t("duration2")}
                  </p>
                  <p className="text-lg font-bold"> {t("years")}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <Users className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("available_seats")}
                  </p>
                  <p className="text-lg font-bold">
                    {Number(program.departmentId) * 10}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <DollarSign className="w-8 h-8 text-accent" />
                <div>
                  <p className="text-sm text-muted-foreground">{t("fees")}</p>
                  <p className="text-lg font-bold">{1000}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Program Details */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Department */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="w-6 h-6 text-accent" />
                {t("department")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg">
                {isEn
                  ? String(
                      departments[Number(program.departmentId) - 1].type
                    ).toLowerCase()
                  : departments[Number(program.departmentId) - 1].label}
              </p>
            </CardContent>
          </Card>

          {/* Specializations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-accent" />
                {t("specializations")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
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
            </CardContent>
          </Card>

          {/* Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-accent" />
                {t("admission_requirements")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {/* {program.requirements.map((req, idx) => ( */}
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-base">{t("under_review")} </span>
                </li>
                {/* ))} */}
              </ul>
            </CardContent>
          </Card>

          {/* Availability Status */}
          {false && (
            <Card className="border-destructive/50 bg-destructive/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-destructive mb-2">
                      البرنامج مكتمل حالياً
                    </h3>
                    <p className="text-muted-foreground">
                      تم استيفاء العدد المطلوب من الطلاب لهذا البرنامج. يمكنك
                      التسجيل في قائمة الانتظار أو استكشاف البرامج الأخرى
                      المتاحة.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          <Separator />

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" disabled={!false} className="text-lg px-8 py-6">
              {false ? "قدم الآن" : "انضم لقائمة الانتظار"}
            </Button>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 w-full"
              >
                تواصل معنا للاستفسار
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;
