// components
import { UnauthorizedError } from "@/components/error/unauthorized-error";
import SupervisorSideBar from "@/components/management/supervisor/sidebar";

// prisma types
import { UserRole } from "@prisma/client";

// get side bar
export function getSidebarByRole(role: UserRole, name: string) {
  switch (role) {
    case UserRole.supervisor:
      return <SupervisorSideBar name={name} />;
    default:
      return <UnauthorizedError />;
  }
}
