// packages
import { v4 as uuidv4 } from "uuid";

// lib
import prisma from "@/lib/db/prisma";

// utils
import { generateOtp } from "@/utils/auth";

// lib
import { sendEmailOtp } from "@/lib/notifications";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = prisma.verificationToken.findUnique({
      where: { token },
    });
    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await prisma.verificationToken.findFirst({
      where: { email },
    });
    return verificationToken;
  } catch {
    return null;
  }
};

export const generateVerificationToken = async (email: string) => {
  try {
    // generate otp one time password
    const otp = String(generateOtp());
    // generate token using uuid
    const token = uuidv4();
    // token expire time one hour
    const expire = new Date(new Date().getTime() + 3600 * 1000);

    // check if token exist
    const tokenExsit = await getVerificationTokenByEmail(email);
    // if token exist delete
    if (tokenExsit) {
      await prisma.verificationToken.delete({
        where: {
          id: tokenExsit.id,
        },
      });
    }

    //  if not create a token
    const newToken = await prisma.verificationToken.create({
      data: {
        email,
        token,
        expire,
        otp,
      },
    });

    //  get user name for notification
    const userName = await prisma.user.findUnique({
      where: {
        email,
      },
      select: {
        name: true,
      },
    });

    // send otp via whatsapp
    await sendEmailOtp(email, userName?.name || "", newToken.otp);

    // return
    return newToken;
  } catch (error) {
    // error
    return null;
  }
};
