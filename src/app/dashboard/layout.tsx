import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

 

  return (
      <SidebarProvider>
        <div className="flex w-full">
          <AppSidebar />
          <main className="flex-grow w-[calc(100%-240px)]">
            {children}
          </main>
        </div>
      </SidebarProvider>
  );
}