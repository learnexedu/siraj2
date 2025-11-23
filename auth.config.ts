// packages
import bcrypt from "bcryptjs";

// next auth
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// schemas
import { LogInSchema } from "@/schemas";

// data
import { getUserByEmail } from "@/data/users";

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LogInSchema.safeParse(credentials);

        if (validatedFields.success) {
          // get data
          const { email, password } = validatedFields.data;

          // prisma if phone exist
          const user = await getUserByEmail(email);

          // check existing of phone
          if (!user || !user?.password) return null;

          // passwrod match
          const passwordMatch = await bcrypt.compare(password, user.password);

          // success
          if (passwordMatch) return user;

          // if not return null
          return null;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
