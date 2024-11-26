import Link from "next/link";
import { Bell, ChevronDown, Home, User, Users, Calendar, FileText } from "lucide-react";
import { MdPendingActions } from "react-icons/md";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/Components/ui/sidebar";
import { auth } from "auth";

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/admin" },
  { icon: Users, label: "Patients", href: "/admin/patients" },
  { icon: User, label: "Doctors", href: "/admin/doctors" },
  { icon: Calendar, label: "Appointments", href: "/admin/appointments" },
  { icon: FileText, label: "Reports", href: "/admin/reports" },
  { icon: MdPendingActions, label: "Requests", href: "/admin/requests" },
];

export async function AdminLayout({ children }) {

  let session = await auth()
  return (
    // Wrapping the layout with SidebarProvider
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <Sidebar className="border-r-0">
          <SidebarHeader className="bg-[#207DFF] text-white p-4">
            <h1 className="text-2xl font-bold">PMS Admin</h1>
          </SidebarHeader>
          <SidebarContent className="bg-[#207DFF]">
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/10"
                      )}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="bg-[#FAA0A0] p-4">
            <p className="text-xs text-white/70">© 2024 PMS Admin</p>
          </SidebarFooter>
        </Sidebar>
        <div className="flex flex-col flex-1 overflow-hidden w-full">
          <header className="flex items-center justify-between px-6 py-4 bg-[#F5F5F5] border-b">
            <div className="flex items-center gap-4">
              <SidebarTrigger />
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{session.user.name}</span>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto bg-white p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
