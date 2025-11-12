import React, { useState, useEffect } from "react";
import { Menu, XIcon } from "lucide-react";
import * as Portal from "@radix-ui/react-portal";
import { cn } from "@/lib/utils";

import { Button } from "../ui/button";

const navLinks = [
  { href: "#home", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#contato", label: "Contato" },
];

export const Header = () => {
  return (
    <header className="max-w-[1248px] w-full py-4">
      <div className="hidden md:block ">
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
    <nav className="flex items-center justify-between bg-primary p-4 px-12 rounded-full w-full">
      <img src="./gleidson-logo-1.svg" alt="logo" />

      <div className="flex gap-1.5">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-md px-3 py-2 text-lg text-white font-medium transition-colors hover:text-secondary hover:underline"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 px-4 sm:px-6">
      <img src="./gleidson-logo-2.svg" alt="logo" />

      {/* Botão que ABRE o menu */}
      <Button
        variant="outline"
        size="icon"
        className="bg-primary"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <Menu className="text-white" />
      </Button>

      <MobileSidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <div className="mt-6 flex flex-col gap-4 p-6 pt-12">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-lg font-medium transition-colors hover:text-secondary hover:underline"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </MobileSidebar>
    </nav>
  );
};

const ANIMATION_DURATION_MS = 300;

const useDelayedUnmount = (isOpen: boolean, delay: number) => {
  const [isMounted, setIsMounted] = useState(isOpen);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isOpen) {
      setIsMounted(true);
    } else {
      timeoutId = setTimeout(() => setIsMounted(false), delay);
    }
    return () => clearTimeout(timeoutId);
  }, [isOpen, delay]);

  return isMounted;
};

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function MobileSidebar({ isOpen, onClose, children }: MobileSidebarProps) {
  const isMounted = useDelayedUnmount(isOpen, ANIMATION_DURATION_MS);

  if (!isMounted) {
    return null;
  }

  return (
    <Portal.Root>
      <div
        data-slot="sidebar-overlay"
        onClick={onClose}
        className={cn(
          "fixed inset-0 z-50 bg-black/50 transition-opacity",
          isOpen ? "opacity-100 duration-500" : "opacity-0 duration-300"
        )}
      />
      <div
        data-slot="sidebar-content"
        className={cn(
          "bg-primary text-white fixed z-50 flex flex-col gap-4 shadow-lg transition-transform ease-in-out",
          "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          `duration-${ANIMATION_DURATION_MS}`,

          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {children}
        <button
          onClick={onClose}
          className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
        >
          <XIcon className="size-7" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </Portal.Root>
  );
}
