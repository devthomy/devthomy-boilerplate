import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserWrapper } from "@/context/UserContext";
import { getCurrentUser } from "@/lib/api/getCurrent";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getToken } = await auth();
  const token = await getToken();
  const clerkUser = await currentUser();

  if (!token || !clerkUser) {
    return <div>Please sign in to access the dashboard.</div>;
  }

  const user = await getCurrentUser(token);

  return (
    <UserWrapper initialData={user}>
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <main className="flex-grow w-[calc(100%-240px)]">
            {children}
          </main>
        </div>
      </SidebarProvider>
    </UserWrapper>
  );
}