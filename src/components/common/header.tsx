import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";

const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#especializacao", label: "Especialização" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  return (
    <header>
      <div className="hidden md:block">
        <DesktopNav />
      </div>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

const DesktopNav = () => {
  return (
    <nav className="flex items-center justify-between bg-primary p-4 px-12 rounded-full">
      <img src="./gleidson-logo-1.svg" alt="logo" />

      <div className="flex gap-1.5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-md px-3 py-2 text-lg font-medium text-primary-foreground transition-colors hover:text-secondary hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

const MobileNav = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <img src="./gleidson-logo-2.svg" alt="logo" />

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="bg-primary">
            <Menu className="text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[80%] sm:w-[50%]">
          <SheetHeader />
          <div className="mt-6 flex flex-col gap-4 p-6">
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-lg font-medium transition-colors hover:text-secondary hover:underline"
                >
                  {link.label}
                </a>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
