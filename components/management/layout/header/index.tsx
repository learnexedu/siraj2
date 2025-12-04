"use server";
// React & Next
import Link from "next/link";

// components
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// lib
import { authUser } from "@/lib/auth";

// icons
import { Home } from "lucide-react";

// return
export default async function ManagementHeader() {
  // session
  const user = await authUser();

  // username
  const name = user && user.name ? user.name[0] : "user";

  // return
  return (
    <div className="flex flex-row items-center justify-between w-[99%] my-3 transition-[width,height]">
      {/* sidebar header */}
      <div className="flex items-center justify-center gap-1">
        {/* sidebar trigger */}
        <SidebarTrigger className="w-5 px-3 py-3 m-2" />
        {/* separator */}
        <Separator className="bg-slate-300! h-6! w-[0.5px]!" orientation="vertical" />
        {/* home icon to "/" */}
        <Link
          href="/"
          className="flex flex-col items-center justify-center w-7 h-7 mx-3"
        >
          <Home className="w-5" />
        </Link>
      </div>
      {/* logo & user's avatar */}
      <div className="flex items-center justify-center gap-2">
        {/* avatar */}
        <Avatar className="h-8 w-8 rounded-lg mx-3">
          <AvatarImage src={name[0]} alt={name[0]} />
          <AvatarFallback className="rounded-full uppercase bg-slate-200">
            {name[0]}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
