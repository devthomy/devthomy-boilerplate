import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { auth, currentUser } from "@clerk/nextjs/server";
import { UserWrapper } from "@/context/UserContext";
import { User } from "@/interface/user";

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

  // Fetch full user data from your database API route
  const response = await fetch(`http://localhost:3000/api/user`, {
    method: 'GET',
    cache: 'no-store',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    return <div>Error loading user data</div>;
  }

  const user: User = await response.json();

  return (
    <UserWrapper initialData={user}>
      <SidebarProvider>
        <div className="flex">
          <AppSidebar />
          <main className="flex-grow">{children}</main>
        </div>
      </SidebarProvider>
    </UserWrapper>
  );
}