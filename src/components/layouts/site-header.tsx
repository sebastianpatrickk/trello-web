import { cn } from "@/lib/utils";
import Link from "next/link";
import Logo from "../logo";
import { buttonVariants } from "../ui/button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-background">
      {/* IMPLEMENT-LATER: Mobile nav */}
      <div className="container flex h-16 items-center">
        <Logo />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Link
              className={cn("", buttonVariants({ variant: "link" }))}
              href="/login"
            >
              Log in
            </Link>
            <Link className={buttonVariants()} href="/signup">
              Get Trello for free
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
