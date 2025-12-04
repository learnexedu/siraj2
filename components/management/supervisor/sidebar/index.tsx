"use client";
// components
import SideBarLayout from "@/components/management/layout/sidebar/sidebar";
import {
  SideBarCollapsibleMenu,
  SideBarMenuGroup,
} from "@/components/management/layout/sidebar";
import { SidebarContent, SidebarGroup } from "@/components/ui/sidebar";

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
          {/* dashbaord */}
          <SideBarMenuGroup
            url={url}
            label="لوحة التحكم"
            menu={supervisorMenu.application}
          />
          {/* enrollment */}
          <SideBarCollapsibleMenu
            url={url}
            collapsibleMenu={supervisorMenu.enrollment}
            label="enrollment"
          />
          {/* settings */}
          <SideBarCollapsibleMenu
            url={url}
            collapsibleMenu={supervisorMenu.settings}
            label="settings"
          />
        </SidebarGroup>
      </SidebarContent>
    </SideBarLayout>
  );
}
