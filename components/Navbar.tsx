"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur border-b transition-colors duration-300">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="font-bold text-blue-700 dark:text-blue-400 transition-colors">
          Portfolio
        </Link>

        {/* Nav Links + Toggle */}
        <div className="flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`hover:text-blue-700 dark:hover:text-blue-400 transition-colors ${
                pathname === l.href
                  ? "text-blue-700 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300"
              }`}
            >
              {l.label}
            </Link>
          ))}

          {/* ✅ Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
