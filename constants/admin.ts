import { DepartmentItem } from "@/types/layout";
import { Degree, DepartmentType, SemesterType } from "@prisma/client";

// review status
export const semesters = [
  {
    type: SemesterType.TERM1,
    label: "ترم أول",
  },
  {
    type: SemesterType.TERM2,
    label: "ترم ثان",
  },
  {
    type: SemesterType.SUMMER,
    label: "ترم صيفي",
  },
];
export const degrees: DepartmentItem[] = [
  {
    type: Degree.DIPLOMA,
    label: "دبلوم",
    style: "bg-blue-50 text-blue-700",
  },
  {
    type: Degree.BACHELOR,
    label: "بكالوريوس",
    style: "bg-purple-50 text-purple-700",
  },
  {
    type: Degree.MASTER,
    label: "ماجستير",
    style: "bg-yellow-50 text-yellow-700",
  },
  {
    type: Degree.DOCTORATE,
    label: "دكتوراه",
    style: "bg-green-50 text-green-700",
  },
];

export const departments: DepartmentItem[] = [
  {
    type: DepartmentType.CIVIL,
    label: "الهندسة المدنية",
    style: "bg-blue-50 text-blue-700",
  },
  {
    type: DepartmentType.ARCHITECTURE,
    label: "الهندسة المعمارية",
    style: "bg-purple-50 text-purple-700",
  },
  {
    type: DepartmentType.ELECTRICAL,
    label: "الهندسة الكهربائية",
    style: "bg-yellow-50 text-yellow-700",
  },
  {
    type: DepartmentType.MECHANICAL,
    label: "الهندسة الميكانيكية",
    style: "bg-green-50 text-green-700",
  },
];
