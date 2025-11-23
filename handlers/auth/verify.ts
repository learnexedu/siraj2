"use server";
// React & Next
import { redirect } from "next/navigation";

// prisma db
import prisma from "@/lib/db/prisma";

// database data
import {
  generateVerificationToken,
  getVerificationTokenByEmail,
  getVerificationTokenByToken,
} from "@/data/verificationToken";
import { getUserByEmail } from "@/data/users";

export const checkToken = async (token: string) => {
  // check if token exist
  const tokenExist = await getVerificationTokenByToken(token);

  //   if token not exist
  if (!tokenExist)
    return { state: false, message: "لا يوجد كود تفعيل لهذا الحساب" };

  // token expire
  const hasExpired = new Date(tokenExist.expire) < new Date();

  //   it token exist but expired
  if (hasExpired) return { state: false, message: "انتهت صلاحية كود التحقق" };

  // user exist
  const userExist = await getUserByEmail(tokenExist.email);

  // if user not exist
  if (!userExist) return { state: false, message: "لا يوجد حساب بهذا الرقم" };

  // success without message
  return { email: userExist.email, name: userExist.name, otp: tokenExist.otp };
};

// after submiting the otp and checking all condations of the verification token with checkToken function
export const verifyToken = async (email: string, otp: string) => {
  try {
    // user exist
    const userExist = await getUserByEmail(email);

    // check if token exist
    const tokenExist = await getVerificationTokenByEmail(email);

    // if token and user exist
    if (!tokenExist && !userExist)
      return { state: false, message: "لا يوجد كود تفعيل لهذا الحساب" };

    // if otp is not matched
    if (tokenExist?.otp !== otp)
      return { state: false, message: "رمز التحقق خطأ" };

    // update user phone verified to true
    await prisma.user.update({
      where: { id: userExist?.id },
      data: {
        emailVerified: new Date(),
        email,
      },
    });

    // delete current token
    await prisma.verificationToken.delete({
      where: { id: tokenExist?.id },
    });

    // return { state: true, message: "تم التحقق بنجاح" };
  } catch (error) {
    // error
    return { state: false, message: "حدث خطأ ما في الصفحة" };
  }
  // redirect
  redirect(`/login`);
};

// after submiting the otp and checking all condations of the verification token with checkToken function
export const phoneToken = async (phone: string) => {
  // generate one
  const verificationToken = await generateVerificationToken(phone);

  // redirect
  redirect(`/verify-email?token=${verificationToken?.token}`);
};
