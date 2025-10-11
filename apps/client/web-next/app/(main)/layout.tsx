import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import Asidebar from "./_components/asidebar";
import Header from "./_components/header";
import { AuthProvider } from "@/context/auth-provider";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Asidebar />
        <SidebarInset>
          <main className="w-full">
            <Header />
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </AuthProvider>
  );
}
