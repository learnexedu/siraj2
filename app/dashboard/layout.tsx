import { Sidebar } from "@/components/dashboard/sidebar";
import { DashboardHeader } from "@/components/dashboard/header";
import { auth } from "@/auth";
import { UserRole } from "@prisma/client";
import { ForbiddenError } from "@/components/error/forbidden-error";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // session
  const session = await auth();

  if (session?.user.role !== UserRole.postgraduate) return <ForbiddenError />;

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <DashboardHeader />
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </main>
    </div>
  );
}
