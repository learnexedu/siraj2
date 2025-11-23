"use server";
// React & Next
import { redirect } from "next/navigation";

// packages
import bcrypt from "bcryptjs";

// prisma db
import prisma from "@/lib/db/prisma";

// prisma tyeps
import { UserRole } from "@prisma/client";

// database data
import { getUserByEmail } from "@/data/users";
import { generateVerificationToken } from "@/data/verificationToken";
// import { generateVerificationToken } from "@/data/verificationToken";

export const register = async (
  name: string,
  email: string,
  password: string,
  role: UserRole
) => {
  // bcrypt hasing
  const hashedPassword = await bcrypt.hash(password, 10);

  // prisma if phone exist
  const phoneEmail = await getUserByEmail(email);

  // phone exist
  if (phoneEmail) return { state: false, message: "رقم الهاتف موجود بالفعل" };

  try {
    // if success then push data to database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role as UserRole,
      },
    });

    if (!user)
      return {
        state: false,
        message: "حدث حطأ ما",
      };
  } catch (error) {
    return {
      state: false,
      message: "حدث حطأ ما",
    };
  }

  // generate verification token
  const verificationToken = await generateVerificationToken(email);

  // if not exist
  if (!verificationToken)
    return {
      state: false,
      message: "حدث حطأ ما",
    };

  // redirect to otp verify page
  redirect(`/verify-email/?token=${verificationToken.token}`);
};
