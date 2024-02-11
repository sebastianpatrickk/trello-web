import DashboardNavbar from "@/components/layouts/dashboard-navbar";

export default function DashboardLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="">
      <DashboardNavbar />
      {children}
    </main>
  );
}
