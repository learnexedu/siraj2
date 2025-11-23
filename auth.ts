// prisma db
import { PrismaAdapter } from "@auth/prisma-adapter";

// next auth packages
import NextAuth from "next-auth";

// next auth config
import authConfig from "@/auth.config";

// primsa
import prisma from "@/lib/db/prisma";

// prisma types
import { UserRole } from "@prisma/client";

// prisma  data
import { getUserById } from "@/data/users";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/login",
    error: "/notfound",
  },
  callbacks: {
    async signIn({ user }) {
      // user exist
      const userExist = await getUserById(String(user.id));
      // if phone is not verified
      if (!userExist?.emailVerified) return false;
      // return true log in success
      return true;
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        // add user id to the session
        session.user.id = token.sub;
      }
      if (token.role && token.phone && session.user) {
        // add user phone and role to the session
        session.user.email = String(token.phone);
        // if there is better soluation for this types error on next-auth
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token }) {
      // if not signed do nothing
      if (!token.sub) return token;

      // get user by id
      const user = await getUserById(token.sub);
      if (!user) return token;

      // add phone and role to the token
      token.phone = user.email;
      token.role = user.role;
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});
