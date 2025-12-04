// pacakges
import { z } from "zod";

// repeated schemas
export const schemas = {
  // name
  name: z
    .string()
    .trim()
    .min(3, {
      message: "اسم المستخدم يجب ان يتكون من 3 احرف علي الاقل",
    })
    .max(12, {
      message: "12 حرف كحد اقصي",
    }),
  // username
  username: z
    .string()
    .trim()
    .min(3, {
      message: "اسم المستخدم يجب ان يتكون من 3 احرف علي الاقل",
    })
    .max(20, {
      message: "20 حرف كحد اقصي",
    }),
  // email
  email: z
    .string()
    .min(7, {
      message: "البريد يجب ان يتكون من 7 احرف علي الاقل",
    })
    .trim()
    .refine(
      (value) =>
        value.length === 0 || z.string().email().safeParse(value).success,
      {
        message: "عنوان بريد الكتروني خاطئ",
      }
    ),
  // phone
  phone: z
    .string()
    .trim()
    .min(10, {
      message: "رقم الهاتف يجب أن يتكون 10 رقماً علي الاقل ",
    })
    .max(12, {
      message: "رقم الهاتف يجب أن يتكون 12 رقماً بحد اقصي",
    }),
  // password
  password: z.string().trim().min(6, {
    message: "كلمة المرور قصيرة جدا",
  }),
};
