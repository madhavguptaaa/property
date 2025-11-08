"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/properties", label: "Properties" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname() || "/";

  const matchRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#05070d]/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2 text-white">
          <span className="text-2xl font-black tracking-[0.2em]">
            <span className="text-white">AGG</span>
            <span className="text-[#01c6ea]">ENT</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-10 text-sm font-semibold uppercase tracking-[0.4em] text-slate-200 md:flex">
          {navigation.map((item) => {
            const isActive = matchRoute(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition ${
                  isActive ? "text-[#01c6ea]" : "hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div>
          <Link
            href="/contact"
            className="rounded-full bg-[#01c6ea] px-6 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-[#020617] transition hover:bg-white"
          >
            Call Now
          </Link>
        </div>
      </div>
    </header>
  );
}

