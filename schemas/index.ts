// packages
import z from "zod";

// user schema
import { schemas } from "@/schemas/schemas";

// Register
export const RegisterSchema = z
  .object({
    // username
    name: schemas.username,
    // email
    email: schemas.email,
    // password
    password: schemas.password,
    // confirm password
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "كلمتا المرور غير متطابقتين",
    path: ["confirmPassword"],
  });

// login
export const LogInSchema = z.object({
  // phone
  email: schemas.email,
  // password
  password: schemas.password,
});

// verify email
export const VerifySchema = z.object({
  code: z
    .string()
    .length(5, "الرجاء إدخال رمز مكون من 5 أرقام")
    .regex(/^\d{5}$/, "الرمز يجب أن يكون أرقام فقط"),
});