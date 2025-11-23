"use client";
// components
import { SidebarContent, SidebarGroup } from "@/components/ui/sidebar";
import SideBarLayout from "@/components/management/layout/header/sidebar/sidebar";
import { SideBarMenuGroup } from "@/components/management/layout/header/sidebar";

// constants
import { supervisorMenu } from "@/constants/menu";

// props
interface Props {
  name: string;
}

export default function SupervisorSideBar({ name }: Props) {
  // url
  const url = "/supervisor";

  // return component
  return (
    <SideBarLayout lang="ar" user={name}>
      <SidebarContent>
        <SidebarGroup className="group-data-[collapsible=icon]:hidden space-y-4">
          {/* reservation */}
          <SideBarMenuGroup
            url={url}
            label="التقديمات"
            menu={supervisorMenu.application}
          />
        </SidebarGroup>
      </SidebarContent>
    </SideBarLayout>
  );
}
