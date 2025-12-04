"use client";
// React & Next
import React from "react";

// components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// utils
import { cn } from "@/lib/utils";

// icons
import { ChevronsUpDown, CircleGauge, Home, LogOut } from "lucide-react";

// props
interface Props {
  lang: "en" | "ar";
  user: string;
  home?: string;
  headerLabel?: string;
  headerStyle?: string;
  children: React.ReactNode;
}

// return default
export default function SideBarLayout({
  children,
  user,
  home,
  headerStyle,
  headerLabel,
  lang,
}: Props) {
  // return component
  return (
    <Sidebar
      collapsible="icon"
      side="right"
      className="bg-slate-100"
    >
      {/* side bar header */}
      <SidebarHeader className={cn([headerStyle, "py-3"])}>
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-1 mt-2">
            <SidebarMenuButton className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <CircleGauge />
              <Label className="capitalize">{headerLabel}</Label>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      {/* side bar content */}
      {children}
      {/* side bar footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="bg-white h-8 w-8 rounded-lg">
                    <AvatarImage src={user[0]} alt={user[0]} />
                    <AvatarFallback className="uppercase">
                      {user[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">{user}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user[0]} alt={user[0]} />
                      <AvatarFallback className="rounded-lg uppercase">
                        {user[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <SidebarMenuButton>
                    <a href={home ?? "/"}>
                      <DropdownMenuItem className="capitalize gap-2">
                        <Home className="w-4" />
                        الرئيسية
                      </DropdownMenuItem>
                    </a>
                  </SidebarMenuButton>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <SidebarMenuButton>
                  <a href="/logout">
                    <DropdownMenuItem className="capitalize gap-2">
                      <LogOut className="w-4" />
                      تسجيل الخروج
                    </DropdownMenuItem>
                  </a>
                </SidebarMenuButton>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
