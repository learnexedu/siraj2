"use server";
// React & Next
import { redirect } from "next/navigation";

// next auth
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

// prisma data
import { getUserForLogin } from "@/data/users";
import { generateVerificationToken } from "@/data/verificationToken";

// prisma types
import { UserRole } from "@prisma/client";

export const login = async (
  email: string,
  password: string,
  isSupervisor: boolean
) => {
  const userExist = await getUserForLogin(email, isSupervisor);

  // if user or phone not exist
  if (!userExist || !userExist.email || !userExist.password) {
    return { state: false, message: "لا يوجد حساب بهذا البريد" };
  }

  // if token not verifyed
  if (!userExist.emailVerified) {
    // generate one
    const verificationToken = await generateVerificationToken(userExist.email);

    // if not exist
    if (!verificationToken)
      return {
        state: false,
        message: "حدث حطأ ما",
      };

    // signin and redirect to reverify
    redirect(`/verify-email?token=${verificationToken.token}`);
  }

  try {
    // if success signin & phone already verifed
    await signIn("credentials", {
      email,
      password,
      redirectTo:
        userExist?.role === UserRole.postgraduate
          ? "/dashboard"
          : userExist?.role === UserRole.supervisor
          ? "/supervisor"
          : "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return {
            state: false,
            message: "البريد الالكتروني و كلمة المرور غير متطابقين",
          };
        default:
          return {
            state: false,
            message: "البريد الالكتروني و كلمة المرور غير متطابقين",
          };
      }
    }
    throw error;
  }
};
