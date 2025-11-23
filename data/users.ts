// prisma db
import prisma from "@/lib/db/prisma";
import { UserRole } from "@prisma/client";

export function getUserForLogin(email: string, isSupervisor: boolean) {
  try {
    // get user
    const user = prisma.user.findUnique({
      where: {
        email,
        role: isSupervisor ? UserRole.supervisor : UserRole.postgraduate,
      },
    });

    // return
    return user;
  } catch {
    // return
    return null;
  }
}

export function getUserByEmail(email: string) {
  try {
    // get user
    const user = prisma.user.findUnique({ where: { email } });

    // return
    return user;
  } catch {
    // return
    return null;
  }
}

export function getUserById(id: string) {
  try {
    // get user
    const user = prisma.user.findUnique({ where: { id } });

    // return
    return user;
  } catch {
    // return
    return null;
  }
}
