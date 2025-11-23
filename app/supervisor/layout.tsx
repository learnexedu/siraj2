// components
import ManagementHeader from "@/components/management/layout/header";
import { ForbiddenError } from "@/components/error/forbidden-error";
import { getSidebarByRole } from "@/components/management/sidebars";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

// prisma types
import { UserRole } from "@prisma/client";

// next auth
import { authUser } from "@/lib/auth";

export default async function SupervisorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // session
  const user = await authUser();

  // validate
  if (user?.role !== UserRole.supervisor) return <ForbiddenError />;

  // if admin

  return (
    <SidebarProvider defaultOpen={false} dir="ltr">
      {/* sidebar */}
      {getSidebarByRole(user.role, user.name ?? "")}
      {/* main body */}
      <SidebarInset>
        {/* header */}
        <ManagementHeader />
        {/* main */}
        <div className="flex flex-1 flex-col justify-between gap-4 w-full max-w-[2000px] mt-5 sm:p-4 pt-0">
          {/* children */}
          {children}
          {/* footor */}
          <div className="flex items-center justify-center my-2 text-slate-400">
            {/* <h6>by ziadAboalmajd © AZ</h6> */}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
