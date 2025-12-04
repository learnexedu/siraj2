// components
import SupervisorSideBar from "@/components/management/supervisor/sidebar";
import { UnauthorizedError } from "@/components/shared/error/unauthorized-error";

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
