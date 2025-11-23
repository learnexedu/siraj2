import { DefaultSession } from "next-auth";
import { UserRole } from "@prisma/client";

// extended modifed user
export type User = DefaultSession["user"] & {
  id: string;
  role: UserRole;
};

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
