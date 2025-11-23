import { auth } from "@/auth";

// use current signed user in server components
export const authUser = async () => {
  // get session
  const session = await auth();

  //   return user
  return session?.user;
};