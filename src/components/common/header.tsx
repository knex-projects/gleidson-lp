import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
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
    <>
      <MobileNav />
    </>
  );
};

const MobileNav = () => {
  return (
    <nav className="flex items-center justify-between">
      <img src="./gleidson-logo-2.svg" alt="logo" />

      <Sheet>
        <SheetTrigger>
          <Button className="bg-primary md:hidden">
            <Menu className="text-secondary" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[50%]">
          <SheetHeader />
          <div className="mt-6 px-7 flex flex-col gap-4">
            {/* 3. Mapeie o array para criar os links dinamicamente */}
            {navLinks.map((link) => (
              <SheetClose asChild key={link.href}>
                <a
                  href={link.href}
                  className="rounded-md px-3 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
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
