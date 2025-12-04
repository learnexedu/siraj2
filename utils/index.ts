// constants
import { degrees, departments, semesters } from "@/constants/admin";

// prisma types
import { Degree, DepartmentType, SemesterType } from "@prisma/client";

export const findDepartment = (type: DepartmentType) => {
  return departments.find((d) => d.type === type);
};

export const findDegree = (type: Degree) => {
  return degrees.find((d) => d.type === type);
};

export const semesterName = (name: string, type: SemesterType) => {
  //   custom name
  if (type === SemesterType.CUSTOM) return name;
  //   names
  return semesters.find((s) => s.type === type)?.label || name;
};

