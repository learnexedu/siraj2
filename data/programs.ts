// lib
import prisma from "@/lib/db/prisma";

export const getAllPrograms = async () => {
  try {
    // programs
    const programs = await prisma.program.findMany();

    // return
    return programs;
  } catch {
    // return
    return null;
  }
};

export const getProgramsForHome = async () => {
  try {
    // programs
    const programs = await prisma.program.findMany({ take: 6 });

    // return
    return programs;
  } catch {
    // return
    return null;
  }
};

export const getProgramById = async (id: string) => {
  try {
    // programs
    const program = await prisma.program.findUnique({ where: { id } });

    // return
    return program;
  } catch {
    // return
    return null;
  }
};
