import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import Logo from "../logo";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function DashboardNavbar() {
  return (
    <header className="w-full border-b bg-background">
      {/* TODO: Mobile Navbar */}
      <div className="container flex h-16 items-center">
        <div className="flex items-center justify-start md:space-x-4">
          {/* <div className="hidden md:flex">
            <Logo />
          </div> */}

          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl="/select-org"
            afterSelectOrganizationUrl="/organization/:id"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />

          <Button size="sm" className="hidden h-auto px-2.5 py-1.5 md:block">
            Create
          </Button>
          <Button size="sm" className="block md:hidden">
            <Plus className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="items-center- flex space-x-2">
            <UserButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
