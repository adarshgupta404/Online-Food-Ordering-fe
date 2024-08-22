import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Navbar() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 absolute z-10">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="#" className="mr-6 hidden lg:flex" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">

            <Link
          href="/orders"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Orders
        </Link>
        <Link
          href="/favourites"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Favourites
        </Link>
        <Link
          href='/address'
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Address
        </Link>
        
        <Link
          href="/payments"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Payments
        </Link>
        <Link
          href="/notification"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Notification
        </Link>
        <Link
          href="/events"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Events
        </Link>
        <Link
          href="/logout"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Logout
        </Link>


            <ThemeSwitcher />
          </div>
        </SheetContent>
      </Sheet>
      <Link href="#" className="mr-6 hidden lg:flex " prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="sr-only">Acme Inc</span>
      </Link>
      <nav className="ml-auto hidden lg:flex gap-6 items-center">
        <Link
          href="/orders"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Orders
        </Link>
        <Link
          href="/favourites"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Favourites
        </Link>
        <Link
          href='/address'
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Address
        </Link>
        
        <Link
          href="/payments"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Payments
        </Link>
        <Link
          href="/notification"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Notification
        </Link>
        <Link
          href="/events"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Events
        </Link>
        <Link
          href="/logout"
          className="flex w-full items-center py-2 text-lg font-semibold"
          prefetch={false}
        >
          Logout
        </Link>

        <ThemeSwitcher />
      </nav>
    </header>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
