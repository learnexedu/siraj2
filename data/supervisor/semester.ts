// prisma
import prisma from "@/lib/db/prisma";

// prisma types
import { SemesterType } from "@prisma/client";

export const createNewSemester = async (
  code: string,
  name: string,
  startDate: string,
  endDate: string,
  examStartDate: string,
  examEndDate: string,
  withdrawalDate: string,
  type: SemesterType
) => {
  try {
    const data = await prisma.semester.create({
      data: {
        name,
        startDate,
        endDate,
        examStartDate,
        examEndDate,
        withdrawalDate,
        type,
      },
    });

    console.log(data);
    
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
