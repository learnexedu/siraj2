"use client";
// React & Next
import React from "react";
import Link from "next/link";

// packages
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { isBefore, isAfter, parseISO } from "date-fns";

// components
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// icons
import { ArrowRight, CalendarDays } from "lucide-react";
import { createNewSemester } from "@/data/supervisor/semester";
import { SemesterType } from "@prisma/client";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { DatePicker } from "@/components/management/layout/datePicker";
import { semesterName } from "@/utils";

// schema
const SemesterSchema = z.object({
  code: z.string().min(3, "مطلوب رمز الفصل"),
  name: z.string(),
  type: z.nativeEnum(SemesterType, {
    required_error: "برجاء اختيار نوع الترم",
  }),
});

// type
type Schema = z.infer<typeof SemesterSchema>;

export default function CreateTermPage() {
  // state
  const [termType, setTermType] = React.useState<SemesterType>(
    SemesterType.TERM1
  );

  // dates
  const [startDate, setStartDate] = React.useState<string>("");
  const [endDate, setEndDate] = React.useState<string>("");
  const [examStartDate, setExamStartDate] = React.useState<string>("");
  const [examEndDate, setExamEndDate] = React.useState<string>("");
  const [withdrawalDate, setWithdrawalDate] = React.useState<string>("");

  const form = useForm({
    resolver: zodResolver(SemesterSchema),
    reValidateMode: "onChange",
    defaultValues: {
      code: "",
      name: "",
      type: SemesterType.TERM1,
    },
  });

  // on submit
  const onSubmit = async (data: Schema) => {
    try {
      // validate
      const v = validate(data.name, data.type);
      if (!v) return;

      // create
      const create = await createNewSemester(
        data.code,
        semesterName(data.name || "", data.type),
        startDate,
        endDate,
        examStartDate,
        examEndDate,
        withdrawalDate,
        data.type
      );

      // succes
      if (create) {
        toast.success("تم إنشاء الفصل الدراسي بنجاح");
        // return
        return;
      }

      // erro
      toast.error("حدث خطأ ما");
    } catch (error) {
      console.log(error);
      // erro
      toast.error("حدث خطأ ما");
    }
  };

  // validate
  const validate = (name: string, type: SemesterType) => {
    if ((!name || name.trim().length === 0) && type === SemesterType.CUSTOM) {
      // name
      toast.info("برجاء كتابة اسم الترم");
      return null;
    }

    if (
      !startDate ||
      !endDate ||
      !examStartDate ||
      !examEndDate ||
      !withdrawalDate
    ) {
      // dates
      toast.info("برجاء إدخال جميع التواريخ");
      return null;
    }

    // Convert to Date objects
    const start = parseISO(startDate);
    const end = parseISO(endDate);
    const examStart = parseISO(examStartDate);
    const examEnd = parseISO(examEndDate);
    const withdraw = parseISO(withdrawalDate);

    // start must be before end
    if (!isBefore(start, end)) {
      toast.error("يجب أن يكون تاريخ النهاية بعد تاريخ البداية");
      return null;
    }

    // exam start before exam end
    if (!isBefore(examStart, examEnd)) {
      toast.error("يجب أن تكون نهاية الاختبارات بعد بدايتها");
      return null;
    }

    // withdrawal must be after start
    if (!isAfter(withdraw, start) && !isBefore(withdraw, examEnd)) {
      toast.error(
        "يجب أن يكون تاريخ الانسحاب بعد تاريخ البداية وقبل نهاية الامتحانات"
      );
      return null;
    }

    return true;
  };

  //
  return (
    <div className="space-y-8 mx-2">
      {/* Back Button */}
      <Button variant="ghost">
        <Link href="/semesters" className="flex items-center gap-2">
          <ArrowRight size={18} /> العودة
        </Link>
      </Button>

      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <CalendarDays className="w-7 h-7" /> إنشاء فصل دراسي جديد
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 bg-white dark:bg-slate-800 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-700"
          >
            {/* Code */}
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمز الفصل</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="مثال: 2025-F1"
                      className="max-w-60"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>اسم الفصل</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ادخل اسم الفصل"
                      disabled={termType !== SemesterType.CUSTOM}
                      className="max-w-60"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Type */}
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نوع الفصل</FormLabel>
                  <Select
                    onValueChange={(v) => {
                      field.onChange(v);
                      setTermType(v as SemesterType);
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="اختر الفصل الدراسي" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value={SemesterType.TERM1}>
                          الفصل الأول
                        </SelectItem>
                        <SelectItem value={SemesterType.TERM2}>
                          الفصل الثاني
                        </SelectItem>
                        <SelectItem value={SemesterType.SUMMER}>
                          الصيف
                        </SelectItem>
                        <SelectItem value={SemesterType.CUSTOM}>
                          مخصص
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Dates grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label>تاريخ البداية</Label>
                <DatePicker date={startDate} setDate={setStartDate} />
              </div>
              <div className="space-y-2">
                <Label>تاريخ النهاية</Label>
                <DatePicker date={endDate} setDate={setEndDate} />
              </div>
            </div>

            {/* Exam / withdrawal grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label>بداية الاختبارات</Label>
                <DatePicker date={examStartDate} setDate={setExamStartDate} />
              </div>
              <div className="space-y-2">
                <Label>نهاية الاختبارات</Label>
                <DatePicker date={examEndDate} setDate={setExamEndDate} />
              </div>
              <div className="space-y-2">
                <Label>موعد الانسحاب النهائي</Label>
                <DatePicker date={withdrawalDate} setDate={setWithdrawalDate} />
              </div>
            </div>

            <Button type="submit" className="w-full text-lg py-3">
              إنشاء الفصل
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
